import axios from "axios";
import "./NewDay.css";

const NewDay = ( {farmId, farmDaysPassed, setFarmDaysPassed, money, setMoney} ) => {

    const handleNewDayClick = event => {
        event.preventDefault();


        axios.put(`http://127.0.0.1:8080/farms/newDay/${farmId}`)
            .then( res => {
                console.log(res.data);
                setMoney(money + res.data)
            })
            .catch( (err) => console.log(err))

    }



  return (
    <>
        <h3 id="new-day-tab"
            onClick={handleNewDayClick}>New Day 🌒☀️</h3>
    </>
  )
}

export default NewDay