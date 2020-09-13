import {FAIL, FETCH_DATA, SORT_DATA, START, SUCCESS, ADD_USER_ITEM, PAGINATE, SEARCH, TOGGLE_ADD_FORM} from "../types";

import {orderBy, chunk} from "lodash";

const initialState = {
    fetchedData: [],
    loading: false,
    loaded: false,
    error: null,
    isDataSelected: false,
    sort: '',
    sortField: '',
    currentPage: 1,
    perPage: 50,
    currentItems: [],
    search: '',
    showAddForm: false
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

        case ADD_USER_ITEM:
            return {
                ...state,
                fetchedData: [payload.userItem, ...state.fetchedData]
            }

        case PAGINATE:
            return {
                ...state,
                currentPage: payload.page,
            }
        case SEARCH:
            return {
                ...state,
                search: payload.search
            }
        case TOGGLE_ADD_FORM:
            return {
                ...state,
                showAddForm: !state.showAddForm
            }

        default:
            return state
    }
}