import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { AuthRequest } from "../middleware/auth.middleware";

import {
  createPortfolio,
  getPortfolio,
  updatePortfolio,
  deletePortfolio,
  getPortfolioByUsername,
} from "../services/portfolio.service";

export const create = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const portfolio = await createPortfolio(
      req.userId!,
      req.body
    );

    res.status(201).json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const getMine = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    console.log("User ID:", req.userId);

const portfolio = await getPortfolio(req.userId!);

    res.json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const update = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const portfolio = await updatePortfolio(
      req.userId!,
      req.body
    );

    res.json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const remove = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    await deletePortfolio(req.userId!);

    res.json({
      success: true,
      message: "Portfolio deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
};

export const getByUsername = asyncHandler(
  async (req: Request, res: Response) => {
    const username = Array.isArray(req.params.username)
      ? req.params.username[0]
      : req.params.username;

    const portfolio = await getPortfolioByUsername(username);

    res.json({
      success: true,
      data: portfolio,
    });
  }
);