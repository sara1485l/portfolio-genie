import { Schema, model, Document, Types } from "mongoose";

export interface IPortfolio extends Document {
  user: Types.ObjectId;
  title: string;
  about: string;
  skills: string[];

  projects: {
    title: string;
    description: string;
    github: string;
    liveDemo: string;
  }[];

  education: {
    university: string;
    degree: string;
    graduationYear: number;
  }[];

  experience: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];

  socialLinks: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };

  createdAt: Date;
  updatedAt: Date;
}

const portfolioSchema = new Schema<IPortfolio>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    title: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },

    skills: [
      {
        type: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        github: String,
        liveDemo: String,
      },
    ],

    education: [
      {
        university: String,
        degree: String,
        graduationYear: Number,
      },
    ],

    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],

    socialLinks: {
      github: String,
      linkedin: String,
      portfolio: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IPortfolio>("Portfolio", portfolioSchema);