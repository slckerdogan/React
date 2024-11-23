import React from 'react'

function Product({ id, content, title, price, removeOneProduct }) {  //spreadle gelen props böyle alınıp kullanılıyor istenen yerde veya { ...product } şeklinde direk objeyide alıp içerisindeki parametreleri ayrıca geçebilirsin

  return (
    <div className='card'>
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price}TL</h4>
      </div>
      <p>{content}</p>
      <button className="cardDeleteBtn" onClick={() => removeOneProduct(id)}>Sil</button>
    </div>
  )
}

export default Product