import { useState } from 'react'
import './App.css'

function App() {
  const [ colorr, setColorr] = useState("#000000");

  function colorHandler(){
    const randomcolor = "#" + Math.floor(Math.random() * 16777721).toString(16);

    setColorr(randomcolor);
    console.log(colorr)
  }

  return (
    <div className="container" style={{backgroundColor:`${colorr}`}}>
      <button onClick={colorHandler}>Click for new Background</button>
    </div>
  )
}

export default App
