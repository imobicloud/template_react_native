// @flow

import { Root, StyleProvider } from 'native-base'
import * as React from 'react'
import { StackNavigator } from 'react-navigation'

import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'

import Login from './login'
import Tabs from './Tabs'

const AppNavigator = StackNavigator(
    {
        Login: { screen: Login },
        Tabs: { screen: Tabs }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

export default () =>
    <Root>
        <StyleProvider style={getTheme(platform)}>
            <AppNavigator/>
        </StyleProvider>
    </Root>