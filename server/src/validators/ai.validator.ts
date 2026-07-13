import { body } from "express-validator";

export const generateAboutValidation=[

body("name")
.notEmpty(),

body("role")
.notEmpty(),

body("skills")
.isArray({min:1})

];