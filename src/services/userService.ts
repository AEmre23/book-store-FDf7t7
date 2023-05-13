import { LoginAction, RegisterAction } from "@/types";

const LOGIN_URL = "https://assign-api.piton.com.tr/api/rest/login";
const REGISTER_URL = "https://assign-api.piton.com.tr/api/rest/register";

export const handleLogin = async (
  email: string,
  password: string
): Promise<LoginAction> => {
  try {
    const data = { email, password };
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const handleRegister = async (
  email: string,
  name: string,
  password: string
): Promise<RegisterAction> => {
  try {
    const data = { email, name, password };
    const response = await fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
