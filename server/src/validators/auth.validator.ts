import { body } from "express-validator";

export const registerValidation = [
    body("username")
.notEmpty()
.isLength({min:3,max:20})
.matches(/^[a-zA-Z0-9_]+$/)
.withMessage(
"Username can contain only letters numbers and underscore."
),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
  .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
  .withMessage(
    "Password must be at least 8 characters and contain both letters and numbers"
  ),
];

export const loginValidation = [
  body("email")
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];