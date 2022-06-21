import { useState } from "react";
import farmHouseClipart from "../../images/farm-clipart-transparent-20.png";
import DeleteFarm from "../DeleteFarm.js/DeleteFarm";
import FarmHeader from "../FarmHeader/FarmHeader";
import NewDay from "../NewDay/NewDay";
import DeleteField from "./DeleteField.js/DeleteField";
import "./Farm.css";

const Farm = ( {farmName, farmFunds, farmDate, farmId, ownedFields} ) => {

    const [money, setMoney] = useState(farmFunds);
    const [farmDaysPassed, setFarmDaysPassed] = useState(farmDate);

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

                <section className="fields-section">

                    <ul id="list-fields-with-info">
                        {ownedFields.map( (field, index) => {
                            return <li key={index} className="field-sections-details">
                                        <DeleteField fieldId={field.id} />
                                        <div className="field">
                                        </div>
                                        <ul>
                                            <li className="field-name">{field.name}</li>
                                            {/* <li>Days Left: {field.timeLeft}</li> */}
                                            <li className="minor-field-details">{field.soilType}</li>
                                            <li className="minor-field-details">{field.fieldType.name}</li>
                                            <li>Crop</li>
                                        </ul>
                                    </li>
                        })}
                    </ul>

                </section>

            </section>

            <section className="farmFooter">
                <h3>Add Crop: xxx</h3>
                <NewDay farmId={farmId}
                        farmDaysPassed={farmDaysPassed}
                        setFarmDaysPassed={setFarmDaysPassed}
                        money={money}
                        setMoney={setMoney} />
                <DeleteFarm farmId={farmId} />
            </section>

        </section>
    </>
  )
}

export default Farm