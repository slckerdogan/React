import React from 'react'
import { Data } from '../datas/data';

function Magazine() {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {Data.map((item, index)=> (
          <div key={index} style={{margin:"15px", padding:"40px", border:"3px solid white"}}>
            <img src="https://picsum.photos/id/20/150" alt="#" />
            <p>{item.title} </p>
            <p>{item.content}</p>
            <button><a href="https://github.com/slckerdogan">Detayı Gör</a></button>
          </div>
        ))}
    </div>
  )
}

export default Magazine