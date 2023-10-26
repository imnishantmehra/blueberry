import React from "react";
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
              <a className="navbar-item" href="">
                <img src="logo-m.png" alt="logo" />
              </a>
            </div>

            <div className="navbar-menu navbar-end" id="navMenu">
              <a className="navbar-item nav-tag" href="">
                <span className="icon is-small notification-tag is-relative">
                  <i className="noti-icon fa-solid fa-bell has-text-grey-light"></i>
                </span>
              </a>

              <a className="navbar-item" href="">
                <figure className="image  is-user-avatar">
                  <img src="intersect.png" />
                </figure>
                <span className="ml-2 has-text-white ">Alex R.</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
