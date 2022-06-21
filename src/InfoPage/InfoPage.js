import React from 'react';
import './InfoPage.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const CropsPage = () => {


    // search

    const [searchTerm, setSearchTerm] = useState("");
    

    // const handleSearch = (event) => {
    //   setSearch(event.target.value);
    // };
  
    
    // get all crops : state
    
    const [crops, setCrops] = useState([]);

    // get all crops code

    useEffect( () => {
        
        let endpoint1=  "http://localhost:8080/crops/crops/"
         axios.get(endpoint1)
         .then(response => {
             const data = response.data;

             // add logic to filter data based on input
             // use state with some properties for filtering data 
             // 
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


    //---------------------------------------

    // get specific crop:

    const [crops1, setCrops1] = useState([]);

   // code

    const getCrop= () =>{
       
        //  name= document.getElementById("user-input").value;
       
        
        const endpoint1=  "http://localhost:8080/crops/crops"  //get all crops
         fetch(endpoint1)
         .then(response => {
             const data = response.data;            // set data to be the response that comes out
             setCrops1(data)                        // setcrops1 to be the data 
        
        })
         .catch(err => console.log(err ));
     
        


        // let endpoint2=  `http://localhost:8080/crops/crop/${}`
        //  fetch(endpoint2)
        //  .then(response => {
        //      const specificCrop = response.data;
        //      setSpecificCrop(specificCrop);
        //  })
        //  .catch(err => console.log(err ));
    }
        
    

  return (
    <>

    

        <section id = "allCropsTable">      
        
            <h2 id= "cropsTableTitle"> Crops </h2>
            <h6  id= "cropsTableSubheader"> Take a look at our juicy crops, farming just got easier! </h6>



                <section id = "searchBar">
                    
                    <p id= "searchingFor"> Searching for: <span id="user-crop"></span></p> 

                            <form id= "new-crop-form" >
                                <div>
                                    <input onChange={(e)=> {setSearchTerm(e.target.value)}} id= "userInput" type="text" placeholder= "carrots" name= "user-input"/>
                                    <input  id="submitButton" type="submit" value="search"></input>
                                </div>

                            </form> 

                </section>


     

                <ul>
                        <Table className="table table-striped" striped bordered hover variant="light">
                                <thead>
                                <tr>
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
                
                

        

{/* 

                <ul>
                    {crops1.filter((c,name) => {
                        let output ;
                        if(c.name=== name){
                            output=( <li key = {crops1.id}>   
                                {`Name: ${crops1.name},  Price: ${crops1.price}, Stock: ${crops1.stock} Soil Types: ${crops1.soilTypes} Soil Effects: ${crops1.soilEffects} Grow Time: ${crops1.growTime}` }
                        </li>)
                        }
                        return(output)
                    })}
                </ul> */}

                <ul>
                     

                </ul>      



            


                
        </section>
        

        


       
        <section id = "fieldTypesTable">       
            <h2  id= "fieldsTableTitle"> FieldTypes </h2>
            <h6  id= "fieldsTableSubheader"> We choose only the best fields for your farm, take a look: </h6>
                <ul>
                        <Table striped bordered hover variant="light">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Cost</th>
                                    <th>Soil Types</th>
                            
                                </tr>
                                </thead>
                                <tbody>
                                {fieldTypes.map((fieldtypes) => (
                                

                                    <tr>
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


         



    
     </>
   )


}

export default CropsPage;


