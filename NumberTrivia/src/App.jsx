import { useState } from 'react'
import './App.css'

function App() {
  const [numberr, setNumberr] = useState()
  const [explanation, setExplanation] = useState()
  const[definationAreaNumber, setDefinationAreaNumber]=useState()

  const clearAll = () => {
    setNumberr("")
    setExplanation()
    setDefinationAreaNumber()
  }
  const numberFactShow=(numberr)=>{
    fetch(`http://numbersapi.com/${numberr}`)
    .then((response) => response.text())
    .then((data) => {
      setDefinationAreaNumber(numberr)
      setExplanation(data)
    })
  }

  const getFact = () => {
    if (isNaN(numberr) || !numberr || numberr===(" ")) {
      alert("This is not a number!")
      clearAll();
    }
    else {
      numberFactShow(numberr)
    }

  }

const getRandomFact=()=>{
  const num = Math.floor(Math.random() * 301);
  console.log(num)
  numberFactShow(num);
}

  return (
    <>
      <div className="container">
        <div className="search-container">
          <input type="num" placeholder="Enter a Number" id="num" value={numberr} onChange={(e) => setNumberr(e.target.value)} />
          <button id="get-fact-btn" onClick={getFact}>Get Fact</button>
        </div>
        <button id="ran-fact-btn" onClick={getRandomFact}>Get Random Fact</button>
        <div className="fact" >
          <h2>{definationAreaNumber}</h2>
          <p>{explanation}</p>
        </div>
      </div>
    </>
  )
}
export default App
