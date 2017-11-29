// @flow

import type { T_Action } from '../types'

export type TD_Globals = {
    isClient: boolean
}

const initialState = {
    isClient: false
}

function data(state: TD_Globals = initialState, action: T_Action): TD_Globals {
    switch (action.type) {
        case 'GLOBALS.UPDATE':
            return { ...state, ...action.data }
        default:
            return state
    }
}

export default data
