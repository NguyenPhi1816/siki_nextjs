import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { CssBaseline } from "@mui/material";
import "./global.css";
import "swiper/css";
import "swiper/css/bundle";
import StoreProvider from "../components/redux/StoreProvider";
import UIControl from "@/components/redux/UIControl";
import CustomModal from "@/components/modal/CustomModal";
import { SessionProvider } from "next-auth/react";
import Preload from "@/components/hoc/Preload";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siki - Website mua hàng online",
  description:
    "Siki cung cấp một nền tảng mua hàng online với đa dạng sản phẩm",
  openGraph: {
    title: "Siki - Website mua hàng online",
    description:
      "Siki cung cấp một nền tảng mua hàng online với đa dạng sản phẩm",
    url: "https://siki-nextjs.vercel.app/",
    siteName: "Siki",
    images: [
      {
        url: "https://siki-nextjs.vercel.app/default-image.png", // Must be an absolute URL
        width: 1200,
        height: 628,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <UIControl />
              <CustomModal />
              <Preload />
              <SessionProvider>{children}</SessionProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
