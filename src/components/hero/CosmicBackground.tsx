
import React from 'react';
import { Star } from 'lucide-react';

const CosmicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-purple-900 via-nceladus-dark to-nceladus-darkest z-0">
      {/* Cosmic dust and nebula effects with adjusted opacity */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/lovable-uploads/81f75749-ee78-4227-8753-dbb9c7545754.png')] bg-cover bg-center"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nceladus-light/10 rounded-full blur-3xl parallax" data-speed="0.03"></div>
      <div className="absolute bottom-1/3 right-1/3 w-[30rem] h-[30rem] bg-purple-500/15 rounded-full blur-3xl parallax" data-speed="0.04"></div>
      <div className="absolute top-1/2 left-1/2 w-[35rem] h-[35rem] -translate-x-1/2 -translate-y-1/2 bg-pink-400/10 rounded-full blur-3xl parallax" data-speed="0.02"></div>
      
      {/* Brighter constellation lines - moved further away from text center */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="15%" x2="20%" y2="25%" stroke="white" strokeWidth="1" />
        <line x1="20%" y1="25%" x2="30%" y2="20%" stroke="white" strokeWidth="1" />
        <line x1="30%" y1="20%" x2="40%" y2="35%" stroke="white" strokeWidth="1" />
        <line x1="60%" y1="25%" x2="70%" y2="30%" stroke="white" strokeWidth="1" />
        <line x1="70%" y1="30%" x2="80%" y2="15%" stroke="white" strokeWidth="1" />
        <line x1="15%" y1="65%" x2="25%" y2="75%" stroke="white" strokeWidth="1" />
        <line x1="25%" y1="75%" x2="35%" y2="70%" stroke="white" strokeWidth="1" />
      </svg>
      
      <FloatingStar position="top-1/5 left-[10%]" size={30} speed="0.07" delay="0s" />
      <FloatingStar position="top-3/4 right-[15%]" size={22} speed="0.06" delay="1s" />
      <FloatingStar position="bottom-1/5 left-[25%]" size={26} speed="0.04" delay="2s" />
      <FloatingStar position="top-1/5 right-[20%]" size={24} speed="0.08" delay="1.5s" />
      <FloatingStar position="bottom-1/4 right-[30%]" size={28} speed="0.05" delay="2.5s" />
      <FloatingStar position="top-2/3 left-[40%]" size={20} speed="0.07" delay="1.2s" />
      <FloatingStar position="bottom-2/3 right-[45%]" size={18} speed="0.04" delay="2.2s" />
      
      {/* Small twinkling stars */}
      <TwinklingStars count={60} />
      
      {/* Shooting star effects */}
      <ShootingStar position="top-[15%] left-[70%]" width={100} rotation={30} delay="3s" duration="8s" />
      <ShootingStar position="top-[70%] left-[20%]" width={80} rotation={150} delay="6s" duration="12s" />
    </div>
  );
};

interface FloatingStarProps {
  position: string;
  size: number;
  speed: string;
  delay: string;
}

const FloatingStar: React.FC<FloatingStarProps> = ({ position, size, speed, delay }) => {
  return (
    <div className={`absolute ${position} text-white parallax animate-float`} data-speed={speed} style={{ animationDelay: delay }}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-white/40 blur-md transform scale-150"></div>
        <Star className="relative z-10" size={size} fill="white" fillOpacity={0.9} />
      </div>
    </div>
  );
};

interface ShootingStarProps {
  position: string;
  width: number;
  rotation: number;
  delay: string;
  duration: string;
}

const ShootingStar: React.FC<ShootingStarProps> = ({ position, width, rotation, delay, duration }) => {
  return (
    <div 
      className={`absolute bg-white h-[1px] w-[${width}px] rotate-[${rotation}deg]`}
      style={{
        top: position.split(' ')[0],
        left: position.split(' ')[1],
        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.7)',
        animation: `shooting-star ${duration} linear infinite`,
        animationDelay: delay
      }}
    ></div>
  );
};

interface TwinklingStarsProps {
  count: number;
}

const TwinklingStars: React.FC<TwinklingStarsProps> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
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
            opacity: Math.random() * 0.4 + 0.3
          }}
        ></div>
      ))}
    </>
  );
};

export default CosmicBackground;
