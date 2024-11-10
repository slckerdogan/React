import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
 // Zamanı ve timer'ın durumunu yönetmek için state
 const [time, setTime] = useState(0); // Zamanı milisaniye cinsinden tutuyoruz
 const [isActive, setIsActive] = useState(false); // Timer butonu başlat mı durdur mu yazsın komutu

 // Zamanlayıcıyı başlatıp durdurmak için useEffect
 useEffect(() => {
   let interval = null; //zamanı tutmak için değişken

   if (isActive) { //!yani true olur zaman akmaya başlar
     // Her 10 milisaniyede bir time state'ini güncelle
     interval = setInterval(() => {
       setTime((prevTime) => prevTime + 10);
     }, 10);
   } else if (!isActive && time !== 0) {
     // Eğer durdurulmuşsa, interval'i temizle yani setInterval durdur
     clearInterval(interval);
   }

   // Cleanup function: component unmount olduğunda veya isActive değiştiğinde interval'i temizle
   return () => clearInterval(interval);
 }, [isActive, time]);

 // Başlat/Durdur butonu için fonksiyon
 const toggle = () => {
   setIsActive(!isActive);
 };

 // Sıfırlama butonu için fonksiyon
 const reset = () => {
   setTime(0);
   setIsActive(false);
 };

 // Milisaniyeyi dakikaya, saniyeye ve milisaniyeye çevirme
 const formatTime = (time) => {
   const minutes = Math.floor(time / 60000);
   const seconds = Math.floor((time % 60000) / 1000);
   const milliseconds = Math.floor((time % 1000) / 10);
   return `${minutes < 10 ? `0${minutes}` : minutes}:${
     seconds < 10 ? `0${seconds}` : seconds
   }:${milliseconds < 10 ? `0${milliseconds}` : milliseconds}`;
 };

 return (
   <div style={{ textAlign: 'center', marginTop: '50px' }}>
     <h1>Stopwatch</h1>
     <div style={{ fontSize: '48px', margin: '20px' }}>{formatTime(time)}</div>
     <button onClick={toggle} style={{ fontSize: '20px', padding: '10px 20px' }}>
       {isActive===true ? 'Stop' : 'Start'}
     </button>
     <button onClick={reset} style={{ fontSize: '20px', padding: '10px 20px', marginLeft: '10px' }}>
       Reset
     </button>
   </div>
 );
}

export default App
