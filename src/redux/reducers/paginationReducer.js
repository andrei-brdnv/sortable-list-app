import {PAGINATE} from "../types";

const initialState = {
    currentPage: 1,
    perPage: 50,
    currentItems: [],
    search: ''
}

export const paginationReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case PAGINATE:
            return {
                ...state,
                currentPage: payload.page,
            }

        default:
            return state
    }
}