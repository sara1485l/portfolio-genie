import { Router } from "express";

import protect from "../middleware/auth.middleware";

import { generate } from "../controllers/ai.controller";

const router=Router();

router.post(

"/generate",

protect,

generate

);

export default router;