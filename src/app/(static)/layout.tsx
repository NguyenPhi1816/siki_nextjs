import type { Metadata } from "next";
import { Container } from "@mui/material";
import Topbar from "../../components/navbar/TopBar";

export const metadata: Metadata = {
  title: "Siki - Home",
  description: "This is the Siki's home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Topbar />
      {children}
    </Container>
  );
}
