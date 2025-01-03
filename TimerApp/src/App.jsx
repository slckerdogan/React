import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState(10)


  useEffect(() => {

    if (timer !== 0) {
      const interval = setInterval(() => {
        timer = setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval)
    }
    else{
      window.location.href = 'https://github.com/slckerdogan'; // Redirect to Github"
    }
  }, [timer])


  return (
    <>
      <p>{timer} saniye sonra ilgili sayfaya yönlendirileceksiniz...</p>
    </>
  )
}

export default App
