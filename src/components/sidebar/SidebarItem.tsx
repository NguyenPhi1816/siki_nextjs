import { Box, Typography } from "@mui/material";
import CustomLink, { LinkColor, LinkComponent } from "../links/CustomLink";
import Image from "next/image";
import { ICategory } from "@/types/category";
import React from "react";

interface ISidebarItem {
  data: ICategory;
}

const SidebarItem: React.FC<ISidebarItem> = ({ data }) => {
  return (
    <CustomLink
      sx={{ width: "100%" }}
      href={`/category/${data?.id}`}
      noUnderline
      component={LinkComponent.button}
      hoverBgColor="var(--grey)"
      color={LinkColor.black}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image src={data?.imageUrl} alt={data?.parent} width={32} height={32} />
        <Typography
          sx={{
            marginLeft: "0.5rem",
            fontSize: "0.875rem",
            color: "var(--text-black)",
          }}
          variant="body1"
        >
          {data?.parent}
        </Typography>
      </Box>
    </CustomLink>
  );
};

export default SidebarItem;
