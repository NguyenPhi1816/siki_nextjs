import { ICategory } from "@/types/category";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ICategoryDrawerItem {
  data: ICategory;
}

const CategoryDrawerItem: React.FC<ICategoryDrawerItem> = ({ data }) => {
  return (
    data && (
      <Box
        sx={{
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "var(--white)",
          borderRadius: 1,
        }}
      >
        <Image src={data.imageUrl} alt={data.parent} width={100} height={100} />
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.75rem",
            textAlign: "center",
            marginTop: "0.5rem",
            minHeight: "2.25rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {data.parent}
        </Typography>
      </Box>
    )
  );
};

export default CategoryDrawerItem;
