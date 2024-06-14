import CartButton from "@/components/cart/CartButton";
import ProductMoreActionDrawer from "@/components/drawer/components/productMoreAction";
import CustomLink, {
  LinkColor,
  LinkComponent,
} from "@/components/links/CustomLink";
import { ChevronLeft, MoreHoriz } from "@mui/icons-material";
import { Box, Container, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { selectUser } from "../../../../../../lib/feartures/user/userSlice";
import { useAppSelector } from "../../../../../../lib/hooks";

const IconButtonStyle = { color: "var(--text-primary-pink)" };

const ProductNavbar = () => {
  const router = useRouter();
  const [showMoreAction, setShowMoreAction] = useState<boolean>(false);
  const { user } = useAppSelector(selectUser);

  const goBack = () => router.back();

  return (
    <>
      <Container
        sx={{
          p: "0.5rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <IconButton sx={IconButtonStyle} onClick={goBack}>
            <ChevronLeft />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CustomLink
            href="/cart"
            color={LinkColor.primaryPink}
            noUnderline
            component={LinkComponent.roundedButton}
            sx={{ ...IconButtonStyle, marginRight: 1 }}
          >
            <CartButton user={user} />
          </CustomLink>
          <IconButton
            sx={IconButtonStyle}
            onClick={() => setShowMoreAction(true)}
          >
            <MoreHoriz />
          </IconButton>
        </Box>
      </Container>
      <ProductMoreActionDrawer
        open={showMoreAction}
        setOpen={() => setShowMoreAction((prev) => !prev)}
      />
    </>
  );
};

export default ProductNavbar;
