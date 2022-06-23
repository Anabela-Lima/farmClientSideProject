
// component: 
import './Footer2.css';

// lets import FontAwesome from react
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';

import { useEffect } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';


const Footer = () => {

  const sub= () => {

    alert(
    
      " 🎉 Great to have you on board! pssst... a true gamer never misses their alerts 🎉 🥳",
      [
        { text: "Im ready ✅", onPress: () => console.log("Me too! ") }
      ]
    );
  }

  useEffect(() => {
    // scrolling to top
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);



  // on nav hover 


  const navHover = () =>{
    let textbox= document.querySelector("#footerTextbox")
    
    let navbar= document.querySelector("footerNavbar")

    textbox.innerHTML=""

  }
  


    return (

        <div id="footer">

         <footer>

          <div className="footerLeft">
      
            <img id="farmLogo" src= "https://hayday.com/graphics/misc/headline_comp.png" alt="Cow logo"></img>

            {/* company logo  */}
            <span id= "copyright"> © FarmPlay  </span>      
        </div>
  


      <section className= "centreFooter">

        <nav id="footerNavbar" onMouseOver={navHover}>
              <ul>
                <li >
                  <div className='titles' id="company"> Company Info </div>
              
                  <ul id = "ul1">
                    <li><a className= "textDropMenu" href="#">Terms of use</a> </li>
                    <li><a  className= "textDropMenu" href="#">Privacy Policy</a></li>
                    <li><a className= "textDropMenu" href="#">Information</a></li>
                    <li><a className= "textDropMenu" href="#">Cookies</a></li>
                  </ul>

                </li>

                <li>
                   <div className='titles'> Languages <i className="fas fa-angle-down"></i></div>
        
                     <ul>
                    <li><a className= "textDropMenu" href="#">Portuguese</a></li>
                    <li><a className= "textDropMenu" href="#">Spanish</a></li>
                    <li><a className= "textDropMenu"href="#">Russian</a></li>
                    <li><a className= "textDropMenu"href="#">French</a></li>
                  </ul>
                 </li>

                <li>
                  <div className='titles'> Support</div>
                 <ul>
                    <li><a  className= "textDropMenu"href="#">FAQ</a></li>
                    <li><a className= "textDropMenu" href="#">Forums</a></li>
                    <li><a href="#">Competitions</a></li>
                    <li><a href="#">Our Projects</a></li>
                 </ul>
                </li>
               </ul>

         </nav>

        <form id= "subForm" action="">
            <input type="email" required placeholder="abc@example.com"></input>
            <button  onClick={sub}>Subscribe <span id="button icon"></span></button>
        </form>



        <div>
             <center>
                {/*scroll to top on button click */}
                    <button id="scrollToTop"
                        onClick={() => {
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                        }} > ^ Back to Top
                    </button>
                </center>
             </div>  
            
             <p id="footerTextbox" className="white"> <span id="footerText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span> </p>

         
         </section>
         

        <div className='footerRight'>

            <div className="allIcon">

                <a href="https://en-gb.facebook.com/FarmVille/" className="icon facebook">
                <div className="socialNameBox">Facebook</div>
                <span><FontAwesomeIcon className='iconSize' icon={['fab', 'facebook']} /></span>
                </a> 

                <a href="https://twitter.com/farmville?lang=en-GB" className="icon twitter">
                <div className="socialNameBox">Twitter</div>
                <span><FontAwesomeIcon className='iconSize' icon={['fab', 'twitter']} /></span>
                <span ></span>
                </a>
                <a href="https://www.instagram.com/farmville/?hl=en" className="icon instagram">
                <div className="socialNameBox">Instagram</div>
                <span><FontAwesomeIcon className='iconSize' icon={['fab', 'instagram']} /></span>
                </a>
                <a href="https://github.com" className="icon github">
                <div className="socialNameBox">Github</div>
                <span><FontAwesomeIcon className='iconSize' icon={['fab', 'github']} /></span>
                </a>
                <a href="https://www.youtube.com/c/FarmVille1" className="icon youtube">
                <div className="socialNameBox">Youtube</div>
                <span><FontAwesomeIcon className='iconSize' icon={['fab', 'youtube']} /></span>
                </a>

            </div>

              <img id="ad1"src="https://jobtribes.playmining.com/wp-content/uploads/2021/04/banner_003-3.png" alt="ad"></img>
                    
        </div>
           
         </footer>

        <div>
            
      
     </div>   
        

  </div>

)}




export default Footer;


