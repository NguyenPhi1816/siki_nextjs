import CustomLink, { LinkColor } from "@/components/links/CustomLink";
import { AccountCircle } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../lib/hooks";
import {
  clearTokens,
  selectTokens,
} from "../../../../../../lib/feartures/auth/authSlice";
import { useGetProfileMutation } from "../../../../../../lib/feartures/user/userApi";
import { redirect, useRouter } from "next/navigation";
import { deleteCookies, setCookies } from "@/services/cookie";
import { IAuthResponse } from "@/types/user";

interface IAccountButton {
  user: IAuthResponse | null;
  handleLogout: () => void;
}

const AccountButton: React.FC<IAccountButton> = ({ user, handleLogout }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!!user) {
      setAnchorEl(event.currentTarget);
    } else {
      router.push("/login");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          marginLeft: "1rem",
          color: "var(--text-primary-pink)",
          borderRadius: 1,
          ":hover": {
            bgcolor: "var(--bg-light-grey)",
          },
        }}
      >
        <AccountCircle />
        <Typography sx={{ marginLeft: "0.25rem", textTransform: "none" }}>
          {!!user ? user.firstName + " " + user.lastName : "Tài khoản"}
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <CustomLink noUnderline color={LinkColor.black} href="/account">
            Thông tin tài khoản
          </CustomLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CustomLink noUnderline color={LinkColor.black} href="/myOrders">
            Đơn hàng của tôi
          </CustomLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Box onClick={handleLogout}>Logout</Box>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AccountButton;
