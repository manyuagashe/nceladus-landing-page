
import { useEffect } from 'react';

const useParallaxEffect = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    // Parallax effect with improved performance
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const elements = ref.current.querySelectorAll('.parallax');
      
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = Number(htmlEl.getAttribute('data-speed')) || 0.05;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        htmlEl.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);
};

export default useParallaxEffect;
