import { Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated ? <Component /> : <Navigate to="/" />
  );
}

export default ProtectedRoute;