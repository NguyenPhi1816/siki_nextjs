"use client";

import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useGetCategoriesQuery } from "../../../../../lib/feartures/category/categorySlice";
import { Clear } from "@mui/icons-material";
import DrawerList from "../../DrawerList";
import CategoryDrawerItem from "./CategoryDrawerItem";

interface ICategoryDrawer {
  onClose: () => void;
}

const CategoryDrawer: React.FC<ICategoryDrawer> = ({ onClose }) => {
  const { data: category } = useGetCategoriesQuery();

  return (
    <Box
      sx={{
        width: "100%",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "var(--top-bar-height)",
        }}
      >
        <Typography
          sx={{
            padding: "20px 0",
            width: "100%",
            height: "100%",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 700,
          }}
          variant="h5"
        >
          Danh mục sản phẩm
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={onClose}
        >
          <Clear />
        </IconButton>
      </Box>
      <Box
        sx={{
          paddingBottom: "var(--bottom-bar-height)",
          width: "100%",
          flex: 1,
          bgcolor: "var(--main-grey)",
          overflow: "hidden",
        }}
      >
        <DrawerList>
          {category?.map((item) => (
            <Grid item xs={4} key={item.id}>
              <CategoryDrawerItem data={item} />
            </Grid>
          ))}
        </DrawerList>
      </Box>
    </Box>
  );
};

export default CategoryDrawer;
