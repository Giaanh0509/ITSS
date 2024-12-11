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
import ProtectedRoute from "./components/ProtectedRoute";
import Anket from "./pages/Suggest/Anket";

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
          path="/suggest/anket"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Anket />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <MainLayout>
                <MenuPage />
              </MainLayout>
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
