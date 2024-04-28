import CustomLink, { LinkComponent } from "@/components/links/CustomLink";
import { IProductFull } from "@/types/types";
import { Verified } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IProductStore {
  data: IProductFull;
}

const ProductStore: React.FC<IProductStore> = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "4rem",
            height: "4rem",
            borderRadius: "5rem",
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={data.storeDto.logo}
            alt={data.storeDto.name}
            width={100}
            height={100}
          />
        </Box>
        <Box sx={{ marginLeft: "1rem" }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.125rem", fontWeight: 700 }}
          >
            {data.storeDto.name}
          </Typography>
          <Box
            sx={{
              marginTop: "0.25rem",
              display: "flex",
              color: "var(--pink-primary)",
            }}
          >
            <Verified fontSize="small" />
            <Typography
              variant="body1"
              sx={{
                marginLeft: "0.25rem",
                fontWeight: 700,
                fontSize: "0.875rem",
              }}
            >
              Offical
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <CustomLink
          sx={{ fontSize: "0.875rem" }}
          href="/store/1"
          component={LinkComponent.outlinedButton}
        >
          Xem cửa hàng
        </CustomLink>
      </Box>
    </Box>
  );
};

export default ProductStore;
