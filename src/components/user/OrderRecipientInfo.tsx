import { ChevronRight, LocationOn } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import CustomLink, { LinkColor } from "../links/CustomLink";

const MobileComponent = () => {
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
              Khả Phi
            </Typography>
            <Divider
              flexItem
              orientation="vertical"
              sx={{ margin: "0 0.25rem" }}
            />
            <Typography variant="body1" fontSize={"0.875rem"} fontWeight={700}>
              0927195291
            </Typography>
          </Box>
          <Typography
            variant="body1"
            fontSize={"0.875rem"}
            color={"var(--text-grey)"}
          >
            9/5 Đường số 16, Phường Linh Chiểu, Thành phố Thủ Đức, Hồ Chí Minh
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

const DesktopComponent = () => {
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
          Khả Phi
        </Typography>
        <Divider flexItem orientation="vertical" sx={{ margin: "0 0.25rem" }} />
        <Typography variant="body1" fontSize={"0.875rem"} fontWeight={700}>
          0927195291
        </Typography>
      </Box>
      <Typography
        variant="body1"
        fontSize={"0.875rem"}
        color={"var(--text-grey)"}
      >
        9/5 Đường số 16, Phường Linh Chiểu, Thành phố Thủ Đức, Hồ Chí Minh
      </Typography>
    </Box>
  );
};

interface IOrderRecipientInfo {
  mobile?: boolean;
}

const OrderRecipientInfo: React.FC<IOrderRecipientInfo> = ({ mobile }) => {
  return mobile ? <MobileComponent /> : <DesktopComponent />;
};

export default OrderRecipientInfo;
