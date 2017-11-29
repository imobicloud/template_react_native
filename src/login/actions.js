// @flow

import axios from 'axios'

import type { TD_Login } from './reducer'
import type { T_Action, T_ThunkAction } from '../types'

export type TA_Login = (data: TD_Login) => T_ThunkAction
const userLogin: TA_Login = data => {
    return dispatch => {
        dispatch({ type: 'USER.LOGIN' })

        return axios
            .get('https://jsonplaceholder.typicode.com/posts') // TODO: test api
            .then(response => dispatch({
                type: 'USER.LOGIN_SUCCESS',
                data: response.data
            }))
            .catch(error => dispatch({
                type: 'USER.LOGIN_ERROR',
                error
            }))
    }
}

export type TA_LoginLinkedin = () => T_Action
const userLoginLinkedin: TA_LoginLinkedin = () => {
    return { type: 'USER.LOGIN_LINKEDIN' } 
}

export type TA_LoginMobile = () => T_Action
const userLoginMobile: TA_LoginMobile = () => {
    return { type: 'USER.LOGIN_MOBILE' }
}

export {
    userLogin,
    userLoginLinkedin,
    userLoginMobile
}
