import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export enum LogoSize {
  md,
  lg,
  xl,
}

interface LogoLinkProps {
  size?: LogoSize;
}

const LogoLink: React.FC<LogoLinkProps> = ({ size }) => {
  const logoSizeMd = { width: "50px", height: "30px" };
  const logoSizeLg = { width: "100px", height: "60px" };
  const logoSizeXl = { width: "125px", height: "75px" };

  const logoSrc = "/logo.png";

  return (
    <Link href="/" underline="none" color="inherit">
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image
          priority
          style={
            size === LogoSize.md
              ? logoSizeMd
              : size === LogoSize.lg
              ? logoSizeLg
              : logoSizeXl
          }
          src={logoSrc}
          alt="logo"
          width={279}
          height={116}
        />
      </Box>
    </Link>
  );
};

export default LogoLink;
