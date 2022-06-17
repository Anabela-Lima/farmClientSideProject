import { useEffect } from "react";
import axios from 'axios'; 
import Farm from "../Farm/Farm";


const FarmList = ( {farmsList, setFarmsList} ) => {


  useEffect( () => {

    axios.get('http://127.0.0.1:8081/farms/farms')
      .then(res => {
        const farmsList = res.data;
        setFarmsList(farmsList);
      })
      .catch(err => console.log(err));

  });

  return (
    <>
        
        <ul>
          {
            farmsList.map(farm =>
              <li key={farm.id}><Farm 
                                  farmName={farm.name}
                                  farmFunds={farm.funds}
                                  farmDate={farm.date}
                                  farmFields={farm.fields}/></li>
              )
          }
        </ul>
        
    </>
  )
}

export default FarmList