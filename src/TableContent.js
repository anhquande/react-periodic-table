import React from "react";
import PeriodicElement from "./PeriodicElement";

export const TableContent = ({ elements, showHeader, selectedElementId }) => {
  const firstDataRow = 1;
  const firstDataCol = 1;

  return (
    <>
      {elements
      .filter(e => e.AtomicNumber !== null)
      .map(e => {
        const skippingOffset = e.Group > 3 ? 1 : 0;
        let r = firstDataRow + e.Period;
        let c = firstDataCol + e.Group + skippingOffset;

        if (
          (e.AtomicNumber >= 58 && e.AtomicNumber <= 71) ||
          (e.AtomicNumber >= 90 && e.AtomicNumber <= 103)
        ) {
          r = r + 3;
          c = firstDataCol + 5 + ((e.AtomicNumber % 58) % (90 - 58));
        }

        return (
          <PeriodicElement
            row={r} col={c} key={`${r}_${c}`}
            element={e}
            highlighted={selectedElementId === e.id}
          />
        );
      })}
    </>
  );
};
