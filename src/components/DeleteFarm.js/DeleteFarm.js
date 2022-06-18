import axios from "axios";
import "./DeleteFarm.css";


const DeleteFarm = ( {farmId} ) => {

    const handleDeleteFarm = event => {
        event.preventDefault();

        axios.delete(`http://127.0.0.1:8080/farms/deleteFarm/${farmId}`)
            .then( res => console.log(res))
            .catch( err => console.log(err))

    }

  return (
    <>
        <h3 className="delete-farm-tab" onClick={handleDeleteFarm} >Delete Farm ❌</h3>
    </>
  )
}

export default DeleteFarm