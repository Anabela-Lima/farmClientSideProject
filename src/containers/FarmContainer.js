import FarmList from "../components/FarmList/FarmList";
import { useState } from "react";
import "./FarmContainer.css";
import AddFarm from "../components/AddFarm/AddFarm";


const FarmContainer = () => {

  const [farmsList, setFarmsList] = useState([]);

  return (
    <>
        <AddFarm farmsList={farmsList} setFarmsList={setFarmsList} />
        <FarmList farmsList={farmsList} setFarmsList={setFarmsList} />
    </>
  )
}

export default FarmContainer