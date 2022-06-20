import axios from 'axios';

const DeleteField = ( {fieldId}) => {

    const handleDeleteField = event => {
        event.preventDefault();

        

    axios.delete(`http://127.0.0.1:8080/fields/deleteField/${fieldID}`)
    .then( res => console.log(res))
    .catch( err => console.log(err))

    }

  return (
    
  )
};

export default DeleteField;