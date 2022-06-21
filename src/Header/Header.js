import React from 'react';
import './Header.css';
import logo from './logoimage.jpg';
import filterFarms from '../HomePage/components/Search';
import { useState } from 'react';

import { NavLink as Link } from 'react-router-dom';

const Header = () => {



  return(
      <div className="Main-Header">
      
        <div className="title">
        <img src ={logo} alt="farm-logo"></img>
          <h2>FARM TYCOON </h2>
        </div>

        
        <div className="navbar">
          <ul>

            <li><Link to="/" activeStyle>Home</Link></li>

            <li><a href="myfarms.asp" >My Farms</a></li>

            <li><Link to="/marketplace" activestyle>Market Place</Link></li>

            <li><Link to="/how-to-play" activestyle>How To Play</Link></li>

            <li><a href="help.asp" >Help</a></li>
            </ul>

            

          
        </div>

        <div>



        </div>
      </div>
  )


  };

// search bar: functionality^^

export default Header;
