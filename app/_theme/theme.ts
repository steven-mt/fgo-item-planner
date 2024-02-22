"use client";

import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  components: {
    MuiCard: { styleOverrides: { root: { boxShadow: "none" } } },
  },
});

export const darkTheme = createTheme({
  ...globalTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#1f6fff",
    },
  },
  components: { MuiCard: { styleOverrides: { root: { boxShadow: "none" } } } },
});

export const lightTheme = createTheme({
  ...globalTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#1f6fff",
    },
  },
});
