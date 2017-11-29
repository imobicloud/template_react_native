// @flow

import axios from 'axios'

// import type { TD_Messages } from './reducer'
import type { /*T_Action,*/ T_ThunkAction } from '../types'

export type TA_GetData = () => T_ThunkAction
const getData: TA_GetData = () => {
    return dispatch => {
        dispatch({ type: 'MESSAGES.LOAD' })

        return axios
            .get('https://jsonplaceholder.typicode.com/posts') // TODO: test api
            .then(response => dispatch({
                type: 'MESSAGES.LOAD_SUCCESS',
                data: response.data
            }))
            .catch(error => dispatch({
                type: 'MESSAGES.LOAD_ERROR',
                error
            }))
    }
}

export {
    getData
}
