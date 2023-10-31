import React from "react";
import { Link } from 'react-router-dom'
import '../StyleComponents/Header.scss'
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth0();
  return (
    <>
      <header className="header hero is-transparent">
        <div className="hero-head">
          <nav
            className="navbar has-shadow"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="">
                <img src="logo-m.png" alt="logo" />
              </Link>
            </div>

            <div className="navbar-menu navbar-end" id="navMenu">
              <Link className="navbar-item nav-tag" to="">
                <span className="icon is-small notification-tag is-relative">
                  <i className="noti-icon fa-solid fa-bell has-text-grey-light"></i>
                </span>
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="">
                  <figure className="image is-user-avatar profileImage">
                    <img class="is-rounded" src={user.picture} alt="" />
                  </figure>
                  <span className="ml-2 has-text-white ">{user.nickname}</span>
                </Link>
                <div className="navbar-dropdown">
                  {isAuthenticated && (
                    <Link onClick={() => {
                      logout({ 
                        logoutParams: {
                          returnTo: window.location.origin
                        }
                      });
                    }} className="navbar-item has-text-white">Logout</Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
