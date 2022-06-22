import { useState, useEffect } from "react";
import farmHouseClipart from "../../images/farm-clipart-transparent-20.png";
import FarmHeader from "../FarmHeader/FarmHeader";
import "./Farm.css";
import FarmFooter from "./FarmFooter/FarmFooter";
import FieldList from "./FieldList/FieldList";
import axios from "axios";


const Farm = ( {farmName, farmFunds, farmDate, farmId, ownedFields} ) => {

    const [money, setMoney] = useState(farmFunds);
    const [farmDaysPassed, setFarmDaysPassed] = useState(farmDate);
    const [fieldCropName, setFieldCropName2] = useState("");

    const [allCropsAvailable, setAllCropsAvailable] = useState([]);

    useEffect( () => {

        axios.get('http://127.0.0.1:8080/crops/crops')
            .then( res => {
                setAllCropsAvailable(res.data);
            })
            .catch(err => console.log(err));

    })

    

  return (
    <>
        <section className="farm-container">

            <FarmHeader 
                farmName={farmName} 
                money={money}
                setMoney={setMoney}
                farmDate={farmDate}
            />

            <section className="main-farm-and-fields">

                <section className="farmNameImage">
                    <img src={farmHouseClipart} alt="Your farmhouse" height="300px" width="300px"/>
                </section>

                <FieldList ownedFields={ownedFields}
                           fieldCropName={fieldCropName}
                           setFieldCropName={setFieldCropName2}/>

            </section>

            <FarmFooter farmId={farmId}
                            farmDaysPassed={farmDaysPassed}
                            setFarmDaysPassed={setFarmDaysPassed}
                            money={money}
                            setMoney={setMoney}
                            ownedFields={ownedFields}
                            setFieldCropName1={setFieldCropName2}
                            allCropsAvailable={allCropsAvailable}
                            />

        </section>
    </>
  )
}

export default Farm