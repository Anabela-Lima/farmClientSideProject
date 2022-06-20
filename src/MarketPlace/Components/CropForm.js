import React, { useEffect } from 'react'
import "./CropForm.css";
import { useState } from 'react';
import axios from 'axios';

const CropForm = ( {cropType, farmsList} ) => {

  const [quantity, setQuantity] = useState(0);
  const [cropList, setCropList] = useState([]);

  const handleIncreaseQuantity = () => {
      setQuantity(quantity + 1);
  }

  const handleDecreaseQuantity = () => {

      if (quantity > 0) {
          setQuantity(quantity - 1);
      } else {
          alert(`Can't sell -1 ${cropType}'s!`)
      }
  }

  useEffect(  () => {

    axios.get('http://127.0.0.1:8080/crops/crops')
      .then( res => {
        const cropList = res.data;
        setCropList(cropList);
      })
      .catch( err => console.log(err))

  })



  return (
    <>
      <form className='fof-labels-buttons-inputs'>
            <h4>Which crop would you like to purchase?</h4>

            <select placeholder='Pick your crop!'>
            {
              cropList.map( (crop) => {
                return <option key={crop.id}>{crop.name}</option>
              }
              )}
            </select>

            <h4>How many crops shall we deliver?</h4>
            <button type="button" onClick={handleDecreaseQuantity}>-</button>
            <input type="text" name="tiny-field-quantity" placeholder="Quantity" value={quantity}/>
            <button type="button" onClick={handleIncreaseQuantity}>+</button>

            <h3>Which farm should we deliver the goods to?</h3>
              <select placeholder="Pick your farm!">
                <option hidden disabled>Pick your farm!</option>
                {
                  farmsList.map(farm =>
                    <option key={farm.id}>{farm.name}</option>
                )}
              </select>
              <button type="button">Confirm Order ✅</button>
      </form>
    </>
  )
}

export default CropForm