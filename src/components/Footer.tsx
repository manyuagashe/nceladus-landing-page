import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="join" className="bg-nceladus-darkest py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-nceladus-light/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-nceladus-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="heading text-3xl md:text-4xl font-light mb-4 tracking-wider">
              Join the nceladus Network
            </h2>
            <p className="text-white/70 mb-6 font-light">
              Be part of a community shaping the future at the intersection of design, 
              entrepreneurship, and artificial intelligence.
            </p>
            
            <form className="space-y-4 max-w-md">
              <div>
                <label htmlFor="email" className="block text-sm font-light text-white/80 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.edu" 
                  className="w-full p-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-nceladus-light/50 text-white placeholder-white/30"
                />
              </div>
              
              <div>
                <label className="block text-sm font-light text-white/80 mb-1">I am a:</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="designer" 
                      name="role" 
                      className="sr-only peer" 
                    />
                    <label 
                      htmlFor="designer" 
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-md cursor-pointer peer-checked:bg-nceladus-light/20 peer-checked:border-nceladus-light flex items-center justify-center font-light"
                    >
                      Designer
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="founder" 
                      name="role" 
                      className="sr-only peer" 
                    />
                    <label 
                      htmlFor="founder" 
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-md cursor-pointer peer-checked:bg-nceladus-light/20 peer-checked:border-nceladus-light flex items-center justify-center font-light"
                    >
                      Founder
                    </label>
                  </div>
                </div>
              </div>
              
              <button type="button" className="btn-primary w-full">
                Request Early Access
              </button>
              
              <p className="text-xs text-white/50 text-center font-light">
                We prioritize connections between students and early-career founders. 
                We'll review your application and get back to you soon.
              </p>
            </form>
          </div>
          
          <div className="glass-card p-8 relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full border border-nceladus-light/30"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full border border-nceladus-light/20"></div>
            
            <h3 className="text-2xl font-light mb-4 flex items-center tracking-wider">
              <Heart size={20} className="text-nceladus-light mr-2" />
              What Our Members Say
            </h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="italic text-white/80 mb-3 font-light">
                  "nceladus opened doors to collaborations I never thought possible as a student designer. 
                  I'm now working on an AI project that truly values my creative input."
                </p>
                <div className="text-right">
                  <p className="text-nceladus-light font-light">Jamie Wilson</p>
                  <p className="text-sm text-white/50 font-light">Interaction Designer, RISD</p>
                </div>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="italic text-white/80 mb-3 font-light">
                  "Finding the right design talent was a game-changer for our startup. 
                  The student designers we connected with through nceladus brought fresh perspectives we needed."
                </p>
                <div className="text-right">
                  <p className="text-nceladus-light font-light">Ethan Rivera</p>
                  <p className="text-sm text-white/50 font-light">Co-founder, Neuron AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-light text-white tracking-wider">nceladus</span>
            <p className="text-sm text-white/50 mt-1 font-light">
              Accelerating student creativity to the stars.
            </p>
          </div>
          
          <div className="flex space-x-8">
            {['About', 'Privacy', 'Terms', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white/70 hover:text-nceladus-light transition-colors font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center text-white/50 text-sm mt-8 font-light">
          &copy; {new Date().getFullYear()} nceladus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
