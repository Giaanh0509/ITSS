// components/BlankLayout.js
import React from "react";
import Header from "./Header";

const AuthLayout = ({ children }) => {
  return <>
    <Header />
    <main>
      {children}
    </main>
  </>
};

export default AuthLayout;
