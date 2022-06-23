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


    const getFarmIdViaName = () => {
        return new Promise ( (resolve) => {
                const farmNameConfirmed = farmsList.find( farm => farm.name === farmToSendField)
                resolve(farmNameConfirmed)
            })
    }

    const getFieldIdViaName = () => {
        return new Promise ( (resolve) => {
            const idNameConfirmed = fieldList.find( field => field.name === fieldTypeChoice )
            resolve(idNameConfirmed);
        })
    }


    const handleFieldConfirmOrder = async (event) => {
        event.preventDefault();
        console.log("1...");

        const pleaseWork = await getFarmIdViaName();
        console.log("2...");

        console.log(pleaseWork);
        console.log("3...");

        const pleaseWork2 = await getFieldIdViaName();
        console.log("4...");

        console.log(pleaseWork2);

        if (fieldName === "") {
            return alert("Please enter a name for your field 😀")
        } 

        if (pleaseWork === undefined) {
            return alert("Please select a valid farm 😀")
        } 

        if (pleaseWork2 == null) {
            return alert("Please enter a valid field type 😀")
        } 


        const idfarm = pleaseWork.id;
        const idfieldtype = pleaseWork2.id;

        axios.put(`http://127.0.0.1:8080/farms/farm/buyfield`, null, { params: {fieldName, idfieldtype, idfarm} })
            .then(result => console.log(result.data))
            .catch( err => console.log(err))

        
        alert("We're on the way 🚀")
    }


  return (
    <>
        <form id="fieldformGridCont" className='fof-labels-buttons-inputs'>


            <label className='name-field-form-label' htmlFor="">What is the name of your field?</label>

            <input  type="text" placeholder='Field name' 
                    value={fieldName}
                    className='name-field-form-input'
                    onChange={(e) => setFieldName(e.target.value)} />


            <h4 className='fieldSelector'>Which field would you like to purchase?</h4>

            <select 
                    onChange={(e) => setFieldTypeChoice(e.target.value)}
                    className='fieldSelector'
                    defaultValue={"Select a field"}
            >

            <option value="Select a field"  disabled hidden>Select a field</option>

            {
            fieldList.map( (field) => {
                return <option key={field.id} className="field-options">{field.name}</option>
            }
            )}
               
            </select>


            <h4 className='deliverGoodsToFarm'>Which farm should we deliver the goods to?</h4>

            <select
                    className='deliverGoodsToFarm'
                    onChange={(e) => setFarmToSendField(e.target.value)}
                    defaultValue="Select a farm">
                    <option value="Select a farm" disabled hidden>Select a farm</option>  
                    
                {
                farmsList.map(farm =>
                    <option key={farm.id}
                            farmid={farm.id}
                            className="dd-option">{farm.name}</option>
                )}
            </select>

            <div className='reset-order-btn confirm-or-reset'></div>
            <button className='confirm-order-btn confirm-or-reset' type="button" onClick={handleFieldConfirmOrder}>Confirm Order ✅</button>
            
            
        </form>
    </>
  )
}
