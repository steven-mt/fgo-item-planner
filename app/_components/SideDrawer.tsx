import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Page } from "../_types/planner";
import { DRAWER_WIDTH, PAGE_ITEMS } from "../_utils/constants";

const optionItems = ["Help", "Settings"];

export const SideDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedPage,
  setSelectedPage,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  selectedPage: Page;
  setSelectedPage: Dispatch<SetStateAction<Page>>;
}) => {
  const handleListItemClick = (page: Page) => {
    setSelectedPage(page);
  };

  const handleDrawerToggle = () => setIsDrawerOpen((prevState) => !prevState);

  const drawerContent = (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Toolbar />
      <Divider />
      <List>
        {PAGE_ITEMS.map((item) => (
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
            width: DRAWER_WIDTH,
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
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};
