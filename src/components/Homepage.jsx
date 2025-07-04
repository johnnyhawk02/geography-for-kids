import React, { useEffect } from 'react';
import { getCategories } from '../data/questions.js';
import AppTitle from './AppTitle';

const Homepage = ({ onStartQuiz, onShowFacts }) => {
  // Scroll to top when component mounts to ensure full visibility
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = getCategories();
  return (
    <div className="max-w-4xl mx-auto text-center pb-16 px-3">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 mb-16">
        <div className="mb-8">
          <AppTitle />
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Welcome, young explorer!
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ready to discover amazing facts about our wonderful world? 
            Test your geography knowledge and learn fun facts about countries, 
            capitals, oceans, and more!
          </p>
        </div>

        <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:gap-4">
          <button
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
          >
            🎯 Start Quiz Adventure!
          </button>
          
          <button
            onClick={onShowFacts}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
          >
            🧠 Fun Geography Facts
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-2xl">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-semibold text-blue-800 mb-2">35+ Quiz Questions</h3>
            <p className="text-blue-600 text-sm">Test your knowledge with questions from {categories.length} different categories!</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-2xl">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-green-800 mb-2">Learn Amazing Facts</h3>
            <p className="text-green-600 text-sm">Discover cool and surprising facts about our planet!</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-semibold text-purple-800 mb-2">Track Your Progress</h3>
            <p className="text-purple-600 text-sm">See how well you're doing and become a geography expert!</p>
          </div>
        </div>

        {/* Categories Preview */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">🗺️ What You'll Learn About</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {categories.slice(0, 8).map((category, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
                <span className="text-lg">
                  {category.includes('Countries') && '🌍'}
                  {category.includes('Ocean') && '🌊'}
                  {category.includes('Mountain') && '🏔️'}
                  {category.includes('Animals') && '🦘'}
                  {category.includes('Rivers') && '🏞️'}
                  {category.includes('Continents') && '🗺️'}
                  {category.includes('Weather') && '☀️'}
                  {category.includes('Fun Facts') && '🎉'}
                  {category.includes('Islands') && '🏝️'}
                  {category.includes('Volcanoes') && '🌋'}
                  {category.includes('Languages') && '🗣️'}
                  {!category.includes('Countries') && !category.includes('Ocean') && !category.includes('Mountain') && 
                   !category.includes('Animals') && !category.includes('Rivers') && !category.includes('Continents') && 
                   !category.includes('Weather') && !category.includes('Fun Facts') && !category.includes('Islands') && 
                   !category.includes('Volcanoes') && !category.includes('Languages') && '📍'}
                </span>
                <span className="text-gray-700 font-medium">{category}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8"></div> {/* Extra space at the bottom */}
      </div>
    </div>
  );
};

export default Homepage;
