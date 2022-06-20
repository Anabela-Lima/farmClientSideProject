import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const FieldForm = ( {fieldType, farmsList} ) => {

    const [quantity, setQuantity] = useState(0);
    const [fieldList, setFieldList] = useState([]);

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

    useEffect( () =>  {

        axios.get('http://127.0.0.1:8080/fieldtype/fieldtypes')
            .then( res => {
                const fieldList = res.data;
                setFieldList(fieldList);
            })
            .catch( err => console.log(err) )

    });


  return (
    <>
        <form className='field-order-form-labels-buttons-inputs'>
            <h4>Which field would you like to purchase?</h4>

            <select placeholder='Pick your field!'>
            {
            fieldList.map( (field) => {
                return <option key={field.id}>{field.name}</option>
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
