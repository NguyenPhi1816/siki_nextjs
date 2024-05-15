import { getProductBySlug } from "@/services/product";
import { IProductFull } from "@/types/product";
import { Box } from "@mui/material";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: Readonly<{
  params: { slug: string };
}>): Promise<Metadata> {
  const slug = params.slug;

  let product: IProductFull | null = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    openGraph: {
      images: product.productVariants[0].image,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
