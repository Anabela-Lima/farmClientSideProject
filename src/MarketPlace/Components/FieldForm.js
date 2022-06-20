import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./FieldForm.css";

export const FieldForm = ( {farmsList} ) => {

    const [fieldList, setFieldList] = useState([]);

    const [fieldName, setFieldName] = useState('');
    const [fieldTypeChoice, setFieldTypeChoice] = useState('');
    const [farmToSendField, setFarmToSendField] = useState('');

    useEffect( () =>  {

        axios.get('http://127.0.0.1:8080/fieldtype/fieldtypes')
            .then( res => {
                const fieldList = res.data;
                setFieldList(fieldList);
            })
            .catch( err => console.log(err) )

    });


    const handleFieldConfirmOrder = async event => {
        event.preventDefault();

        const idfarm = 1;
        const idfieldtype = 1;

        axios.put(`http://127.0.0.1:8080/farms/farm/buyfield`, null, { params: {fieldName, idfieldtype, idfarm} })
            .then(result => console.log(result.data))
            .catch( err => console.log(err))
    }


  return (
    <>
        <form id="fieldformGridCont" className='fof-labels-buttons-inputs'>

            <div className='name-field-form'>
                <label htmlFor="">What is the name of your field?</label>

                <input type="text" placeholder='Field name' 
                        value={fieldName}
                        onChange={(e) => setFieldName(e.target.value)} />
            </div>

            <div className='fieldSelector'>

                <h4>Which field would you like to purchase?</h4>

                <select placeholder='Pick your field!'
                        onChange={(e) => setFieldTypeChoice(e.target.value)}
                >
                {
                fieldList.map( (field) => {
                    return <option key={field.id}>{field.name}</option>
                }
                )}
                </select>

            </div>

            
            <div className='deliverGoodsToFarm'>

                <h4>Which farm should we deliver the goods to?</h4>

                <select placeholder="Pick your farm!"
                        onChange={(e) => setFarmToSendField(e.target.value)}>
                    <option hidden disabled>Pick your farm!</option>
                    {
                    farmsList.map(farm =>
                        <option key={farm.id}>{farm.name}</option>
                    )}
                </select>

            </div>

            <div className='confirm-or-reset'>

                <button className='confirm-order-btn' type="button" onClick={handleFieldConfirmOrder}>Confirm Order ✅</button>
                <button className='reset-order-btn' type="button" onClick={0}>Reset Form 🔄</button>
            </div>
            
        </form>
    </>
  )
}
