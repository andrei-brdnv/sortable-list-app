import { createSelector } from "reselect";

export const fetchedDataSelector = (store) => store.data.fetchedData
export const filterSelector = (store) => store.data.search
export const paginationSelector = (store) => store.data

export const filteredDataSelector = createSelector(
    fetchedDataSelector,
    filterSelector,
    paginationSelector,
    (fetchedData, search, data) => {
        const indexOfLastPost = data.currentPage * data.perPage;
        const indexOfFirstPost = indexOfLastPost - data.perPage;
        const currentItems = data.fetchedData.slice(indexOfFirstPost, indexOfLastPost)



        if (!search) {
            return currentItems
        }

        return currentItems.filter(item => {
            return item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
        })
    }
)