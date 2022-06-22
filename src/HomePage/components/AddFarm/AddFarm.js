import { useState } from "react";
import axios from 'axios';
import "./AddFarm.css";


const AddFarm = ( {farmsList, setFarmsList}) => {

    const [farmName, setFarmName] = useState('');

    const handleFarmNameChange = event => setFarmName(event.target.value);

    const clearInput = (inputField) => {
        inputField.value = inputField.innerText = "";
    }

    const handleAddFarmSubmit = event => {
        event.preventDefault();

        if (farmName === "") {
            return alert("Please enter a name for your farm 🚀")
        }

        axios.post('http://127.0.0.1:8080/farms/addFarm', null, { params: {farmName}})
            .then(res => {
                console.log(res);
                let newFarm = res;
                setFarmsList(listedFarms => [...listedFarms, newFarm]);
            })
            .catch( (err) => console.log(err) )

        alert(`You have created a farm called ${farmName}... Moo 🐄`)

        
        setFarmName('');
        clearInput(document.querySelector(".add-form-input"));


    }


  return (
    <>
        <section className="add-farm-form-section">
            <form className="add-farm-form" onSubmit={handleAddFarmSubmit}>
                <label>Farm Name</label>
                <input className="add-form-input" type="text" name="farm-name" onChange={handleFarmNameChange} />
                <button type="submit">Add Farm 🌾</button>
            </form>
        </section>
    </>
  )
}

export default AddFarm