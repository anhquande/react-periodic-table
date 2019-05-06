import React, { useEffect, useReducer } from "react";
import PeriodicTable from "./PeriodicTable";
import { Typography } from "@material-ui/core";
import { TableFilters } from "./filters/TableFilters";
import { rootReducer } from "./reducers/rootReducer";
import { setElements } from "./reducers/tableReducer";
import { useTableFilter } from "./hooks/useTableFilter";
import {TableContext} from './TableContext'
export const PeriodicTableContainer = () => {
  const [state, dispatch] = useReducer(rootReducer, {});
  const selectedElementIds = useTableFilter(state);

  useEffect(() => {
    const db = require("./database/elements");
    console.log("db: ",db)
    dispatch(setElements(db.elements));
  }, []);
  console.log("state ",state)


  const renderTable = () => {
    return (
      <>
        <TableFilters filter={state.filter}/>
        <PeriodicTable
          selectedElementIds={selectedElementIds}
          elements={state.table.elements}
          filter={state.filter}
        />
      </>
    );
  };
  const renderLoading = () => {
    return <Typography>Loading...</Typography>;
  };

  return (
    <TableContext.Provider value={{dispatch}}>
      {state.table && state.table.elements.length > 0
        ? renderTable()
        : renderLoading()}
    </TableContext.Provider>
  );
};
