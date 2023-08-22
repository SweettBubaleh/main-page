import React from "react";
import "./Header.scss";
import logoImg from "../../img/icons/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
            <span>Fashion</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#!">CATALOGUE</a>
              </li>
              <li>
                <a href="#!">FASHION</a>
              </li>
              <li>
                <a href="#!">FAVOURITE</a>
              </li>
              <li>
                <a href="#!">LIFESTYLE</a>
              </li>
              <li>
                <a className="header__nav-btn" href="#!">
                  SIGN UP
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
