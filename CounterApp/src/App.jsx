import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increasingCount = () => {
    setCount(count + 1)
  }

  const decreasingCount = () => {
    setCount(count - 1)
  }

  const zeroCount = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={increasingCount}>Arttır</button>
      <button onClick={zeroCount}>Sıfırla</button>
      <button onClick={decreasingCount} >Azalt</button>

    </>
  )
}

export default App
