"use client";
import { Box, Container } from "@mui/material";
import LogoLink, { LogoSize } from "../../../../links/LogoLink";
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
import AccountButton from "./AccountButton";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  clearTokens,
  selectTokens,
} from "../../../../../../lib/feartures/auth/authSlice";
import { deleteCookies } from "@/services/cookie";
import {
  clearUser,
  selectUser,
} from "../../../../../../lib/feartures/user/userSlice";
import { Dispatch } from "@reduxjs/toolkit";

const LargeScreenNavbar = () => {
  const dispatch: Dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);

  const handleLogout = async () => {
    await deleteCookies();
    dispatch(clearTokens());
    dispatch(clearUser());
  };

  return (
    <Container
      component="div"
      sx={{ ...containerStyles, padding: "0.5rem 1.5rem!important" }}
    >
      <LogoLink size={LogoSize.md} />
      <Box sx={searchBarBoxStyles}>
        <SearchResult
          sx={searchResultStyles}
          renderInput={(params) => (
            <SearchBar sx={searchBarStyles} autoCompleteParams={params} />
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
        <CartButton user={user} />
      </CustomLink>
      <AccountButton user={user} handleLogout={handleLogout} />
    </Container>
  );
};

export default LargeScreenNavbar;
