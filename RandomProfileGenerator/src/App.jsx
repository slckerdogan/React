import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import React from 'react'

function App() {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState(" ");
  const [mail, setMail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [locationInfos, setLocationInfos] = useState(" ");
  const [age, setAge] = useState(" ");

  const generation = async () => {
    const response = await axios.get('https://randomuser.me/api');
    console.log(response);

    if (response.data.results[0].gender === 'female') {
      document.body.style.backgroundColor = "#ff5f96";
    }
    else {
      document.body.style.backgroundColor = '#5a72e9';
    }


    setPicture(response.data.results[0].picture.large);
    setName(`${response.data.results[0].name.first} ${response.data.results[0].name.last}`)
    setMail(response.data.results[0].email)
    setPhone(response.data.results[0].phone)
    setLocationInfos(`${response.data.results[0].location.city} ${response.data.results[0].location.country}`)
    setAge(response.data.results[0].dob.age)
  }

  useEffect(() => {
    generation();
  }, [])

  return (
    <div>
      <div className='container'>
        <div id='result'></div>{<br></br>}
        <div className='user-wrapper'>
        <img src={picture} className='large-img'/>
        <div className="data-wrapper"><h4>Name:<span>{name}</span></h4></div>
        <div className="data-wrapper"><h4>Mail:<span>{mail}</span></h4></div>
        <div className="data-wrapper"><h4>Phone:<span>{phone}</span></h4></div>
        <div className="data-wrapper"><h4>Location:<span>{locationInfos}</span></h4></div>
        <div className="data-wrapper"><h4>Age:<span>{age}</span></h4></div>  
          <button id='user-btn' onClick={generation}>Generate User</button>
        </div>
      </div>
    </div>

  )
}

export default App