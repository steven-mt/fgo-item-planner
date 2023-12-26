"use client";

import { Box } from "@mui/material";
import { AccountForm } from "./_components/AccountForm";
import { Planner } from "./_components/Planner";
import { useAppBarHeight } from "./_hooks/useAppBarHeight";

export default function Home() {
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
