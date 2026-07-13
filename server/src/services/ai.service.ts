import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

import { prompts } from "../prompts/ai.prompts";

import type {
  AIRequest,
  AIType,
} from "../types/ai.types";

const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const openRouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

async function generateWithGemini(prompt: string) {
  const response = await gemini.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt,
  });

  return response.text ?? "";
}

async function generateWithOpenRouter(prompt: string) {
  const response = await openRouter.chat.completions.create({
    model: "openrouter/free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content ?? "";
}
export const generateAI = async (
  type: AIType,
  data: AIRequest
) => {
  const prompt = (
    prompts[type] as (data: AIRequest) => string
  )(data);

  try {
    console.log("Using Gemini...");

    return await generateWithGemini(prompt);
  } catch (error: any) {
    console.error("Gemini failed:", error?.status, error?.message);

    if (
      error?.status === 429 ||
      error?.status === 503
    ) {
      console.log("Switching to OpenRouter...");
      return await generateWithOpenRouter(prompt);
    }

    console.log("Unknown Gemini error, trying OpenRouter...");
    return await generateWithOpenRouter(prompt);
  }
};