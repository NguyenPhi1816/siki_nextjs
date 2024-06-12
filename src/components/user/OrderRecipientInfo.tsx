import { ChevronRight, LocationOn } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import CustomLink, { LinkColor } from "../links/CustomLink";
import { IAuthResponse } from "@/types/user";

interface IMobileComponent {
  user: IAuthResponse;
}

const MobileComponent: React.FC<IMobileComponent> = ({ user }) => {
  return (
    <Box
      sx={{
        marginBottom: "1rem",
        padding: "1rem",
        bgcolor: "var(--bg-white)",
        borderRadius: 1,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <Box sx={{ marginBottom: "0.5rem", display: "flex" }}>
            <LocationOn
              fontSize="small"
              sx={{
                marginRight: "0.25rem",
                color: "var(--text-primary-pink)",
              }}
            />
            <Typography variant="body1" fontSize={"0.875rem"} fontWeight={700}>
              {user.firstName + " " + user.lastName}
            </Typography>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ margin: "0 0.25rem" }}
            />
            <Typography variant="body1" fontSize={"0.875rem"} fontWeight={700}>
              {user.phoneNumber}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            fontSize={"0.875rem"}
            color={"var(--text-grey)"}
          >
            {user.address}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

interface IDesktopComponent {
  user: IAuthResponse;
}

const DesktopComponent: React.FC<IDesktopComponent> = ({ user }) => {
  return (
    <Box
      sx={{
        marginBottom: "1rem",
        padding: "1rem",
        bgcolor: "var(--bg-white)",
        borderRadius: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body1"
          fontSize={"0.875rem"}
          color={"var(--text-grey)"}
        >
          Giao tới
        </Typography>
        <CustomLink
          href="/"
          color={LinkColor.primaryPink}
          noUnderline
          fontSize="0.875rem"
        >
          Thay đổi
        </CustomLink>
      </Box>
      <Box sx={{ margin: "0.5rem 0", display: "flex" }}>
        <Typography variant="body1" fontSize={"0.875rem"} fontWeight={700}>
          {user.firstName + " " + user.lastName}
        </Typography>
        <Divider flexItem orientation="vertical" sx={{ margin: "0 0.25rem" }} />
        <Typography variant="body1" fontSize={"0.875rem"} fontWeight={700}>
          {user.phoneNumber}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        fontSize={"0.875rem"}
        color={"var(--text-grey)"}
      >
        {user.address}
      </Typography>
    </Box>
  );
};

interface IOrderRecipientInfo {
  mobile?: boolean;
  user: IAuthResponse | null;
}

const OrderRecipientInfo: React.FC<IOrderRecipientInfo> = ({
  mobile = false,
  user,
}) => {
  return (
    user &&
    (mobile ? (
      <MobileComponent user={user} />
    ) : (
      <DesktopComponent user={user} />
    ))
  );
};

export default OrderRecipientInfo;
