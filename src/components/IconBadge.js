// @flow

import {
    Badge,
    Icon,
    Text
} from 'native-base'
import * as React from 'react'
import {
    Platform,
    StyleSheet,
    View
} from 'react-native'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// ==

/*
static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
        return <IconBadge count={5}
            icon='message-text' iconStyle={{ color: tintColor, fontSize: 27 }}/>
    }
}
*/

type T_Props = {
    badgeStyle?: any,
    badgeTextStyle?: any,
    count: number,
    icon: string,
    iconStyle?: any
}

class IconBadge extends React.Component<T_Props> {
    render() {
        const {
            badgeStyle,
            badgeTextStyle,
            count,
            icon,
            iconStyle
        } = this.props

        let badge
        if (count > 0) {
            badge = <Badge danger style={[styles.badge, badgeStyle]}>
                <Text caption style={[styles.badgeText, badgeTextStyle]}>{count}</Text>
            </Badge>
        }

        return <View style={styles.container}>
            <Icon name={icon} style={[styles.icon, iconStyle]}/>
            {badge}
        </View>
    }
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center' },
    icon: {  },
    badge: { position: 'absolute', height: null,
        ...Platform.select({ ios: { top: 0 }, android: { top: -4 } }), right: -9, zIndex: 1 },
    badgeText: { color: '#fff',
        ...Platform.select({ ios: { marginTop: -1 }, android: { marginTop: -8, marginLeft: -1 } }) }
})


// == CONNECT

// const mapStateToProps = (state, props) => {
//     const { /*globals,*/ } = state
//     return { /*globals,*/ }
// }

// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({ /*...actions*/ }, dispatch)
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(IconBadge)

export default IconBadge