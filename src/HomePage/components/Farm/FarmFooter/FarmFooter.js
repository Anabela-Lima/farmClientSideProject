import NewDay from "../../NewDay/NewDay";
import DeleteFarm from "../../DeleteFarm.js/DeleteFarm";
import AddCrop from "./AddCrop/AddCrop";
import "./FarmFooter.css";

const FarmFooter = ( {farmId, setFarmDaysPassed1, money, setMoney, ownedFields, setFieldCropName1, allCropsAvailable}) => {

    

  return (
    <>
        <section className="farmFooter">
                
          <AddCrop ownedFields={ownedFields} 
                  allCropsAvailable={allCropsAvailable}
                  setFieldCropName0={setFieldCropName1}/>

          <section className="newday-deletefarm">

            <NewDay farmId={farmId}
                    setFarmDaysPassed2={setFarmDaysPassed1}
                    money={money}
                    setMoney={setMoney} />

            <DeleteFarm farmId={farmId} />

          </section>

        </section>
    </>
  )
}

export default FarmFooter