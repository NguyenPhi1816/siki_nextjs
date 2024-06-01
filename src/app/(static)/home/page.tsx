import { auth } from "@/config/nextauth";

export default async function Home() {
  const session = await auth();

  if (session && session.user) {
    console.log("JWT Token:", session.user.jwtToken); // Truy cập JWT token từ session
    return (
      <>
        <p>Chào mừng, {session.user.name}</p>
        <p>Token của bạn là: {session.user.jwtToken}</p>
      </>
    );
  }
}
