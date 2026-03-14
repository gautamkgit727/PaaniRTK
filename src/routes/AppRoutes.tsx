import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/features/auth/pages/LoginPage";
import UserList from "@/features/users/pages/UserList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};

export default AppRoutes;
