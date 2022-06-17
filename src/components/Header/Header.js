import React from 'react';

import './Header.css';


const Header = () => {

  return(
      <div className="Main-Header">
      
  <h1 >&#129293;Farm Game Title&#129293;</h1>

 

  <div className='navbar'>
  <ul>
<li><a href="default.asp">Home</a></li>
<li><a href="news.asp">How to Play</a></li>
<li><a href="contact.asp">My Farms</a></li>
<li><a href="about.asp">Help</a></li>
<input type="text" placeholder="Search.."/>

</ul>
  </div>


  </div>
  )
}




export default Header;
