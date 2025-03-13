
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = Number(htmlEl.getAttribute('data-speed')) || 0.05;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        htmlEl.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Animate elements on load
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, 200 * index);
      });
    };
    
    animateElements();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-nceladus-light/10 rounded-full blur-3xl parallax" data-speed="0.03"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nceladus-accent/10 rounded-full blur-3xl parallax" data-speed="0.05"></div>
        
        {/* Floating stars */}
        <div className="absolute top-1/3 left-[15%] text-nceladus-light/40 parallax animate-float" data-speed="0.07">
          <Star size={24} />
        </div>
        <div className="absolute top-2/3 right-[20%] text-nceladus-light/30 parallax animate-float" style={{ animationDelay: '1s' }} data-speed="0.06">
          <Star size={16} />
        </div>
        <div className="absolute bottom-1/4 left-[30%] text-nceladus-light/20 parallax animate-float" style={{ animationDelay: '2s' }} data-speed="0.04">
          <Star size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 animate-on-scroll">
          <span className="text-nceladus-light font-medium">Connect. Create. Collaborate.</span>
        </div>
        
        <h1 className="heading text-5xl md:text-7xl font-bold mb-6 animate-on-scroll">
          Accelerating Student Creativity 
          <span className="block text-nceladus-light">to the Stars</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-on-scroll">
          Connecting talented student designers with innovative founders 
          to shape the future of AI and beyond.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
          <a href="#connect" className="btn-primary">Connect with Designers</a>
          <a href="#join" className="btn-secondary">Join the Network</a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#mission" className="text-white/50 hover:text-white transition-colors">
          <div className="border-2 border-white/20 rounded-full p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
