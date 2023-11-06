"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [innerValue, setInnerValue] = useState<T>(() => {
    return defaultValue;
  });

  const getValue = useCallback(() => {
    try {
      const data = window.localStorage.getItem(key);

      return data;
    } catch (error) {
      console.group(`Error reading localStorage key "${key}"`);
      if (error instanceof Error) console.log(error.message);
      else console.log(error);
      console.groupEnd();

      return null;
    }
  }, [key]);

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (value: any) => {
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
    const data = getValue();

    if (!data) {
      setValue(defaultValue);
      setInnerValue(defaultValue);
    } else {
      try {
        setInnerValue(JSON.parse(data));
      } catch (error) {
        console.group(`Error parsing value from localStorage key "${key}"`);
        if (error instanceof Error) console.log(error.message);
        else console.log(error);
        console.log(`Setting value to default "${defaultValue}"`);
        console.groupEnd();

        setValue(defaultValue);
        setInnerValue(defaultValue);
      }
    }
  }, [defaultValue, getValue, key, setValue]);

  return [innerValue, setValue];
};
