"use client";

import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

export const WideTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    disableHoverListener
    disableFocusListener
    disableTouchListener
  />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 600,
  },
});
