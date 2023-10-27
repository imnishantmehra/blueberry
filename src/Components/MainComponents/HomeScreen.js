import React from "react";
import { Link } from 'react-router-dom'
import '../StyleComponents/HomeScreen.scss'

function HomeScreen() {
  return (
    <div>
      <div className="layout mx-3">
        <div className="columns is-flex is-vcentered homeSection">
          <div className="column has-text-centered">
            <img src="homeLogo.png" alt="logo" />
            <div className="has-text-white travelSpace">ABC TRAVEL</div>
            <div className="mt-5">
              <Link to="/dashboard" className="button has-text-black loginButton">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
