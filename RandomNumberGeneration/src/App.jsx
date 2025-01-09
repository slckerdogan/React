import { useState } from 'react'
import './App.css'

function App() {
  const [minNumber, setMinNumber] = useState();
  const [maxNumber, setMaxNumber] = useState();
  const [resultNumber, setResultNumber] = useState();

  const clearAll = () => {
    setMinNumber("")
    setMaxNumber("")
    setResultNumber()
  }

  const numberGenerator = () => {
    if (isNaN(minNumber) || !minNumber || minNumber === (" ") || isNaN(maxNumber) || !maxNumber || maxNumber === (" ")) {
      alert("This is not a number!")
      clearAll();
    }
    else {
      if (minNumber < 0 || maxNumber < 0) {
        alert("Please enter the values that are greater than or equal to zero!")
        clearAll();;
      }

      if (minNumber >= maxNumber) {
        alert("Minimum number must less than maximum number!")
        clearAll();;
      }

      else if (minNumber == 0 && maxNumber > 0) {
        setResultNumber(Math.floor(Math.random() * (maxNumber)));
      }

      else {
        setResultNumber(0);
      }
    }
  }

  return (
    <div className='container'>
      <div className='div'>
        <div>
          <label className="font">Please enter the minimum value</label>
          <input type="num" value={minNumber} onChange={e => setMinNumber(e.target.value)} />
        </div>
        <div>
          <label className="font">Please enter the maximum value</label>
          <input type="num" value={maxNumber} onChange={e => setMaxNumber(e.target.value)} />
        </div>
        <button onClick={numberGenerator}>Show Number</button>
        <h5><span id="info">{resultNumber}</span></h5>
      </div>
    </div>
  )
}

export default App
