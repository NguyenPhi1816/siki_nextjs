"use client";
import { Box, Link } from "@mui/material";
import LogoLink from "../../links/LogoLink";
import SearchBar from "../../search/SearchBar";
import CustomLink, { LinkColor, LinkComponent } from "../../links/CustomLink";

const ComprehensiveNavbar = () => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <LogoLink />
      <SearchBar />
      <CustomLink
        href="/auth/login"
        color={LinkColor.white}
        noUnderline
        component={LinkComponent.button}
      >
        Login
      </CustomLink>
    </Box>
  );
};

export default ComprehensiveNavbar;
