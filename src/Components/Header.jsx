import React from "react";
import logo from '../assets/logo.png';
import flag from '../assets/flag.png';

function Header() {
  return (
    <nav className="header">
      <div className="header-content">
        <div className="left">
          <img className="logo" src={logo} alt="" />
          <p className="miniText">For sundhed i mediestaden</p>
        </div>
        <div className="right">
          <ul>
            <li>
              <p className="miniText">Til borgere</p>
            </li>
            <li>
              <p className="miniText">Til fagfolk</p>
            </li>
          </ul>
          <img className="flag" src={flag} alt="" />
          <div className="line"></div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
