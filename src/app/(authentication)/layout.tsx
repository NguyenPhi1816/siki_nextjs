import type { Metadata } from "next";
import TopBar from "../../components/navbar/TopBar";
import LogoLinkNavbar from "@/components/navbar/components/topbar/LogoLinkNavbar/LogoLinkNavbar";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Authentication",
  description:
    "Login or register to access your account and enjoy personalized services.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <TopBar>
        <LogoLinkNavbar />
      </TopBar>
      {children}
    </Box>
  );
}
