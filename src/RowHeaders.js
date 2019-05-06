import React from "react";
import { Typography } from "@material-ui/core";
import Cell from "./Cell";
const RowHeaders = ({ rendered = true }) => {
  if (!rendered) return null;
  const headers = ["1", "2", "3", "4", "5", "6", "7", "", "6", "7"];

  return (
    <>
      {headers.map((header, index) => {
        const r = index + 2;
        const c = 1;
        return (
          <Cell row={r} col={c} key={"col1_" + r}>
            <Typography>{header}</Typography>
          </Cell>
        );
      })}
    </>
  );
};

export default React.memo(RowHeaders)
