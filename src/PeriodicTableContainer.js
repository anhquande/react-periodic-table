import React, { useEffect, useReducer } from "react";
import { PeriodicTable } from "./PeriodicTable";
import { Typography } from "@material-ui/core";
import { TableFilters } from "./filters";
import { rootReducer } from "./reducers/rootReducer";
import { setElements } from "./reducers/tableReducer";
import { useTableFilter } from "./hooks/useTableFilter";

export const PeriodicTableContainer = () => {
  const [state, dispatch] = useReducer(rootReducer, {});
  const selectedElementIds = useTableFilter(state);

  useEffect(() => {
    const db = require("./database/elements");
    console.log("db: ",db)
    dispatch(setElements(db.elements));
  }, []);

  const renderTable = () => {
    return (
      <>
        <TableFilters />
        <PeriodicTable
          selectedElementIds={selectedElementIds}
          elements={state.elements}
        />
      </>
    );
  };
  const renderLoading = () => {
    return <Typography>Loading...</Typography>;
  };

  return (
    <>
      {state.elements && state.elements.length > 0
        ? renderTable()
        : renderLoading()}
    </>
  );
};
