import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchBigData, fetchSmallData, sortData} from "./redux/ac";
import TableList from "./components/table-list";
import DataSelector from "./components/data-selector"
import { fetchedDataSelector } from "./selectors";
import { orderBy } from "lodash";

class App extends Component {
    state = {
        isDataSelected: false
    }

    render() {
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
                <TableList
                    data={this.props.data}
                    onSort={this.props.sortData}
                />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    data: store.data
})

const mapDispatchToProps = dispatch => ({
    fetchSmallData: () => dispatch(fetchSmallData()),
    fetchBigData: () => dispatch(fetchBigData()),
    sortData: (sortField) => dispatch(sortData(sortField))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
