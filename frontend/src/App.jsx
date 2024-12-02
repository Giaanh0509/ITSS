// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Homepage from "./pages/Homepage/Homepage";
import AddFoodForm from "./pages/AddFood/AddFood";
import FoodDetailPage from "./pages/FoodDetailPage/FoodDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
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
        {/* add food page */}
        <Route
          path="/foods/add"
          element={
            <MainLayout>
              <AddFoodForm />
            </MainLayout>
          }
        />
        <Route
          path="/foods/:id"
          element={
            <MainLayout>
              <FoodDetailPage />
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
