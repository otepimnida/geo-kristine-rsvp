import api from "./api";

export async function login(username, password) {
  const response = await api.post("/auth/login", {
    username,
    password,
  });

  const { token, username: adminUsername } = response.data.data;

  localStorage.setItem("token", token);

  localStorage.setItem("admin", adminUsername);

  return response.data.data;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}

export function getToken() {
  return localStorage.getItem("token");
}
