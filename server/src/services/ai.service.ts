import { GoogleGenAI } from "@google/genai";

import { prompts } from "../prompts/ai.prompts";

import type {
  AIRequest,
  AIType,
} from "../types/ai.types";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateAI = async (
  type: AIType,
  data: AIRequest
) => {
  const prompt = (
    prompts[type] as (data: AIRequest) => string
  )(data);

  const response =
    await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

  return response.text;
};