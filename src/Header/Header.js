import React from 'react';
import './Header.css';
import logo from './logoimage.jpg';

import { NavLink as Link } from 'react-router-dom';

const Header = () => {

  return(
      <div className="Main-Header">
      
        <div className="title">
          <img src ={logo} alt="farm-logo"></img>
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

            <li><Link to="/marketplace" >Market Place</Link></li>

            <li><Link to="/infopage" >Info Page</Link></li>

            <li><Link to="/how-to-play" >How To Play</Link></li>

            <li><Link to="/help">Help</Link></li>

            <input type="text" placeholder="Search.."/>

          </ul>
        </div>

      
      </div>
  )
}




export default Header;
