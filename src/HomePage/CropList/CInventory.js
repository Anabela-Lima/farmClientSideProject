import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const CInventory = () => {


    // get all crops

    const [crops, setCrops] = useState([]);


    // get all crops code
    useEffect( () => {
        
      let endpoint1=  "http://localhost:8080/crops/crops/"
       axios.get(endpoint1)
       .then(response => {
           const data = response.data;
           setCrops(data);
       })
       .catch(err => console.log(err ));
   })



    const filter = () =>{

    let inventorySection = document.querySelector("#cropInventory")

    inventorySection.innerHTML= "HELLO"
  }






  

  return (
   
    <section>
       <div id = "cropInventory">  </div>
       

       <form id= "new-crop-form">
          <div>
            <input id= "userInput" type="text" placeholder= "search Inventory" name= "user-input"/>
            <input id="submitButton" type="submit" value="search-Inventory"></input>
          </div>

       </form>


    

    </section>
  


  )
}

export default CInventory