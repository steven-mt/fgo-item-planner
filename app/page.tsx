"use client";

import { Box } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";
import { Planner } from "./_components/Planner";
import { useAppBarHeight } from "./_hooks/useAppBarHeight";
import { useUserContext } from "./_hooks/useUserContext";
import { Database } from "./_types/supabase";
import { insertUserFetch } from "./_utils";
import { getUserFetch } from "./_utils/drizzleQueryFetch";

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

        let insertedUser = await insertUserFetch({
          id: authUser.id,
          email: authUser.email,
        });

        if (!insertedUser) insertedUser = await getUserFetch(authUser.id);

        setCurrentUser({
          authData: authUser,
          userData: insertedUser,
        });
      } else {
        setCurrentUser({ authData: null, userData: null });
      }
    };

    getUser();
  }, [setCurrentUser, supabase.auth]);

  return (
    <Box
      sx={{
        p: 1,
        overflow: "auto",
        height: `calc(100vh - ${useAppBarHeight()}px)`,
      }}
    >
      <Planner />
    </Box>
  );
}
