import React from 'react'

function pagination({totalPages,handleClick}) {  //!sayfa numaraları ve sayfalar arası geçişi sağladık
    const pages = [...Array(totalPages).keys()].map(num => num + 1)
    console.log(pages)
  return (
    <div style={{marginTop:"15px"}}>
        {pages.map((num => (
            <button
            onClick={()=> handleClick(num)}
            >{num}</button>            
        )))}
    </div>
  )
}

export default pagination