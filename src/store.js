// @flow

import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middlewares = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
}

const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
)

export default store