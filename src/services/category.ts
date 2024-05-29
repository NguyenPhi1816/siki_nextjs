// export const getCategoryBySlug = async (slug: string) => {
//   const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

//   try {
//     const response = await fetch(`${apiBaseUrl}/products/${slug}`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok.");
//     }
//     const product: IProductFull = await response.json();
//     return product;
//   } catch (error) {
//     // If an error occurs, log it or handle it as needed
//     console.error("There was a problem fetching the product:", error);
//     return null;
//   }
// };
