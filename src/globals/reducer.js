// @flow

import type { T_Action } from '../types'

export type TS_Globals = {
    isClient: boolean
}

const initialState = {
    isClient: false
}

function data(state: TS_Globals = initialState, action: T_Action): TS_Globals {
    switch (action.type) {
        case 'GLOBALS.UPDATE':
            return { ...state, ...action.data }
        default:
            return state
    }
}

export default data
