import api from "../api/axios";

export type AIType =
  | "about"
  | "project"
  | "improve"
  | "skills"
  | "resume"
  | "cover"
  | "ats";

export const generateAI = (
  type: AIType,
  data: object
) => {
  return api.post("/ai/generate", {
    type,
    data,
  });
};