import type { Metadata } from "next";
import TopBar from "../components/navbar/TopBar";
import LogoLinkNavbar from "../components/navbar/components/LogoLinkNavbar";

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
    <div>
      <TopBar>
        <LogoLinkNavbar />
      </TopBar>
      {children}
    </div>
  );
}
