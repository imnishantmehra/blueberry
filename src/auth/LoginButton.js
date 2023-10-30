import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
   const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
  	<button onClick={() => loginWithRedirect()} className="button has-text-black loginButton">Login</button>
  )
};

export default LoginButton;