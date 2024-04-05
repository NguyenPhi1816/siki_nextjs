import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product page",
  description: "This is the Siki's home page",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
