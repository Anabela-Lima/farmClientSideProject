import { useEffect, useState } from "react";
import axios from 'axios'; 
import Farm from "../Farm/Farm";


const FarmList = () => {

  const [farmsList, setFarmsList] = useState([]);

  useEffect( () => {

    axios.get('http://127.0.0.1:8081/farms')
      .then(res => {
        const farmsList = res.data;
        setFarmsList(farmsList);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
        
        <Farm />
        <Farm />

        <ul>
          {
            farmsList.map(farm =>
              <li key={farm.id}>{farm}</li>
              )
          }
        </ul>
        
    </>
  )
}

export default FarmList