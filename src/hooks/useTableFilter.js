import { useMemo } from "react";

export const useTableFilter = state => {
  const filter = () => {};

  const filteredElements = useMemo(filter, [state]);

  return filteredElements;
};
