import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchBigData, fetchSmallData, sortData, paginate, getSearchData} from "./redux/ac";
import TableList from "./components/table-list";
import DataSelector from "./components/data-selector"
import {fetchedDataSelector, filteredDataPaginationSelector, filteredDataSelector} from "./selectors";
import { orderBy, chunk } from "lodash";
import TableForm from "./components/data-form";
import Pagination from "./components/pagination";
import TableSearch from "./components/table-search";




class App extends Component {
    state = {
        search: ''
    }

    render() {
        /*const indexOfLastPost = this.props.data.currentPage * this.props.data.perPage;
        const indexOfFirstPost = indexOfLastPost - this.props.data.perPage;
        const currentItems = this.props.data.fetchedData.slice(indexOfFirstPost, indexOfLastPost)*/

        /*const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / perPage)*/

        if (!this.props.data.isDataSelected) {
            return (
                <div>
                    <DataSelector
                        onSelectSmall={this.props.fetchSmallData}
                        onSelectBig={this.props.fetchBigData}
                    />
                </div>
            )
        }



        return (
            <div className="App">
                {/*<button onClick={() => this.props.fetchSmallData()}>
                    Загрузить маленький объем данных (32 элемента)
                </button>
                <button onClick={() => this.props.fetchBigData()}>Загрузить большой объем данных (1000 элементов)</button>*/}
                <TableForm />
                <TableSearch handleSearch={this.handleSearch}/>
                <TableList
                    data={this.props.filteredData}
                    onSort={this.props.sortData}
                />
                <Pagination
                    data={this.props.data}
                    filteredData={this.props.dataForPaginator}
                    handlePageClick={this.handlePageClick}
                />
            </div>
        );
    }

    handlePageClick = (event, value) => {
        console.log(value)
        this.props.paginate(value)
    }

    handleSearch = search => {
        console.log(search)
        this.props.getSearchData(search)
    }

    /*getFilteredData() {
        const { data, search } = this.state

        if (!search) {
            return data
        }

        return data.filter(item => {
            return item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
        })
    }*/
}

const mapStateToProps = store => ({
    data: store.data,
    dataForPaginator: filteredDataSelector(store),
    filteredData: filteredDataPaginationSelector(store)
})

const mapDispatchToProps = dispatch => ({
    fetchSmallData: () => dispatch(fetchSmallData()),
    fetchBigData: () => dispatch(fetchBigData()),
    sortData: (sortField) => dispatch(sortData(sortField)),
    paginate: (page) => dispatch(paginate(page)),
    getSearchData: (search) => dispatch(getSearchData(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
