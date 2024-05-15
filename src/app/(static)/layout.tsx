import type { Metadata } from "next";
import { Box } from "@mui/material";
import Topbar from "../../components/navbar/TopBar";
import BottomBar from "@/components/navbar/BottomBar";
import DefaultBottomNavbar from "@/components/navbar/components/bottombar/DefaultBottomNavbar";
import DefaultTopNavbar from "@/components/navbar/components/topbar/DefaultTopNavbar";

export const metadata: Metadata = {
  title: "Siki - Mua hàng online giá tốt, chất lượng",
  description:
    "Hàng ngàn mặt hàng, dễ dàng thanh toán, vận chuyển hỏa tốc,... tất cả Siki đều có",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar>
        <DefaultTopNavbar />
      </Topbar>
      <Box
        component={"main"}
        sx={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
      <BottomBar>
        <DefaultBottomNavbar />
      </BottomBar>
    </>
  );
}
