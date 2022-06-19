import React from 'react'
import "./CropForm.css";
import { useState } from 'react';

const CropForm = ( {cropType} ) => {

  const [quantity, setQuantity] = useState(0);

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


  return (
    <>
      <form className='fof-labels-buttons-inputs'>
            <label for="tiny-field">{cropType}</label>
            <button type="button" onClick={handleDecreaseQuantity}>-</button>
            <input type="text" name="tiny-field-quantity" placeholder="Quantity" value={quantity}/>
            <button type="button" onClick={handleIncreaseQuantity}>+</button>
            <button type="submit" value="Purchase">Purchase</button>
      </form>
    </>
  )
}

export default CropForm