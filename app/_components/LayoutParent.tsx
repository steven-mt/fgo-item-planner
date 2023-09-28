"use client";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { darkTheme, lightTheme } from "../_theme/theme";
import { Header } from "./Header";

export const LayoutParent = ({ children }: { children: React.ReactNode }) => {
  const drawerWidth = 240;

  const [isDark, setIsDark] = useState(false);

  const switchTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />

        <Header switchTheme={switchTheme} drawerWidth={drawerWidth} />
        <Box
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </>
  );
};
