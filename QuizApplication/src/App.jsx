import { useState, useEffect } from 'react';

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      questionText: 'Türkiye\'nin başkenti hangi şehirdir?',
      answerOptions: [
        { answerText: 'İstanbul', isCorrect: false },
        { answerText: 'Ankara', isCorrect: true },
        { answerText: 'İzmir', isCorrect: false },
        { answerText: 'Bursa', isCorrect: false },
      ],
    },
    {
      questionText: 'Dünya\'nın en büyük okyanusu hangisidir?',
      answerOptions: [
        { answerText: 'Atlantik Okyanusu', isCorrect: false },
        { answerText: 'Hint Okyanusu', isCorrect: false },
        { answerText: 'Pasifik Okyanusu', isCorrect: true },
        { answerText: 'Arktik Okyanusu', isCorrect: false },
      ],
    },
    {
      questionText: 'Hangisi bir programlama dili değildir?',
      answerOptions: [
        { answerText: 'Java', isCorrect: false },
        { answerText: 'Python', isCorrect: false },
        { answerText: 'HTML', isCorrect: true },
        { answerText: 'C++', isCorrect: false },
      ],
    },
    {
      questionText: 'İnsan vücudunda kaç kemik vardır?',
      answerOptions: [
        { answerText: '106', isCorrect: false },
        { answerText: '206', isCorrect: true },
        { answerText: '306', isCorrect: false },
        { answerText: '406', isCorrect: false },
      ],
    },
    {
      questionText: 'Hangisi periyodik tabloda bir element değildir?',
      answerOptions: [
        { answerText: 'Oksijen', isCorrect: false },
        { answerText: 'Titanyum', isCorrect: false },
        { answerText: 'Hidrojen', isCorrect: false },
        { answerText: 'Adrenalium', isCorrect: true },
      ],
    },
    {
      questionText: 'Osmanlı İmparatorluğu hangi yılda kurulmuştur?',
      answerOptions: [
        { answerText: '1299', isCorrect: true },
        { answerText: '1453', isCorrect: false },
        { answerText: '1071', isCorrect: false },
        { answerText: '1517', isCorrect: false },
      ],
    },
    {
      questionText: 'Güneş sisteminde kaç gezegen vardır?',
      answerOptions: [
        { answerText: '7', isCorrect: false },
        { answerText: '8', isCorrect: true },
        { answerText: '9', isCorrect: false },
        { answerText: '10', isCorrect: false },
      ],
    },
    {
      questionText: 'Hangisi bir Shakespeare oyunu değildir?',
      answerOptions: [
        { answerText: 'Romeo ve Juliet', isCorrect: false },
        { answerText: 'Hamlet', isCorrect: false },
        { answerText: 'Macbeth', isCorrect: false },
        { answerText: 'Don Kişot', isCorrect: true },
      ],
    },
    {
      questionText: 'Pi sayısının ilk 3 rakamı nedir?',
      answerOptions: [
        { answerText: '3,14', isCorrect: true },
        { answerText: '3,15', isCorrect: false },
        { answerText: '3,13', isCorrect: false },
        { answerText: '3,16', isCorrect: false },
      ],
    },
    {
      questionText: 'Aşağıdakilerden hangisi bir memeli değildir?',
      answerOptions: [
        { answerText: 'Balina', isCorrect: false },
        { answerText: 'Yarasa', isCorrect: false },
        { answerText: 'Penguen', isCorrect: true },
        { answerText: 'Fil', isCorrect: false },
      ],
    },
  ];

  const handleAnswerClick = (isCorrect, answerText) => {
    if (!answered) {
      if (isCorrect) {
        setScore(score + 1);
      }
      
      setUserAnswers([...userAnswers, {
        question: questions[currentQuestion].questionText,
        answer: answerText,
        correct: isCorrect,
        correctAnswer: questions[currentQuestion].answerOptions.find(option => option.isCorrect).answerText
      }]);
      
      setAnswered(true);
      
      setTimeout(() => {
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
          setAnswered(false);
        } else {
          setShowScore(true);
        }
      }, 1000);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setUserAnswers([]);
    setAnswered(false);
  };

  const progressPercentage = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Tamamlandı!</h2>
            <p className="text-xl mb-2">Toplam puanınız: {score} / {questions.length}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Cevaplarınız:</h3>
              <div className="bg-gray-50 p-4 rounded-lg max-h-64 overflow-y-auto">
                {userAnswers.map((item, index) => {
                  const correctAnswer = questions[index].answerOptions.find(option => option.isCorrect).answerText;
                  
                  return (
                    <div key={index} className={`mb-2 p-2 rounded ${item.correct ? 'bg-green-100' : 'bg-red-100'}`}>
                      <p className="font-medium">{index + 1}. {item.question}</p>
                      <p>Cevabınız: {item.answer} {item.correct ? '✓' : '✗'}</p>
                      {!item.correct && <p>Doğru cevap: {correctAnswer} ✓</p>}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <button 
              onClick={handleReset}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Tekrar Dene
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Soru {currentQuestion + 1}/{questions.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">{questions[currentQuestion].questionText}</h2>
              <div className="space-y-3">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(answerOption.isCorrect, answerOption.answerText)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors cursor-pointer ${
                      answered && answerOption.isCorrect ? 'bg-green-100 border-green-500' :
                      answered && !answerOption.isCorrect ? 'bg-red-100 border-red-300' :
                      'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                    disabled={answered}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}