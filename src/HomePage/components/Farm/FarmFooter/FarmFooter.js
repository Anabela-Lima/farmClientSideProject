import NewDay from "../../NewDay/NewDay";
import DeleteFarm from "../../DeleteFarm.js/DeleteFarm";
import AddCrop from "./AddCrop/AddCrop";
import "./FarmFooter.css";

const FarmFooter = ( {farmId, farmDaysPassed, setFarmDaysPassed, money, setMoney, ownedFields, setFieldCropName1, allCropsAvailable}) => {


  return (
    <>
        <section className="farmFooter">
                
          <AddCrop ownedFields={ownedFields} 
                  allCropsAvailable={allCropsAvailable}
                  setFieldCropName0={setFieldCropName1}/>

          <section className="newday-deletefarm">

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

export default FarmFooter