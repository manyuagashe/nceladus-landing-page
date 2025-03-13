
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Network from '@/components/Network';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize animation observers
  useEffect(() => {
    // Function to handle smooth scrolling for navigation links
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' && 
        target.getAttribute('href')?.startsWith('#')
      ) {
        e.preventDefault();
        const id = target.getAttribute('href') as string;
        const element = document.querySelector(id);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };
    
    // Add event listener for navigation
    document.addEventListener('click', handleNavLinkClick);
    
    return () => {
      document.removeEventListener('click', handleNavLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-nceladus-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Mission />
      <Network />
      <Connect />
      <Footer />
    </div>
  );
};

export default Index;
