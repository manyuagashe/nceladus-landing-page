
import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax effect with improved performance
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
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12"
    >
      {/* Enhanced Cosmic Background with more visible effects */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-purple-900 via-nceladus-dark to-nceladus-darkest">
        {/* Cosmic dust and nebula effects with higher opacity */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('/lovable-uploads/81f75749-ee78-4227-8753-dbb9c7545754.png')] bg-cover bg-center"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nceladus-light/10 rounded-full blur-3xl parallax" data-speed="0.03"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[30rem] h-[30rem] bg-purple-500/15 rounded-full blur-3xl parallax" data-speed="0.04"></div>
        <div className="absolute top-1/2 left-1/2 w-[35rem] h-[35rem] -translate-x-1/2 -translate-y-1/2 bg-pink-400/10 rounded-full blur-3xl parallax" data-speed="0.02"></div>
        
        {/* Brighter constellation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <line x1="15%" y1="20%" x2="25%" y2="30%" stroke="white" strokeWidth="1" />
          <line x1="25%" y1="30%" x2="35%" y2="25%" stroke="white" strokeWidth="1" />
          <line x1="35%" y1="25%" x2="45%" y2="40%" stroke="white" strokeWidth="1" />
          <line x1="65%" y1="30%" x2="75%" y2="35%" stroke="white" strokeWidth="1" />
          <line x1="75%" y1="35%" x2="85%" y2="20%" stroke="white" strokeWidth="1" />
          <line x1="20%" y1="60%" x2="30%" y2="70%" stroke="white" strokeWidth="1" />
          <line x1="30%" y1="70%" x2="40%" y2="65%" stroke="white" strokeWidth="1" />
        </svg>
        
        {/* Enhanced Floating stars with stronger glow effects */}
        <div className="absolute top-1/4 left-[15%] text-white parallax animate-float" data-speed="0.07">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/40 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={30} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute top-2/3 right-[20%] text-white parallax animate-float" style={{ animationDelay: '1s' }} data-speed="0.06">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/40 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={22} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[30%] text-white parallax animate-float" style={{ animationDelay: '2s' }} data-speed="0.04">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/40 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={26} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute top-1/4 right-[25%] text-white parallax animate-float" style={{ animationDelay: '1.5s' }} data-speed="0.08">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/40 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={24} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-[35%] text-white parallax animate-float" style={{ animationDelay: '2.5s' }} data-speed="0.05">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/40 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={28} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        
        {/* Additional floating stars */}
        <div className="absolute top-1/2 left-[45%] text-white parallax animate-float" style={{ animationDelay: '1.2s' }} data-speed="0.07">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/40 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={20} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        <div className="absolute bottom-1/2 right-[40%] text-white parallax animate-float" style={{ animationDelay: '2.2s' }} data-speed="0.04">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/40 blur-md transform scale-150"></div>
            <Star className="relative z-10" size={18} fill="white" fillOpacity={0.9} />
          </div>
        </div>
        
        {/* Small twinkling stars with higher visibility */}
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.5
            }}
          ></div>
        ))}
        
        {/* Shooting star effect */}
        <div 
          className="absolute bg-white h-[1px] w-[100px] rotate-[30deg]"
          style={{
            top: '20%',
            left: '60%',
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.7)',
            animation: 'shooting-star 8s linear infinite',
            animationDelay: '3s'
          }}
        ></div>
        <div 
          className="absolute bg-white h-[1px] w-[80px] rotate-[150deg]"
          style={{
            top: '60%',
            left: '30%',
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.7)',
            animation: 'shooting-star 12s linear infinite',
            animationDelay: '6s'
          }}
        ></div>
      </div>

      {/* Content with enhanced styling */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 animate-on-scroll backdrop-blur-sm">
          <span className="text-nceladus-light font-medium font-helvetica">Connect. Create. Collaborate.</span>
        </div>
        
        <h1 className="heading text-5xl md:text-7xl mb-6 animate-on-scroll font-helvetica font-light">
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
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-on-scroll font-helvetica font-light backdrop-blur-sm bg-nceladus-darkest/40 p-4 rounded-lg border border-white/5">
          Connecting talented student designers with student founders 
          to shape the future of AI and beyond.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
          <a href="#connect" className="btn-primary backdrop-blur-sm hover:scale-105 transition-transform">Connect with Designers</a>
          <a href="#join" className="btn-secondary hover:scale-105 transition-transform">Join the Network</a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#mission" className="text-white/50 hover:text-white transition-colors">
          <div className="border-2 border-white/20 rounded-full p-2 backdrop-blur-sm hover:bg-white/5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>
      
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
        `}
      </style>
    </div>
  );
};

export default Hero;
