import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import PublicLayout from "@/layouts/PublicLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import GuestRoute from "./GuestRoute";

const PublicRoutes = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log("Public Route Token:", token);

  // 🔑 Immediately redirect if already logged in
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  {/* <PublicLayout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<div>Landing Page</div>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </PublicLayout> */}

  return (
    <PublicLayout>
      <Routes>
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        <Route path="/" element={<div>Landing Page</div>} />
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
      </Routes>
    </PublicLayout>

  );
};

export default PublicRoutes;
