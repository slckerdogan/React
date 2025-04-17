import { useState } from 'react';

const ShoppingCartApp = () => {
  // Ürün listesi
  const [products] = useState([
    { id: 1, name: 'Akıllı Telefon', price: 5999, image: '' },
    { id: 2, name: 'Dizüstü Bilgisayar', price: 12499, image: '' },
    { id: 3, name: 'Kablosuz Kulaklık', price: 1299, image: '' },
    { id: 4, name: 'Akıllı Saat', price: 2499, image: '' },
    { id: 5, name: 'Tablet', price: 4999, image: '' },
    { id: 6, name: 'Bluetooth Hoparlör', price: 899, image: '' },
  ]);

  // Sepet
  const [cart, setCart] = useState([]);

  // Sepet panelinin görünürlüğünü kontrol ediyoruz
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Ürünü sepete ekleme fonksiyonunu oluşturuyoruz
  const addToCart = (product) => {
    // Ürün zaten sepette mi kontrol ediyyoruz
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Eğer ürün zaten sepette varsa, miktarını artırıyoruz
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Eğer ürün sepette yoksa, yeni ürün ekliyoruz
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Ürünü sepetten silme fonksiyonu yaratıyoruz
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Sepeti tamamen temizleme fonksiyonu yaratıyoruz
  const clearCart = () => {
    setCart([]);
  };

  // Sepetteki toplam tutarı hesaplıyoruz
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Sepet panelini aç/kapat özelliğini yapıyoruz
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Üst başlık */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alışveriş Uygulaması</h1>
          <button
            className="flex items-center bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg cursor-pointer"
            onClick={toggleCart}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Sepet ({cart.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>
      </header>

      <main className="container mx-auto flex-grow p-4">
        {/* Ürün listesi */}
        <h2 className="text-2xl font-semibold mb-6">Ürünler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price.toLocaleString('tr-TR')} ₺</p>
                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-full cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sepet paneli */}
      {isCartVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
            <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
              <h2 className="text-xl font-semibold">Alışveriş Sepeti</h2>
              <button onClick={toggleCart} className="text-white hover:text-gray-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Sepetiniz boş.</p>
              ) : (
                <>
                  <ul className="divide-y divide-gray-200">
                    {cart.map(item => (
                      <li key={item.id} className="py-4 flex items-center">
                        <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
                        <div className="ml-4 flex-grow">
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="text-gray-600">
                            {item.price.toLocaleString('tr-TR')} ₺ x {item.quantity} = {(item.price * item.quantity).toLocaleString('tr-TR')} ₺
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 text-red-600 hover:text-red-800 cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Toplam:</span>
                      <span>{calculateTotal().toLocaleString('tr-TR')} ₺</span>
                    </div>

                    <div className="mt-6 flex space-x-2">
                      <button
                        onClick={clearCart}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded cursor-pointer"
                      >
                        Sepeti Temizle
                      </button>
                      <button
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded cursor-pointer"
                      >
                        Satın Al
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2025 Alışveriş Uygulaması - Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default ShoppingCartApp;