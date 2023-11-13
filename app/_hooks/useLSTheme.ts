"use client";

import { useEffectOnce } from "./useEffectOnce";
import { useLocalStorage } from "./useLocalStorage";

const themeKey = "darkTheme";

export const useLSTheme = (): [boolean, (value: boolean | null) => void] => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage<boolean | null>(
    themeKey,
    null,
  );

  useEffectOnce(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme:dark)");

    if (isDarkTheme === null) {
      if (prefersDark.matches) setIsDarkTheme(true);
      else setIsDarkTheme(false);
    }
  });

  return [isDarkTheme ?? true, setIsDarkTheme];
};
