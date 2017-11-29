// @flow

import type { T_State } from './reducers'

type T_GetState = () => T_State
export type T_ThunkAction = (dispatch: T_Dispatch, getState: T_GetState) => any
type T_PromiseAction = Promise<T_Action>
type T_ArrayAction = Array<T_Action>
type T_Dispatch = (action: T_Action | T_ThunkAction | T_PromiseAction | T_ArrayAction) => any

export type T_Error = {
    type: 'error' | 'success' | 'warn',
    message: string
}

// == GLOBALS

import type { TD_Globals } from './globals/reducer'

type TA_Globals =
{ type: 'GLOBALS.UPDATE', data: TD_Globals }

// == HOME

import type { TD_Home } from './home/reducer'

type TA_Home =
      { type: 'HOME.LOAD' }
    | { type: 'HOME.LOAD_SUCCESS', data: TD_Home }
    | { type: 'HOME.LOAD_ERROR', error: T_Error }

// == LOGIN

import type { TD_Login } from './login/reducer'

type TA_Login =
      { type: 'USER.LOGIN' }
    | { type: 'USER.LOGIN_SUCCESS', data: TD_Login }
    | { type: 'USER.LOGIN_ERROR', error: T_Error }
    | { type: 'USER.LOGIN_LINKEDIN' }
    | { type: 'USER.LOGIN_MOBILE' }

// == MESSAGES

import type { TD_Messages } from './messages/reducer'

type TA_Messages =
      { type: 'MESSAGES.LOAD' }
    | { type: 'MESSAGES.LOAD_SUCCESS', data: TD_Messages }
    | { type: 'MESSAGES.LOAD_ERROR', error: T_Error }

// ==

export type T_Action =
      TA_Globals
    | TA_Home
    | TA_Login
    | TA_Messages
