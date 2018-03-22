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
//     NavigationScreenProp,
//     NavigationState
// } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Messages from '../i18n'
import * as actions from './actions'
// import { updateGlobals } from '../globals/actions'

import type { TA_GetData } from './actions'
import type { TS_Home } from './reducer'
// import type { TA_UpdateGlobals } from '../globals/actions'
// import type { TS_Globals } from '../globals/reducer'

const _M = Messages.Home

// == CONTAINER

type T_Props = {
    // globals: TS_Globals,
    home: TS_Home,
    // navigation: NavigationScreenProp<*>,
    // navigationState: NavigationState,
    getData: TA_GetData,
    // updateGlobals: TA_UpdateGlobals
}

class TabsContainer extends React.Component<T_Props> {

    // https://reactnavigation.org/docs/navigators/tab#Screen-Navigation-Options
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name='home'
                style={{ color: tintColor, fontSize: 27 }}
            />
        },
        tabBarLabel: 'Home'
    }

    componentDidMount() {
        this.props.getData()
    }

    render() {
        const {
            // globals,
            // navigation: { navigate, state: { params } },
            home: {
                data: { home },
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
    const { /*globals,*/ home } = state
    return { /*globals,*/ home }
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