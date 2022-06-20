import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'


// function that returns crops 


const Crop = () => {

//     // get specific crops

//     const [specificCrop, setSpecificCrop] = useState({});


//     // get all crops

//     const [crops, setCrops] = useState([]);

//     // delete crop

//     const [specificCropDelete, setSpecificCropDelete] = useState({});

//      // plant crop in field

//      const [crop2, setCrop2] = useState({});
    

//     // get specific crop code

//     useEffect( () => {
    
//         let endpoint2=  `http://localhost:8080/crops/crop/2`
//          axios.get(endpoint2)
//          .then(response => {
//              const specificCrop = response.data;
//              setSpecificCrop(specificCrop);
//          })
//          .catch(err => console.log(err ));
//     })



//     // get all crops code
//     useEffect( () => {
        
//        let endpoint1=  "http://localhost:8080/crops/crops/"
//         axios.get(endpoint1)
//         .then(response => {
//             const data = response.data;
//             setCrops(data);
//         })
//         .catch(err => console.log(err ));
//     })


//     // delete crop
    
//     useEffect( () => {
        
//         let endpoint3=  `http://localhost:8080/crops/deleteCrop/1`
//          axios.get(endpoint3)
//          .then(response => {
//              const specificCropDelete = response.data;
//              setSpecificCrop(specificCropDelete);
//          })
//          .catch(err => console.log(err ));
//     })

   

//     // add crop to field 

//     useEffect( () => {
        
//         let endpoint4=   'http://localhost:8080/fields/CropInField/'
        
//           axios.get(endpoint4)
//          .then(response => {
//              const crop2 = response.data;
//              setCrop2(crop2)
//          })
//          .catch(err => console.log(err ));
//     })


//   return (
//     <>

//     <h3> This is a crop</h3>
//     <h3>  This crop {specificCrop.name} has an id of {specificCrop.id}</h3>
//     <h3> 📦 You have removed {specificCropDelete.name} crop from your inventory  </h3>
// {/* 
//     { <ul>

//         {
//             crops.map( crop =>  
                        
//             <li key = {crop.id}>   
//                     {`Name: ${crop.name},  Price: ${crop.price}, Stock: ${crop.stock} Soil Types: ${crop.soilTypes} Soil Effects: ${crop.soilEffects} Grow Time: ${crop.growTime}` }
//             </li> 
      
//             )
//         }


//     </ul> } */}

//     <h3> patch : {crop2.name}  </h3>




    
//     </>
//   )
}

export default Crop





