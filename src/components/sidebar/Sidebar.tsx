import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "../../../lib/hooks";
import { selectIsStatesInitialized } from "../../../lib/feartures/ui/uiSlice";
import { selectCategory } from "../../../lib/feartures/category/categorySlice";
import SidebarItem from "./SidebarItem";
import SidebarItemSkeleton from "./SidebarItemSkeleton";
import { ICategory } from "@/types/types";

const Sidebar = () => {
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);
  const category = useAppSelector(selectCategory);

  const vender: ICategory = {
    id: 9999,
    parent: "Bán hàng cùng Siki",
    children: [],
    imageUrl:
      "https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp",
  };

  return (
    isStatesInitialized && (
      <>
        <Box sx={{ bgcolor: "var(--white)", borderRadius: 1 }}>
          <List sx={{ padding: "1rem 0.5rem" }}>
            <ListItem sx={{ padding: 0, paddingLeft: "0.5rem" }}>
              <Typography fontWeight={700}>Categories</Typography>
            </ListItem>
            {category.length !== 0
              ? category.map((item) => {
                  return (
                    <ListItem key={item.id} disablePadding>
                      <SidebarItem data={item} />
                    </ListItem>
                  );
                })
              : new Array(15).fill(0).map((item, i) => (
                  <ListItem key={i} disablePadding>
                    <SidebarItemSkeleton />
                  </ListItem>
                ))}
          </List>
        </Box>
        <Box
          sx={{
            bgcolor: "var(--white)",
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
      </>
    )
  );
};

export default Sidebar;
