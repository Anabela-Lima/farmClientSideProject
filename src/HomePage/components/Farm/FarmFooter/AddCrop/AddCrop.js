import axios from "axios";
import { useState } from "react";
import "./AddCrop.css";

const AddCrop = ( {ownedFields, allCropsAvailable, setFieldCropName0} ) => {

    const [fieldTypeChoice, setFieldTypeChoice] = useState('');
    const [cropTypeChoice, setCropTypeChoice] = useState('');


    const getFIdViaName = () => {
        return new Promise ( (resolve) => {
            const getFieldID = ownedFields.find( field => field.name === fieldTypeChoice )
            console.log(fieldTypeChoice);
            console.log(ownedFields);
            resolve(getFieldID);
        })
    }

    const getCropIdViaName = () => {
        return new Promise ( (resolve) => {
            const getCropID = allCropsAvailable.find( crop => crop.name === cropTypeChoice )
            console.log(cropTypeChoice);
            console.log(allCropsAvailable);
            resolve(getCropID);
        })
    }


    const handlePlantCropInField = async (event) => {
        event.preventDefault();

        console.log("1...");

        const fieldName = await getFIdViaName();
        
        console.log("2...")
        
        const cropName = await getCropIdViaName();
        
        console.log("3...")

        const fieldID = fieldName.id;
        const cropID = cropName.id;
        

        axios.patch(`http://127.0.0.1:8080/fields/CropInField`, null, { params: {fieldID, cropID}})
            .then( result => {
                console.log(result.data)
                console.log(result.data.name)
                setFieldCropName0(result.data.name);
                console.log(result.data.name)
            })
            .catch( err => console.log(err) )

        alert("Planted!")
    }

  return (
    <>
      <section id="patch-fc-grid">

        <h4 className='add-2field-h4'>Which field would you like to plant in?</h4>

        <select 
                onChange={(e) => setFieldTypeChoice(e.target.value)}
                className='add-fc-selector'
                defaultValue={"Select a field"}
        > 
        <option value="Select a field" defaultValue={"Select a field"} disabled hidden>Select a field</option>  
        {
        ownedFields.map( (field) => {
            return <option key={field.id} className="field-options">{field.name}</option>
        }
        )}
            
        </select>




        <h4 className='plant-crop-h4'>Which crop would you like to plant?</h4>

        <select 
                onChange={(e) => setCropTypeChoice(e.target.value)}
                className='crop-selector'
                defaultValue={"none"}
        >
        <option value="none" defaultValue={"Select a crop"} disabled hidden>Select a crop</option>  
        {
        allCropsAvailable.map( (crop, index) => {
            return <option key={index} className="field-options">{crop.name}</option>
        }
        )}
            
        </select>




        <button onClick={handlePlantCropInField}
                className="confirm-crop-plant">Plant Me!</button>

      </section>
    </>
  )
}

export default AddCrop