import React, { useState } from 'react';
import Homepage from './components/Homepage';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Facts from './components/Facts';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const startQuiz = () => {
    setCurrentView('quiz');
    setScore(0);
    setTotalQuestions(0);
  };

  const finishQuiz = (finalScore, total) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setCurrentView('results');
  };

  const goHome = () => {
    setCurrentView('home');
  };

  const showFacts = () => {
    setCurrentView('facts');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-8">
        {currentView === 'home' && (
          <Homepage onStartQuiz={startQuiz} onShowFacts={showFacts} />
        )}
        {currentView === 'quiz' && (
          <Quiz onFinish={finishQuiz} onGoHome={goHome} />
        )}
        {currentView === 'results' && (
          <Results 
            score={score} 
            total={totalQuestions} 
            onStartQuiz={startQuiz} 
            onGoHome={goHome}
            onShowFacts={showFacts}
          />
        )}
        {currentView === 'facts' && (
          <Facts onGoHome={goHome} onStartQuiz={startQuiz} />
        )}
      </div>
    </div>
  );
}

export default App;
