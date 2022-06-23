import FarmContainer from "./containers/FarmContainer";


  
const Home = ( {farmsList, setFarmsList} ) => {
  return (
    <>

      <FarmContainer farmsList={farmsList} setFarmsList={setFarmsList} />
    
    </>
    
  )
}

export default Home