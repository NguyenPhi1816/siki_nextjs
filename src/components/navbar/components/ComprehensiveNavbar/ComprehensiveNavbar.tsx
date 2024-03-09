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
import SearchResult from "@/components/search/SearchResult";
import { useAppSelector } from "../../../../../lib/hooks";
import { selectIsMobileScreen } from "../../../../../lib/feartures/ui/uiSlice";
import { createPortal } from "react-dom";
import CustomDrawer from "@/components/drawer/Drawer";
import { useState } from "react";

const ComprehensiveNavbar = () => {
  const isMobileScreen = useAppSelector(selectIsMobileScreen);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <Container
      component="div"
      sx={{ ...containerStyles, padding: "8px 0px!important" }}
    >
      {isMobileScreen && (
        <IconButton
          sx={MenuButtonStyles}
          onClick={() => setOpenDrawer((prev) => !prev)}
        >
          <Menu />
        </IconButton>
      )}
      <>
        {createPortal(
          <CustomDrawer
            open={openDrawer}
            setOpen={() => setOpenDrawer((prev) => !prev)}
          />,
          document.body
        )}
      </>
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
            href="/login"
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
