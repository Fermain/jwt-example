import { baseURL, authPath } from "../constants/api.js";
import * as storage from '../storage/index.js';

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

export function isAuthed() {
  return Boolean(storage.load('token'))
}

export function logOut(event) {
  storage.remove('token');
  alert('Logged out');
  window.location.reload()
}