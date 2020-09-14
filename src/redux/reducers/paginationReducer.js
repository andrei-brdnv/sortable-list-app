import { CHANGE_PAGINATION_PAGE } from "../types";

const initialState = {
    currentPage: 1,
    perPage: 50,
    currentList: [],
}

export const paginationReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case CHANGE_PAGINATION_PAGE:
            return {
                ...state,
                currentPage: payload.page
            }

        default:
            return state
    }
}