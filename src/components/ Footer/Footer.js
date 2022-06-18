
// component: 
import './Footer.css';

// lets import FontAwesome from react
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {


    // on display menu bar on hover














    return (

        <div id="footer">

         <footer id = "footer">

                {/* nav bar */}
            <nav id="nav">

            
                <ul>

                    <div id= "li1"> <li className="li-nav"> <a id="anchor1" href="https://www.addictinggames.com/">Company Info </a> </li></div>
                    <div id="li2"><li className="li-nav"> <a href= "https://www.addictinggames.com/"> Get Involved </a></li></div>
                    <div id="li3"><li className="li-nav"> <a href= "https://www.addictinggames.com/">Support  </a></li></div>
                    <div id= "li4"> <li className="li-nav"> <a id="anchor2" href= "">Languages</a></li></div>
                    <div > <img id="farmLogo" src= "https://hayday.com/graphics/misc/headline_comp.png" alt="Cow gif"></img> </div>

                    {/* <div > <img id = "cowPic" src= "https://c.tenor.com/XF4caftz0fQAAAAC/cow-farm.gif" alt="Cow gif"></img> </div> */}
               </ul>
              
            </nav>

            


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


           
         </footer>

            
            
        </div>



        

    )
}


/*

ON hover-  drop down 

Company Info- Terms of use , Privacy Policy, Information, Cookies, Cookie Consent

Support-Help, FAQ, Fund our Projects

Languages- A list of languages-  click a lang activate translation feature in browser? 


*/


export default Footer;


