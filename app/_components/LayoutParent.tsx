"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  Box,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { darkTheme, lightTheme } from "../_theme/theme";
import { Header } from "./Header";

export const LayoutParent = ({ children }: { children: React.ReactNode }) => {
  const drawerWidth = 240;

  const [isDark, setIsDark] = useState(false);

  const switchTheme = () => {
    setIsDark(!isDark);
  };

  const cache = createCache({
    key: "css",
    prepend: true,
  });

  return (
    <>
      <CacheProvider value={cache}>
        <StyledEngineProvider injectFirst>
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
        </StyledEngineProvider>
      </CacheProvider>
    </>
  );
};
