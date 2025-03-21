
import React, { useEffect, useRef } from 'react';
import CosmicBackground from './hero/CosmicBackground';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';
import HeroAnimations from './hero/HeroAnimations';
import useParallaxEffect from '@/hooks/useParallaxEffect';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Use the custom parallax effect hook
  useParallaxEffect(heroRef);
  
  useEffect(() => {
    // Animate elements on load with more visible effect
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
          console.log('Added animation class to element', index);
        }, 200 * index);
      });
    };
    
    // Log to confirm the Hero component is mounting
    console.log('Hero component mounted - checking if deployment updates are visible');
    animateElements();
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12"
    >
      <CosmicBackground />
      <HeroContent />
      <ScrollIndicator />
      <HeroAnimations />
    </div>
  );
};

export default Hero;
