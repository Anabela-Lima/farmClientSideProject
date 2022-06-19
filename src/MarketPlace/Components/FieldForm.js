import React, { useState } from 'react'

export const FieldForm = ( {fieldType} ) => {

    const [quantity, setQuantity] = useState(0);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleDecreaseQuantity = () => {

        if (quantity > 0) {
            setQuantity(quantity - 1);
        } else {
            alert(`Can't sell -1 ${fieldType}'s!`)
        }
    }

  return (
    <>
        <form className='field-order-form-labels-buttons-inputs'>
            <label for="tiny-field">{fieldType}</label>
            <button type="button" onClick={handleDecreaseQuantity}>-</button>
            <input type="text" name="tiny-field-quantity" 
                   placeholder="Quantity" value={quantity}
            />
            <button type="button" onClick={handleIncreaseQuantity}>+</button>
            <button type="submit" value="Purchase">Purchase</button>
        </form>
    </>
  )
}
