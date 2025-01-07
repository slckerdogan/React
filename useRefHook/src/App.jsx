import { useState, useRef } from 'react'
import './App.css'

function App() {

  //useRef bir component içerisinde component’in tekrar render olmasını tetiklemeden değişken tutmamızı ve bunları kullanmamızı sağlayan yapıdır.

  const [color, setColor] = useState()

  const colorChanging = useRef(null)

  const handleChange=()=>{
    console.log(colorChanging.current.value)
    console.log(colorChanging.current.className);
    document.body.style.backgroundColor=colorChanging.current.value;
    setColor(()=>colorChanging.current.value)
  }

  return (
    <div>
      <p>Please enter a color</p>
      <input type="text" ref={colorChanging} onChange={handleChange} className='colorClass'/>
      <p>{color}</p>
    </div>
  )
}

export default App
