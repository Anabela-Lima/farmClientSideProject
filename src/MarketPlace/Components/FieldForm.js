import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./FieldForm.css";

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
        <form id="fieldformGridCont" className='fof-labels-buttons-inputs'>

            <div className='fieldSelector'>

                <h4>Which field would you like to purchase?</h4>

                <select placeholder='Pick your field!'>
                {
                fieldList.map( (field) => {
                    return <option key={field.id}>{field.name}</option>
                }
                )}
                </select>

            </div>
            

            <div className='fieldQuantityInput'>

                <h4>How many fields shall we deliver?</h4>

                <div>
                    <button type="button" onClick={handleDecreaseQuantity}>-</button>
                    <input type="text" name="tiny-field-quantity" placeholder="Quantity" value={quantity}/>
                   <button type="button" onClick={handleIncreaseQuantity}>+</button>
                </div>
               
            </div>

            
            <div className='deliverGoodsToFarm'>

                <h4>Which farm should we deliver the goods to?</h4>

                <select placeholder="Pick your farm!">
                    <option hidden disabled>Pick your farm!</option>
                    {
                    farmsList.map(farm =>
                        <option key={farm.id}>{farm.name}</option>
                    )}
                </select>

            </div>

            <div className='confirm-or-reset'>

                <button className='confirm-order-btn' type="button">Confirm Order ✅</button>
                <button className='reset-order-btn' type="button">Reset Form 🔄</button>
            </div>
            
        </form>
    </>
  )
}
