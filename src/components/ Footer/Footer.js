// component: 

import './Footer.css';


const Footer = () => {

    return (


 
        <div id="footerr">

            <footer id = "footer">
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


