import { useState } from "react";
import farmHouseClipart from "../../images/farm-clipart-transparent-20.png";
import FarmHeader from "../FarmHeader/FarmHeader";
import "./Farm.css";
import FarmFooter from "./FarmFooter/FarmFooter";
import FieldList from "./FieldList/FieldList";
import Fields from "../Field.js/Field";
import Crop from "../../FieldList/Crop";
import CInventory from  "../../FieldList/CInventory";
import CInventoryCss from  "../../FieldList/CInventoryCss.css";

const Farm = ( {farmName, farmFunds, farmDate, farmId, ownedFields} ) => {

    const [money, setMoney] = useState(farmFunds);
    const [farmDaysPassed, setFarmDaysPassed] = useState(farmDate);

    const [fieldCropName, setFieldCropName] = useState("");

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
                           setFieldCropName={setFieldCropName}/>

            </section>

            <FarmFooter farmId={farmId}
                            farmDaysPassed={farmDaysPassed}
                            setFarmDaysPassed={setFarmDaysPassed}
                            money={money}
                            setMoney={setMoney}
                            ownedFields={ownedFields}
                            setFieldCropName={setFieldCropName}
                            />

        </section>
    </>
  )
}

export default Farm