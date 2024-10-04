import { useState } from 'react'
import './App.css'

function App() {
  let t = new Date().toLocaleTimeString();
  const [clock, setClock] = useState(t)

  const showTime=()=>{
    let t = new Date();

    let hour=t.getHours();
    if (hour<10){
        hour="0"+ hour;
    }

    let minute=t.getMinutes();
    if (minute<10){
        minute="0"+ minute;
    }

    let second=t.getSeconds();
    if (second<10){
        second="0"+ second;
    }

    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let digital=hour + ":" + minute + ":" + second + " " + days[t.getDay()]

    setClock(digital)
  }
  setInterval(showTime, 1000);

  return (
    <div>
      <div className="clock" onLoad={showTime}>{clock}</div>
    </div>
  )
}

export default App
