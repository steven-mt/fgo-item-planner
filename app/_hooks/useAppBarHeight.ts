"use client";

import { useMediaQuery, useTheme } from "@mui/material";

// from https://github.com/mui/material-ui/issues/10739#issuecomment-1242684810
export const useAppBarHeight = (): number => {
  type MinHeight = {
    minHeight: number;
  };

  const {
    mixins: { toolbar },
    breakpoints,
  } = useTheme();

  const toolbarDesktopQuery = breakpoints.up("sm");

  const toolbarLandscapeQuery = `${breakpoints.up(
    "xs",
  )} and (orientation: landscape)`;

  const isDesktop = useMediaQuery(toolbarDesktopQuery);
  const isLandscape = useMediaQuery(toolbarLandscapeQuery);

  let currentToolbarMinHeight;

  if (isDesktop) {
    currentToolbarMinHeight = toolbar[toolbarDesktopQuery];
  } else if (isLandscape) {
    currentToolbarMinHeight = (toolbar[breakpoints.up("xs")] as any)[
      `@media (orientation: landscape)`
    ];
  } else {
    currentToolbarMinHeight = toolbar;
  }

  return (currentToolbarMinHeight as MinHeight).minHeight;
};
