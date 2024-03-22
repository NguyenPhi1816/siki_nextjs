import { Box, Container, IconButton } from "@mui/material";
import SearchBar from "../../../search/SearchBar";
import CustomLink, {
  LinkColor,
  LinkComponent,
} from "../../../links/CustomLink";
import { Menu } from "@mui/icons-material";
import CartButton from "../../../cart/CartButton";
import {
  containerStyles,
  searchBarStyles,
  searchBarBoxStyles,
  CustomLinkStyles,
  MenuButtonStyles,
  searchResultStyles,
} from "../styles";
import SearchResult from "@/components/search/SearchResult";
import CustomDrawer from "@/components/drawer/Drawer";
import { useState } from "react";

const MobileScreenNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <Container
      component="div"
      sx={{ ...containerStyles, padding: "0.5rem 0!important" }}
    >
      <IconButton
        sx={MenuButtonStyles}
        onClick={() => setOpenDrawer((prev) => !prev)}
      >
        <Menu />
      </IconButton>
      <CustomDrawer
        open={openDrawer}
        setOpen={() => setOpenDrawer((prev) => !prev)}
      />
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

export default MobileScreenNavbar;
