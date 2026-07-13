import { useState } from "react";
import type { ReactNode } from "react";

import { AuthContext } from "./auth.context";
import type { User } from "./auth.context";

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser || storedUser === "undefined") {
      return null;
    }

    try {
      return JSON.parse(storedUser);
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const login = (
    token: string,
    user: User
  ) => {
    localStorage.setItem("token", token);

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};