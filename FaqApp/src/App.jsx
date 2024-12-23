import React, { useState } from 'react';
import './App.css';

const faqData = [
  {
    question: "React nedir?",
    answer: "React, kullanıcı arayüzleri (UI) oluşturmak için kullanılan bir JavaScript kütüphanesidir."
  },
  {
    question: "React ile nasıl çalışmaya başlanır?",
    answer: "React ile çalışmaya başlamak için Node.js ve npm'yi kurarak bir React projesi oluşturabilirsiniz."
  },
  {
    question: "useState nedir?",
    answer: "useState, bir bileşenin durumunu yönetmek için kullanılan bir React Hook'udur."
  },
  {
    question: "JSX nedir?",
    answer: "JSX, JavaScript ve HTML'in bir kombinasyonudur ve React bileşenlerini tanımlamak için kullanılır."
  }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Cevap açıksa kapat
    } else {
      setActiveIndex(index); // Cevabı göster
    }
  };

  return (
    <div className="App">
      <h1>FAQ - Sıkça Sorulan Sorular</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="question" onClick={() => toggleAnswer(index)}>
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
