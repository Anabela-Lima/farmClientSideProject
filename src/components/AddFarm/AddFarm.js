import { useState } from "react";
import axios from 'axios';


const AddFarm = () => {

    const [farmName, setFarmName] = useState('');

    const handleFarmNameChange = event => setFarmName(event.target.value);

    const handleAddFarmSubmit = event => {
        event.preventDefault();

        const farm = {
            "farmName": farmName,
        }

        axios.post('http://127.0.0.1:8081/addFarm', farm)
            .then(res => console.log(res))
            .catch( (err) => console.log(err) )
    }


  return (
    <>
        <form onAddFarmSubmit={handleAddFarmSubmit}>
            <label>
                Farm Name
                <input type="text" name="farm-name" onChange={handleFarmNameChange} />
            </label>

            <button type="submit">Add Farm!</button>
        </form>
    </>
  )
}

export default AddFarm