import axios from "axios";
import { useEffect, useState } from "react";
import Farm from "./Farm/Farm";




const  FilterFarms = (searchTerm) => {

    // const [farm, setFarm] = useState(Farm)
    const [filteredFarms, setFilteredFarms] = useState([])
    const[fullFarmList, setFullFarmList] = useState([])
    

    useEffect(() => {
        axios.get("http://127.0.0.1:8080/farms/farms")
        .then( res => {
            const farmsList = res.data;
            setFullFarmList(farmsList);
        }).catch( err => console.log(err))


        }    )


    console.log("SEARCH TERM", searchTerm); //print what the name being searched 
    const filtered = fullFarmList.filter(farm => farm.farmName.includes(searchTerm));
    setFilteredFarms(filtered)

    


return(
    <>
 
    {/* want to return the single farm with the matching name */}
    {/* farm container?? */}
    {/* <Header filterFarms={FilterFarms}/>
    <Farm farm={filteredFarms ? filteredFarms : Farm}/> */}

  <ul>

    

{/* <form className="search" role="search" onSubmit={0}>
<label className="search__label" htmlFor="search__input">Search for your farm:</label>
<input type="search" placeholder="Enter farm name..." id="search__input" onChange={event => setSearchTerm(event.target.value)}></input>
<input type="submit" value="Submit" className="search__submit"/>
</form>        */}
    

  </ul>
    
    </>
)

  }
  export default FilterFarms;