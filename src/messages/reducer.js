// @flow

import { combineReducers } from 'redux'
import type { T_Action, T_Error } from '../types'

export type TD_Messages = {
    id: string
}

type TS_Data = {
    messages: ?TD_Messages
}

type TS_UI = {
    error: ?T_Error,
    fetching: boolean
}

export type TS_Messages = {
    data: TS_Data,
    ui: TS_UI
}

const initialState = {
    data: {
        messages: null
    },
    ui: {
        error: null,
        fetching: false
    }
}

function data(state: TS_Data = initialState.data, action: T_Action): TS_Data {
    switch (action.type) {
        case 'MESSAGES.LOAD_SUCCESS':
            return { ...state, messages: action.data }
        default:
            return state
    }
}

function ui(state: TS_UI = initialState.ui, action: T_Action): TS_UI {
    switch (action.type) {
        case 'MESSAGES.LOAD':
            return { ...state, error: null, fetching: true }
        case 'MESSAGES.LOAD_SUCCESS':
            return { ...state, error: null, fetching: false }
        case 'MESSAGES.LOAD_ERROR':
            return { ...state, error: action.error, fetching: false }
        default:
            return state
    }
}

export default combineReducers({ ui, data })
