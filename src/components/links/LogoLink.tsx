import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export enum LogoSize {
  md,
  lg,
  xl,
}

export enum LogoColor {
  pink,
  white,
}

interface LogoLinkProps {
  size?: LogoSize;
  color?: LogoColor;
}

const LogoLink: React.FC<LogoLinkProps> = ({
  size,
  color = LogoColor.white,
}) => {
  const logoSizeMd = { width: "3.125rem", height: "1.3125rem" };
  const logoSizeLg = { width: "4.375rem", height: "1.8125rem" };
  const logoSizeXl = { width: "8.375rem", height: "3.4696rem" };

  const logoSrc = color === LogoColor.white ? "/logo.png" : "/logo_pink.png";

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
