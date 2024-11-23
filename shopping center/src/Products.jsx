import React from 'react'
import Product from './Product'

function Products({ products, removeProduct}) {
    return (
        <div className="courseMainDiv">
            <div>
                <h2>PRODUCTS</h2>
            </div>
            <div className="cardDiv">
                {
                    products.map((product) => {
                        // return (
                        //     <Product product={product}></Product>
                        // )
                        return (
                            <Product key={product.id} {...product} removeOneProduct={removeProduct}></Product> //spread operatörüyle de böyle yollanabiliyor props olarak. Ayrıca key hatası içinde producttaki id'leri yollarız sorun çözülür
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products