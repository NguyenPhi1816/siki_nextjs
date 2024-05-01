import { Box, Container } from "@mui/material";
import SearchBar from "../../../../search/SearchBar";
import CustomLink, {
  LinkColor,
  LinkComponent,
} from "../../../../links/CustomLink";
import CartButton from "../../../../cart/CartButton";
import {
  containerStyles,
  searchBarStyles,
  searchBarBoxStyles,
  CustomLinkStyles,
  searchResultStyles,
} from "../styles";
import SearchResult from "@/components/search/SearchResult";
import { useState } from "react";
import LogoLink, { LogoSize } from "@/components/links/LogoLink";
import { ButtonStyle } from "@/components/search/SearchBar/SearchBar";

const MobileScreenNavbar = () => {
  return (
    <Container
      component="div"
      sx={{
        ...containerStyles,
        padding: "0.5rem 0!important",
      }}
    >
      <LogoLink size={LogoSize.md} />
      <Box sx={searchBarBoxStyles}>
        <SearchResult
          sx={searchResultStyles}
          renderInput={(params) => (
            <SearchBar
              sx={searchBarStyles}
              autoCompleteParams={params}
              buttonStyle={ButtonStyle.icon}
            />
          )}
        />
      </Box>
      <CustomLink
        href="/cart"
        color={LinkColor.primaryPink}
        noUnderline
        component={LinkComponent.roundedButton}
        sx={CustomLinkStyles}
      >
        <CartButton />
      </CustomLink>
    </Container>
  );
};

export default MobileScreenNavbar;
