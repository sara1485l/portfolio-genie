import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    username: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
},
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema);