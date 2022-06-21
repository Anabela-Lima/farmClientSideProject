import React from 'react';
import './InfoPage.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const CropsPage = () => {
    


    // get all crops : state
    
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




    // get all fieldtypes : state
    
    const [fieldTypes, setfieldTypes] = useState([]);

    // get all fieldtypes

    useEffect( () => {
        
        let endpoint2=  "http://localhost:8080/fieldtype/fieldtypes"
         axios.get(endpoint2)
         .then(response => {
             const data = response.data;
             setfieldTypes(data);
         })
         .catch(err => console.log(err ));
     })


     



  return (
    <>

     <section id = "allCropsTable">       
        <h2 id= "cropsTableTitle"> Crops </h2>
        <h6  id= "cropsTableSubheader"> Take a look at our juicy crops, farming just got easier! </h6>
            <ul>
                    <Table striped bordered hover variant="light">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Soil Types</th>
                                <th>Grow Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {crops.map((crops) => (
                                <tr>
                                <td>{crops.id}</td>
                                <td>{crops.name}</td>
                                <td>{crops.price}</td>
                                <td>{crops.stock}</td>
                                <td>{crops.soilTypes}</td>
                                <td>{crops.growTime}</td>
                        
                                </tr>
                            ))}
                            </tbody>
                        </Table>
            </ul>       
         </section>



         <section>

{/* 
         <p>Type a country</p>  
         <p> Your country is: <span id="user-country"></span></p> 

                <form id= "new-crop-form" onsubmit={""}>
                    <div>
                        <input id= "userInput" type="text" placeholder= "search Inventory" name= "user-input"/>
                        <input  id="submitButton" type="submit" value="search-Inventory"></input>
                    </div>

                </form> */}

         </section>



         <section> 
         <section id = "fieldTypesTable">       
        <h2  id= "fieldsTableTitle"> FieldTypes </h2>
        <h6  id= "fieldsTableSubheader"> We choose only the best fields for your farm, take a look: </h6>
            <ul>
                    <Table striped bordered hover variant="light">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Cost</th>
                                <th>Soil Types</th>
                        
                            </tr>
                            </thead>
                            <tbody>
                            {fieldTypes.map((fieldtypes) => (
                                <tr>
                                <td>{fieldtypes.id}</td>
                                <td>{fieldtypes.name}</td>
                                <td>{fieldtypes.size}</td>
                                <td>{fieldtypes.cost}</td>
                                <td>{fieldtypes.soilTypes}</td>
                             
                        
                                </tr>
                            ))}
                            </tbody>
                        </Table>
            </ul>       
         </section>

         </section>






    
     </>
   )














}

export default CropsPage;


