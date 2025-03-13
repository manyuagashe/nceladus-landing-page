
import React, { useEffect, useRef } from 'react';
import { Users, Brain, Paintbrush } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Network = () => {
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
    <section id="network" ref={sectionRef} className="py-24 px-6 md:px-12 bg-gradient-to-b from-nceladus-darkest to-nceladus-dark relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-nceladus-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-nceladus-dark to-transparent"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 animate-on-scroll">
            <Users size={20} className="text-nceladus-light" />
            <Badge variant="outline" className="text-nceladus-light uppercase tracking-wider text-sm font-light border-nceladus-light/30">
              Our Network
            </Badge>
          </div>
          <h2 className="heading text-4xl md:text-5xl mb-6 animate-on-scroll tracking-wide">
            A Community of Creative Pioneers
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-on-scroll font-light leading-relaxed">
            Join a thriving network of student designers and entrepreneurs building the future together.
          </p>
          <Separator className="max-w-xs mx-auto my-8 bg-nceladus-light/20" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-md animate-on-scroll">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-nceladus-light/10 rounded-lg flex items-center justify-center mb-4">
                <Paintbrush size={24} className="text-nceladus-light" />
              </div>
              <h3 className="text-2xl font-garamond mb-1 font-normal tracking-wide">Student Designers</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 font-light mb-6">
                Talented creatives from top design programs across the country, ready to shape the future of technology.
              </p>
              
              <ul className="space-y-3 text-white/80 font-light">
                {['UI/UX Designers', 'Visual Artists', 'Motion Designers', 'Brand Strategists'].map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-nceladus-light rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-md animate-on-scroll">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-nceladus-light/10 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-nceladus-light" />
              </div>
              <h3 className="text-2xl font-garamond mb-1 font-normal tracking-wide">Student Founders</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 font-light mb-6">
                Visionary entrepreneurs with bold ideas ready to collaborate with exceptional design talent.
              </p>
              
              <ul className="space-y-3 text-white/80 font-light">
                {['Tech Startups', 'Social Ventures', 'Creative Platforms', 'Web3 Projects'].map((venture) => (
                  <li key={venture} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-nceladus-light rounded-full mr-2"></span>
                    {venture}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-md animate-on-scroll">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-nceladus-light/10 rounded-lg flex items-center justify-center mb-4">
                <Brain size={24} className="text-nceladus-light" />
              </div>
              <h3 className="text-2xl font-garamond mb-1 font-normal tracking-wide">AI Exploration</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 font-light mb-6">
                Projects at the intersection of human creativity and artificial intelligence, shaping the future.
              </p>
              
              <ul className="space-y-3 text-white/80 font-light">
                {['Generative Design', 'Creative AI', 'Adaptive Interfaces', 'Human-AI Collaboration'].map((area) => (
                  <li key={area} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-nceladus-light rounded-full mr-2"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-xl font-garamond text-nceladus-light mb-6 font-normal italic tracking-wide">
            "Connecting the brightest creative minds with the most innovative ideas."
          </p>
          <a href="#join" className="btn-primary tracking-wide font-light">Join Our Community</a>
        </div>
      </div>
    </section>
  );
};

export default Network;
