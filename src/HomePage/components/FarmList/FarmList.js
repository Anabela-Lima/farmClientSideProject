import Farm from "../Farm/Farm";
import noFarmsGif from "./no-farms-gif.gif";
import "./FarmList.css";


const FarmList = ( {farmsList, tellJoke} ) => {


  

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