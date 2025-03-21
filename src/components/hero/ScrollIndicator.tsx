
import React from 'react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#mission" className="text-white/50 hover:text-white transition-colors">
        <div className="border-2 border-white/20 rounded-full p-2 backdrop-blur-sm hover:bg-white/5 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default ScrollIndicator;
