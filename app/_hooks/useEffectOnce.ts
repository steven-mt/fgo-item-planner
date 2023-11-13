"use client";

import { useEffect, useRef } from "react";

export const useEffectOnce = (cb: () => any, condition = true) => {
  const isCalledRef = useRef(false);

  useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
};
