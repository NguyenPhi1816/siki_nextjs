import Home from "@/components/pages/Home";
import { cookies } from "next/headers";
import StoreData from "./StoreData";
import { AuthState } from "../../../lib/feartures/auth/authSlice";

const Preload = async () => {
  const cookieStore = cookies();
  const res = cookieStore.get("siki");
  const tokens: AuthState = { accessToken: null, refreshToken: null };
  if (res) {
    const data = JSON.parse(res.value);
    tokens.accessToken = data.access_token;
    tokens.refreshToken = data.refresh_token;
  }
  return <StoreData tokens={tokens} />;
};

export default Preload;
