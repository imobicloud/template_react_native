// @flow

import * as React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Home from './home'
import Messages from './messages'
import { colors } from './styles'

// https://reactnavigation.org/docs/navigators/tab
export default TabNavigator(
    {
        Home: { screen: Home },
        Messages: { screen: Messages }
    },
    // https://reactnavigation.org/docs/navigators/tab#TabNavigatorConfig
    {
        animationEnabled: true,
        initialRouteName: 'Home',
        lazy: true,
        tabBarOptions: {
            // activeBackgroundColor: '#ffffff', // ios
            activeTintColor: colors.primary,
            // allowFontScaling: true,
            iconStyle: { width: 60, height: 36 }, // android
            // inactiveBackgroundColor: '#ffffff', // ios
            inactiveTintColor: '#7c7c7c',
            // indicatorStyle: {}, // android
            // labelStyle: {},
            // pressColor: '#e91e63', // android
            // scrollEnabled: true, // android
            showIcon: true,
            showLabel: false,
            style: { backgroundColor: '#f6f6f6', borderTopColor: '#d9d9d9', borderTopWidth: StyleSheet.hairlineWidth },
            // tabStyle: {},
            // upperCaseLabel: false // android
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false
    }
);