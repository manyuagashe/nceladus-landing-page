
import React, { useEffect, useRef } from 'react';
import { Rocket, Star, Sparkles } from 'lucide-react';

const Mission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="mission" ref={sectionRef} className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-nceladus-light/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-nceladus-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 animate-on-scroll">
            <Rocket size={20} className="text-nceladus-light" />
            <span className="text-nceladus-light uppercase tracking-wider text-sm font-medium font-helvetica">Our Mission</span>
          </div>
          <h2 className="heading text-4xl md:text-5xl mb-6 animate-on-scroll font-helvetica font-light">
            Creating the Future Through <br /> Student Collaboration
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-on-scroll font-helvetica font-light">
            We're building a bridge between visionary student founders and talented creative minds.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="glass-card p-6 animate-on-scroll">
                <div className="flex items-start space-x-4">
                  <div className="bg-nceladus-light/10 p-3 rounded-lg">
                    <Star size={24} className="text-nceladus-light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-helvetica font-light mb-2">Accelerating Student Creativity</h3>
                    <p className="text-white/70 font-helvetica font-light">
                      We believe in the power of student innovation and creativity. 
                      Our platform provides the resources, connections, and opportunities
                      for students to turn their creative visions into reality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 animate-on-scroll">
                <div className="flex items-start space-x-4">
                  <div className="bg-nceladus-light/10 p-3 rounded-lg">
                    <Sparkles size={24} className="text-nceladus-light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-helvetica font-light mb-2">Exploring the AI Frontier</h3>
                    <p className="text-white/70 font-helvetica font-light">
                      As we venture into the AI era, we're focused on nurturing projects 
                      that explore the intersection of human creativity and artificial intelligence.
                      Together, we're designing the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-on-scroll">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-nceladus-darkest to-nceladus-dark border border-white/10 p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nceladus-light/10 via-transparent to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-nceladus-light/10 animate-pulse"></div>
                    <div className="absolute inset-3 rounded-full bg-nceladus-light/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute inset-6 rounded-full bg-nceladus-light/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <Star size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-helvetica font-light mb-2">Creative Connection</h3>
                  <p className="text-white/70 font-helvetica font-light">
                    Where student creativity meets
                    entrepreneurial vision
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-nceladus-light/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-nceladus-light/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
