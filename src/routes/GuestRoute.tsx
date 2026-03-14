import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // adjust path to your store

interface GuestRouteProps {
  children: JSX.Element;
}

const GuestRoute: React.FC<GuestRouteProps> = ({ children }) => {
  const { token } = useSelector((state: RootState) => state.auth); // assuming auth slice has token

  if (token) {
    // already logged in → redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default GuestRoute;
