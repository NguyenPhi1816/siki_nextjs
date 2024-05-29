import { Box } from "@mui/material";
import LogoLink, { LogoSize } from "../../../../links/LogoLink";

const LogoLinkNavbar = () => {
  return (
    <Box sx={{ p: 2 }}>
      <LogoLink size={LogoSize.md} />
    </Box>
  );
};

export default LogoLinkNavbar;
