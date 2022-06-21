
console.log("HI")



const header = document.querySelector("#myHeader"); // getting element with id = myheader, and storing inside variable "header"

// // Globalising the scope for this endpoint since all functions will eventually need it 

// countriesURL= "https://restcountries.com/v3.1/all"

function getCountryByName()  {

    country = document.getElementById("user-input").value;
    // creating a fetch request which points to an endpoint 

    // the url is :
    // https://restcountries.com/v3.1/name/{countryName}

    // but i want to break it up so that we can use the country we passed in, so ill use string interpolation below:

    let endpoint1= `http://localhost:8080/crops/crops/` ;   // here i am using string interpolation (i.e. `` and the curly braces + dollar sign ) so i can pass the function argument in the url - using the country in url
    
   let fetchCountry =  fetch(endpoint1);  // fetch takes the variable endpoint1 as input argument

     fetchCountry.then(response => {       // we fetch the country with endpoint, then we get a response from it
        if(response.ok){                    // if response is ok, i,e program ran smoothly, 
            header.innerHTML = " 🟠 Fetching country..."  // we change the header to fetching country
            return response.json()                      // and return the jason format 
           .then((data) => {                            // grab hold of that data from previous line return
           console.log(data)                            // log it to the console
           let section1= document.querySelector("#section1")  // i also wanted to add another section with country facts so i added a section in html with id=section1, i then store this inside variable section1
           header.innerHTML = "🟢 loaded  "
            
           section1.innerHTML = `Country name is ${data[0].name} and its population is ${data[0].price} <br></br>` // call innerHTML function on section 1 to change its text, and I equate it to a special type of string = "string interpolation"- which allows me then to use variables inside it note: data[0] is the object, i then get hold of its specific properties
            })
        
        } else {header.innerHTML = `Error 404 on country: alert("please provide a valid country!")} // if the above conditions fails then I want header element to change to error etc, and a popup window to appear`
    })
 
} 

// clearing button 

let clearButton= document.querySelector("#clear") // clear button is element in our html document with id="clear"

// define a function thats going to be fired when client clicks button: 

const clearFunction = (e) => {                   // handleButton= function takes an event argument 
    e.preventDefault();                         // had to add this event.preventdefault() because each event has its own default behaviour it wants to go by e.g. when i pressed clear, the cleared data would shortly reapper. This line of code prevented this from happening 
    clearButton.style.backgroundColor= "YellowGreen";
   let  section1= document.querySelector("#section1") 
    section1.innerHTML= "";
    
}

// add event listener to clear button

clearButton.addEventListener("click",  clearFunction);  // when user clicks, it calls clearfunction

//--------------------------------

// DOUBLE CLICK to deletelist 
// lets have a doubleclick function so that when the user double click it can clear the list 

// define a function thats going to be fired when client double clicks button: 

const doubleClickFunction= (e) => {                   // doubleClickFunction= function takes an event argument 
    e.preventDefault();                                // had to add this event.preventdefault() because each event has its own default behaviour it wants to go by e.g. when i pressed clear, the cleared data would shortly reapper. This line of code prevented this from happening 
    clearButton.style.backgroundColor= "LavenderBlush";
  let  clearingList= document.querySelector("#myCountriesList") 
    clearingList.innerHTML= "";

    
}

// add the event listener for doubleclicking clearbutton

clearButton.addEventListener("dblclick", doubleClickFunction);  // when user double clicks, it calls clearfunction which deletes the list



//-----------
// on mouse over function

function clearButtonSpeak() {           // we have a function called clearButtonSpeak- note this is not really the clear button speaking- I added a section that will come up with text below the clear button
 
    let divMouse= document.querySelector("#approach-clear-button")  // section = the one with id approach-Clear-button and i store this in some variable "divMouse"

    divMouse.innerText = "click once to clear country data and twice to clear My countries"  // the text in this section will change to  "click once to clear country data and twice to clear My countries"

}

let divMouse= document.querySelector("#approach-clear-button")  // section = the one with id approach-Clear-button and i store this in some variable "divMouse"
divMouse.addEventListener("onmouseover", clearButtonSpeak)  // an event listener- when user places mouse over this, it wil


//-----------
// on mouse out function- a function that clears the text that comes up when user hovers over it

function clearButtonQuiet() {

    divMouse= document.querySelector("#approach-clear-button")  // scanning document for element with id=approach-clear-button, i then store in in a variable I named divMouse

    divMouse.innerText = ""  // setting the text of the element with the id approach-clear-button to empty string in other words- clearing it

}

// the event listener  for onmouseover
divMouse= document.querySelector("#approach-clear-button")  // scanning document for element with id=approach-clear-button, i then store in in a variable I named divMouse
divMouse.addEventListener("onmouseover", clearButtonQuiet) // when user places mouseover, the function clearButtonQuiet will fire




// CSS code for function changebackground() 

// colours is an array of co
let colours = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
var colourIndex = 0;                                 // we have a variable "colour" index which will be like a pointer for the array variable colourIndex can be reassigned so i added a var keyword
const changeColour= () => {                                // change colours is a function that takes no input arguments
    const body = document.querySelector("#body");   // scan document for element with id = body and store it in a constant body variable
   for(let item in colours){                            // looping through the array "colours"
       if(colourIndex>=colours.length){colourIndex=0} // if the colours index is greater than array.colours length, in which case means it would have to be negative number, meaning it does not exist (out of bounds), then just set the colour to the first colour in the array hence, index=0
       else{body.style.backgroundColor =colours[colourIndex]} // otherwise, if the colour does exist, then  body background colour to equal the index of colours array
    }
    return  colourIndex++ // and this colour index, increments by 1, so the colour will be alicebliue, antiquewwhite etc

}



//-----------------------------------------------------------

// Lab tasks

// Take the output from your getCountryByName() function and make use of it on the webpage. 

// MY PLAN:

// I want to create an input box, where user can pass in a country
// the user will also be able to see the country as theyre typing 
// that country will then show up on the list of "my countries "
// and there will be a button that they can press to delete the country removing it from the list 


const input = document.querySelector("#user-input");  // input is element with id user-input
const country= document.querySelector("#user-country"); // country is the element with chosenCountry id
const form= document.querySelector("#new-country-form"); // scan doc looking for an element with id= new-country-form  we then store it in variable "form"


// 1.  LIVE onscreen typing code:

// adding event listener for the input, we taken an input argument, and the event 
input.addEventListener("input", (event) => {  // the event is user providing the input 

    country.innerText = event.target.value;     // changing the inner text of country variable
});

// 2.  Using getCountryByName() function + getting argument based on input provided in the form- upon submit

const countryForm = document.querySelector("#new-country-form");
const list = document.querySelector("#myCountriesList")  

// need an event listener for when user clicks add country 
countryForm.addEventListener("submit", (event)=> {

    event.preventDefault();  // preventing default form submit behaviour
    const newCountry = document.createElement("li");  // creating a new list (li) element for the country when user clicks button add country
    newCountry.innerText= event.target["user-input"].value; // changing the list element innertext to be equal to input user made 
    list.appendChild(newCountry);   // adding the new country to the list 

});




// 3. Get all Countries

let paragraph = document.createElement('p')

// a function that creates paragraphs for us 
let addP=() =>{ return paragraph = document.createElement('p')}    // this function creates a p element in our document. It is then stored in a variable "paragraph"

// countries section
let  countriesSection= document.querySelector("#allCountries")  // countries section is the element in our document with an id of "allCountries"

// add it to section function
const putInSection = (p) => {
    countriesSection.appendChild(p);   // adding the element p we pass in putInsection to the countriesSection 
}


function getAllCountries(){                         // get all countries is function 

    return new Promise((resolve, reject) => {           // that takes two arguments- resolve or reject- im only making use of the resolve though

    let endpoint2= "http://localhost:8080/crops/crops" ;  // storing the link in endpoint2
    
   let  fetchCountry =  fetch(endpoint2);  // fetch takes the variable endpoint as input argument and this result is sotred in fetchCountry argyment

    fetchCountry.then(response => {       // we fetch the country by calling our fetchCountry argument, then we get a response from it
        if(response.ok){                    // if response is ok, i,e program ran smoothly, 
            header.innerHTML = " 🟠 Fetching all countries..."  // we change the header to fetching country
            return response.json()                      // and return the json format 
            .then((data) => {                            // grab hold of that data from previous line return
            console.log(data)     
            for(c in data){                        // loop  through elements in the data note c is just a variable like a pointer used to point at every index in data
            paragraph= addP();                           // we store the addP function we previously defined in a paragraph variable and we call it for every element we loop throug - so every element we point at will have a p element 
            paragraph.innerHTML= ` 📍  Country name is ${data[c].name} and its population is ${data[c].price} <br></br>` // we then set the p element or "paragraph" to have an inner text of  Country name is ${data[c].name.common} and its population is ${data[c].population} <br></br>` Note, data[c].name.common- im just getting the data for the element we are currently at and getting propoerty name, common
            putInSection(paragraph)   // put the new paragraph in its section using our putInsection function we previously defined
            }
            resolve();               // status resolved
           header.innerHTML = "🟢  Countries loaded  " //header changed to countries loaded
           
            })
        
        } else {header.innerHTML = `Error 404 on loading Countries`} // if the above conditions fails then I want header element to change to error 

    
    })


    })


}

// 4 filter 

// Create an HTML form which allows you to input the name of a country which is used to "filter" the information on the front-end 
// on-submit. This will call your getCountryByName() function

function filter(){
    
    let countriesSection = document.querySelector("#allCountries") // countriesSection is element in html document with id = "allCountries"
    countriesSection.innerHTML= ""             // clear all of that countries section 
    let userInput= document.querySelector("#user-input").value   // user input is element with id= user-input in our html document
    // uses input  getCountrybyName function 
   getCountryByName(userInput)  // we call our getCountryByName function

    
}













