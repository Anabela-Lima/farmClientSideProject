import React from 'react';
import { useState } from 'react';
import './Header.css';
import logo from './logoimage.jpg';

import { NavLink as Link } from 'react-router-dom';

const Header = () => {

  const [searchTerm, setsearchTerm] = useState();

  function handleSubmit(e){e.preventDefault();
    

  }

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

            <li><Link to="/marketplace" activeStyle>Market Place</Link></li>

            <li><Link to="/how-to-play" activeStyle>How To Play</Link></li>

            <li><a href="help.asp" >Help</a></li>

        <form class="search-form">
					<input type="text" placeholder="Search for your farms.."/> <input type="submit" value="Submit"/>
				</form>

          </ul>
        </div>
      </div>
  )
}



// search bar: functionality^^

export default Header;
