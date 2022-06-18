
// component: 
import './Footer.css';

// lets import FontAwesome from react
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {


    // on display menu bar on hover

    const menuDown1 = () => {

       let  box= document.querySelector("#box1");
       let colour= "rgb(132,177,40)"
       box.style.backgroundColor= colour;

       return(
  
    
        box.innerHTML = "hello"

            
        //     < nav id="menuNav">
         
        //      <ul >
        //      <ul id = "link4"> <p> <a href= "#"> hello4 </a>  </p></ul>
        //              <ul id= "link1"> <p> <a href= "#"> hello1 </a>  </p></ul>
        //              <ul id= "link2"> <p> <a href= "#"> hello2 </a>  </p></ul>
        //              <ul id = "link3"> <p> <a href= "#"> hello3 </a>  </p></ul>
         
        //      </ul>
         
         
        //    </nav>
       )

       
      
    }


    const menuUp1 = () => {
        
        let box= document.querySelector("#box1")
       let  colour= "rgb(153,191,210)";
        box.style.backgroundColor= colour

        return(
        box.innerHTML = ""
    
        )
       
    }




    // Menu 2------------------------------------------


    const menuDown2 = () => {

        let  box= document.querySelector("#box2");
        let colour= "rgb(132,177,40)"
        box.style.backgroundColor= colour;
 
        return(
   
     
         box.innerHTML = "hello"
 
             
         //     < nav id="menuNav">
          
         //      <ul >
         //      <ul id = "link4"> <p> <a href= "#"> hello4 </a>  </p></ul>
         //              <ul id= "link1"> <p> <a href= "#"> hello1 </a>  </p></ul>
         //              <ul id= "link2"> <p> <a href= "#"> hello2 </a>  </p></ul>
         //              <ul id = "link3"> <p> <a href= "#"> hello3 </a>  </p></ul>
          
         //      </ul>
          
          
         //    </nav>
        )
 
        
       
     }
 
 
     const menuUp2 = () => {
         
         let box= document.querySelector("#box2")
        let  colour= "rgb(153,191,210)";
         box.style.backgroundColor= colour
 
         return(
         box.innerHTML = ""
     
         )
        
     }


      // Menu 3------------------------------------------

    const menuDown3 = () => {

        let  box= document.querySelector("#box3");
        let colour= "rgb(132,177,40)"
        box.style.backgroundColor= colour;
 
        return(
   
     
         box.innerHTML = "hello"
 
             
         //     < nav id="menuNav">
          
         //      <ul >
         //      <ul id = "link4"> <p> <a href= "#"> hello4 </a>  </p></ul>
         //              <ul id= "link1"> <p> <a href= "#"> hello1 </a>  </p></ul>
         //              <ul id= "link2"> <p> <a href= "#"> hello2 </a>  </p></ul>
         //              <ul id = "link3"> <p> <a href= "#"> hello3 </a>  </p></ul>
          
         //      </ul>
          
          
         //    </nav>
        )
 
        
       
     }
 
 
     const menuUp3 = () => {
         
         let box= document.querySelector("#box3")
        let  colour= "rgb(153,191,210)";
         box.style.backgroundColor= colour
 
         return(
         box.innerHTML = ""
     
         )
        
     }

  // Menu 4------------------------------------------

    const menuDown4 = () => {

       let  box= document.querySelector("#box4");
       let colour= "rgb(132,177,40)"
       box.style.backgroundColor= colour;

       return(
  
    
        box.innerHTML = "hello"

            
        //     < nav id="menuNav">
         
        //      <ul >
        //      <ul id = "link4"> <p> <a href= "#"> hello4 </a>  </p></ul>
        //              <ul id= "link1"> <p> <a href= "#"> hello1 </a>  </p></ul>
        //              <ul id= "link2"> <p> <a href= "#"> hello2 </a>  </p></ul>
        //              <ul id = "link3"> <p> <a href= "#"> hello3 </a>  </p></ul>
         
        //      </ul>
         
         
        //    </nav>
       )

       
      
    }


    const menuUp4 = () => {
        
        let box= document.querySelector("#box4")
       let  colour= "rgb(153,191,210)";
        box.style.backgroundColor= colour

        return(
        box.innerHTML = ""
    
        )
       
    }



 
 
 

     
 
 
 












































 





    return (

        <div id="footer">

         <footer id = "footer">

                {/* nav bar */}
            <nav id="nav">

            
                <ul>

                    <div id= "li1"> <li className="liNav"> <a id="anchor1"   href="https://www.addictinggames.com/"  onload={menuUp1} onMouseOver={menuDown1} onMouseOut={menuUp1}>Company Info </a> </li></div>
                    <div id="li2"><li className="liNav"> <a href= "https://www.addictinggames.com/"  onMouseOver={menuDown2} onMouseOut={menuUp2}> Get Involved </a></li></div>
                    <div id="li3"><li className="liNav"> <a href= "https://www.addictinggames.com/"  onMouseOver={menuDown3} onMouseOut={menuUp3}>Support  </a></li></div>
                    <div id= "li4"> <li className="liNav"> <a id="anchor2" href= ""  onMouseOver={menuDown4} onMouseOut={menuUp4}>Languages</a></li></div>
                    <div > <img id="farmLogo" src= "https://hayday.com/graphics/misc/headline_comp.png" alt="Cow gif"></img> </div>

                    {/* <div > <img id = "cowPic" src= "https://c.tenor.com/XF4caftz0fQAAAAC/cow-farm.gif" alt="Cow gif"></img> </div> */}
               </ul>
              
            </nav>
            <div> 


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



           
         </footer>

        

           <div id="box1" > </div>
           <div id="box2" > </div>
           <div id="box3" > </div>
           <div id="box4" > </div>
       

            
            
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


