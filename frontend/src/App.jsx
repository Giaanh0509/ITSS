// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import BlankLayout from "./components/BlankLayout";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <BlankLayout>
              <Login />
            </BlankLayout>
          }
        />
        <Route
          path="/register"
          element={
            <BlankLayout>
              <Register />
            </BlankLayout>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        {/* <Route
          path="/menu"
          element={
            <MainLayout>
              <MenuPage />
            </MainLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
