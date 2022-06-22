

const FarmHeader = ( { money, farmName, farmDaysPassed1 } ) => {

    

  return (
    <>

        <section className="farmHeader">
                <h3>{farmName}</h3>
                <h3>Money: £{money}</h3>
                <h3>Days Passed: {farmDaysPassed1}</h3>
        </section>
    
    </>
  )
}

export default FarmHeader