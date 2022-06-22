import FarmList from "../components/FarmList/FarmList";
import { useState, useEffect } from "react";
import "./FarmContainer.css";
import AddFarm from "../components/AddFarm/AddFarm";
import PlaySound from "../Sound/sound";
import axios from "axios";


const FarmContainer = () => {

  const [farmsList, setFarmsList] = useState([]);

  useEffect( () => {

    axios.get('http://127.0.0.1:8080/farms/farms')
      .then(res => {
        const farmsList = res.data;
        setFarmsList(farmsList);
      })
      .catch(err => console.log(err));

  });

  return (
    <> 
      <main>
          <div className="addTask-Sound">

            <PlaySound />
            <AddFarm />

          </div>
          
          <FarmList farmsList={farmsList} setFarmsList={setFarmsList} />
      </main>
    </>
  )
}

export default FarmContainer