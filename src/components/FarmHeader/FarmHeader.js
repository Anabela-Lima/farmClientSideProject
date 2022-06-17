

const FarmHeader = ( { money, setMoney, farmName, farmDate } ) => {

    

  return (
    <>

        <section className="farmHeader">
                <h3>{farmName}</h3>
                <h3>Money: £{money}</h3>
                <h3>Days Passed: {farmDate}</h3>
        </section>
    
    </>
  )
}

export default FarmHeader