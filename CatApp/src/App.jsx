import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [picture, setPicture] = useState(" ")

  const pictureGeneration = () => {
    fetch(" https://api.thecatapi.com/v1/images/search").then((response) => response.json()).then((data) => {
      console.log(data)
      setPicture(data[0].url)
    });

  }

  useEffect(() => {
    pictureGeneration();
  }, [])

  return (
    <div className='container'>
      <h2>Enjoy the Picture of Cats</h2>{<br></br>}
        <img src={picture} alt="picture" />
        <div className='picture-wrapper'>
          <button id='picture-btn' onClick={pictureGeneration}>See New Cat</button>
        </div>
      </div>
  )
}

export default App
