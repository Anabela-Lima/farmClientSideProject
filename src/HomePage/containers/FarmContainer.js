import FarmList from "../components/FarmList/FarmList";
import "./FarmContainer.css";
import AddFarm from "../components/AddFarm/AddFarm";
import PlaySound from "../Sound/sound";



const FarmContainer = ( {farmsList, setFarmsList, tellJoke} ) => {


  return (
    <> 
      <main id="main">
          <div className="addTask-Sound">

            <PlaySound />
            <AddFarm />

          </div>
          
          <FarmList farmsList={farmsList} setFarmsList={setFarmsList} tellJoke={tellJoke}/>
      </main>
    </>
  )
}

export default FarmContainer