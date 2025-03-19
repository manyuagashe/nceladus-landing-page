
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
      {/* Cosmic Background with constellation effect */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-nceladus-darkest via-nceladus-dark to-nceladus-darkest">
        {/* Cosmic dust and nebula effects */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/lovable-uploads/81f75749-ee78-4227-8753-dbb9c7545754.png')] bg-cover bg-center"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nceladus-light/5 rounded-full blur-3xl parallax" data-speed="0.03"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[30rem] h-[30rem] bg-nceladus-accent/5 rounded-full blur-3xl parallax" data-speed="0.04"></div>
        <div className="absolute top-1/2 left-1/2 w-[35rem] h-[35rem] -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 rounded-full blur-3xl parallax" data-speed="0.02"></div>
        
        {/* Constellation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="15%" y1="20%" x2="25%" y2="30%" stroke="white" strokeWidth="0.5" />
          <line x1="25%" y1="30%" x2="35%" y2="25%" stroke="white" strokeWidth="0.5" />
          <line x1="35%" y1="25%" x2="45%" y2="40%" stroke="white" strokeWidth="0.5" />
          <line x1="65%" y1="30%" x2="75%" y2="35%" stroke="white" strokeWidth="0.5" />
          <line x1="75%" y1="35%" x2="85%" y2="20%" stroke="white" strokeWidth="0.5" />
        </svg>
        
        {/* Enhanced Floating stars with glow effects */}
        <div className="absolute top-1/4 left-[15%] text-white parallax animate-float" data-speed="0.07">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={24} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute top-2/3 right-[20%] text-white parallax animate-float" style={{ animationDelay: '1s' }} data-speed="0.06">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={16} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[30%] text-white parallax animate-float" style={{ animationDelay: '2s' }} data-speed="0.04">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={20} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute top-1/4 right-[25%] text-white parallax animate-float" style={{ animationDelay: '1.5s' }} data-speed="0.08">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={18} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-[35%] text-white parallax animate-float" style={{ animationDelay: '2.5s' }} data-speed="0.05">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={22} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        
        {/* Small twinkling stars */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 animate-on-scroll backdrop-blur-sm">
          <span className="text-nceladus-light font-medium font-helvetica">Connect. Create. Collaborate.</span>
        </div>
        
        <h1 className="heading text-5xl md:text-7xl mb-6 animate-on-scroll font-helvetica font-light">
          Accelerating student creativity 
          <span className="block text-nceladus-light relative">
            to the stars
            <span className="absolute -right-6 top-1/2 transform -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-nceladus-light/20 blur-md transform scale-150"></div>
                <Star className="relative z-10 text-nceladus-light" size={24} fill="currentColor" />
              </div>
            </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-on-scroll font-helvetica font-light backdrop-blur-sm bg-nceladus-darkest/30 p-4 rounded-lg">
          Connecting talented student designers with student founders 
          to shape the future of AI and beyond.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
          <a href="#connect" className="btn-primary backdrop-blur-sm">Connect with Designers</a>
          <a href="#join" className="btn-secondary">Join the Network</a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#mission" className="text-white/50 hover:text-white transition-colors">
          <div className="border-2 border-white/20 rounded-full p-2 backdrop-blur-sm">
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
