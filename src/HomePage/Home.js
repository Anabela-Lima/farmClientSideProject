import FarmContainer from "./containers/FarmContainer";


const Home = ( {farmsList, setFarmsList, tellJoke} ) => {
  return (
    <>

      <FarmContainer farmsList={farmsList} setFarmsList={setFarmsList} tellJoke={tellJoke} />
    
    </>
    
  )
}

export default Home