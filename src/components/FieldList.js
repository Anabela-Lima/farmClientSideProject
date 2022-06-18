
import { useEffect } from "react";
import axios from 'axios'; 
import Farm from "../Farm/Farm";


const FieldList = ( {fieldList, setFieldList} ) => {


            useEffect( () => { axios.get('http://127.0.0.1:8080/fields')
            .then(res => {
        
                const fieldList = res.data;
            setFieldList(fieldList);
             }).catch(err => console.log(err));

  });

  return (
    <>
        
        <ul>
          {fieldList.map(field =>
              <li key={field.id}><Farm 
                    fieldName={field.name}
                    fieldTimeLeft={field.timeLeft}
                    fieldSoilType={field.soilType}
                    fieldFieldType={field.fieldType}
                    fieldCrop={field.crop}
                    fieldFarm={field.farm}
                /></li>
              )
          }
        </ul>
        
    </>
  )
}

export default FieldList;