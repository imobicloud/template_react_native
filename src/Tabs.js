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
        lazy: false,
        tabBarOptions: {
            // activeBackgroundColor: '#ffffff', // ios
            activeTintColor: colors.primary,
            // allowFontScaling: true,
            // iconStyle: {}, // android
            // inactiveBackgroundColor: '#ffffff', // ios
            inactiveTintColor: '#cccccc',
            // indicatorStyle: {}, // android
            // labelStyle: {},
            // pressColor: '#e91e63', // android
            scrollEnabled: true, // android
            showIcon: true,
            showLabel: false,
            style: { backgroundColor: '#F5F1FF' },
            // tabStyle: {},
            upperCaseLabel: false // android
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false
    }
);