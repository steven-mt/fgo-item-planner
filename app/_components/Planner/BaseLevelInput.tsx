"use client";

import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

export const BaseLevelInput = React.forwardRef(
  (
    {
      label,
      placeholder,
      displayValue,
      setDisplayValue,
      handleBlur,
      otherProps,
      ...props // solution of passing props from https://github.com/mui/material-ui/issues/33476#issuecomment-1574005080
    }: {
      label: string;
      placeholder: string;
      displayValue: string;
      setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
      handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
      otherProps?: TextFieldProps;
    },
    ref: React.ForwardedRef<HTMLDivElement | null>,
  ) => (
    <TextField
      {...props}
      {...otherProps}
      label={label}
      value={displayValue}
      size="small"
      autoComplete="off"
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      onBlur={handleBlur}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayValue(event.target.value);
      }}
      ref={ref}
    />
  ),
);

// Satisfy an ESLint rule eslint(react/display-name)
// More information at https://stackoverflow.com/a/67993106 and
// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
BaseLevelInput.displayName = "BaseLevelInput";
