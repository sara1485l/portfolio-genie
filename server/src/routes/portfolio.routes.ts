import { Router } from "express";

import protect from "../middleware/auth.middleware";

import {
  create,
  getMine,
  update,
  remove,
    getByUsername
} from "../controllers/portfolio.controller";
import {
    createPortfolioValidation
} from "../validators/portfolio.validator";

import validate from "../middleware/validation.middleware";
const router = Router();

router.post(
    "/",
    protect,
    createPortfolioValidation,
    validate,
    create
);
router.get("/me", protect, getMine);

router.put("/", protect, update);

router.delete("/", protect, remove);
router.get(

"/:username",

getByUsername

);
export default router;