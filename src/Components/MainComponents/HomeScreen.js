import React from "react";
import { useNavigate } from 'react-router-dom'
import '../StyleComponents/HomeScreen.scss'
import LoginButton from "../../auth/LoginButton";
import { useAuth0 } from '@auth0/auth0-react';

function HomeScreen() {
  const navigate = useNavigate();
  const {
    isAuthenticated
  } = useAuth0();
  if (isAuthenticated) {
    navigate("/dashboard");
  }
  return !isAuthenticated && (
    <div>
      <div className="layout mx-3">
        <div className="columns is-flex is-vcentered homeSection">
          <div className="column has-text-centered">
            <img src="homeLogo.png" alt="logo" />
            <div className="has-text-white travelSpace">ABC TRAVEL</div>
            <div className="mt-5">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
