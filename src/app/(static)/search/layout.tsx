import type { Metadata } from "next";
import { Container } from "@mui/material";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Siki - Search",
  description: "Find everthing you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
