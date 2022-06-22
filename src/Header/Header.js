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
          <img id= "logoImage"src ={logo} alt="farm-logo"></img>
          <h2>🌾 Farm Tycoon 🌾</h2>

          <div className='Author-Names'>
            <h3>Proudly developed by:</h3>
            <span>Peace Akib</span>
            <span>Lewis Broadhurst</span>
            <span>Ana Bela Moreno Lima</span>
          </div>
        </div>

        
        <div className="navbar">
          <ul>

            <li><Link to="/" >Home</Link></li>

            <li><Link to="/infoPage" activestyle>InfoPage</Link></li>
          

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
