"use client";

import { FilterAlt } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  // CssBaseline,
  Divider,
  Drawer,
  // Grid,
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
import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

type Props = { switchTheme: any; drawerWidth: number };

type Page = "home" | "materials";

export const Header = ({ switchTheme, drawerWidth }: Props) => {
  const [isToggleDark, setIsToggleDark] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems: Page[] = ["home", "materials"];
  const optionItems = ["Help", "Settings"];
  const filterItems = ["filter1", "filter2"];

  const handleDrawerToggle = () => setIsDrawerOpen((prevState) => !prevState);

  const [selectedPage, setSelectedPage] = useState<Page>("home");
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    page: Page,
  ) => {
    setSelectedPage(page);
  };

  const drawerContent = (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              selected={selectedPage === item}
              onClick={(event) => handleListItemClick(event, item)}
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
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
            // ml: { sm: `${drawerWidth}px` },
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <HamburgerSpin
                toggle={setIsDrawerOpen}
                toggled={isDrawerOpen}
                size={18}
              />
            </IconButton>

            <Typography variant="h6" component={"div"}>
              Home
            </Typography>

            <Box sx={{ flexGrow: 1, justifyContent: "end", display: "flex" }}>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                {filterItems.map((item) => (
                  <Button key={item} sx={{ color: "inherit" }}>
                    {item}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                <Tooltip title="Filter">
                  <IconButton>
                    <FilterAlt color="action" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                ml: 2,
                userSelect: "none",
              }}
            >
              <DarkModeSwitch
                checked={isToggleDark}
                onChange={(checked: boolean) => {
                  switchTheme();
                  setIsToggleDark(checked);
                }}
              />
            </Box>
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
      </Box>

      {/* 
      <Box component={"main"} sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
      {/* <Grid sx={{ p: 2 }}>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={1}>
            a
          </Grid>
          <Grid item xs={1}>
            b
          </Grid>
          <Grid
            item
            xs={10}
            rowSpacing={1}
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <DarkModeSwitch
              checked={isToggleDark}
              onChange={(checked: boolean) => {
                switchTheme();
                setIsToggleDark(checked);
              }}
            />
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
};
