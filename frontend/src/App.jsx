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
import Favorite from "./pages/Favorite/Favorite";
import Menu from "./pages/Menu/Menu";
import Review from "./pages/Review/Review";
import ProtectedRoute from "./components/ProtectedRoute";

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

        <Route
          path="/favorites"
          element={
            <AuthLayout>
              <Favorite />
            </AuthLayout>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Homepage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        {/* add food page */}
        <Route
          path="/foods/add"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AddFoodForm />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/foods/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <FoodDetailPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Menu />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/reviews/:foodId"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Review />
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
