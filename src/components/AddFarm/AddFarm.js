import { useState } from "react";
import axios from 'axios';


const AddFarm = () => {

    const [farmName, setFarmName] = useState('');

    const handleFarmNameChange = event => setFarmName(event.target.value);

    const handleAddFarmSubmit = event => {
        event.preventDefault();

        axios.post('http://127.0.0.1:8081/farms/addFarm', null, { params: {farmName}})
            .then(res => console.log(res))
            .catch( (err) => console.log(err) )
    }


  return (
    <>
        <form onSubmit={handleAddFarmSubmit}>
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