import './Footer.css';
import { useEffect } from 'react';


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
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  


    return (

        <div id="footer">

         <footer>

          <div className="footerLeft">
      
            <img id="farmLogo" src= "https://hayday.com/graphics/misc/headline_comp.png" alt="Cow logo"></img>

            {/* company logo  */}
            <span id= "copyright"> © FarmPlay  </span>      
          </div>
  

          <section className= "centreFooter">

            <nav id="footerNavbar">

              <ul>
                <li>Terms of use</li>
                <li>Privacy Policy</li>
                <li>Information</li>
                <li>Cookies</li>
              </ul>

              <ul>
                <li>Portuguese</li>
                <li>Spanish</li>
                <li>Russian</li>
                <li>French</li>
              </ul>

              <ul>
                <li>FAQ</li>
                <li>Forums</li>
                <li>Competitions</li>
                <li>Our Projects</li>
              </ul>

            </nav>

         
            <section className='subscribe-and-backtotop'>
              <form className='subscribeForm'>
                <input type="email" required placeholder="abc@example.com"></input>
                <button  onClick={sub}>Subscribe <span id="button icon"></span></button>
              </form>

              <button id="scrollToTop"
                          onClick={() => {
                          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                          }} > ^ Back to Top
              </button>
            </section>

         </section>
         

        <div className='footerRight'>
          <img id="ad1"src="https://jobtribes.playmining.com/wp-content/uploads/2021/04/banner_003-3.png" alt="ad"></img>     
        </div>
           
         </footer>

        <div>
            
      
     </div>   
        

  </div>

)}




export default Footer;


