import { Router } from "express";

import {
  register,
  login,
} from "../controllers/auth.controller";

import {
  registerValidation,
  loginValidation,
} from "../validators/auth.validator";

import validate from "../middleware/validation.middleware";

const router = Router();

router.post(
  "/register",
  registerValidation,
  validate,
  register
);

router.post(
  "/login",
  loginValidation,
  validate,
  login
);

export default router;