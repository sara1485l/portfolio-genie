import User from "../models/user.model";
import { hashPassword, comparePassword } from "../utils/hashPassword";
import generateToken from "../utils/generateToken";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async ({
  name,
  email,
  password,
}: RegisterData) => {

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
  name,
  email,
  password: hashedPassword,
});

const token = generateToken(user._id.toString());

const userResponse = {
  _id: user._id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
};

return {
  token,
  user: userResponse,
};
};

export const loginUser = async ({
  email,
  password,
}: LoginData) => {

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await comparePassword(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

 const token = generateToken(user._id.toString());

const userResponse = {
  _id: user._id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
};

return {
  token,
  user: userResponse,
};
};