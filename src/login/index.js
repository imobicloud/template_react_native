// @flow

import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    Header,
    Icon,
    Left,
    Right,
    Text
  } from 'native-base'
import * as React from 'react'
// import { StyleSheet } from 'react-native'
import type {
    NavigationAction,
    NavigationRoute,
    NavigationScreenProp,
    // NavigationState
} from 'react-navigation/src/TypeDefinition'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './actions'
// import { updateGlobals } from '../globals/actions'

import type { TA_Login } from './actions'
import type { TS_Login } from './reducer'
// import type { TA_UpdateGlobals } from '../globals/actions'
// import type { TS_Globals } from '../globals/reducer'

// == CONTAINER

type T_Props = {
    // globals: TS_Globals,
    login: TS_Login,
    navigation: NavigationScreenProp<NavigationRoute, NavigationAction>,
    // navigationState: NavigationState,
    // updateGlobals: TA_UpdateGlobals,
    userLogin: TA_Login
}

class LoginContainer extends React.Component<T_Props> {
    login: () => void

    login() {
        const {
            navigation: { navigate },
            userLogin
        } = this.props

        userLogin({
            username: 'aaa@aaa.aaa',
            password: 'aaaaaa'
        })

        navigate('Tabs')
    }

    render() {
        const {
            // globals,
            login: {
                data: { login },
                ui: { fetching, error }
            },
            // navigation: { navigate }
            // navigationState: { index },
        } = this.props

        return <Container>

            {/* header */}
            <Header>
                <Left/>
                <Body><Text>Login</Text></Body>
                <Right>
                    <Button transparent>
                        <Icon name='more'/>
                    </Button>
                </Right>
            </Header>

            {/* content */}
            <Content>
            </Content>

            {/* footer */}
            <Footer>
                <Button rounded onPress={this.login.bind(this)}>
                    <Text>Log in</Text>
                </Button>
            </Footer>

        </Container>
    }
}

// == STYLES

// const styles = StyleSheet.create({})

// == CONNECT

const mapStateToProps = (state, props) => {
    const { /*globals,*/ login } = state
    return { /*globals,*/ login }
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
)(LoginContainer)