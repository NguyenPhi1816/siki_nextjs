import ProductList from "@/components/product/ProductList";
import ProductSwiper from "@/components/product/ProductSwiper";
import { Box, Container, Tab, Tabs } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container sx={{ p: 0 }}>
        <ProductSwiper />
      </Container>
    </main>
  );
}
