
import { library } from "@fortawesome/fontawesome-svg-core";


// importing specific icons from @fortawesome
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";


// adding specific icons that I want to use to my library  
function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);
}

// export the function 

export default initFontAwesome;


