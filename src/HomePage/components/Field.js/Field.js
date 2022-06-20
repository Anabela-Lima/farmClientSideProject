import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from "react"; 



const Field = () => {

// const [field, setField] = useState([]);
const [chosenField, setChosenField] = useState({});

        // useEffect( () => { //get all fields
        // axios.get('http://127.0.0.1:8080/fields')
        // .then(res => {const field = res.data;
        // setField(field);
        // }).catch(err => console.log(err)); 
        // });


//get specific field
        useEffect( () => { 
        axios.get("http://127.0.0.1:8080/fields/field/2")
        .then(response => {const chosenField= response.data;
        setChosenField(chosenField);
         }).catch(err => console.log(err)); 
        });

  return (

       <>
       <h1>Hi I'm {chosenField.name}</h1>
   
       </>
            
       
    )
  
}

export default Field;