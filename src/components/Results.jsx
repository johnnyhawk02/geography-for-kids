import React from 'react';

const Results = ({ score, total, onStartQuiz, onGoHome, onShowFacts }) => {
  const percentage = Math.round((score / total) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) {
      return {
        emoji: "🏆",
        title: "Geography Genius!",
        message: "Wow! You're a true geography expert! You know so much about our amazing world!",
        color: "from-yellow-400 to-orange-500"
      };
    } else if (percentage >= 70) {
      return {
        emoji: "🌟",
        title: "Great Explorer!",
        message: "Excellent work! You have a great knowledge of geography. Keep exploring!",
        color: "from-green-400 to-blue-500"
      };
    } else if (percentage >= 50) {
      return {
        emoji: "📚",
        title: "Good Effort!",
        message: "Nice try! You're learning so much. Practice more and you'll become a geography master!",
        color: "from-blue-400 to-purple-500"
      };
    } else {
      return {
        emoji: "🗺️",
        title: "Keep Learning!",
        message: "Every expert was once a beginner! Try the quiz again and explore some fun facts!",
        color: "from-purple-400 to-pink-500"
      };
    }
  };

  const scoreInfo = getScoreMessage();

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="mb-8">
          <div className="text-6xl mb-4">{scoreInfo.emoji}</div>
          <h1 className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${scoreInfo.color} mb-4`}>
            {scoreInfo.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {scoreInfo.message}
          </p>
        </div>

        {/* Score Display */}
        <div className="mb-8">
          <div className={`inline-block bg-gradient-to-r ${scoreInfo.color} p-6 rounded-2xl text-white mb-4`}>
            <div className="text-4xl font-bold mb-2">
              {score}/{total}
            </div>
            <div className="text-lg">
              {percentage}% Correct
            </div>
          </div>
          
          {/* Score breakdown */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-green-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-green-700">Correct</div>
            </div>
            <div className="bg-red-50 p-4 rounded-xl">
              <div className="text-2xl font-bold text-red-600">{total - score}</div>
              <div className="text-sm text-red-700">Missed</div>
            </div>
          </div>
        </div>

        {/* Achievement badges */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {score >= 1 && (
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Quiz Starter
              </div>
            )}
            {score >= 2 && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                🎯 Good Aim
              </div>
            )}
            {score >= 3 && (
              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                📍 Geography Fan
              </div>
            )}
            {score >= 4 && (
              <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                ⭐ Rising Star
              </div>
            )}
            {score === total && (
              <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                🏆 Perfect Score
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-4">
          <button
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
          >
            🎯 Try Another Quiz
          </button>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={onShowFacts}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🧠 Learn Fun Facts
            </button>
            
            <button
              onClick={onGoHome}
              className="bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🏠 Back to Home
            </button>
          </div>
        </div>

        {/* Encouragement message */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
          <p className="text-gray-600 text-sm">
            🌍 Keep exploring our amazing planet! Every question teaches you something new about the wonderful world we live in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
