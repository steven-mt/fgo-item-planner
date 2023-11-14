"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  Box,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
import { useLSTheme } from "../_hooks/useLSTheme";
import { useUserContext } from "../_hooks/useUserContext";
import { darkTheme, lightTheme } from "../_theme/theme";
import { Database } from "../_types/supabase";
import { Header } from "./Header";

export const LayoutParent = ({ children }: { children: React.ReactNode }) => {
  const drawerWidth = 240;

  const [isDarkLs, setIsDarkLs] = useLSTheme();

  const switchTheme = () => {
    setIsDarkLs(!isDarkLs);
  };

  const cache = createCache({
    key: "css",
    prepend: true,
  });

  const { setCurrentUser } = useUserContext();

  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) setCurrentUser(session.user);
      else setCurrentUser(null);
    };

    getUser();
  }, [setCurrentUser, supabase.auth]);

  return (
    <>
      <CacheProvider value={cache}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={isDarkLs ? darkTheme : lightTheme}>
            <CssBaseline />

            <Header
              isDark={isDarkLs}
              switchTheme={switchTheme}
              drawerWidth={drawerWidth}
            />

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
