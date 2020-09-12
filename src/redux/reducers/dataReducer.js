import {
    FETCH_DATA,
    START,
    SUCCESS,
    FAIL,
} from "../types";

const initialState = {
    fetchedData: [],
    loading: false,
    loaded: false,
    error: null
}

export const dataReducer = (state = initialState, action) => {
    const { type, error, response } = action

    switch (type) {
        case FETCH_DATA + START:
            return {
                ...state, loading: true
            }

        case FETCH_DATA + SUCCESS:
            return {
                ...state,
                fetchedData: response,
                loading: false,
                loaded: true
            }

        case FETCH_DATA + FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: error
            }

        default:
            return state
    }
}