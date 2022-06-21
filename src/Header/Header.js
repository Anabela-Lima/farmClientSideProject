import React from 'react';
import './Header.css';
import logo from './logoimage.jpg';

import { NavLink as Link } from 'react-router-dom';

const Header = () => {

  return(
      <div className="Main-Header">
      
        <div className="title">
        <img src ={logo} alt="farm-logo"></img>
          <h2>Our Farm Game </h2>
        </div>

        
        <div className="navbar">
          <ul>

            <li><Link to="/" activeStyle>Home</Link></li>

            <li><a href="myfarms.asp" >My Farms</a></li>
            <li><Link to="/infopage" activeStyle> Info</Link></li>

            <li><Link to="/marketplace" activeStyle>Market Place</Link></li>

            <li><Link to="/how-to-play" activeStyle>How To Play</Link></li>

            <li><a href="help.asp" >Help</a></li>

            <input type="text" placeholder="Search.."/>

          </ul>
        </div>
      </div>
  )
}




export default Header;
