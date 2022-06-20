import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

// function that returns crops 


const Crop = () => {

    const [data, setData] = useState({})

    useEffect( () => {

       let endpoint1=  "http://localhost:8080/crops/crop/%7Bid%7D?id=1"
        axios.get(endpoint1)
        .then(response => {
            const data = response.data;
            setData(data);

        })

        .catch(err => console.log(err ));
    })



  return (
    <>

    <h3> This is a crop</h3>

    {
     data.map((crop) => (                           
      
    
      <li key = {crop.id}>   
        {`Name: ${crop.name},  Price: ${crop.price}, Stock: ${crop.stock} Soil Types: ${crop.soilTypes} Soil Effects: ${crop.soilEffects} Grow Time: ${crop.growTime}` }
      </li>

     ))
   }
     
    
    </>
  )
}

export default Crop





