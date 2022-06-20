import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from "react"; 



const Field = () => {


const [field, setField] = useState([]);
const [chosenField, setChosenField] = useState({});
const [deleteChosenField, setDeleteChosenField] = useState({});

//get all fields
        useEffect( () => { 
        axios.get('http://127.0.0.1:8080/fields')
        .then(response => { 
        const field = response.data;
        setField(field);
        }).catch(err => console.log(err ));
    })


//get specific field
        useEffect( () => { 
        axios.get("http://127.0.0.1:8080/fields/field/4")
        .then(response => {
        const chosenField= response.data;
        setChosenField(chosenField);
         }).catch(err => console.log(err)); 
        });

    //delete  specific field

    useEffect(() =>{

        axios.delete("http://127.0.0.1:8080/fields/deleteField/2")
        .then(response => {
        const deleteChosenField = response.data;
        setDeleteChosenField(deleteChosenField);
        })
        .catch(err => console.log(err ));
  

    });

  return (

       <>
       <h2>Hi I'm {chosenField.name}</h2>
       <h2>The field {deleteChosenField.name} has been removed</h2>
   
       </>
            
       
    )
  
}

export default Field;

   




