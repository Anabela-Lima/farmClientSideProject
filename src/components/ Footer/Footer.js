
// component: 
import './Footer.css';

// lets import FontAwesome from react
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Footer = () => {



    return (

        <div id="footer">

         <footer id = "footer">


            <div id= "subForm">

                {/* <p id= "pForm"> Dont Miss out on the Fun !</p> */}

            <form action="">
            <input type="email" required placeholder="abc@example.com"></input>
            <button>Subscribe <span id="button icon"><FontAwesomeIcon icon={['fa', 'gamepad']} /></span></button>
            </form>
            </div>

            <img id="ad1"src="https://jobtribes.playmining.com/wp-content/uploads/2021/04/banner_003-3.png" alt="ad"></img>
            
        

            <div id="backgroundBlue">
                <ul>
                 <div > <img id="farmLogo" src= "https://hayday.com/graphics/misc/headline_comp.png" alt="Cow logo"></img> </div>
       
               </ul>
              
            </div>



    
            <div className="allIcon">

             <a href="https://en-gb.facebook.com/FarmVille/" className="icon facebook">
             <div className="socialNameBox">Facebook</div>
             <span><FontAwesomeIcon className='iconSize' icon={['fab', 'facebook']} /></span>
             </a> 

             <a href="https://twitter.com/farmville?lang=en-GB" className="icon twitter">
             <div className="socialNameBox">Twitter</div>
             <span ><FontAwesomeIcon className='iconSize' icon={['fab', 'twitter']} /></span>
             </a>
             <a href="https://www.instagram.com/farmville/?hl=en" className="icon instagram">
             <div className="socialNameBox">Instagram</div>
             <span><FontAwesomeIcon  className='iconSize' icon={['fab', 'instagram']} /></span>
             </a>
             <a href="https://github.com" className="icon github">
             <div className="socialNameBox">Github</div>
             <span><FontAwesomeIcon  className='iconSize' icon={['fab', 'github']} /></span>
             </a>
             <a href="https://www.youtube.com/c/FarmVille1" className="icon youtube">
             <div className="socialNameBox">Youtube</div>
             <span><FontAwesomeIcon className='iconSize'icon={['fab', 'youtube']} /></span>
             </a>

            </div>


         {/* company logo  */}

         <div id= "copyright"> © FarmPlay  </div>
       
           
         </footer>

        


        <div>
            
        




     </div>   
        


  </div>

)}




export default Footer;


