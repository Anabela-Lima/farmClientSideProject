

const FarmHeader = ( { money, setMoney } ) => {

    

  return (
    <>

        <section className="farmHeader">
                <h3>Farm One</h3>
                <h3>Money: £{money}</h3>
                <h3>Date: Day 1</h3>
        </section>
    
    </>
  )
}

export default FarmHeader