// @flow

import { combineReducers } from 'redux'
import type { T_Action, T_Error } from '../types'

export type TD_Home = {
    id: string
}

type TS_Data = {
    home: ?TD_Home
}

type TS_UI = {
    error: ?T_Error,
    fetching: boolean
}

export type TS_Home = {
    data: TS_Data,
    ui: TS_UI
}

const initialState = {
    data: {
        home: null
    },
    ui: {
        error: null,
        fetching: false
    }
}

function data(state: TS_Data = initialState.data, action: T_Action): TS_Data {
    switch (action.type) {
        case 'HOME.LOAD_SUCCESS':
            return { ...state, home: action.data }
        default:
            return state
    }
}

function ui(state: TS_UI = initialState.ui, action: T_Action): TS_UI {
    switch (action.type) {
        case 'HOME.LOAD':
            return { ...state, error: null, fetching: true }
        case 'HOME.LOAD_SUCCESS':
            return { ...state, error: null, fetching: false }
        case 'HOME.LOAD_ERROR':
            return { ...state, error: action.error, fetching: false }
        default:
            return state
    }
}

export default combineReducers({ ui, data })
