import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from "react"; 
import Farm from '../Farm/Farm';


const Field = () => {

const [field, SetField] = useState([])

        useEffect( () => { //get all fields
        axios.get('http://127.0.0.1:8080/fields')
        .then(res => {const field = res.data;
        SetField(field);
        }).catch(err => console.log(err)); 
        });

 const [chosenField, SetChosenField] = useState({});

        useEffect( () => { //get specific field
        axios.get(`http://127.0.0.1:8080/fields/field/1`)
        .then(res => {const chosenField= res.data;
        SetChosenField(chosenField);
         }).catch(err => console.log(err)); 
        });

  return (

       <>
       <h1>Hi I'm {chosenField.name}</h1>


       </>
            
       
    )
  
}

export default Field;