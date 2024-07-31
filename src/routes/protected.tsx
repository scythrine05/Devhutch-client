import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "/src/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
