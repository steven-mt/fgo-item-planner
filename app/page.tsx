"use client";

import { Box } from "@mui/material";
import { AccountForm } from "./_components/AccountForm";
import { Planner } from "./_components/Planner";
import { useAppBarHeight } from "./_hooks/useAppBarHeight";
import { useEffectOnce } from "./_hooks/useEffectOnce";
import { useUserContext } from "./_hooks/useUserContext";
import { insertUserFetch } from "./_utils";

export default function Home() {
  const { currentUser } = useUserContext();

  useEffectOnce(async () => {
    if (!currentUser) return;

    if (!currentUser.email)
      return alert("Missing email, database entry for user not created");

    await insertUserFetch({
      id: currentUser.id,
      email: currentUser.email,
    });
  }, currentUser !== null);

  return (
    <Box
      sx={{
        p: 1,
        overflow: "auto",
        height: `calc(100vh - ${useAppBarHeight()}px)`,
      }}
    >
      <AccountForm />

      <Planner />
    </Box>
  );
}
