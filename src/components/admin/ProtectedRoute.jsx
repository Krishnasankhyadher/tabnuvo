import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute – blocks access to admin pages if not authenticated.
 * Checks for a valid adminToken in localStorage.
 * If missing, redirects to /admin (login page).
 */
export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem("adminToken");

    if (!token) {
        return <Navigate to="/admin" replace />;
    }

    return children;
}
