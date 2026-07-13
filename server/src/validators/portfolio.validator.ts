import { body } from "express-validator";

export const createPortfolioValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required"),

  body("about")
    .trim()
    .isLength({ min: 30 })
    .withMessage("About must be at least 30 characters"),

  body("skills")
    .isArray({ min: 1 })
    .withMessage("At least one skill is required"),

  body("projects")
    .optional()
    .isArray()
    .withMessage("Projects must be an array"),

  body("education")
    .optional()
    .isArray()
    .withMessage("Education must be an array"),

  body("experience")
    .optional()
    .isArray()
    .withMessage("Experience must be an array"),

  body("socialLinks")
    .optional()
    .isObject()
    .withMessage("Social links must be an object"),

  body("socialLinks.github")
    .if(body("socialLinks.github").notEmpty())
    .isURL()
    .withMessage("GitHub link must be a valid URL"),

  body("socialLinks.linkedin")
    .if(body("socialLinks.linkedin").notEmpty())
    .isURL()
    .withMessage("LinkedIn link must be a valid URL"),

  body("socialLinks.portfolio")
    .if(body("socialLinks.portfolio").notEmpty())
    .isURL()
    .withMessage("Portfolio link must be a valid URL"),
];