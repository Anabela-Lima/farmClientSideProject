import FarmList from "../components/FarmList/FarmList";
import Farm from "../components/Farm/Farm"
import "./FarmContainer.css";
import AddFarm from "../components/AddFarm/AddFarm";


const FarmContainer = () => {

  return (
    <>
        <AddFarm />
        <FarmList />
    </>
  )
}

export default FarmContainer