import React, { useState, useEffect } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import './App.css';

function App() {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, [])

  return (
    <div className="App">
      <div>Birşeyin yüklenmesini beklerden bu spinnerlardan yararlanabilirsin</div>
      <ul>
        <li>npm i react-spinners önce bunu yükle</li>
        <li>npm install --save react-spinners sonra bunu yükle</li>
        <li>Demo page tıkla spinners örnekleri var</li>
      </ul>
      {
        loading ?
          <ScaleLoader color={'#eed8da'} height={35} width={4} radius={2} margin={2} loading={true} speedMultiplier={1} />
          :

          <img src="https://picsum.photos/id/237/200/300" />

      }
    </div>
  );
}

export default App;