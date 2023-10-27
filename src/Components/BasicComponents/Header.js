import React from "react";
import { Link } from 'react-router-dom'
import '../StyleComponents/Header.scss'

function Header() {
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
                  <figure className="image  is-user-avatar">
                    <img src="intersect.png" alt="" />
                  </figure>
                  <span className="ml-2 has-text-white ">Alex R.</span>
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/" className="navbar-item has-text-white">
                    Logout
                  </Link>
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
