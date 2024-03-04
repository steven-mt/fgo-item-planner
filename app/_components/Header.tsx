"use client";

import { FilterAlt } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Spin as HamburgerSpin } from "hamburger-react";
import { Dispatch, SetStateAction, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AuthModal } from "./AuthModal";
import { LoginProfileButton } from "./LoginProfileButton";

export const Header = ({
  isDark,
  switchTheme,
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDark: boolean;
  switchTheme: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const filterItems = ["filter1", "filter2"];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{
            position: "sticky",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                display: { sm: "none" },
                p: 0,
              }}
            >
              <HamburgerSpin
                toggle={setIsDrawerOpen}
                toggled={isDrawerOpen}
                size={18}
              />
            </IconButton>

            <Typography
              variant="h6"
              component={"div"}
              sx={{ display: { sm: "none" } }}
            >
              Home
            </Typography>

            <Box sx={{ order: { xs: 1, sm: 0 } }}>
              <LoginProfileButton setIsModalOpen={setIsModalOpen} />
            </Box>

            <Box sx={{ flexGrow: 1, justifyContent: "end", display: "flex" }}>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                {filterItems.map((item) => (
                  <Button key={item} color="inherit">
                    {item}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                <Tooltip title="Filter">
                  <IconButton sx={{ color: "primary.contrastText" }}>
                    <FilterAlt />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <IconButton onClick={switchTheme}>
              <DarkModeSwitch checked={isDark} onChange={() => {}} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <AuthModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Box>
    </>
  );
};
