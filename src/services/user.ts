import api from "./api";

export const getProfile = async (access_token: string) => {
  const response = await fetch(`${api}/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
  });

  const data = await response.json();
  return data;
};
