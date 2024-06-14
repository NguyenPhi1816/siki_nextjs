import { SignInRequestBody } from "@/types/auth";

export async function authenticate(email: string, password: string) {
  var details: SignInRequestBody = {
    client_id: "siki-client",
    grant_type: "password",
    client_secret: process.env.KEYCLOAK_CLIENT_SECRET as string,
    username: email,
    password: password,
    scope: "profile",
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(
      details[property as keyof SignInRequestBody]
    );
    formBody.push(encodedKey + "=" + encodedValue);
  }
  const new_formBody = formBody.join("&");

  const response = await fetch(
    `http://localhost:8880/realms/siki/protocol/openid-connect/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new_formBody,
    }
  );

  const data = await response.json();
  return data;
}
