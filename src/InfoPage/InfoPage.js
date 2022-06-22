import React from 'react';
import './InfoPage.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const CropsPage = () => {

    //-------------------[FieldTypes]------------------------------

    
    // get all fieldtypes : state
    
    const [fieldTypes, setfieldTypes] = useState([]);
    const [searchTermFieldTypes, setSearchTermFields] = useState("");

    
    // get all fieltypes code:

    useEffect(() => {
        let endpoint2 = "http://localhost:8080/fieldtype/fieldtypes"
        axios
            .get(endpoint2)
            .then(response => {
                const data = response.data;
                setfieldTypes(data);
            })
            .catch(err => console.log(err ));
    }, [])


    //------------------[ specific fieldTypes search ]-------------

    const getFieldTypes= async (e) =>{
        
        e.preventDefault(); // prevent page refresh

        // axios API request to backend
        let response;
        try {
            response = await axios.get("http://localhost:8080/fieldtype/fieldtypes")
        }
        catch(err) {
            console.log(err);
        }

        const data = response.data;
        console.log("data: ", data);
        console.log(searchTermFieldTypes);
        console.log(fieldTypes);
        
        const filteredFieldTypes = data.filter(fieldType => fieldType.name.toLowerCase().includes(searchTermFieldTypes.toLowerCase()))

        // console.log(filteredCrops);

        setfieldTypes(filteredFieldTypes); // sets the variable 'fieldTypes', also re-renders the component
    
    }

    //-------------------------[ Crops ]------------------------------


    // get all crops : state
    
    const [crops, setCrops] = useState([]);

    // get all crops code

    useEffect(() => {
        let endpoint1 = "http://localhost:8080/crops/crops/"
        axios
            .get(endpoint1)
            .then(response => {
                const data = response.data;
                // add logic to filter data based on input
                // use state with some properties for filtering data 
                setCrops(data);
            })
            .catch(err => console.log(err ));
    }, [])

    const [searchTerm, setSearchTerm] = useState("");


   //---------------------------[ specific crops search ]--------------------------------


    const getCrop = async (e) =>{
        
        e.preventDefault(); // prevent page refresh

        // axios API request to backend
        let response;
        try {
            response = await axios.get("http://localhost:8080/crops/crops")
        }
        catch(err) {
            console.log(err);
        }

        const data = response.data;
        // console.log("data: ", data);
        // console.log(searchTerm);
        // console.log(crops);
        
        const filteredCrops = data.filter(crop => crop.name.toLowerCase().includes(searchTerm.toLowerCase()))
        
        // console.log(filteredCrops);

        setCrops(filteredCrops); // sets the variable 'crops', also re-renders the component
    
    }


    //----------------------------- farms ]----------------------------


    // get all crops : state
    
    const [farms, setFarms] = useState([])

    // get all crops code

    useEffect(() => {
        let endpoint3 = "http://localhost:8080/farms/farms"
        axios
            .get(endpoint3)
            .then(response => {
                const data = response.data;
                // add logic to filter data based on input
                // use state with some properties for filtering data 
                setFarms(data);
            })
            .catch(err => console.log(err ));
    }, [])

    const [searchTermFarms, setSearchTermFarms] = useState("");


   //-----------------[ farms crops search ]----------------------------------


    const getFarms = async (e) =>{
        
        e.preventDefault(); // prevent page refresh

        // axios API request to backend
        let response;
        try {
            response = await axios.get("http://localhost:8080/farms/farms")
        }
        catch(err) {
            console.log(err);
        }

        const data = response.data;
        console.log("data: ", data);
        console.log(searchTermFarms);
        console.log(farms);
        
        const filteredFarms = data.filter(farm => farm.name.toLowerCase().includes(searchTerm.toLowerCase()))
        
        // console.log(filteredCrops);

        setCrops(filteredFarms); // sets the variable 'farms', also re-renders the component
    
    }


    //----------------[ Arrow function for buttonclick]-------------------

        const buttonClickHandler= (e) => {

            e.preventDefault();
            alert("still to be implemented"  + getFieldTypes());
        

            // on button click

            // call 

        }



    //----------------------------[ Return ]----------------------------------


  return (
    <>
        <section id = "allCropsTable">      
            <h2 id= "cropsTableTitle"> Crops </h2>
            <h6  id= "cropsTableSubheader"> Take a look at our juicy crops, farming just got easier! </h6>



                <section id = "searchBarCrops">
                    
                    <p id= "searchingForCrops"> Searching for: <span id="user-crop"></span></p> 

                            <form id= "new-crop-form" >
                                <div>
                                    <input onChange={(e)=> {setSearchTerm(e.target.value)}} id= "userInputCrops" type="text" placeholder= "carrots..." name= "user-input"/>
                                    <input  id="submitButton" type="submit" value="search" onClick={getCrop}></input>
                                </div>

                            </form> 

                </section>




                <section id = "searchBarFieldTypes">
                    
                    <p id= "searchingForFieldTypes"> Searching for: <span id="user-fieldType"></span></p> 

                            <form id= "new-field-form" >
                                <div>
                                    <input onChange={(e)=> {setSearchTermFields(e.target.value)}} id= "userInputFieldType" type="text" placeholder= "field..." name= "user-input"/>
                                    <input  id="submitButtonFieldTypes" type="submit" value="search" onClick={getFieldTypes}></input>
                                </div>

                            </form> 

                </section>

                {/* <ul>
                        <Table className="table table-striped" striped bordered hover variant="light">
                                <thead>
                                <tr>
                                    <th>Name1</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Soil Types</th>
                                    <th>Grow Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                {crops1.filter((val) => {
                                    if (searchTerm === "") {
                                        return val;
                                       } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.stock.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.soilTypes.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                val.growTime.toLowerCase().includes(searchTerm.toLowerCase())
                                    ){
                                        return val
                                    }

                                }).map((crops) => (
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
                </ul>       */}


     

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
                                    <th> Crops </th>
                            
                                </tr>
                                </thead>
                                <tbody>
                                {fieldTypes.map((fieldtypes) => (
                                

                                    <tr>
                                    <td>{fieldtypes.name}</td>
                                    <td>{fieldtypes.size}</td>
                                    <td>{fieldtypes.cost}</td>
                                    <td>{fieldtypes.soilTypes}</td>
                                    <td><button onClick={buttonClickHandler}> Show Crops</button></td>
                                    
                                
                            
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                </ul>       



         </section> 

         <section>




        
         <section id = "searchBarFarms">
                    
                    <p id= "searchingForFarms"> Searching for: <span id="user-farms"></span></p> 

                            <form id= "new-farms-form" >
                                <div>
                                    <input onChange={(e)=> {setSearchTermFields(e.target.value)}} id= "userFarms" type="text" placeholder= "farm..." name= "user-input"/>
                                    <input  id="submitButtonFarms" type="submit" value="search" onClick={getFarms}></input>
                                </div>

                            </form> 

        </section>


    </section>

     </>
   )


}

export default CropsPage;


