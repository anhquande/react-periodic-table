import React from "react";
import { useClasses } from "./useClasses";
import Paper from "@material-ui/core/Paper";
import { ColumnHeaders } from "./ColumnHeaders";
import { RowHeaders } from "./RowHeaders";
import { TableContent } from "./TableContent";

const styles = (theme, showHeader) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: `${
      showHeader ? "20px" : "0"
    } [col-start] repeat(3, 1fr) 20px [col-start] repeat(15, 1fr) `,
    gridTemplateRows: "repeat(7, auto)"
  }
});
export const PeriodicTable = ({
  elements,
  selectedElementIds,
  showHeader = true
}) => {
  const classes = useClasses(styles, true);

  return (
    <Paper>
      <div className={classes.gridContainer}>
        <ColumnHeaders rendered={showHeader} />
        <RowHeaders rendered={showHeader} />
        <TableContent
          elements={elements}
          selectedElementIds={selectedElementIds}
          showHeader={showHeader}
        />
      </div>
    </Paper>
  );
};
