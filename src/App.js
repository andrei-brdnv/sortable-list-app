import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchBigData, fetchSmallData} from "./redux/ac";
import TableList from "./components/table";
import { fetchedDataSelector } from "./selectors";

class App extends Component {
    render() {
        return (
            <div className="App">
                <button onClick={() => this.props.fetchSmallData()}>Загрузить маленький объем данных (32 элемента)</button>
                <button onClick={() => this.props.fetchBigData()}>Загрузить большой объем данных (1000 элементов)</button>
                <TableList data={this.props.data} />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    data: fetchedDataSelector(store)
})

const mapDispatchToProps = dispatch => ({
    fetchSmallData: () => dispatch(fetchSmallData()),
    fetchBigData: () => dispatch(fetchBigData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
