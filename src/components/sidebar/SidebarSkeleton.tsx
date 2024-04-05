import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import SidebarItemSkeleton from "./SidebarItemSkeleton";
import React from "react";

const SidebarSkeleton = () => {
  const isMobile = useAppSelector(selectIsMobile);
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);

  return (
    isStatesInitialized &&
    !isMobile && (
      <Box
        sx={{
          marginTop: "1rem",
          marginRight: "1rem",
          width: "var(--side-bar-width)",
          height: "100%",
          overflowY: "scroll",
          msOverflowStyle: "none",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box sx={{ bgcolor: "var(--white)", borderRadius: 1 }}>
          <List sx={{ padding: "1rem 0.5rem" }}>
            <ListItem sx={{ padding: 0, paddingLeft: "0.5rem" }}>
              <Typography fontWeight={700}>Categories</Typography>
            </ListItem>
            {new Array(15).fill(0).map((item, i) => (
              <ListItem key={i} disablePadding>
                <SidebarItemSkeleton />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    )
  );
};

export default SidebarSkeleton;
