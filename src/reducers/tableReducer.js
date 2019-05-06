import { createReducer, createAction } from "redux-starter-kit";

const initState = {
  elements: []
};

export const setElements = createAction("table/setElements");

export const tableReducer = createReducer(initState, {
  [setElements]: (draft, action) => {
    console.log("setElements: ",action.payload)
    draft.elements = action.payload;
  }
});
