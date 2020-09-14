import {
    START,
    SUCCESS,
    FAIL,
    FETCH_DATA,
    SORT_DATA,
    ADD_TABLE_ROW,
    SEARCH_DATA,
    TOGGLE_ADD_FORM,
    SELECT_ROW
} from "../types";

import { orderBy } from "lodash";

const initialState = {
    fetchedData: [],
    loading: false,
    loaded: false,
    error: null,
    isDataSelected: false,
    sort: '',
    sortField: '',
    search: '',
    showAddForm: false,
    rowSelected: null
}

export const dataReducer = (state = initialState, action) => {
    const { type, error, response, payload } = action

    switch (type) {
        case FETCH_DATA + START:
            return {
                ...state,
                loading: true,
                isDataSelected: true
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
            const stateCopy = [...state.fetchedData]
            const sort = state.sort === 'asc' ? 'desc' : 'asc'
            const reorderedData = orderBy(stateCopy, payload.sortField, sort)

            return {
                ...state,
                fetchedData: reorderedData,
                sort: sort,
                sortField: payload.sortField
            }

        case ADD_TABLE_ROW:
            return {
                ...state,
                fetchedData: [payload.newRow, ...state.fetchedData]
            }

        case SEARCH_DATA:
            return {
                ...state,
                search: payload.search
            }

        case TOGGLE_ADD_FORM:
            return {
                ...state,
                showAddForm: !state.showAddForm
            }

        case SELECT_ROW:
            return {
                ...state,
                rowSelected: payload.rowSelected
            }


        default:
            return state
    }
}