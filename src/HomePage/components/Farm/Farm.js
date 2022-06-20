import { useState } from "react";
import farmHouseClipart from "../../images/farm-clipart-transparent-20.png";
import DeleteFarm from "../DeleteFarm.js/DeleteFarm";
import FarmHeader from "../FarmHeader/FarmHeader";
import NewDay from "../NewDay/NewDay";
import "./Farm.css";
import Fields from "../Field.js/Field";


const Farm = ( {farmName, farmFunds, farmDate, farmId} ) => {

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
                    <Fields />
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                    <div className="field"></div>
                </section>

            </section>

            <section className="farmFooter">
                <h3>Add Field: xxx</h3>
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