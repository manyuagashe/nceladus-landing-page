
import React from 'react';
import { Star } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <div className="inline-block mb-4 px-4 py-1 rounded-full bg-black/30 border border-white/20 animate-on-scroll backdrop-blur-sm">
        <span className="text-nceladus-light font-medium font-helvetica">Connect. Create. Collaborate.</span>
      </div>
      
      <h1 className="heading text-5xl md:text-7xl mb-6 animate-on-scroll font-helvetica font-light text-shadow-sm">
        Accelerating student creativity 
        <span className="block text-nceladus-light relative">
          to the stars
          <span className="absolute -right-6 top-1/2 transform -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-nceladus-light/30 blur-md transform scale-150"></div>
              <Star className="relative z-10 text-nceladus-light" size={30} fill="currentColor" />
            </div>
          </span>
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto animate-on-scroll font-helvetica font-light backdrop-blur-sm bg-nceladus-darkest/60 p-4 rounded-lg border border-white/5 shadow-xl">
        Connecting talented student designers with student founders 
        to shape the future of AI and beyond.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
        <a href="#connect" className="btn-primary backdrop-blur-sm hover:scale-105 transition-transform">Connect with Designers</a>
        <a href="#join" className="btn-secondary hover:scale-105 transition-transform">Join the Network</a>
      </div>
    </div>
  );
};

export default HeroContent;
