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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siki",
  description: "This is Siki",
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
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
