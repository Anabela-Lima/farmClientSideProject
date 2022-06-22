import React from 'react';
import './HowToPlay.css';
import dance from './dancing-happy.gif';
import name from './nameyourfarm.gif';
import fieldadd from './addField.gif';


const HowToPlay = () => {
    return (
    

    <section className="HowToPlay-container">
      {/* <img src={dance} alt="dancing farm img" id="HowToPlayimg"></img> */}
      
      <div className="HowToPlayText">
              <h1> Welcome Farmers</h1>
              <h1> are you ready to create your own farm?</h1>
            
              <h3>Start by selecting a farm name</h3>
<img src={name} alt="dancing farm img" id="Namegif"></img>
              <h3>Pick the right field for your new farm</h3>

              <img src={fieldadd} alt="dancing farm img" id="Fieldgif"></img>

              <h3>Harvest and sell your crops to earn some money!</h3>

          
              <h3>Create more farms for endless fun!</h3>

    </div>

    </section>
    )
}


export default HowToPlay;


