import api from "../api/axios";

export const login = (data: unknown) => {
  return api.post("/auth/login", data);
};

export const register = (data: unknown) => {
  return api.post("/auth/register", data);
};