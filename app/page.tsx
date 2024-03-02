"use client";

import { Box } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { Planner } from "./_components/Planner";
import { useAppBarHeight } from "./_hooks/useAppBarHeight";
import { useUserContext } from "./_hooks/useUserContext";
import { ExpCard, GrailCost, ParsedItem } from "./_types/material";
import { Database } from "./_types/supabase";
import { insertUserFetch } from "./_utils";
import { getUserFetch } from "./_utils/drizzleQueryFetch";

let didInit = false;

export default function Home() {
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
    <Box
      sx={{
        p: 1,
        overflow: "auto",
        height: `calc(100vh - ${useAppBarHeight()}px)`,
      }}
    >
      {!itemData && <div>loading item data...</div>}
      {!expCardData && <div>loading exp card data...</div>}
      {!grailCostData && <div>loading grail cost data...</div>}

      {expCardData && grailCostData && itemData && (
        <Planner
          itemData={itemData}
          expCardData={expCardData}
          grailCostData={grailCostData}
        />
      )}
    </Box>
  );
}
