import React from 'react';
import './Header.css';
import logo from './logoimage.jpg';
import FilterFarms from './Search';
import { useState, useContext } from 'react';
import { Context } from '../context';
import { NavLink as Link } from 'react-router-dom';

const Header = () => {

  const [context, setContext] = useContext(Context);

  const [searchTerm, setSearchTerm] = useState('');

  const typeInSearch = (event) => {
    console.log("SEARCH TERM", searchTerm); //print what the name being searched 
    setSearchTerm(event.target.value)
  };


  function handleSubmit(e) {
    e.preventDefault();
    setContext(searchTerm);

  }


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

            <li><Link to="/marketplace" activestyle>Market Place</Link></li>

            <li><Link to="/how-to-play" activestyle>How To Play</Link></li>

            <li><a href="help.asp" >Help</a></li>
            </ul>

          {/* <form className="search" role="search" onSubmit={handleSubmit}>
          <label className="search__label" htmlFor="search__input">Search for your farm:</label>
          <input type="search" placeholder="Enter farm name..." id="search__input" onChange={(e) => { setSearchTerm(e.target.value) }}></input>
          <input type="submit" value="Submit" className="search__submit" />

        </form> */}
        

            

          
        </div>

        <div>




        </div>

      
      </div>
  )


  };

// search bar: functionality^^

export default Header;
