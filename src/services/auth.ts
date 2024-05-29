import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const api = process.env.NEXT_PUBLIC_API_BASE_URL2;
    const { email, password } = req.body;

    // Chuyển tiếp yêu cầu đến API bên ngoài của bạn
    const response = await fetch(`${api}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json(data);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
