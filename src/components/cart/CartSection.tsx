import { Box, Checkbox, Grid, Paper, Typography } from "@mui/material";
import CustomLink from "../links/CustomLink";
import { ChevronRight, Storefront } from "@mui/icons-material";
import React from "react";
import PageSection from "../wrapper/PageSection";

interface ICartSection {
  children: React.ReactNode;
  storeName: string;
  href: string;
}

const CartSection: React.FC<ICartSection> = ({ children, storeName, href }) => {
  return (
    <PageSection sx={{ padding: "0 1rem" }}>
      <Box>
        <Grid container alignItems={"center"} padding={"1rem 0"} columns={24}>
          <Grid item xs={1}>
            <Checkbox size="small" />
          </Grid>
          <Grid item xs={10}>
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
