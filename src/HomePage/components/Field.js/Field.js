import React from 'react'
import axios from 'axios'; 


const Field = ({fieldName, fieldTimeLeft, fieldSoilType, fieldFieldType, fieldCrop, fieldFarm}) => {

  return (

    <>
    <h2>Hi</h2>
        <div>
            <h4>{fieldName}</h4>
            {/* <p>Estate: {chocolate.estate.name}, {chocolate.estate.country}</p>
            <p>Cocoa percentage: {chocolate.cocoaPercentage}%</p>
            <button onClick={handleDeleteChocolate}>Delete Chocolate</button>
            <hr /> */}
        </div>
    
    </>
  )
}

export default Field;