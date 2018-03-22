// @flow

import * as React from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import { colors, textStyles } from '../styles'

type T_Props = {
    fetching: boolean,
    style: any,
    title: string,
    onPress: () => void
}

class Button extends React.Component<T_Props> {
    render() {
        const { fetching, style, title, onPress } = this.props

        let headerRight
        if (fetching) {
            headerRight = <View style={styles.button}>
                <ActivityIndicator color='#fff'/>
            </View>
        } else {
            headerRight = <TouchableOpacity style={[styles.button, style]}
                onPress={onPress}>
                <Text style={[textStyles.body, styles.buttonTitle]}>{title}</Text>
            </TouchableOpacity>
        }

        return headerRight
    }
}

const styles = StyleSheet.create({
    button: { marginHorizontal: 16, backgroundColor: colors.primary,
        borderRadius: 3, alignItems: 'center', justifyContent: 'center'
    },
    buttonTitle: { marginTop: 5, marginBottom: 7, color: '#fff' }
})

export default Button