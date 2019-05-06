import React from "react";
import { Typography } from "@material-ui/core";
import Cell from "./Cell";
const ColumnHeaders = ({ rendered = true }) => {
  if (!rendered) return null;
  const headers = Array.from(Array(18), (v, index) => index + 1);

  return (
    <>
      {headers.map((header, index) => {
        const c = index > 2 ? index + 3 : index + 2;
        return (
          <Cell row={1} col={c} key={"row1_" + c}>
            <Typography>{header}</Typography>
          </Cell>
        );
      })}
    </>
  );
};

export default React.memo(ColumnHeaders)
