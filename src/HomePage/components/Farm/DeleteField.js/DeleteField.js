import axios from "axios"


const DeleteField = ( {fieldId} ) => {

    const handleFieldDelete = event => {
        event.preventDefault();

        axios.delete(`http://127.0.0.1:8080/fields/deleteField/${fieldId}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

    }

  return (
    <>
        <button className="delete-field" onClick={handleFieldDelete}>Delete Field ❌</button>
    </>
  )
}

export default DeleteField