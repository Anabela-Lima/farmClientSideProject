import React from 'react';
import './Header.css';
import logo from './logoimage.jpg';
import filterFarms from './Search';
import { Search } from 'react-router-dom';

import { NavLink as Link } from 'react-router-dom';

const Header = () => {

  function handleSubmit(event) {
    event.preventDefault();
   
  }

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

      <form className="search" role="search" onSubmit={handleSubmit}>
        <label className="search__label" htmlFor="search__input">Search for your farm:</label>
        <input type="search" placeholder="Enter farm name..." id="search__input" onChange={event => setsearchTerm(event.target.value)}></input>
        <input type="submit" value="Submit" className="search__submit"/>
      </form>

          
        </div>

        <div>



        </div>
      </div>
  )


  };

// search bar: functionality^^

export default Header;
