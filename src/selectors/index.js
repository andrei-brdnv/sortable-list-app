import { createSelector } from "reselect";

export const dataSelector = (store) => store.data.fetchedData
export const searchSelector = (store) => store.data.search
export const paginationSelector = (store) => store.pageData

// Фильтрация данных при поиске элемента для отображения в таблице
export const tableDataSelector = createSelector(
    dataSelector,
    searchSelector,
    (fetchedData, search) => {
        // Если в поиске ничего нет, то возвращаем данные с сервера
        if (!search) {
            return fetchedData
        }

        // Фильтрация данных при поиске, проверка на наличие подстроки
        return fetchedData.filter(item => {
            return item['id'].toString().includes(search.toString())
                || item['phone'].toString().includes(search.toString())
                || item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
        })
    }
)

// Пагинация с учетом отфильтрованных элементов при поиске
export const pageDataSelector = createSelector(
    tableDataSelector,
    paginationSelector,
    (searchedData, pageData) => {
        const indexOfLastPost = pageData.currentPage * pageData.perPage;
        const indexOfFirstPost = indexOfLastPost - pageData.perPage;
        const currentList = searchedData.slice(indexOfFirstPost, indexOfLastPost);

        return currentList
    }
)




