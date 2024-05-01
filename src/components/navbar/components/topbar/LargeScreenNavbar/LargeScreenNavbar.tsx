import { Box, Container, Typography } from "@mui/material";
import LogoLink, { LogoSize } from "../../../../links/LogoLink";
import SearchBar from "../../../../search/SearchBar";
import CustomLink, {
  LinkColor,
  LinkComponent,
} from "../../../../links/CustomLink";
import { AccountCircle } from "@mui/icons-material";
import CartButton from "../../../../cart/CartButton";
import {
  containerStyles,
  searchBarStyles,
  searchBarBoxStyles,
  CustomLinkStyles,
  searchResultStyles,
} from "../styles";
import SearchResult from "@/components/search/SearchResult";

const LargeScreenNavbar = () => {
  return (
    <Container
      component="div"
      sx={{ ...containerStyles, padding: "0.5rem 0!important" }}
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
        <CartButton />
      </CustomLink>
      <CustomLink
        href="/login"
        color={LinkColor.primaryPink}
        noUnderline
        component={LinkComponent.roundedButton}
        sx={{ ...CustomLinkStyles, marginLeft: ".75rem" }}
      >
        <AccountCircle />
      </CustomLink>
    </Container>
  );
};

export default LargeScreenNavbar;
