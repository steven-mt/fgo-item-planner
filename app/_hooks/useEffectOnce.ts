"use client";

import { useEffect, useRef } from "react";

/**
 * Calls a function once using useEffect, with an optional condition.
 *
 * If a condition is specified, the function will only be called once when the
 * condition first returns true.
 *
 * From {@link https://stackoverflow.com/a/65150997}.
 *
 * @param {Function} cb
 * @param {boolean} [condition=true]
 */
export const useEffectOnce = (cb: () => any, condition = true) => {
  const isCalledRef = useRef(false);

  useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
};
