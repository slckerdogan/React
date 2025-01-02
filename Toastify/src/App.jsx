import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

//npm react toastify diye arattığında ilgili siteden bununla önce npm i react-toastify kodunu sonrada npm install --save react-toastify kodunu yükleyebilir ve documentation kısmına tıklayarak bu toastify ekranda nasıl dursun özelliklerini ayarlayabilirsin

const notify = () => toast('Soooooooooooooooooo terrible!', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});

function App() {

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
    </div>
  )
}

export default App
