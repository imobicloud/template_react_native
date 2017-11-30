// @flow

import type { TS_Globals } from './reducer'
import type { T_Action } from '../types'

export type TA_UpdateGlobals = (data: TS_Globals) => T_Action
const updateGlobals: TA_UpdateGlobals = data => {
    return {
        type: 'GLOBALS.UPDATE',
        data
    }
}

export {
    updateGlobals
}
