"use client";

import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  IconButton,
  Modal,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Typography,
} from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useHash } from "../_hooks/useHash";
import { Database } from "../_types/supabase";
import { getRedirectURL } from "../_utils";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const AuthModal = ({
  isModalOpen: isModalOpen,
  setIsModalOpen: setIsModalOpen,
}: Props) => {
  const supabase = createClientComponentClient<Database>();

  const [isLoading, setIsLoading] = useState(false);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [email, setEmail] = useState("");

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handleSnackbarClose = (
    _event: Event | React.SyntheticEvent<any, Event>,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") return;
    else setIsSnackbarOpen(false);
  };

  const textFieldRef = useRef<HTMLInputElement>(null);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorDescription("");

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: getRedirectURL(),
      },
    });

    setIsLoading(false);

    if (error) alert(error);
    else {
      setIsButtonDisabled(true);
      setIsSnackbarOpen(true);
    }
  };

  const [errorDescription, setErrorDescription] = useState("");
  const hash = useHash();
  useEffect(() => {
    const parsedHash = new URLSearchParams(hash as string);
    const parsedError = parsedHash.get("error_description");

    parsedError ? setErrorDescription(parsedError) : setErrorDescription("");

    if (parsedError) {
      setErrorDescription(parsedError);
      setIsModalOpen(true);
    } else setErrorDescription("");

    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  }, [hash, setIsModalOpen]);

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={(_event, reason: "backdropClick" | "escapeKeyDown") => {
          if (
            reason === "escapeKeyDown" &&
            textFieldRef.current &&
            document.activeElement instanceof HTMLElement &&
            textFieldRef.current.contains(document.activeElement)
          ) {
            document.activeElement.blur();
          } else setIsModalOpen(false);
        }}
        aria-labelledby="modal-modal-title"
      >
        <Box
          component={"form"}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            width: { xs: "90%", sm: 400 },
            bgcolor: "background.paper",
            border: "2px solid #000",
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
            ":focus": { outline: "none" },
          }}
          onSubmit={handleSignIn}
        >
          <div className="flex justify-between">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              display={"flex"}
              alignItems={"center"}
            >
              Login / Sign Up
            </Typography>

            <IconButton onClick={() => setIsModalOpen(false)}>
              <Close />
            </IconButton>
          </div>

          <TextField
            label="Email"
            type="email"
            required
            ref={textFieldRef}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
              if (event.key === "Escape") event.currentTarget.blur();
            }}
            error={errorDescription ? true : false}
            helperText={errorDescription || null}
          />

          <LoadingButton
            variant="contained"
            type="submit"
            loading={isLoading}
            disabled={isButtonDisabled}
          >
            <span>{isButtonDisabled ? "Check email for link" : "Login"}</span>
          </LoadingButton>
        </Box>
      </Modal>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleSnackbarClose}
        message="Check email for magic link"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <Close />
          </IconButton>
        }
      />
    </>
  );
};
