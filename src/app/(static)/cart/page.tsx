// const getData = async () => {
//   const data = await fetch(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/storefront/iphone-15-pro-max-12345`
//   );
//   return data;
// };

export default async function Page() {
  const baseApi = process.env.NEXT_PUBLIC_API_BASE_URL;
  const data = await fetch(`https://siki-server-nodejs.vercel.app/`);
  return <main></main>;
}
