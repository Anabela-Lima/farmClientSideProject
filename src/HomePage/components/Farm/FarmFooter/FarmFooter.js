import NewDay from "../../NewDay/NewDay";
import DeleteFarm from "../../DeleteFarm.js/DeleteFarm";
import AddCrop from "./AddCrop/AddCrop";
import { useEffect, useState } from "react";
import axios from "axios";

const FarmFooter = ( {farmId, farmDaysPassed, setFarmDaysPassed, money, setMoney, ownedFields}) => {

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
        <section className="farmFooter">
                
                <AddCrop ownedFields={ownedFields} allCropsAvailable={allCropsAvailable}/>
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