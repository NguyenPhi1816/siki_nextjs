import type { Metadata } from "next";
import { Container } from "@mui/material";
import Topbar from "../../components/navbar/TopBar";
import { Box } from "@mui/system";

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
    <>
      <Topbar />
      <main className="main">
        <Container
          sx={{ p: 0, height: "100%", overflowY: "scroll" }}
          maxWidth="lg"
        >
          {children}
        </Container>
      </main>
    </>
  );
}
