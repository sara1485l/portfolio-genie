import { createContext } from "react";

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;

  login: (
    token: string,
    user: User
  ) => void;

  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);