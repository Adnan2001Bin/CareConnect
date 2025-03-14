// Loader.js
import React from 'react';
import './Loader.css'; // We'll create this file next

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      <div className="loader-container">
        {/* Heartbeat animation */}
        <div className="heart">
          <svg 
            className="animate-pulse text-blue-600"
            width="60" 
            height="60" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        {/* Loading dots */}
        <div className="flex space-x-2 mt-6">
          <div className="dot bg-blue-600 animate-bounce"></div>
          <div className="dot bg-blue-600 animate-bounce delay-100"></div>
          <div className="dot bg-blue-600 animate-bounce delay-200"></div>
        </div>

        {/* Loading text */}
        <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
          Finding your appointment...
        </p>
      </div>
    </div>
  );
};

export default Loader;