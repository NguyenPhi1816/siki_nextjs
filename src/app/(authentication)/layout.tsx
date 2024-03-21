import type { Metadata } from "next";
import TopBar from "../../components/navbar/TopBar";

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
      <TopBar onlyLogo />
      {children}
    </div>
  );
}
