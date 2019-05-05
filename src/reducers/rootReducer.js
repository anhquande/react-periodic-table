import { combineReducers } from "redux-starter-kit";
import { filterReducer } from "./filterReducer";
import { tableReducer } from "./tableReducer";

export const rootReducer = combineReducers(tableReducer, filterReducer);
