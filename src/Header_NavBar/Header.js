import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./logoimage.jpg";

const Header = () => {
  return (
    <div className="Main-Header">
      <div className="title">
        <img src={logo} alt="farm-logo"></img>
        <h2>Our Farm Game </h2>
      </div>

      <div className="navbar">
        <ul>
          <li>
            <a href="home.asp">Home</a>
          </li>
          <li>
            <a href="myfarms.asp">My Farms</a>
          </li>
          <li>
            <NavLink to="/cropmarket" activeStyle>
              Crop Market
            </NavLink>
          </li>
          <li>
            <a href="http://localhost:3000/howtoplay.html">How to Play</a>
          </li>
          <li>
            <a href="help.asp">Help</a>
          </li>

          <input type="text" placeholder="Search.." />
        </ul>
      </div>
    </div>
  );
};

export default Header;
