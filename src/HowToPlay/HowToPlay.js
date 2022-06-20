import React from 'react';
import './HowToPlay.css';
import farmer from './htp.gif';
import dance from './dancing.gif';

const HowToPlay = () => {
    return (
    
    <div className='HowToPlayText'>
<img src={dance} alt="farmer gif" className='Gif1'></img>
{/* trying to centre gif but ??? */}
    
    <br/><h1 className='Title'>Welcome Farmer, are you ready to create your own farm?
    
    </h1> <br/>

    <h3>First things first, decide what you want to name your farm</h3> <br/>

    
    <h3>Start by selecting a farm name</h3> <br/>

    <h3>Plant some seeds</h3> <br/>

    <h3>Harvest your crops</h3> <br/>

    <h3>Create more farms for endless fun!</h3> <br/>
    </div>
//    just real basic for now, add images/screenshots

    )
}

export default HowToPlay;


