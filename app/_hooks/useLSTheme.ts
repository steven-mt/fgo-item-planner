"use client";

import { useEffectOnce } from "./useEffectOnce";
import { useLocalStorage } from "./useLocalStorage";

const themeKey = "darkTheme";

export const useLSTheme = (): [boolean, (value: boolean | null) => void] => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage<boolean | null>(
    themeKey,
    null,
  );

  // TODO: get preference from db when possible
  useEffectOnce(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme:dark)");

    if (isDarkTheme === null) {
      if (prefersDark.matches) setIsDarkTheme(true);
      else setIsDarkTheme(false);
    }
  }, isDarkTheme !== undefined);

  // return true when isDarkTheme is still undefined during server rendering
  return [isDarkTheme ?? true, setIsDarkTheme];
};
