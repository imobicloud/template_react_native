// @flow

import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    Right,
    Text
} from 'native-base'
import * as React from 'react'
// import { StyleSheet } from 'react-native'
// import type {
//     NavigationAction,
//     NavigationRoute,
//     NavigationScreenProp
// } from 'react-navigation/src/TypeDefinition'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Messages from '../i18n'
import IconBadge from '../components/IconBadge'
import * as actions from './actions'
// import { updateGlobals } from '../globals/actions'

import type { TA_GetData } from './actions'
import type { TS_Messages } from './reducer'
// import type { TA_UpdateGlobals } from '../globals/actions'
// import type { TS_Globals } from '../globals/reducer'

const _M = Messages.Messages

// == CONTAINER

type T_Props = {
    // globals: TS_Globals,
    messages: TS_Messages,
    // navigation: NavigationScreenProp<NavigationRoute, NavigationAction>,
    getData: TA_GetData,
    // updateGlobals: TA_UpdateGlobals
}

class TabsContainer extends React.Component<T_Props> {

    // https://reactnavigation.org/docs/navigators/tab#Screen-Navigation-Options
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <IconBadge count={5}
                icon='message-text' iconStyle={{ color: tintColor, fontSize: 27 }} />
        },
        tabBarLabel: 'Messages'
    }

    componentDidMount() {
        this.props.getData()
    }

    render() {
        const {
            // globals,
            // navigation: { navigate, state: { params } },
            messages: {
                data: { messages },
                ui: { fetching, error }
            }
        } = this.props

        return <Container>

            {/* header */}
            <Header>
                <Left/>
                <Body><Text>{_M.title}</Text></Body>
                <Right>
                    <Button transparent>
                        <Icon name='dots-horizontal'/>
                    </Button>
                </Right>
            </Header>

            {/* content */}
            <Content>
            </Content>

        </Container>
    }
}

// == STYLES

// const styles = StyleSheet.create({})

// == CONNECT

const mapStateToProps = (state, props) => {
    const { /*globals,*/ messages } = state
    return { /*globals,*/ messages }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        ...actions,
        // updateGlobals
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabsContainer)