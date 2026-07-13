import api from "../api/axios";
import type { Portfolio } from "../types/portfolio";
export const savePortfolio = (data: Portfolio) =>
  api.post("/portfolio", data);

export const updatePortfolio = (data: Portfolio) =>
  api.put("/portfolio", data);

export const getMyPortfolio = () =>
  api.get("/portfolio/me");

export const getPublicPortfolio = (username: string) =>
  api.get(`/portfolio/${username}`);

export const deletePortfolio = () =>
  api.delete("/portfolio");