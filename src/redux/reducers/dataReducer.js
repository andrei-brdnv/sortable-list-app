import {FAIL, FETCH_DATA, SORT_DATA, START, SUCCESS,} from "../types";

import {orderBy} from "lodash";

const initialState = {
    fetchedData: [],
    loading: false,
    loaded: false,
    error: null,
    isDataSelected: false,
    sort: '',
    sortField: ''
}

export const dataReducer = (state = initialState, action) => {
    const { type, error, response, payload } = action

    switch (type) {
        case FETCH_DATA + START:
            return {
                ...state, loading: true, isDataSelected: true
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

        case SORT_DATA:
            const stateCopy = state.fetchedData
            const sortType = state.sort === 'asc' ? 'desc' : 'asc'
            const orderedData = orderBy(stateCopy, payload.sortField, sortType)
            console.log(orderedData)
            return {
                ...state,
                fetchedData: orderedData,
                sort: sortType,
                sortField: payload.sortField
            }

        default:
            return state
    }
}