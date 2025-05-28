import React, { useState, useEffect } from 'react';
import { geographyFacts, getRandomFact, getFactsByCategory, getFactCategories } from '../data/facts.js';

const Facts = ({ onGoHome, onStartQuiz }) => {
  const [currentFact, setCurrentFact] = useState(null);
  const [usedFacts, setUsedFacts] = useState([]);
  const factCategories = getFactCategories();

  const getNewRandomFact = () => {
    const randomFact = getRandomFact(usedFacts);
    setCurrentFact(randomFact);
    
    if (usedFacts.length >= geographyFacts.length - 1) {
      // Reset if all facts have been shown
      setUsedFacts([randomFact.id]);
    } else {
      setUsedFacts([...usedFacts, randomFact.id]);
    }
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  if (!currentFact) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading amazing facts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onGoHome}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full transition-colors"
          >
            🏠 Home
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
            🧠 Fun Geography Facts
          </h1>
          <button
            onClick={onStartQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            🎯 Quiz
          </button>
        </div>

        {/* Fact Display */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-6 border-2 border-yellow-200">
            <div className="text-6xl mb-4">{currentFact.emoji}</div>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              {currentFact.category}
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {currentFact.fact}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={getRandomFact}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
            >
              🎲 Show Me Another Fact!
            </button>
            
            <div className="text-sm text-gray-500">
              Facts viewed: {usedFacts.length} of {geographyFacts.length}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Explore Different Topics</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {['Countries', 'Oceans', 'Mountains', 'Rivers', 'Animals'].map((category) => (
              <div
                key={category}
                className="bg-blue-50 hover:bg-blue-100 p-3 rounded-xl text-center cursor-pointer transition-colors"
                onClick={() => {
                  const categoryFacts = geographyFacts.filter(fact => fact.category === category);
                  if (categoryFacts.length > 0) {
                    const randomCategoryFact = categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
                    setCurrentFact(randomCategoryFact);
                    if (!usedFacts.includes(randomCategoryFact.id)) {
                      setUsedFacts([...usedFacts, randomCategoryFact.id]);
                    }
                  }
                }}
              >
                <div className="text-2xl mb-1">
                  {category === 'Countries' && '🌍'}
                  {category === 'Oceans' && '🌊'}
                  {category === 'Mountains' && '🏔️'}
                  {category === 'Rivers' && '🏞️'}
                  {category === 'Animals' && '🦁'}
                </div>
                <div className="text-xs font-medium text-blue-700">{category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Encouragement */}
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl text-center">
          <p className="text-gray-600 text-sm">
            🌟 Did you know? Learning geography helps you understand different cultures, 
            environments, and how amazing our planet Earth really is!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
