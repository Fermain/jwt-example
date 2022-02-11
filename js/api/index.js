import { baseURL, authPath } from "../constants/api.js";

export async function auth(username, password) {
  const url = baseURL + authPath;

  const body = {
    username: username,
    password: password
  }

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(body)
    });

    if (response.status !== 200) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('User is not allowed to log in', error);
    alert('Login failed, please check your credentials');
    return null;
  }
}