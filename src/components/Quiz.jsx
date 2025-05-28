import React, { useState, useEffect } from 'react';
import { getRandomQuestions } from '../data/questions.js';

const Quiz = ({ onFinish, onGoHome }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    // Get random questions using the new function
    const randomQuestions = getRandomQuestions(8); // Get 8 random questions
    setShuffledQuestions(randomQuestions);
  }, []);

  const question = shuffledQuestions[currentQuestion];

  const handleAnswer = (answerIndex) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    const isCorrect = question.type === 'multiple' 
      ? answerIndex === question.correct
      : answerIndex === (question.correct ? 0 : 1);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      onFinish(score + (isCurrentAnswerCorrect() ? 1 : 0), shuffledQuestions.length);
    }
  };

  const isCurrentAnswerCorrect = () => {
    if (question.type === 'multiple') {
      return selectedAnswer === question.correct;
    } else {
      return selectedAnswer === (question.correct ? 0 : 1);
    }
  };

  if (shuffledQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onGoHome}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full transition-colors"
          >
            🏠 Home
          </button>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Question {currentQuestion + 1} of {shuffledQuestions.length}</div>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Score</div>
            <div className="text-xl font-bold text-green-600">{score}</div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            {question.question}
          </h2>

          {question.type === 'multiple' ? (
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    showFeedback
                      ? index === question.correct
                        ? 'bg-green-100 border-green-500 text-green-700'
                        : selectedAnswer === index
                        ? 'bg-red-100 border-red-500 text-red-700'
                        : 'bg-gray-50 border-gray-200 text-gray-600'
                      : selectedAnswer === index
                      ? 'bg-blue-100 border-blue-500 text-blue-700'
                      : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'
                  }`}
                >
                  <span className="font-medium">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                  {showFeedback && index === question.correct && (
                    <span className="float-right text-green-600">✓</span>
                  )}
                  {showFeedback && selectedAnswer === index && index !== question.correct && (
                    <span className="float-right text-red-600">✗</span>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleAnswer(0)}
                disabled={showFeedback}
                className={`px-8 py-4 rounded-xl border-2 font-bold text-lg transition-all duration-200 ${
                  showFeedback
                    ? question.correct
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : selectedAnswer === 0
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                    : selectedAnswer === 0
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'
                }`}
              >
                ✓ True
                {showFeedback && question.correct && (
                  <span className="ml-2 text-green-600">✓</span>
                )}
                {showFeedback && selectedAnswer === 0 && !question.correct && (
                  <span className="ml-2 text-red-600">✗</span>
                )}
              </button>
              <button
                onClick={() => handleAnswer(1)}
                disabled={showFeedback}
                className={`px-8 py-4 rounded-xl border-2 font-bold text-lg transition-all duration-200 ${
                  showFeedback
                    ? !question.correct
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : selectedAnswer === 1
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-gray-50 border-gray-200 text-gray-600'
                    : selectedAnswer === 1
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 text-gray-700'
                }`}
              >
                ✗ False
                {showFeedback && !question.correct && (
                  <span className="ml-2 text-green-600">✓</span>
                )}
                {showFeedback && selectedAnswer === 1 && question.correct && (
                  <span className="ml-2 text-red-600">✗</span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className="mb-6">
            <div className={`p-4 rounded-xl ${isCurrentAnswerCorrect() ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
              <div className="flex items-center mb-2">
                {isCurrentAnswerCorrect() ? (
                  <>
                    <span className="text-2xl mr-2">🎉</span>
                    <span className="font-bold text-green-700">Correct!</span>
                  </>
                ) : (
                  <>
                    <span className="text-2xl mr-2">🤔</span>
                    <span className="font-bold text-orange-700">Not quite!</span>
                  </>
                )}
              </div>
              <p className="text-gray-700">{question.explanation}</p>
            </div>
          </div>
        )}

        {/* Next Button */}
        {showFeedback && (
          <div className="text-center">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {currentQuestion < shuffledQuestions.length - 1 ? 'Next Question →' : 'See Results 🏆'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
