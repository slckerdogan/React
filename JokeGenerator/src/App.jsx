import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [joke, setJoke] = useState("")

  const jokeGeneration = async () => {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
    console.log(response)
    setJoke(response.data.joke);
  }

  useEffect(() => {
    jokeGeneration();
  }, [])
  return (
    <div className="wrapper">
      <span><img src="src\images\face.PNG" alt="" /></span>
      <p id="joke">{joke}</p>
      <button id="btn" onClick={jokeGeneration}>Get Joke</button>
    </div>
  )
}

export default App
