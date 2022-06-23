import React from 'react';
import './InfoPage.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Table } from "react-bootstrap";


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

        // const filteredCrops = data.filter((crop) => {
        // if (searchTerm === "") {
        //     return data;
        //    } else if(crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //             crop.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //             crop.stock.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //             crop.soilTypes.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //             crop.growTime.toLowerCase().includes(searchTerm.toLowerCase())
        // ){
        //     return data
        // })}

        // const filteredCrops = data.filter((crop=>{
        //     if(searchTerm===""){
        //         return data;
                
        //     } else if (crop.name.toLowerCase().includes(searchTerm.toLowerCase())||
        //       crop.stock.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //       crop.soilTypes.toLowerCase().includes(searchTerm.toLowerCase())||
        //       crop.growTime.toLowerCase().includes(searchTerm.toLowerCase())) 
        //      {return (data)}
        //      return (data)
              
        // }))

        
        // console.log(filteredCrops);

        setCrops(filteredCrops); // sets the variable 'crops', also re-renders the component
        
    }

    //----------------------------- farms ]----------------------------


    // get all crops : state
    
    // const [farms, setFarms] = useState([])

    // // get all crops code

    // useEffect(() => {
    //     let endpoint3 = "http://localhost:8080/farms/farms"
    //     axios
    //         .get(endpoint3)
    //         .then(response => {
    //             const data = response.data;
    //             // add logic to filter data based on input
    //             // use state with some properties for filtering data 
    //             setFarms(data);
    //         })
    //         .catch(err => console.log(err ));
    // }, [])

    // const [searchTermFarms, setSearchTermFarms] = useState("");


   //-----------------[ farms crops search ]----------------------------------


    // const getFarms = async (e) =>{
        
    //     e.preventDefault(); // prevent page refresh

    //     // axios API request to backend
    //     let response;
    //     try {
    //         response = await axios.get("http://localhost:8080/farms/farms")
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }

    //     const data = response.data;
    //     console.log("data: ", data);
    //     console.log(searchTermFarms);
    //     console.log(farms);
        
    //     const filteredFarms = data.filter(farm => farm.name.toLowerCase().includes(searchTerm.toLowerCase()))
        
    //     // console.log(filteredCrops);

    //     setFarms(filteredFarms); // sets the variable 'farms', also re-renders the component
    
    // }


    //----------------[ Arrow function for buttonclick]-------------------

        // const buttonClickHandler= (e) => {

        //     e.preventDefault();
        //     alert("still to be implemented"  + getFieldTypes());
        

        //     // on button click

        //     // call 

        // }


     
//------------------------[ Crop Buttons ]----------------------------------------


    const scb1= (e) => {

        e.preventDefault();
        alert(" 🥬 name: Cabbages, price: 20, stock: 300, soilTypes: [], soilEffects: [], growTime: 20 🥬");


        // on button click

        // call 

    }


    const scb2= (e) => {

        e.preventDefault();
        alert(" 🌻 name: Sunflowers, price: 20, stock: 248, soilTypes: [], soilEffects: [], growTime: 20 🌻" );

        // on button click

        // call 

    }

    const scb3= (e) => {

        e.preventDefault();
        alert(" 🌾 name: Rice, price: 20, stock: 300, soilTypes: [], soilEffects: [], growTime: 20🌾");


        // on button click

        // call 

    }

    //------------------------[ Field Buttons ]----------------------------------------



    // bFT1= button to show field type info
    const bFT1= (e) => {

        e.preventDefault();
        alert(" 🌳 name: medium field, size: 4,cost: 20,soilType: null 🌳");

    

        // on button click

        // call 

    }


    // bFT1= button to show field type info

    const bFT2= (e) => {

        e.preventDefault();
        alert(" 🌱 name: huge field, size: 16,cost: 80,soilType: null 🌱");

    

        // on button click

        // call 

    }



    const bFT3= (e) => {

        e.preventDefault();
        alert(" 🌿name: tiny field, size: 1,cost: 5,soilType: null 🌿");

    

        // on button click

        // call 

    }


    //------------------------[ Farm Buttons ]----------------------------------------





    // bFT1= button to show field type info

    const bFa= (e) => {

        e.preventDefault();
        alert(" 🐷 name: High Mill, funds: 200, date: 0🐷");

        // on button click

        // call 

    }







    //----------------------------[ Return ]----------------------------------


  return (
    <>

       
    
        <section id = "allTables">    
         <h1 className='infoTitle white'> Information  </h1>


         <p id="infoPageText" className="white"> <span id="infoText"> Live the good life on a humble new farm in FarmTycoon.Build your farm from its roots, make it attractive to please your workers, and produce fresh livestock and crops to sell into the community!</span> </p>

             <section id = "allCrops">    
             
                <h2 id= "cropsTableTitle" className='white'> Crops </h2>
                <h6  id= "cropsTableSubheader" className='white'> Take a look at our juicy crops, farming just got easier! </h6>
                    <section>
                    <ul>
                            <Table id= "cropsTable" className="table table-striped" striped bordered hover variant="light">
                                    <thead>
                                    <tr>
                                        {/* <th>Image</th> */}
                                        <th className= "nameTh">Name</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Soil Types</th>
                                        <th className="growTimeTh" >Grow Time</th>
                                    </tr>
                                    </thead>
                                    <tbody id= "tbodyCrops">
                                        {crops.map((crops, index) => (
                                            <tr key={index}>
                                                {/* <td><img src={crops.image} width="50" height="50"  alt="wheat"></img></td> */}
                                            <td >{crops.name}</td>
                                            <td>{crops.price}</td>
                                            <td>{crops.stock}</td>
                                            <td >{crops.soilTypes}</td>
                                            <td className="growTimeTh2">{crops.growTime}</td>
                                    
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                    </ul>      
                    </section>
                


                    <section id = "searchBarCrops">
                        
                    <p id= "searchingForCrops"> Searching for: <span id="user-crop"></span></p> 

                                <form id= "new-crop-form" >
                                    <div>
                                        <input onChange={(e)=> {setSearchTerm(e.target.value)}} id= "userInputCrops" type="text" placeholder= "carrots..." name= "user-input"/>
                                        <input  id="submitButton" type="submit" value="search" onClick={getCrop}></input>
                                    </div>

                                </form> 

                    </section>

        </section>

    
       

        <section id = "fieldTypes">      

                    <section id = "searchBarFieldTypes">
                        
                        <p id= "searchingForFieldTypes"> Searching for: <span id="user-fieldType"></span></p> 

                                <form id= "new-field-form" >
                                    <div>
                                        <input onChange={(e)=> {setSearchTermFields(e.target.value)}} id= "userInputFieldType" type="text" placeholder= "field..." name= "user-input"/>
                                        <input  id="submitButtonFieldTypes" type="submit" value="search" onClick={getFieldTypes}></input>
                                    </div>

                                </form> 

                    </section>
 
            <h2  id= "fieldTypesTableTitle"  className='white'> FieldTypes </h2>

            <h6  id= "fieldTypesTableSubheader" className='white'> We choose only the best fields for your farm, take a look: </h6>
                <ul>
                        <Table id= "fieldTypesTable"striped bordered hover variant="light">
                                <thead>
                                <tr>
                                    <th className= "nameTh">Name</th>
                                    <th>Size</th>
                                    <th>Cost</th>
                                    <th className="cropsTh">Soil Types</th>
                                    {/* <th className="cropsTh"> Crops </th> */}
                            
                                </tr>
                                </thead>
                                <tbody>
                                {fieldTypes.map((fieldtypes, index) => (
                                    <tr key={index}>
                                    <td>{fieldtypes.name}</td>
                                    <td>{fieldtypes.size}</td>
                                    <td>{fieldtypes.cost}</td>
                                    <td >{fieldtypes.soilTypes}</td>
{/* 
                                    <td><button onClick={buttonClickHandler}> Show Crops</button></td> */}
                                    
                                
                            
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                </ul>       



         </section> 

 
         <section>



         <h2  id= "fieldsTableTitle" className='white'> Fields </h2>

        <h6  id= "fieldsTableSubheader" className='white'> We choose only the best fields for your farm, take a look: </h6>
                <ul>
                        <Table id= "fieldsTable"striped bordered hover variant="light">
                                <thead>
                                <tr>
                                    <th className="nameTh">Name</th>
                                    <th className="timeLeft">TimeLeft</th>
                                    <th className="timeLeft">SoilType</th>
                                    <th>FieldType</th>
                                    <th> Crop </th>
                                    <th className="cropsTh"> Farm </th>
                            
                                </tr>
                                </thead>
                                <tbody>
                                
                        
                                    <tr>
                                   
                                    <td>Flat meadow</td> 
                                    <td> 0</td>
                                    <td>SILTYCLAY</td>

                                    <td><button onClick={bFT1}> Show FieldType</button></td>
                                    <td><button onClick={scb1}> Show Crops</button></td>
                                    <td><button onClick={bFa}> Show Farm</button></td>

                                  
                                    
                                   
{/* 
                                    <td><button onClick={bFT2}> Show FieldType</button></td>
                                    <td><button onClick={""}> Show Crops</button></td>
                                    
                                    
                                    
                                
                             */}
                                    </tr>
                         
                                </tbody>

                                <tbody>

                                <td>Just a field</td> 
                                    <td> 0</td>
                                    <td>SAND</td>

                                    <td><button onClick={bFT2}> Show FieldType</button></td>
                                    <td><button onClick={scb2}> Show Crops</button></td>
                                    <td><button onClick={bFa}> Show Farm</button></td>

                                </tbody>

                                 <tbody>

                                <td>Field not found</td> 
                                    <td> 0</td>
                                    <td>SANDYCLAY</td>

                                    <td><button onClick={bFT3}> Show FieldType</button></td>
                                    <td><button onClick={scb3}> Show Crops</button></td>
                                    <td><button onClick={bFa}> Show Farm</button></td>

                                </tbody>

                                

                                
                            </Table>
                </ul>       
                <br></br>
                <br></br>
                <br></br>
                <br></br>

         </section> 

    </section>

     </>
   )


}

export default CropsPage;