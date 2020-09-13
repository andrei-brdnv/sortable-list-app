import {
    FETCH_DATA,
    START,
    SUCCESS,
    FAIL, SORT_DATA, ADD_USER_ITEM, PAGINATE, SEARCH, TOGGLE_ADD_FORM
} from "../types";

import { replace } from "connected-react-router";

export function fetchSmallData() {
    return (dispatch) => {
        dispatch({
            type: FETCH_DATA + START,
        })
        fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => {
                console.log(res);
                if (res.status >= 400) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(response => dispatch({
                type: FETCH_DATA + SUCCESS,
                response
            }))
            .catch(error => {
                dispatch(replace('/error'))
                dispatch({
                    type: FETCH_DATA + FAIL,
                    error
                })
            })
    }
}

export function fetchBigData() {
    return (dispatch) => {
        dispatch({
            type: FETCH_DATA + START,
        })
        fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => {
                console.log(res);
                if (res.status >= 400) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(response => dispatch({
                type: FETCH_DATA + SUCCESS,
                response
            }))
            .catch(error => {
                dispatch(replace('/error'))
                dispatch({
                    type: FETCH_DATA + FAIL,
                    error
                })
            })
    }
}

export const sortData = (sortField) => {
    console.log('sortData')
    return {
        type: SORT_DATA,
        payload: {sortField}
    }
}

export const addUserItem = (userItem) => {
    return {
        type: ADD_USER_ITEM,
        payload: {userItem}
    }
}

export const paginate = (page) => {
    return {
        type: PAGINATE,
        payload: {page}
    }
}

export const getSearchData = (search) => {
    console.log(search)
    return {
        type: SEARCH,
        payload: {search}
    }
}

export const showAddForm = () => {
    return {
        type: TOGGLE_ADD_FORM
    }
}