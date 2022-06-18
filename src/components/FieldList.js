import Fields from "./Fields";


const FieldList = ({listOfFields}) => {

    const fieldsComponents = listOfFields.map((fields, index) => {
        return <Fields fields={fields} key={index}/>
    });

    return(
        <>
            {fieldsComponents}  
        </>
    )

}

export default FieldList;