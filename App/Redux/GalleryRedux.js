import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    getSmallCases: null,
    getSmallCasesSuccess: ['data'],
    getSmallCasesFailure: null
})

export const GalleryTypes = Types
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
    [Types.GET_SMALL_CASES]: request,
    [Types.GET_SMALL_CASES_SUCCESS]: success,
    [Types.GET_SMALL_CASES_FAILURE]: failure
})
