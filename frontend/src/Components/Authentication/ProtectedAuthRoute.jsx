import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAuthRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  if (isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect to the root
  }

  return children; // Render the page if not authenticated
};

export default ProtectedAuthRoute;
