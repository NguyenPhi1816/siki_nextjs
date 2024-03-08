"use client";
import { Box, Container, IconButton, Typography } from "@mui/material";
import LogoLink, { LogoSize } from "../../../links/LogoLink";
import SearchBar from "../../../search/SearchBar";
import CustomLink, {
  LinkColor,
  LinkComponent,
} from "../../../links/CustomLink";
import { AccountCircle, Menu } from "@mui/icons-material";
import CartButton from "../../../cart/CartButton";
import {
  containerStyles,
  searchBarStyles,
  searchBarBoxStyles,
  CustomLinkStyles,
  CustomLinkBoxStyles,
  CustomLinkBoxTypoStyles,
  MenuButtonStyles,
  searchResultStyles,
} from "./styles";
import SearchResult from "@/app/components/search/SearchResult";
import { useAppSelector } from "../../../../../../lib/hooks";
import { selectIsMobileScreen } from "../../../../../../lib/feartures/ui/uiSlice";

const ComprehensiveNavbar = () => {
  const isMobileScreen = useAppSelector(selectIsMobileScreen);

  return (
    <Container
      component="div"
      sx={{ ...containerStyles, padding: "8px 0px!important" }}
    >
      {isMobileScreen && (
        <IconButton sx={MenuButtonStyles}>
          <Menu />
        </IconButton>
      )}
      {!isMobileScreen && (
        <LogoLink size={isMobileScreen ? LogoSize.md : LogoSize.lg} />
      )}
      <Box sx={searchBarBoxStyles}>
        <SearchResult
          sx={searchResultStyles}
          renderInput={(params) => (
            <SearchBar sx={searchBarStyles} autoCompleteParams={params} />
          )}
        />
      </Box>
      {!isMobileScreen && (
        <>
          <CustomLink
            href="/auth/login"
            color={LinkColor.white}
            noUnderline
            component={LinkComponent.button}
            sx={CustomLinkStyles}
          >
            <Box sx={CustomLinkBoxStyles}>
              <AccountCircle />
              <Typography variant="body1" sx={CustomLinkBoxTypoStyles}>
                Account
              </Typography>
            </Box>
          </CustomLink>
        </>
      )}
      <CustomLink
        href="/cart"
        color={LinkColor.white}
        noUnderline
        component={LinkComponent.roundedButton}
        sx={CustomLinkStyles}
      >
        <CartButton />
      </CustomLink>
    </Container>
  );
};

export default ComprehensiveNavbar;
