import DeleteField from "../DeleteField.js/DeleteField.js";
import "./FieldList.css";


const FieldList = ( {ownedFields} ) => {


    const getCropName = (field) => {
        if (field.crop) {
            return field.crop.name
        } else {
            return "No Crop";
        }
    }



  return (
    <>
        <section className="fields-section">

            {ownedFields.length > 0 ? <ul id="list-fields-with-info">
                
                {ownedFields.map( (field, index) => 
                            <li key={index} className="field-sections-details">
                                <DeleteField fieldId={field.id} />
                                <div id="field" className="field">
                                    {field.crop === null ? <></> : <span id="wheat-emoji" className="wheat-emoji">🌾</span>}
                                </div>
                                <ul>
                                    <li className="field-name">{field.name}</li>
                                    <li className="minor-field-details">{field.soilType}</li>
                                    <li className="minor-field-details">{field.fieldType.name}</li>
                                    <li>{getCropName(field)}</li>
                                </ul>
                            </li>)}
            
                </ul> : <p className="no-farms-marketplace-prompt">You have no fields - head to the marketplace and we'll deliver some fields to your farm! 🚚💨</p>}
                
        </section>
    </>
  )
}

export default FieldList