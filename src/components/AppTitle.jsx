import React from 'react';

// A dedicated component for the app title to ensure consistent styling
const AppTitle = () => {
  return (
    <div className="pt-2 pb-4">
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              <span className="inline-block">🌍</span> Geography
            </span>
          </h1>
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Wiz
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AppTitle;
