import farmHouseClipart from "../images/farm-clipart-transparent-20.png";

const Farm = () => {
  return (
    <>
        <section className="farm-container">

            <section className="farmHeader">
                <h3>Farm One</h3>
                <h3>Money: £1000</h3>
                <h3>Date: Day 1</h3>
            </section>

            <section className="main-farm-and-fields">

                <section className="farmNameImage">
                    <h3>Farm One</h3>
                    <img src={farmHouseClipart} alt="Your farmhouse" height="300px" width="300px"/>
                </section>

                <section className="fields-section">
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>

                   
                </section>

            </section>

            <section className="farmFooter">
                <h3>Add Field: xxx</h3>
                <h3>Add Crop: xxx</h3>
                <h3>Delete Farm: xxx</h3>
            </section>

        </section>
    </>
  )
}

export default Farm