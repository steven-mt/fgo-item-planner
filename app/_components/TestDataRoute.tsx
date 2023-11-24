"use client";

import { useEffect, useState } from "react";
import { ParsedServant } from "../_types/types";

export const TestDataRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ParsedServant[]>();

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      console.time("fetch /api/data");

      const res = await fetch("/api/data");

      console.timeLog("fetch /api/data", "fetch done");

      console.log("Blob-Size:", res.headers.get("Blob-Size"));

      const data = (await res.json()) as ParsedServant[];

      setData(data);
      setIsLoading(false);

      console.timeEnd("fetch /api/data");
    };

    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          <div>{data ? `${data[0].atkBase}` : "done"}</div>
        </div>
      )}
    </>
  );
};
