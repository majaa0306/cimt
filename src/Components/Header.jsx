import React from "react";
import logo from '../assets/logo.webp';
import flag from '../assets/flag.webp';

function Header() {
  return (
    <nav className="header">
      <p className="megaMiniText smallAbove">FOR SUNDHED I MEDIESTADEN</p>
      <div className="header-content">
        <div className="left">
          <img className="logo" src={logo} alt="" />
          <p className="miniText small">For sundhed i mediestaden</p>
        </div>
        <div className="right">
          <ul className="medium">
            <li>
              <p className="miniText">Til borgere</p>
            </li>
            <li>
              <p className="miniText">Til fagfolk</p>
            </li>
          </ul>
          <img className="flag medium" src={flag} alt="" />
          <div className="line"></div>
          <p className="miniText">Søg</p>
          <div className="menu">
            <div className="lineBurger"></div>
            <div className="lineBurger"></div>
            <div className="lineBurger"></div>
            <p className="miniText">Menu</p>
          </div>
        </div>
      </div>
      <div className="under">      
        <ul className="mediumUnder">
          <li>
            <p className="miniText">Til borgere</p>
          </li>
          <li>
            <p className="miniText">Til fagfolk</p>
          </li>
        </ul>
        <div className="line"></div>
        <img className="flag mediumUnder" src={flag} alt="" />
        <div className="line"></div>
      </div>

    </nav>
  )
}

export default Header;
