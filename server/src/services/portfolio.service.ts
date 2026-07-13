import Portfolio from "../models/portfolio.model";
import User from "../models/user.model";
import type { Portfolio as PortfolioBody } from "../types/portfolio.types";
export const createPortfolio = async (
  userId: string,
  data: PortfolioBody
) => {
  const existingPortfolio = await Portfolio.findOne({
    user: userId,
  });

  if (existingPortfolio) {
    throw new Error("Portfolio already exists");
  }

  return await Portfolio.create({
    ...data,
    user: userId,
  });
};

export const getPortfolio = async (
  userId: string
) => {
  const portfolio = await Portfolio.findOne({
    user: userId,
  }).populate(
    "user",
    "name username email avatar"
  );

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  return portfolio;
};

export const updatePortfolio = async (
  userId: string,
  data: PortfolioBody
) => {
  const portfolio = await Portfolio.findOneAndUpdate(
    {
      user: userId,
    },
    data,
    {
      new: true,
    }
  ).populate(
    "user",
    "name username email avatar"
  );

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  return portfolio;
};

export const deletePortfolio = async (
  userId: string
) => {
  return await Portfolio.findOneAndDelete({
    user: userId,
  });
};

export const getPortfolioByUsername = async (
  username: string
) => {
  const user = await User.findOne({
    username,
  });

  if (!user) {
    throw new Error("User not found");
  }

  const portfolio = await Portfolio.findOne({
    user: user._id,
  }).populate(
    "user",
    "name username email avatar"
  );

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  return portfolio;
};