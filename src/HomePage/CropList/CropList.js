import { useEffect } from "react";
import axios from 'axios'; 
import Farm from "./Farm";



const CropList = ( {cropList, setCropList} ) => {

        useEffect( () => { axios.get('http://127.0.0.1:8080/crops')
        .then(res => {const cropList = res.data;
            setCropList(cropList);
         }).catch(err => console.log(err)); 
});

return (
    <>
     <ul>
          {cropList.map(crop =>
              <li key={crop.id}><Farm 
                    cropId={crop.id}
                    cropName={crop.name}
                    cropPrice={crop.price}
                    cropStock={crop.stock}
                    cropSoilType={crop.soilType}
                    cropSoilEffects={crop.soilEffects}
                    cropGrowTime={crop.growtime}
                    cropField={crop.field}
                    cropSellPrice={crop.sellPrice}
                /></li>
              )
          }
        </ul>
    
    </>
)



}

export default CropList;