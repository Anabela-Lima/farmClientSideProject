import { useState } from "react";
import axios from 'axios';
import "./AddFarm.css";


const AddFarm = ( {farmsList, setFarmsList}) => {

    const tellJoke = () => {

        const randNumber = Math.floor(Math.random() * 5);
    
        switch(randNumber) {
    
          case 1:
            alert("What's black and white and eats like a horse?");
            alert("A ZEBRA! 🦓");
            break;
    
          case 2:
            alert("Where do horses go when they're sick?");
            alert("The HORSEpital! 🐎🏥")
            break;
    
          case 3:
            alert("What kind of things does a farmer talk about when they are milking cows?");
            alert("UDDER nonsense 🤥")
            break;
    
          case 4:
            alert("What noise does the GOAT make?");
            alert("Noot Noot 🐧")
            break;
    
          case 5:
            alert("Which farm animal is the fattest?");
            alert("Joe Mama! 🤮")
            break;
    
          default:
            alert("Which farm animal is the fattest?");
            alert("Joe Mama!")
            
        }
    
      }

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
        tellJoke()

        
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