import { Box, Checkbox, Grid, Paper, Typography } from "@mui/material";
import CustomLink from "../links/CustomLink";
import { ChevronRight, Storefront } from "@mui/icons-material";
import React from "react";
import PageSection from "../wrapper/PageSection";

interface ICartSection {
  children: React.ReactNode;
  storeName: string;
  href: string;
  isSelected: boolean;
  onSelect: () => void;
  isMobile: boolean;
}

const CartSection: React.FC<ICartSection> = ({
  children,
  storeName,
  href,
  isSelected,
  onSelect,
  isMobile,
}) => {
  return (
    <PageSection sx={!isMobile ? { padding: "0 1rem" } : {}}>
      <Box>
        <Grid
          container
          alignItems={"center"}
          padding={isMobile ? "0.5rem" : "1rem 0"}
          columns={24}
        >
          <Grid item xs={2} md={1}>
            <Checkbox size="small" checked={isSelected} onClick={onSelect} />
          </Grid>
          <Grid item xs={22} md={10}>
            <CustomLink
              href={href}
              sx={{ display: "flex", alignItems: "center" }}
              noUnderline
            >
              <Storefront sx={{ color: "var(--text-grey)" }} />
              <Typography
                sx={{
                  margin: "0 0.25rem",
                  color: "var(--text-black)",
                  fontSize: "0.875rem",
                }}
              >
                {storeName}
              </Typography>
              <ChevronRight
                sx={{ color: "var(--text-grey)" }}
                fontSize="small"
              />
            </CustomLink>
          </Grid>
        </Grid>
        <Box>{children}</Box>
      </Box>
    </PageSection>
  );
};

export default CartSection;
