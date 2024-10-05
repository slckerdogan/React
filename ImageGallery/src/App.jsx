import './App.css'
import { useState } from 'react'
import { cars } from './data'

function App() {

  const [selectedImage, setSelectedImage] = useState(cars[0])
  return (
    <div className='container'>
      <div className='app'>
        <img src={selectedImage} alt="image is not uploaded" />
      </div>
      <div>
        {cars.map((car, index) => (
          <img key={index} src={car} alt='car'
            onClick={() => setSelectedImage(car)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
