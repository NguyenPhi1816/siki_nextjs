import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

type Credentials = {
  phoneNumber: string;
  password: string;
};

export async function POST(request: Request) {
  const api = process.env.NEXT_PUBLIC_API_BASE_URL2;
  const reqData: Credentials = await request.json();
  const { phoneNumber, password } = reqData;

  const response = await fetch(`${api}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phoneNumber, password }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}
