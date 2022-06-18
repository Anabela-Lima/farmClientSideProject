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

    }


  return (
    <>
        <form className="add-farm-form" onSubmit={handleAddFarmSubmit}>
            <label>Farm Name</label>
            <input type="text" name="farm-name" onChange={handleFarmNameChange} />
            <button type="submit">Add Farm 🌾</button>
        </form>
    </>
  )
}

export default AddFarm