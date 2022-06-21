import NewDay from "../../NewDay/NewDay";
import DeleteFarm from "../../DeleteFarm.js/DeleteFarm";
import AddCrop from "./AddCrop/AddCrop";

const FarmFooter = ( {farmId, farmDaysPassed, setFarmDaysPassed, money, setMoney}) => {
  return (
    <>
        <section className="farmFooter">
                
                <AddCrop />
                <NewDay farmId={farmId}
                        farmDaysPassed={farmDaysPassed}
                        setFarmDaysPassed={setFarmDaysPassed}
                        money={money}
                        setMoney={setMoney} />
                <DeleteFarm farmId={farmId} />
            </section>
    </>
  )
}

export default FarmFooter