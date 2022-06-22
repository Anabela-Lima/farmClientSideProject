import FarmList from "../components/FarmList/FarmList";
import { useState } from "react";
import "./FarmContainer.css";
import AddFarm from "../components/AddFarm/AddFarm";
import PlaySound from "../Sound/sound";


const FarmContainer = () => {

  const [farmsList, setFarmsList] = useState([]);

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