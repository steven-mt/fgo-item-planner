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
import { Database } from "../_types/supabase";

type Props = { setIsModalOpen: Dispatch<SetStateAction<boolean>> };

export const LoginButton = ({ setIsModalOpen }: Props) => {
  const supabase = createClientComponentClient<Database>();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const router = useRouter();
  const handleLogOut = async () => {
    setAnchorEl(null);

    await supabase.auth.signOut();
    router.refresh();

    setIsLoggedIn(false);
  };

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setIsLoggedIn(true);
        setUserEmail(session.user.email);
      } else {
        setIsLoggedIn(false);
        setUserEmail(undefined);
      }
    };

    getSession();
  }, [supabase.auth]);

  return (
    <>
      {isLoggedIn ? (
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
      ) : (
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
      )}

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
    </>
  );
};
