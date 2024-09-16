import React from 'react'

function Car({image,title,description}) {
  return (
    <div>
        <h3>{title}</h3>
        <img src={image} alt="car" width={"300px"}/>
        <p>{description}</p>
    </div>
  )
}

export default Car