"use client";

import { ParsedServant } from "../_types/types";

export const TestItem = ({ data }: { data: ParsedServant[] }) => {
  return (
    <>
      <div>{data[1].hpBase}</div>
    </>
  );
};
