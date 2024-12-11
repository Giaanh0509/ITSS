import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    username: localStorage.getItem("username") || null,
    isAuthenticated: !!localStorage.getItem("username"),

  });

  const login = (username, userId) => {
    setAuthState({ username, isAuthenticated: true });
    localStorage.setItem("username", username);
  };

  const logout = () => {
    setAuthState({ username: null, isAuthenticated: false });
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
