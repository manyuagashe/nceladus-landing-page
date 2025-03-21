
import React from 'react';

const HeroAnimations = () => {
  return (
    <style>
      {`
        @keyframes shooting-star {
          0% {
            transform: translate(0, 0) rotate(30deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          20% {
            transform: translate(-300px, 300px) rotate(30deg);
            opacity: 0;
          }
          100% {
            transform: translate(-300px, 300px) rotate(30deg);
            opacity: 0;
          }
        }
        
        .text-shadow-sm {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}
    </style>
  );
};

export default HeroAnimations;
