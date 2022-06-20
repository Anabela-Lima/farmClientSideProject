import FarmContainer from "./containers/FarmContainer";
import PlaySound from './Sound/sound';
import Farm from "./components/Farm/Farm";
import { useState } from "react";


const Home = () => {

  

  return (
    <>

      <PlaySound />
      <FarmContainer />
    
    </>
    
  )
}

export default Home