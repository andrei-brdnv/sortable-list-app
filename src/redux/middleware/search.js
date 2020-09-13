export default (store) => (next) => (action) => {
    if (!action.searchFlag) return next(action)
    next({
        ...action,
        filteredData: getFilteredData()
    })

    function getFilteredData() {

        const stateCopy = [...store.getState().data.fetchedData]
        console.log(stateCopy)
        if (!action.payload.search) {
            return stateCopy
        }

        return store.getState().data.fetchedData.filter(item => {
            return item['firstName'].toLowerCase().includes(action.payload.search.toLowerCase())
                || item['lastName'].toLowerCase().includes(action.payload.search.toLowerCase())
                || item['email'].toLowerCase().includes(action.payload.search.toLowerCase())
        })
    }
}


