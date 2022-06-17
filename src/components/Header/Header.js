import React from 'react';
import './Header.css';

import logo from './logoimage.jpg';


const Header = () => {

  return(
      <div className="Main-Header">
      
  <div className="title">
  <img src ={logo}></img>
    <h2>Farm Game 'Title'</h2></div>

 

  <div className="navbar">
  <ul>
<li><a href="home.asp">Home</a></li>
<li><a href="myfarms.asp" >My Farms</a></li>
<li><a href="howtoplay.asp" >How to Play</a></li>
<li><a href="help.asp" >Help</a></li>

<input type="text" placeholder="Search.."/>

</ul>
  </div>


  </div>
  )
}




export default Header;
