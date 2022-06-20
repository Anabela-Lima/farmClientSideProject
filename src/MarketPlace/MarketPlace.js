import CropForm from "./Components/CropForm";
import { FieldForm } from "./Components/FieldForm";
import "./MarketPlace.css";
import { useState, useEffect } from "react";
import axios from "axios";

const MarketPlace = () => {

  const [farmsList, setFarmsList] = useState([]);

  useEffect( () => {

    axios.get('http://127.0.0.1:8080/farms/farms')
      .then(res => {
        const farmsList = res.data;
        setFarmsList(farmsList);
      })
      .catch(err => console.log(err));

  });


  return (
    <>

      <section className="marketplace-main">

        <h1 className="marketplace-welcome">Welcome to the *Our Farm Game* MarketPlace!</h1>
        <p>Please use the order form below, so we can send crops and fields to your farms 👨‍🌾🚜👩‍🌾</p>

        <section className="crop-field-orderform">

            <h2>*Our Farm Game* Order Form</h2>

            <div className="crop-field-section-container">

              <section className="fields-order-form">
                <h3>Fields</h3>

                <FieldForm farmsList={farmsList}/>

              </section>

              <section className="crops-order-form">
                <h3>Crops</h3>

                <CropForm farmsList={farmsList}/>

              </section>

            </div>

        </section>

      </section>
      
    </>

  )
}

export default MarketPlace