import React, { Component, Fragment } from "react";
import "./App.css"
import DataSize from "./components/data-size-selection"
import Loader from "./components/loader";
import TableForm from "./components/table-form";
import TableSearch from "./components/table-search";
import Table from "./components/table";
import Pagination from "./components/pagination";
import TableRowDetails from "./components/table-row-details";

import { connect } from "react-redux";
import { fetchData, sortData, changePage, searchData, showAddForm, selectRow } from "./redux/ac";
import { tableDataSelector, pageDataSelector } from "./selectors";

import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core/styles";

library.add(faAngleUp, faAngleDown)

const styles = theme => ({
    container: {
        maxWidth: '1000px',
        paddingTop: '50px'
    },
    isAddingButton: {
        display: 'block',
        width: '250px',
        margin: '20px auto',
        borderRadius: 0,
    }
});

class App extends Component {
    render() {
        const { data, classes } = this.props

        return (
            <Container className={classes.container}>
                {!data.isDataSelected ?
                    <DataSize
                        selectData={this.props.fetchData}
                    /> : null
                }

                {data.loading ? <Loader /> : null}

                {data.loaded ? (
                    <Fragment>
                        <Button className={classes.isAddingButton} variant="contained" color="primary"
                                onClick={this.handleShowAddForm}>Добавить ряд в таблицу</Button>
                        {
                            data.showAddForm ? <TableForm /> : null
                        }
                        <TableSearch handleSearchClick={this.handleSearchClick}/>
                        <Table
                            sortData={data}
                            data={this.props.dataForTable}
                            onSort={this.props.sortData}
                            selectItemHandler={this.selectItemHandler}
                            handleRowClick={this.handleRowClick}
                        />
                        <Pagination
                            pageData={this.props.pageData}
                            dataForPagination={this.props.dataForPagination}
                            handlePageClick={this.handlePageClick}
                        />
                    </Fragment>) : null
                }

                {data.rowSelected
                    ? <TableRowDetails
                        item={data.rowSelected}
                    /> : null
                }
            </Container>
        )
    }

    // Пагинация
    handlePageClick = (event, value) => {
        this.props.changePage(value)
    }

    // Поиск элемента
    handleSearchClick = search => {
        this.props.searchData(search)
    }

    // Выбор элемента для отображения под таблицей
    handleRowClick = rowSelected => {
        this.props.selectRow(rowSelected)
    }

    // Показ формы для добавления элемента в таблицу
    handleShowAddForm = () => {
        this.props.showAddForm()
    }
}

const mapStateToProps = store => ({
    data: store.data,
    pageData: store.pageData,
    dataForPagination: tableDataSelector(store),
    dataForTable: pageDataSelector(store)
})

const mapDispatchToProps = dispatch => ({
    fetchData: (url) => dispatch(fetchData(url)),
    sortData: (sortField) => dispatch(sortData(sortField)),
    changePage: (page) => dispatch(changePage(page)),
    searchData: (search) => dispatch(searchData(search)),
    showAddForm: () => dispatch(showAddForm()),
    selectRow: (rowSelected) => dispatch(selectRow(rowSelected))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
