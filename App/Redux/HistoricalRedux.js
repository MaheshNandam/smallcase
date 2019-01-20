import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    getHistoricalData: ['scid'],
    getHistoricalDataSuccess: ['data'],
    getHistoricalDataFailure: null
})

export const HistoricalTypes = Types

export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    fetching: null,
    error: null,
})

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) =>
    state.merge({ fetching: true })

// successful avatar lookup
export const success = (state, { data }) => {
    return state.merge({ fetching: false, error: null, data })
}

// failed to get the avatar
export const failure = (state) =>
    state.merge({ fetching: false, error: true, data: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_HISTORICAL_DATA]: request,
    [Types.GET_HISTORICAL_DATA_SUCCESS]: success,
    [Types.GET_HISTORICAL_DATA_FAILURE]: failure
})
