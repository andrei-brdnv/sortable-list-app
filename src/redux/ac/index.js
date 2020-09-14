import {
    START,
    SUCCESS,
    FAIL,
    FETCH_DATA,
    SORT_DATA,
    ADD_TABLE_ROW,
    CHANGE_PAGINATION_PAGE,
    SEARCH_DATA,
    TOGGLE_ADD_FORM,
    SELECT_ROW
} from "../types";

import { replace } from "connected-react-router";

// Загрузка данных с сервера
export function fetchData(url) {
    return (dispatch) => {
        dispatch({
            type: FETCH_DATA + START,
        })
        fetch(url)
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

// Сортировка столбца по убыванию или возрастанию
export const sortData = (sortField) => {
    console.log('sortData')
    return {
        type: SORT_DATA,
        payload: {sortField}
    }
}

// Добавление элемента в таблицу
export const addTableRow = (newRow) => {
    return {
        type: ADD_TABLE_ROW,
        payload: {newRow}
    }
}

// Пагинация
export const changePage = (page) => {
    return {
        type: CHANGE_PAGINATION_PAGE,
        payload: {page}
    }
}

// Поиск элемента
export const searchData = (search) => {
    console.log(search)
    return {
        type: SEARCH_DATA,
        payload: {search}
    }
}

// Выбор элемента для отображения под таблицей
export const selectRow = (rowSelected) => {
    return {
        type: SELECT_ROW,
        payload: {rowSelected}
    }
}

// Показ формы для добавления элемента в таблицу
export const showAddForm = () => {
    return {
        type: TOGGLE_ADD_FORM
    }
}