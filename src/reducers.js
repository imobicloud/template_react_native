// @flow

import { combineReducers } from 'redux'

// ==

import globals from './globals/reducer'
import type { TS_Globals } from './globals/reducer'

import home from './home/reducer'
import type { TS_Home } from './home/reducer'

import login from './login/reducer'
import type { TS_Login } from './login/reducer'

import messages from './messages/reducer'
import type { TS_Messages } from './messages/reducer'

// ==

export type T_State = {
    globals: TS_Globals,
    home: TS_Home,
    login: TS_Login,
    messages: TS_Messages
}

// ==

const reducers = combineReducers({
    globals,
    home,
    login,
    messages
})

export default reducers
