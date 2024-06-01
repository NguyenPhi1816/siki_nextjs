import api from "./api";

export async function authenticate(phoneNumber: string, password: string) {
  const response = await fetch(`${api}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phoneNumber, password }),
  });

  const data = await response.json();
  return data;
}
