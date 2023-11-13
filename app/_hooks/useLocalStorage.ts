"use client";

import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] => {
  const getValue = useCallback(() => {
    let value = defaultValue;

    try {
      const rawValue = window.localStorage.getItem(key);

      if (!rawValue) {
        console.log(
          `Value from localStorage key "${key}" does not exist yet, setting value to default "${defaultValue}"`,
        );

        value = defaultValue;
      } else {
        value = (
          rawValue === "undefined" ? undefined : JSON.parse(rawValue)
        ) as T;
      }
    } catch (error) {
      console.group(`Error reading localStorage key "${key}"`);
      if (error instanceof Error) console.log(error.message);
      else console.log(error);
      console.groupEnd();
    } finally {
      return value;
    }
  }, [defaultValue, key]);

  const [innerValue, setInnerValue] = useState<T>(getValue);

  const setValue = useCallback(
    (value: T) => {
      try {
        setInnerValue(value);

        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.group(`Error setting localStorage key "${key}"`);
        if (error instanceof Error) console.log(error.message);
        else console.log(error);
        console.groupEnd();
      }
    },
    [key],
  );

  useEffect(() => {
    setValue(getValue());
  }, [getValue, setValue]);

  return [innerValue, setValue];
};
