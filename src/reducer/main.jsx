import {combineReducers} from "redux";
import LoginReducer from "./LoginReducer.jsx";
import RegisterReducer from "./RegisterReducer.jsx";
import LogoutReducer from "./LogoutReducer.js";

const allReducers = combineReducers({
  LoginReducer, RegisterReducer, LogoutReducer
})

export default allReducers