// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/useAuh";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
