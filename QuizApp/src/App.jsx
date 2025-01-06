import React, { useState } from 'react'
import './App.css'

function App() {
  const [showFinalResult, setFinalResult] = useState(false) //kaç doğrumuzun olduğunu gösteren alan. Bu alan true olursa testi sürdürdüğümüz alan gidiyor ve test sonuç ekranı geliyor böylece

  const [score, setScore] = useState(0) //verdiğimiz doğru cevap sayısını kontrol eden state

  const [currentQuestion, setCurrentQuestion] = useState(0) //hangi soruda olduğumuzu gösteren state



  const questions = [
    {
      text: "Where is İzmir?",
      options: [
        { id: 0, text: "Black Sea", isCorrect: false },
        { id: 1, text: "Mediterranean", isCorrect: false },
        { id: 3, text: "Aegean", isCorrect: true },
      ],
    },
    {
      text: "Where is Trabzon?",
      options: [
        { id: 0, text: "Mediterranean", isCorrect: false },
        { id: 1, text: "Aegean", isCorrect: false },
        { id: 3, text: "Black Sea", isCorrect: true },
      ],
    },
    {
      text: "Where is Adana?",
      options: [
        { id: 0, text: "Aegean", isCorrect: false },
        { id: 1, text: "Black", isCorrect: false },
        { id: 3, text: "Mediterranean", isCorrect: true },
      ],
    },
  ];

  const answerHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinalResult(true);
    }
  }

  const restartHandler = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>Quiz App</h1><br></br><br></br>

        {
          showFinalResult ?

            <div className='result'>
              <h1>Result</h1>
              <h2>{score} out of {questions.length} are correct</h2>
              <button onClick={() => restartHandler()}>Restart Test</button>
            </div>

            :

            <div className='question-card'>
              <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
              <h3>{questions[currentQuestion].text}</h3>
              <ul>
              {questions[currentQuestion].options.map((option)=>{
               return <li onClick={()=>answerHandler(option.isCorrect)} key={option.id}>{option.text}</li>
               })} 
               {/* ul etiketi içinde li yapılarıyla şıkları yazmaya çalışınca hata veriyor ama map fonksiyonu kullanınca hata vermiyor. Nedeni belkide çakışma olabilir */}
              </ul>
            </div>
        }
      </div>
    </div>
  )
}

export default App