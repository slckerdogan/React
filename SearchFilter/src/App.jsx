import { useState } from 'react'
import { vegetables } from './data'
import './App.css'

function App() {

  const [searchTermofVegetables, setsearchTermofVegetables] = useState("")


  return (
    <>
      <div>
        <h1>VEGETABLES</h1>
        <input type="text" placeholder="Enter a vegetable" value={searchTermofVegetables} onChange={(e) => setsearchTermofVegetables(e.target.value)}></input>
      </div>

      <div className='dataContainer'>  {/* önce filtreleme yaparak değer girilmiş mi diye kontrol edip ardından mapleyip ekrana bastırıyoruz */}
        {
          vegetables
            .filter((vegetable) => {
              if (searchTermofVegetables == "") {
                return vegetable;
              } else if (vegetable.title.toLocaleLowerCase().includes(searchTermofVegetables.toLocaleLowerCase())) {
                return vegetable;
              }
            }).map((vegetable) => {
              return (
                <div className="data" key={vegetable.id}>
                  <img src={vegetable.image} alt="" />
                  <h3>{vegetable.title}</h3>
                  <p>{vegetable.description}</p>
                </div>
              )
            })
        }
      </div>
    </>
  )
}

export default App
