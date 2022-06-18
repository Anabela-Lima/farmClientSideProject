import axios from "axios";
import "./NewDay.css";

const NewDay = ( {farmId, farmDaysPassed, setFarmDaysPassed} ) => {

    const handleNewDayClick = event => {
        event.preventDefault();

        const id = farmId;

        axios.put(`http://127.0.0.1:8080/farms/newday/${id}`)
            .then( res => {
                console.log(res);
            })
            .catch( (err) => console.log(err))

    }



  return (
    <>
        <h3 id="new-day-tab"
            onClick={handleNewDayClick}>New Day 🌒☀️ {farmId}</h3>
    </>
  )
}

export default NewDay