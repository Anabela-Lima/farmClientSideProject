import axios from "axios";
import { useState } from "react";
import "./AddCrop.css";

const AddCrop = ( {ownedFields, allCropsAvailable, setFieldCropName0} ) => {

    const [fieldTypeChoice, setFieldTypeChoice] = useState('');
    const [cropTypeChoice, setCropTypeChoice] = useState('');


    // const getFieldIdViaName = () => {
    //     return new Promise ( (resolve) => {
    //         const idNameConfirmed = fieldList.find( field => field.name === fieldTypeChoice )
    //         resolve(idNameConfirmed);
    //     })
    // }

    // const getCropIdViaName = () => {
    //     return new Promise ( (resolve) => {
    //         const idNameConfirmed = cropList.find( crop => crop.name === cropTypeChoice )
    //         resolve(idNameConfirmed);
    //     })
    // }

    const handlePlantCropInField = (event) => {
        event.preventDefault();

        console.log("1...")

        console.log("Hello world!")

        // const fieldID = await getFieldIdViaName()
        const fieldID = 2;
        

        console.log("2...")

        // const cropID = await getCropIdViaName()
        const cropID = 1;
        

        console.log("3...")

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
                onChange={(e) => setCropTypeChoice(e.target.value)}
                className='add-fc-selector'
        >
        <option value="none" defaultValue={"Select a field"} disabled hidden>Select a field</option>  
        {
        ownedFields.map( (field) => {
            return <option key={field.id} className="field-options">{field.name}</option>
        }
        )}
            
        </select>




        <h4 className='plant-crop-h4'>Which crop would you like to plant?</h4>

        <select 
                onChange={(e) => setFieldTypeChoice(e.target.value)}
                className='crop-selector'
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