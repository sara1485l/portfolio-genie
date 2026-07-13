import { Request, Response } from "express";

import asyncHandler from "../utils/asyncHandler";

import { generateAI } from "../services/ai.service";

import type {
  AIRequest,
  AIType,
} from "../types/ai.types";

export const generate = asyncHandler(
  async (req: Request, res: Response) => {

    const {
      type,
      data,
    }: {
      type: AIType;
      data: AIRequest;
    } = req.body;

    const result = await generateAI(
      type,
      data
    );

    res.json({
      success: true,
      message:
        "AI generated successfully.",
      data: result,
    });
  }
);