import React from 'react';
import './HowToPlay.css';
import name from './nameyourfarm.gif';
import money from './money.gif';
import fieldadd from './addField.gif';
import './HowToPlay.css';

const HowToPlay = () => {
    return (
    

    <section className="HowToPlay-container">
      {/* <img src={dance} alt="dancing farm img" id="HowToPlayimg"></img> */}
      
      <div className="HowToPlayText">
              
              <h1 id="welcome"> Welcome Farmers</h1>
              <h1> are you ready to create your own farm?</h1><br/>
              <div className="Spacing">
              <h3>Start by selecting a farm name</h3><br/>
                  <img src={name} alt="dancing farm img" id="Namegif"></img>
              </div>
                  
                  <div className="Spacing">
              <h3>Pick the right field for your new farm</h3><br/>
                   <img src={fieldadd} alt="dancing farm img" id="Fieldgif"></img>
                   </div>
              
             <div className="Spacing">
              <h3>Watch your crops harvest and sell them to earn some money!</h3><br/>
                <img src={money} alt="crop sales img" id="Moneygif"></img> 
                </div>
              <h3>Create more farms for endless fun!</h3>

    </div>

    </section>
    )
}


export default HowToPlay;
