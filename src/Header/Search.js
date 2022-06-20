import { useState } from "react";
import Farm from "../HomePage/components/Farm/Farm";





const  filterFarms = (searchTerm) => {

const [farm, setFarm] = useState({Farm});
const [filteredFarms, setfilteredFarms] = useState({});



    console.log("SEARCH TERM", searchTerm);
    const filtered = Farm.filter(farm => farm.farmName.toLowerCase().includes(searchTerm.toLowerCase()));
    setfilteredFarms(filtered)

return(
    <>
    <h1>Hi Yo have searched correctly!</h1>
    </>
)

  }
  export default filterFarms;