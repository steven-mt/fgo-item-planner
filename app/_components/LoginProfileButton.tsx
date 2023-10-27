"use client";

import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useUserContext } from "../_hooks/useUserContext";
import { Database } from "../_types/supabase";

type Props = { setIsModalOpen: Dispatch<SetStateAction<boolean>> };

export const LoginProfileButton = ({ setIsModalOpen }: Props) => {
  const supabase = createClientComponentClient<Database>();

  const { currentUser, setCurrentUser } = useUserContext();
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const router = useRouter();
  const handleLogOut = async () => {
    setAnchorEl(null);

    await supabase.auth.signOut();
    router.refresh();

    setCurrentUser(null);
  };

  useEffect(() => {
    if (currentUser) {
      setUserEmail(currentUser.email);
    } else {
      setUserEmail(undefined);
    }
  }, [currentUser]);

  const loginButton = (
    <Button
      variant="outlined"
      color="inherit"
      onClick={() => {
        setIsModalOpen(true);
      }}
      sx={{ ml: { xs: 1, sm: 0 } }}
    >
      Login
    </Button>
  );

  const profileIconButton = (
    <Tooltip title={userEmail}>
      <IconButton
        color="inherit"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          setAnchorEl(event.currentTarget)
        }
      >
        <AccountCircle />
      </IconButton>
    </Tooltip>
  );

  const profileMenu = (
    <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
      <MenuItem
        className="pointer-events-none hover:bg-transparent"
        disableRipple
      >
        Logged in
      </MenuItem>

      <MenuItem
        className="pointer-events-none hover:bg-transparent"
        disableRipple
        dense
      >
        {userEmail}
      </MenuItem>

      <Divider />

      <MenuItem onClick={handleLogOut}>Logout</MenuItem>
    </Menu>
  );

  return (
    <>
      {currentUser ? profileIconButton : loginButton}

      {profileMenu}
    </>
  );
};
