import { FieldForm } from "./Components/FieldForm";
import "./MarketPlace.css";


const MarketPlace = ({farmsList}) => {

  return (
    <>
      <div className="background-styling">
      <section className="marketplace-main">

        <h1 className="marketplace-welcome">Welcome to the Farm Tycoon Market Place!</h1>
        <p>Please use the order form below, so we can send fields to your farms</p>

        <section className="crop-field-orderform">

            <h2>Farm Tycoon field Order Form</h2>

            <div className="crop-field-section-container">

              <section className="fields-order-form">

                <FieldForm farmsList={farmsList}/>

              </section>

            </div>

        </section>

      </section>
      </div>
    </>

  )
}

export default MarketPlace