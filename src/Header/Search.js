import axios from "axios";
import { useEffect, useState } from "react";
import FarmList from "../HomePage/components/FarmList/FarmList";
import FarmContainer from "../HomePage/containers/FarmContainer";

//get the search term
//filter through the farm list 
//return farm container that matches


const  FilterFarms = (searchTerm) => {

    
    const [filteredFarms, setFilteredFarms] = useState([])
    const[fullFarmList, setFullFarmList] = useState([])
    

    useEffect(() => {
        axios.get("http://127.0.0.1:8080/farms/farms")
        .then( res => {
            let farmsList = res.data;
            if (searchTerm) {
                farmsList = farmsList.filter(farm => farm.farmName.includes(searchTerm));
            }


            setFullFarmList(farmsList);
        }).catch( err => console.log(err))


        }    )

    console.log("SEARCH TERM", searchTerm); //print what the name being searched 

        // filter through the farm list names with the search term 
    const filtered = fullFarmList.filter(farm => farm.farmName.includes(searchTerm));

    setFilteredFarms(filtered)
    console.log(filtered);

    


return(
    <>
 
    <FarmContainer />
  
    
    </>
)

  }
  export default FilterFarms;