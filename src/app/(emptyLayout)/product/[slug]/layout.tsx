import { getProductBySlug } from "@/services/product";
import { IProductFull } from "@/types/product";
import type { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: Readonly<{
//   params: { slug: string };
// }>): Promise<Metadata> {
//   const slug = params.slug;

//   let product: IProductFull | null = await getProductBySlug(slug);

//   if (!product) {
//     return { title: "Product not found" };
//   }

//   return {
//     title: product.name,
//     openGraph: {
//       images: product.productVariants[0].image,
//     },
//   };
// }

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Sản phẩm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
