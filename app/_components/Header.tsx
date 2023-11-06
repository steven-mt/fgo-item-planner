"use client";

import { FilterAlt } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Spin as HamburgerSpin } from "hamburger-react";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AuthModal } from "./AuthModal";
import { LoginProfileButton } from "./LoginProfileButton";

type Props = {
  isDark: boolean;
  switchTheme: any;
  drawerWidth: number;
};

type Page = "home" | "materials";

export const Header = ({ isDark, switchTheme, drawerWidth }: Props) => {
  const [isToggleDark, setIsToggleDark] = useState(false);

  const navItems: Page[] = ["home", "materials"];
  const optionItems = ["Help", "Settings"];
  const filterItems = ["filter1", "filter2"];

  const [selectedPage, setSelectedPage] = useState<Page>("home");
  const handleListItemClick = (page: Page) => {
    setSelectedPage(page);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setIsDrawerOpen((prevState) => !prevState);
  const drawerContent = (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              selected={selectedPage === item}
              onClick={() => handleListItemClick(item)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        {optionItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

            <IconButton
              onClick={() => {
                switchTheme();
                setIsToggleDark(!isToggleDark);
              }}
            >
              <DarkModeSwitch checked={isDark} onChange={() => {}} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box component={"nav"}>
          <SwipeableDrawer
            open={isDrawerOpen}
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawerContent}
          </SwipeableDrawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        </Box>

        <AuthModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Box>
    </>
  );
};
