// @flow

import { combineReducers } from 'redux'
import type { T_Action, T_Error } from '../types'

export type TD_Login = {
    username: string,
    password: string
}

type TS_Data = {
    login: ?TD_Login
}

type TS_UI = {
    error: ?T_Error,
    fetching: boolean
}

export type TS_Login = {
    data: TS_Data,
    ui: TS_UI
}

const initialState = {
    data: {
        login: null
    },
    ui: {
        error: null,
        fetching: false
    }
}

function data(state: TS_Data = initialState.data, action: T_Action): TS_Data {
    switch (action.type) {
        case 'USER.LOGIN_SUCCESS':
            return { ...state, login: action.data }
        default:
            return state
    }
}

function ui(state: TS_UI = initialState.ui, action: T_Action): TS_UI {
    switch (action.type) {
        case 'USER.LOGIN':
            return { ...state, error: null, fetching: true }
        case 'USER.LOGIN_SUCCESS':
            return { ...state, error: null, fetching: false }
        case 'USER.LOGIN_ERROR':
            return { ...state, error: action.error, fetching: false }
        default:
            return state
    }
}

export default combineReducers({ ui, data })
