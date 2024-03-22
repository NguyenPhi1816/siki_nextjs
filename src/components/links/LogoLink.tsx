import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export enum LogoSize {
  md,
  lg,
}

interface LogoLinkProps {
  size?: LogoSize;
}

const LogoLink: React.FC<LogoLinkProps> = ({ size }) => {
  const logoSizeMd = { width: "3.125rem", height: "1.3125rem" };
  const logoSizeLg = { width: "4.375rem", height: "1.8125rem" };

  return (
    <Link href="/" underline="none" color="inherit">
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image
          priority
          style={size === LogoSize.md ? logoSizeMd : logoSizeLg}
          src="/logo.png"
          alt="logo"
          width={279}
          height={116}
        />
      </Box>
    </Link>
  );
};

export default LogoLink;
