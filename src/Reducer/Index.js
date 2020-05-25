import {combineReducers} from "redux";
import ListReducer from "./ListReducer"

const data ={}

export default combineReducers({
    list:ListReducer,
    dataList: ListReducer
    
})


