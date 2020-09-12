import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchBigData, fetchSmallData, sortData, paginate} from "./redux/ac";
import TableList from "./components/table-list";
import DataSelector from "./components/data-selector"
import { fetchedDataSelector } from "./selectors";
import { orderBy, chunk } from "lodash";
import TableForm from "./components/data-form";
import Pagination from "./components/pagination";




class App extends Component {


    render() {
        const indexOfLastPost = this.props.data.currentPage * this.props.data.perPage;
        const indexOfFirstPost = indexOfLastPost - this.props.data.perPage;
        const currentItems = this.props.data.fetchedData.slice(indexOfFirstPost, indexOfLastPost)

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
                <TableList
                    data={currentItems}
                    onSort={this.props.sortData}
                />
                <Pagination
                    data={this.props.data}
                    handlePageClick={this.handlePageClick}
                />
            </div>
        );
    }

    handlePageClick = (event, value) => {
        console.log(value)
        this.props.paginate(value)
    }
}

const mapStateToProps = store => ({
    data: store.data
})

const mapDispatchToProps = dispatch => ({
    fetchSmallData: () => dispatch(fetchSmallData()),
    fetchBigData: () => dispatch(fetchBigData()),
    sortData: (sortField) => dispatch(sortData(sortField)),
    paginate: (page) => dispatch(paginate(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
