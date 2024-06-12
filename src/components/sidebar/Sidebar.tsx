import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import SidebarItem from "./SidebarItem";
import SidebarItemSkeleton from "./SidebarItemSkeleton";
import { ICategory } from "@/types/category";
import React from "react";

interface ISidebar {
  data: ICategory[];
}

const Sidebar: React.FC<ISidebar> = ({ data }) => {
  const isMobile = useAppSelector(selectIsMobile);
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);

  const vender: ICategory = {
    id: 9999,
    name: "Bán hàng cùng Siki",
    image:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp",
  };

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
        <Box sx={{ bgcolor: "var(--bg-white)", borderRadius: 1 }}>
          <List sx={{ padding: "1rem 0.5rem" }}>
            <ListItem sx={{ padding: 0, paddingLeft: "0.5rem" }}>
              <Typography fontSize={"0.875rem"} fontWeight={700}>
                Danh mục sản phẩm
              </Typography>
            </ListItem>
            {data?.map((item) => {
              return (
                <ListItem key={item.id} disablePadding>
                  <SidebarItem data={item} />
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box
          sx={{
            bgcolor: "var(--bg-white)",
            borderRadius: 1,
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          <List sx={{ padding: "1rem 0.5rem" }}>
            <ListItem disablePadding>
              <SidebarItem data={vender} />
            </ListItem>
          </List>
        </Box>
      </Box>
    )
  );
};

export default Sidebar;
