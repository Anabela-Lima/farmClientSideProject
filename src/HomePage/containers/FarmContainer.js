import FarmList from "../components/FarmList/FarmList";
import "./FarmContainer.css";
import AddFarm from "../components/AddFarm/AddFarm";
import PlaySound from "../Sound/sound";



const FarmContainer = ( {farmsList, setFarmsList} ) => {


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