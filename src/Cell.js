import React from "react";

export const Cell = ({ row, col, ...props }) => {
  return (
    <div
      style={{
        gridRow: `${row} / span 1`,
        gridColumn: `${col} / span 1`
      }}
    >
      {props.children}
    </div>
  );
};
