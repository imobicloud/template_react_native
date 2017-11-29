// @flow

import type { TD_Globals } from './reducer'
import type { T_Action } from '../types'

export type TA_UpdateGlobals = (data: TD_Globals) => T_Action
const updateGlobals: TA_UpdateGlobals = data => {
    return {
        type: 'GLOBALS.UPDATE',
        data    
    }
}

export {
    updateGlobals
}
