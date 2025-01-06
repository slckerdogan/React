import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {

  const [picture, setPicture] = useState(" ")
  const [name, setName] = useState(" ")
  const [title, setTitle] = useState(" ")
  const [city, setCity] = useState(" ")

  const getUser = async () => {
    const response = await axios.get("https://random-data-api.com/api/v2/users?response_type=json");
    console.log(response);
    setPicture(response.data.avatar);
    setName(`${response.data.first_name} ${response.data.last_name}`)
    setTitle(response.data.employment.title);
    setCity(response.data.address.city)
  }

  useEffect(() => {
    getUser();
  }, [])
  return (
    <div className="container">
      <div className="card">
        <div className="img-container"><img src={picture} alt="picture" /></div>
        <div className="details">
          <h2>{name}</h2>
          <h3>{title}</h3>
          <h4><i className="fa-solid fa-location-dot"></i> {city}</h4>
        </div>
      </div>
      <button id="get-user-btn" onClick={getUser}>Get Random User</button>
    </div>
  )
}

export default App
