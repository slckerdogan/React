import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [picture, setPicture] = useState(" ")
  const [mealName, setMealName] = useState(" ")

  /* const mealGeneration = () => {
    fetch("https:www.themealdb.com/api/json/v1/1/random.php").then((response) => response.json()).then((data) => {
      console.log(data.meals[0].strMeal);
      setPicture(data.meals[0].strMealThumb)
      setMealName(data.meals[0].strMeal)
    });

  } */

    const mealGeneration= async() => {
      const response = await axios.get("https:www.themealdb.com/api/json/v1/1/random.php")
      console.log(response.data.meals)
      setPicture(response.data.meals[0].strMealThumb)
      setMealName(response.data.meals[0].strMeal)
    }
      

  useEffect(() => {
    mealGeneration();
  }, [])

  return (
    <div className='container'>
      <h2>Random Meals</h2>{<br></br>}
      <div>
        <h2>{mealName}</h2>{<br></br>}
        <img src={picture} alt="picture" />
      </div>
      <div className='picture-wrapper'>
        <button id='picture-btn' onClick={mealGeneration}>See Meals</button>
      </div>
    </div>
  )
}

export default App
