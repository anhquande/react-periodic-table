import React from "react";

const Cell = ({ row, col, children }) => {
  return (
    <div
      style={{
        gridRow: `${row} / span 1`,
        gridColumn: `${col} / span 1`
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(Cell)
