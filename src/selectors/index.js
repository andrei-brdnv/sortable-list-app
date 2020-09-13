import { createSelector } from "reselect";

export const fetchedDataSelector = (store) => store.data.fetchedData
export const filterSelector = (store) => store.data.search
export const paginationSelector = (store) => store.data

export const filteredDataSelector = createSelector(
    fetchedDataSelector,
    filterSelector,
    (fetchedData, search) => {

        if (!search) {
            return fetchedData
        }

        return fetchedData.filter(item => {
            return item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
        })
    }
)

export const filteredDataPaginationSelector = createSelector(
    filteredDataSelector,
    paginationSelector,
    (filteredData, data) => {
        const indexOfLastPost = data.currentPage * data.perPage;
        const indexOfFirstPost = indexOfLastPost - data.perPage;
        const currentItems = filteredData.slice(indexOfFirstPost, indexOfLastPost);

        return currentItems
    }
)




