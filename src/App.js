import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {fetchBigData, fetchSmallData, sortData, paginate, getSearchData, isAdding} from "./redux/ac";
import TableList from "./components/table-list";
import DataSelector from "./components/data-selector"
import {fetchedDataSelector, filteredDataPaginationSelector, filteredDataSelector} from "./selectors";
import { orderBy, chunk } from "lodash";
import TableForm from "./components/data-form";
import Pagination from "./components/pagination";
import TableSearch from "./components/table-search";
import ItemDetails from "./components/item-details";
import Loader from "./components/loader";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import "./App.css"

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    container: {
        paddingTop: '50px'
    },
    isAddingButton: {
        display: 'block',
        width: '250px',
        margin: '10px auto',
        borderRadius: 0
    }
});

class App extends Component {
    state = {
        search: '',
        rowSelected: null,

    }

    render() {

        const { classes } = this.props
        return (
            <Container className={classes.container}>
                {
                    !this.props.data.isDataSelected ?
                        <DataSelector
                            onSelectSmall={this.props.fetchSmallData}
                            onSelectBig={this.props.fetchBigData}
                        /> : null
                }

                {
                    this.props.data.loading ? <Loader /> : null
                }

                {
                    this.props.data.loaded ? (
                        <Fragment>
                            <Button className={classes.isAddingButton} variant="contained" color="primary" onClick={this.handleAddingMode}>Добавить ряд в таблицу</Button>
                            {
                                this.props.data.isAdding ? <TableForm /> : null
                            }
                            <TableSearch handleSearch={this.handleSearch}/>
                            <TableList
                                data={this.props.filteredData}
                                onSort={this.props.sortData}
                                selectItemHandler={this.selectItemHandler}
                                handleRowClick={this.handleRowClick}
                            />
                            <Pagination
                                data={this.props.data}
                                filteredData={this.props.dataForPaginator}
                                handlePageClick={this.handlePageClick}
                            />
                        </Fragment>

                    )
                         : null
                }
                {/*<button onClick={() => this.props.fetchSmallData()}>
                    Загрузить маленький объем данных (32 элемента)
                </button>
                <button onClick={() => this.props.fetchBigData()}>Загрузить большой объем данных (1000 элементов)</button>*/}

                {
                    this.state.rowSelected
                        ? <ItemDetails
                            item={this.state.rowSelected}
                        />
                        : null
                }
            </Container>
            )

        /*const indexOfLastPost = this.props.data.currentPage * this.props.data.perPage;
        const indexOfFirstPost = indexOfLastPost - this.props.data.perPage;
        const currentItems = this.props.data.fetchedData.slice(indexOfFirstPost, indexOfLastPost)*/

        /*const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / perPage)*/

        /*if (!this.props.data.isDataSelected) {
            return (
                <DataSelector
                    onSelectSmall={this.props.fetchSmallData}
                    onSelectBig={this.props.fetchBigData}
                />
            )
        }*/

    }

    handlePageClick = (event, value) => {
        console.log(value)
        this.props.paginate(value)
    }

    handleSearch = search => {
        console.log(search)
        this.props.getSearchData(search)
    }

    handleRowClick = rowSelected => {
        this.setState({ rowSelected })
        console.log(rowSelected)
    }

    handleAddingMode = () => {
        this.props.isAdding()
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
    getSearchData: (search) => dispatch(getSearchData(search)),
    isAdding: () => dispatch(isAdding())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
