import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import {paginationReducer} from "./paginationReducer";
import { connectRouter } from "connected-react-router";

export default combineReducers({
    data: dataReducer
})