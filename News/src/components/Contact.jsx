import React from 'react'
import '../css/contact.css'

function Contact() {
  return (
    <div className='contact'>
    <div className='leftSide' style={{ backgroundImage: 'url(https://picsum.photos/id/237/200/300)' }}></div>
    <div className='rightSide'>
      <h1>BİZE ULAŞIN</h1>
      <form>
        <label>Ad Soyad</label>
        <input
          type="text"
          name="name"
          placeholder="Lütfen adınızı soyadınızı giriniz..."
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Lütfen emailinizi giriniz..."
        />
        <label>Mesajınız</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Lütfen mesajınızı giriniz..."
        ></textarea>
        <button>Gönder</button>
      </form>
    </div>
  </div>
  )
}

export default Contact