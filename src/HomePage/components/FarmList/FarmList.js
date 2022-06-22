import { useEffect, useContext } from "react";
import axios from 'axios'; 
import Farm from "../Farm/Farm";
import noFarmsGif from "./no-farms-gif.gif";
import "./FarmList.css";
import { Context } from "../../../context";


const FarmList = ( {farmsList, setFarmsList} ) => {

    
  const [context, setContext] = useContext(Context);

  useEffect( () => {
    // if(context) {
    //   alert(context);
    // } else {
    //   alert('empty search');
    // }
    axios.get('http://127.0.0.1:8080/farms/farms')
      .then(res => {
        let farmsList = res.data;
        // if context is not empty - filter by context
        if(context){
          let filteredFarms = farmsList.filter(farm => farm.farmName.includes(context));
          // return filteredFarms if the array is not empty, all farms otherwise
          farmsList = filteredFarms.length > 0 ? filteredFarms : farmsList;
        }
        setFarmsList(farmsList);
      })
      .catch(err => console.log(err));

  });


  

  return (
    <>
        
        {farmsList.length > 0 ? <ul>
          {
            farmsList.map(farm =>
              <li key={farm.id}><Farm 
                                  farmName={farm.name}
                                  farmFunds={farm.funds}
                                  farmDate={farm.date}
                                  ownedFields={farm.ownFields}
                                  farmId={farm.id}
                                  /></li>
                                )}</ul> :
              <section className="no-farms-in-list">

                <div className="no-farms-text">
                  <h3>You have no active Farms!</h3>
                  <p>Enter a farm name and click add farm above to get started 😄</p>
                </div>
                
                <div className="should-be-you">
                  <img className="no-farms-image" src={noFarmsGif} alt="Landscape of a farm" />
                  <h4>☝️ This could be <span>you!</span> ☝️</h4>
                </div>
                

              </section>}
        
    </>
  )
}

export default FarmList