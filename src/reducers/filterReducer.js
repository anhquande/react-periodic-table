import { createReducer, createAction } from "redux-starter-kit";

export const Classification = {
  ALL: 0,
  METAL: 1,
  NON_METAL: 2
};
export const Block = {
  ALL: "0",
  s: "s",
  p: "p",
  d: "d",
  f: "f"
};

const initState = {
  classification: Classification.ALL,
  period: 0,
  group: 0,
  block: Block.ALL
};

const setFilterByClassification = createAction(
  "filter/setFilterByClassification"
);
const setFilterByPeriod = createAction("filter/setFilterByPeriod");
const setFilterByGroup = createAction("filter/setFilterByGroup");
const setFilterByBlock = createAction("filter/setFilterByBlock");

export const filterReducer = createReducer(initState, {
  [setFilterByClassification]: (draft, action) => {
    draft.classification = action.payload;
  },
  [setFilterByPeriod]: (draft, action) => {
    draft.period = action.payload;
  },
  [setFilterByGroup]: (draft, action) => {
    draft.group = action.payload;
  },
  [setFilterByBlock]: (draft, action) => {
    draft.block = action.payload;
  }
});
