"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectIsMobile,
  selectIsStatesInitialized,
} from "../../../lib/feartures/ui/uiSlice";
import LogoLink, { LogoSize } from "../links/LogoLink";
import FooterLink from "./FooterLink";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  const isMobile = useAppSelector(selectIsMobile);
  const isStatesInitialized = useAppSelector(selectIsStatesInitialized);

  return (
    isStatesInitialized &&
    !isMobile && (
      <Box
        sx={{
          marginTop: "1rem",
          padding: "1rem",
          width: "100%",
          height: "auto",
          backgroundColor: "var(--bg-white)",
        }}
      >
        <Box
          sx={{
            padding: "1rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LogoLink size={LogoSize.xl} />
          <Box
            sx={{
              margin: "1.5rem 0",
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FooterLink isHeader href="/">
              Về chúng tôi
            </FooterLink>
            <FooterLink isHeader href="/">
              Kết nối với chúng tôi
            </FooterLink>
            <FooterLink isHeader href="/">
              Chính sách
            </FooterLink>
            <FooterLink isHeader href="/">
              Hỗ trợ khách hàng
            </FooterLink>
          </Box>
          <Box
            sx={{
              marginBottom: "1rem",
              width: "20%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FooterLink isHeader href="/">
              <Facebook />
            </FooterLink>
            <FooterLink isHeader href="/">
              <Twitter />
            </FooterLink>
            <FooterLink isHeader href="/">
              <Instagram />
            </FooterLink>
            <FooterLink isHeader href="/">
              <LinkedIn />
            </FooterLink>
          </Box>
          <Typography
            variant="body1"
            fontSize={"0.75rem"}
            color={"var(--text-grey)"}
          >
            &#169; 2024 Siki Company. All rights reserved.
          </Typography>
        </Box>
      </Box>
    )
  );
};

export default Footer;
