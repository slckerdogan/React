import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [quote, setQuote] = useState(" ");
  const [author, setAuthor] = useState(" ");

  const quoteGeneration = () => {
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.quote);
        setAuthor(data.author);

      })

  }

  useEffect(() => {
    quoteGeneration();
  }, [])

  return (
    <div>
      <div className='container'>
        <img src="https://picsum.photos/200/300?grayscale" alt="picture"/>
        <div id='result'></div>{<br></br>}
        <div className='quote-wrapper'>
          <div className="data-wrapper"><span>{quote}</span></div>
          <div className="data-wrapper"><span>{author}</span></div>
          <button id='quote-btn' onClick={quoteGeneration}>Generate Quote</button>
        </div>
      </div>
    </div>

  )
}

export default App