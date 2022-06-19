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

                <FieldForm fieldType={"Tiny Field"} />
                <FieldForm fieldType={"Small Field"} />
                <FieldForm fieldType={"Medium Field"} />
                <FieldForm fieldType={"Large Field"} />
                <FieldForm fieldType={"Huge Field"} />
                <FieldForm fieldType={"Small Beach"} />
                <FieldForm fieldType={"Beach"} />

              </section>

              <section className="crops-order-form">
                <h3>Crops</h3>

                <CropForm cropType={"Corn 🌽"} />
                <CropForm cropType={"Rye"} />
                <CropForm cropType={"Rice 🍚"} />
                <CropForm cropType={"Sunflower 🌻"} />
                <CropForm cropType={"Lavender 💜"} />
                <CropForm cropType={"Potatoe 🥔"} />
                <CropForm cropType={"Cabbage"} />
                <CropForm cropType={"Leek"} />
                <CropForm cropType={"Tomato 🍅"} />
                <CropForm cropType={"Carrot 🥕"} />
              </section>

            </div>

            <section className="confirm-order-section">

              <h3>Which farm should we deliver the goods to?</h3>
              <select placeholder="Pick your farm!">
                <option hidden disabled>Pick your farm!</option>
                {
                  farmsList.map(farm =>
                    <option key={farm.id}>{farm.name}</option>
                )}
              </select>
              <button type="button">Confirm Order ✅</button>

            </section>

        </section>

      </section>
      
    </>

  )
}

export default MarketPlace