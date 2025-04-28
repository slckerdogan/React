import React, { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    feedback: '',
    interests: {
      technology: false,
      sports: false,
      music: false,
      reading: false
    },
    experience: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        interests: {
          ...formData.interests,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Anket gönderildi: ' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="survey-container">
      <h1>Müşteri Memnuniyet Anketi</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Adınız Soyadınız:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-posta Adresiniz:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Yaşınız:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="18"
            max="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Ülkeniz:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="turkey">Türkiye</option>
            <option value="usa">ABD</option>
            <option value="uk">Birleşik Krallık</option>
            <option value="germany">Almanya</option>
            <option value="france">Fransa</option>
          </select>
        </div>

        <div className="form-group">
          <label>İlgi Alanlarınız:</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="technology"
                name="technology"
                checked={formData.interests.technology}
                onChange={handleChange}
              />
              <label htmlFor="technology">Teknoloji</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="sports"
                name="sports"
                checked={formData.interests.sports}
                onChange={handleChange}
              />
              <label htmlFor="sports">Spor</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="music"
                name="music"
                checked={formData.interests.music}
                onChange={handleChange}
              />
              <label htmlFor="music">Müzik</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="reading"
                name="reading"
                checked={formData.interests.reading}
                onChange={handleChange}
              />
              <label htmlFor="reading">Kitap Okuma</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Ürünümüzü ne kadar süredir kullanıyorsunuz?</label>
          <div className="radio-group">
            <div className="radio-item">
              <input
                type="radio"
                id="less-than-month"
                name="experience"
                value="less-than-month"
                checked={formData.experience === 'less-than-month'}
                onChange={handleChange}
              />
              <label htmlFor="less-than-month">1 aydan az</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="one-to-six"
                name="experience"
                value="one-to-six"
                checked={formData.experience === 'one-to-six'}
                onChange={handleChange}
              />
              <label htmlFor="one-to-six">1-6 ay</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="six-to-twelve"
                name="experience"
                value="six-to-twelve"
                checked={formData.experience === 'six-to-twelve'}
                onChange={handleChange}
              />
              <label htmlFor="six-to-twelve">6-12 ay</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                id="more-than-year"
                name="experience"
                value="more-than-year"
                checked={formData.experience === 'more-than-year'}
                onChange={handleChange}
              />
              <label htmlFor="more-than-year">1 yıldan fazla</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Görüş ve Önerileriniz:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Anketi Gönder</button>
      </form>
      
      <style jsx>{`
        .survey-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }
        
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
          color: #555;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="number"],
        select,
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          box-sizing: border-box;
        }
        
        textarea {
          resize: vertical;
        }
        
        .checkbox-group,
        .radio-group {
          margin-top: 8px;
        }
        
        .checkbox-item,
        .radio-item {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        
        input[type="checkbox"],
        input[type="radio"] {
          margin-right: 10px;
          width: 18px;
          height: 18px;
        }
        
        .checkbox-item label,
        .radio-item label {
          margin: 0;
          font-weight: normal;
          cursor: pointer;
        }
        
        .submit-btn {
          background-color: #4CAF50;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          display: block;
          width: 100%;
          transition: background-color 0.3s;
        }
        
        .submit-btn:hover {
          background-color: #45a049;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
        }
        
        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #4CAF50;
          box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
        }
        
        @media (max-width: 600px) {
          .survey-container {
            padding: 15px;
          }
          
          .submit-btn {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default SurveyForm;