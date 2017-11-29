// @flow

import * as React from 'react'
import { Provider } from 'react-redux'

import Routes from './Routes'
import store from './store'

// == CONFIGS

// console.disableYellowBox = true

// == APP

type T_Props = {}

type T_State = {
    fetching: boolean
}

class App extends React.Component<T_Props, T_State> {
    // loadFonts: () => void

    state = {
        fetching: false // true
    }

    // componentWillMount() {
    //     this.loadFonts()
    // }

    // async loadFonts() {
    //     await Expo.Font.loadAsync({
    //         Roboto: require('native-base/Fonts/Roboto.ttf'),
    //         Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    //     })
    //     this.setState({ fetching: false })
    // }

    render() {
        // if (this.state.fetching) {
        //     return <AppLoading/>
        // } else {
            return <Provider store={store}>
                <Routes/>
            </Provider>
        // }
    }
}

export default App