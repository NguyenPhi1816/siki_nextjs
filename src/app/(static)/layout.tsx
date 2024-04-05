import type { Metadata } from "next";
import { Container } from "@mui/material";
import Topbar from "../../components/navbar/TopBar";
import BottomBar from "@/components/navbar/BottomBar";

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
      <Container
        component={"main"}
        sx={{
          height: "100vh",
          overflow: "hidden",
        }}
        maxWidth="lg"
      >
        {children}
      </Container>
      <BottomBar />
    </>
  );
}
