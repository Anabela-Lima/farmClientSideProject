import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



// const CInventory = () => {



//   let endpoint2= "http://localhost:8080/crops/crops/"; 
//   let inventorySection = document.querySelector("#cropInventory")
//   let paragraph;
//   let addP=() =>{ return paragraph = document.createElement('p')}    



//     const [crops, setCrops] = useState([]);



//   return (
   
//     <section>
      
//        <div id = "cropInventory">  </div>
       
       

      //  <form id= "new-crop-form">
      //     <div>
      //       <input id= "userInput" type="text" placeholder= "search Inventory" name= "user-input"/>
      //       <input onClick={"hi"} id="submitButton" type="submit" value="search-Inventory"></input>
      //     </div>

      //  </form>


    

//     </section>
  


//   )
// }



// const CInventory = () => {
//   const [data, setData] = useState({data:[]});
//   const [isLoading, setIsLoading] = useState(false);
//   const [err, setErr] = useState('');

//   const handleClick = async () => {
//     setIsLoading(true);
//     try {
//       const {data} = await axios.get('http://localhost:8080/crops/crops/', {
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       console.log('data is: ', JSON.stringify(data, null, 4));

//       setData(data);
//     } catch (err) {
//       setErr(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   console.log(data);

//   return (
//     <div>
//       {err && <h2>{err}</h2>}

//       <button onClick={handleClick}>Fetch data</button>

//       {isLoading && <h2>Loading...</h2>}

//       {data.data.map(crop => {
//         return (
//           <div key={crop.id}>
//             <h2>{crop.name}</h2>
//             <h2>{crop.price}</h2>
//             <h2>{crop.stock}</h2>
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// };


const CInventory= () => {


  const cropById = (id) => {

    id= document.getElementById("user-input").value;
    let endpoint1= `http://localhost:8080/crops/crop/${id}/`
    let inventorySection = document.querySelector("#cropInventory")
    
    let fetchCrop = fetch(endpoint1);
    fetchCrop.then(response => {
      return response.json()
      .then((data) => {
        console.log(data)
        inventorySection.innerHTML = `Crop ${data[0].name} price: ${data[0].price} <br></br>` 
        
      })
    })


  }

  // Filter Function

  function filter(){
    
   let inventorySection = document.querySelector("#cropInventory")
   inventorySection.innerHTML= ""           
    let userInput= document.querySelector("#user-input").value   
   cropById(userInput) 
    
}

  
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get('http://localhost:8080/crops/crops/', {
        headers: {
          Accept: 'application/json',
        },
      });

      console.log('data is: ', JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    
    
    <div>


      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h2>Loading...</h2>}

      {data.data.map(person => {
        return (
          <div key={person.id}>
            <h2>{person.email}</h2>
            <h2>{person.first_name}</h2>
            <h2>{person.last_name}</h2>
            <br />
          </div>
        );
      })}
    </div>
  );
};







export default CInventory