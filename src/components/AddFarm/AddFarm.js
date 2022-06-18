import { useState } from "react";
import axios from 'axios';
import "./AddFarm.css";


const AddFarm = ( {farmsList, setFarmsList}) => {

    const [farmName, setFarmName] = useState('');

    const handleFarmNameChange = event => setFarmName(event.target.value);

    const handleAddFarmSubmit = event => {
        event.preventDefault();

        axios.post('http://127.0.0.1:8080/farms/addFarm', null, { params: {farmName}})
            .then(res => {
                console.log(res);
                let newFarm = res;
                setFarmsList(listedFarms => [...listedFarms, newFarm]);
            })
            .catch( (err) => console.log(err) )

        
        setFarmName('');

        const inputField = document.querySelector(".add-form-input");
        inputField.value = inputField.innerText("");

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