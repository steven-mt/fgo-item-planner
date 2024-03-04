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
import { useEffect, useState } from "react";
import { Header } from "./_components/Header";
import { MaterialsTable } from "./_components/MaterialsTable";
import { Planner } from "./_components/Planner";
import { SideDrawer } from "./_components/SideDrawer";
import { PlannerStateProvider } from "./_context/PlannerStateProvider";
import { useUserContext } from "./_context/useUserContext";
import { useAppBarHeight } from "./_hooks/useAppBarHeight";
import { useLSTheme } from "./_hooks/useLSTheme";
import { darkTheme, lightTheme } from "./_theme/theme";
import { ExpCard, GrailCost, ParsedItem } from "./_types/material";
import { Page } from "./_types/planner";
import { Database } from "./_types/supabase";
import { insertUserFetch } from "./_utils";
import { getUserFetch } from "./_utils/drizzleQueryFetch";

let didInit = false;

export default function Home() {
  // Layout
  const drawerWidth = 240;

  const [isDarkLs, setIsDarkLs] = useLSTheme();

  const switchTheme = () => {
    setIsDarkLs(!isDarkLs);
  };

  const cache = createCache({
    key: "css",
    prepend: true,
  });

  // Drawer
  const [selectedPage, setSelectedPage] = useState<Page>("Inputs");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Auth and user data
  const { setCurrentUser } = useUserContext();

  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const authUser = session.user;

        if (!authUser.email)
          return alert("Missing email, database entry for user not created");

        let userData = await getUserFetch(authUser.id);

        if (!userData)
          userData = await insertUserFetch({
            id: authUser.id,
            email: authUser.email,
          });

        setCurrentUser({
          authData: authUser,
          userData: userData,
        });
      } else {
        setCurrentUser({ authData: null, userData: null });
      }
    };

    getUser();
  }, [setCurrentUser, supabase.auth]);

  // API data
  const [itemData, setItemData] = useState<ParsedItem[]>();
  const [expCardData, setExpCardData] = useState<ExpCard[]>();
  const [grailCostData, setGrailCostData] = useState<GrailCost>();

  useEffect(() => {
    const getData = async () => {
      const expData = (await (await fetch("/api/exp")).json()) as ExpCard[];

      setExpCardData(expData);

      const grailData = (await (
        await fetch("/api/grailCost")
      ).json()) as GrailCost;

      setGrailCostData(grailData);

      const items = (await (await fetch("/api/items")).json()) as ParsedItem[];

      setItemData(items);
    };

    if (!didInit) {
      didInit = true;
      getData();
    }
  }, []);

  return (
    <>
      {/* MUI Tailwind interoperability */}
      <CacheProvider value={cache}>
        <StyledEngineProvider injectFirst>
          {/*  */}

          <ThemeProvider theme={isDarkLs ? darkTheme : lightTheme}>
            <CssBaseline />

            <Header
              isDark={isDarkLs}
              switchTheme={switchTheme}
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />

            <SideDrawer
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Box
              sx={{
                p: 1,
                overflow: "auto",
                height: `calc(100vh - ${useAppBarHeight()}px)`,
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
              }}
            >
              <PlannerStateProvider>
                {!itemData && <div>loading item data...</div>}
                {!expCardData && <div>loading exp card data...</div>}
                {!grailCostData && <div>loading grail cost data...</div>}

                {expCardData && grailCostData && itemData && (
                  <>
                    {selectedPage === "Inputs" && (
                      <Planner
                        itemData={itemData}
                        expCardData={expCardData}
                        grailCostData={grailCostData}
                      />
                    )}
                    {selectedPage === "Materials" && <MaterialsTable />}
                  </>
                )}
              </PlannerStateProvider>
            </Box>
          </ThemeProvider>
        </StyledEngineProvider>
      </CacheProvider>
    </>
  );
}
