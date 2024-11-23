import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Products from './Products';
import Loading from './Loading';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true) //yükleniyor imajı verdik sayfaya veri çekilirken

  const deleteProduct = (productId) => {
    const afterDeletedProducts = products.filter((product) => product.id !== productId);
    setProducts(afterDeletedProducts);
  }

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:3000/products');
      // console.log(response)
      setProducts(response.data);
      setLoading(false);
    }

    catch (error) {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <div className='App'>
      {loading ?
        (
          <Loading></Loading>
        ) : (
          <div>
            {products.length === 0 ? (
              <div className="refleshDiv">
                <h2>Tüm ürünler gitti!!!!</h2>
                <button className="cardDeleteBtn" onClick={fetchProducts}>
              Yenile
            </button></div>
            ) : (
              <Products products={products} removeProduct={deleteProduct}></Products>
            )}
          </div>
        )}
    </div>
  )
}

export default App
