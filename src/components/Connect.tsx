
import React, { useEffect, useRef, useState } from 'react';
import { Heart, ArrowRight, Check } from 'lucide-react';

const Connect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'designers' | 'founders'>('designers');
  
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

  const designerStories = [
    {
      name: "Alex Chen",
      title: "UI/UX Designer",
      story: "Nceladus connected me with an amazing AI startup where I could apply my design skills to solve real problems.",
      school: "Rhode Island School of Design"
    },
    {
      name: "Maya Johnson",
      title: "Visual Artist",
      story: "The platform helped me find a collaborative project that perfectly aligned with my artistic vision and career goals.",
      school: "California Institute of the Arts"
    }
  ];

  const founderStories = [
    {
      name: "Jason Park",
      title: "Founder, NeuralCanvas",
      story: "Finding the right design talent through Nceladus transformed our user experience and helped us secure our seed round.",
      school: "Stanford University"
    },
    {
      name: "Leila Rodriguez",
      title: "Co-founder, Adaptive AI",
      story: "The student designers we connected with brought fresh perspectives that completely elevated our product design.",
      school: "MIT Media Lab"
    }
  ];

  return (
    <section id="connect" ref={sectionRef} className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-nceladus-light/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-nceladus-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 animate-on-scroll">
            <Heart size={20} className="text-nceladus-light" />
            <span className="text-nceladus-light uppercase tracking-wider text-sm font-medium">Connect</span>
          </div>
          <h2 className="heading text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
            Making Meaningful Connections
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-on-scroll">
            Discover how Nceladus bridges the gap between creative talent and innovative ventures.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="bg-nceladus-darkest/50 backdrop-blur-sm p-1 rounded-lg inline-flex">
            <button
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'designers' 
                  ? 'bg-nceladus-light text-nceladus-darkest font-medium'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('designers')}
            >
              For Designers
            </button>
            <button
              className={`px-6 py-3 rounded-md transition-all ${
                activeTab === 'founders' 
                  ? 'bg-nceladus-light text-nceladus-darkest font-medium'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('founders')}
            >
              For Founders
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Process */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-garamond font-bold mb-6">
              How It Works for {activeTab === 'designers' ? 'Designers' : 'Founders'}
            </h3>
            
            <div className="space-y-8">
              {activeTab === 'designers' ? (
                <>
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-nceladus-light/20 flex items-center justify-center text-nceladus-light font-bold">1</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">Create Your Designer Profile</h4>
                      <p className="text-white/70">Showcase your skills, portfolio, and interests to get matched with the right projects.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-nceladus-light/20 flex items-center justify-center text-nceladus-light font-bold">2</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">Browse Creative Opportunities</h4>
                      <p className="text-white/70">Explore projects from student founders looking for design talent.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-nceladus-light/20 flex items-center justify-center text-nceladus-light font-bold">3</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">Connect and Collaborate</h4>
                      <p className="text-white/70">Join projects that align with your creative vision and career goals.</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-nceladus-light/20 flex items-center justify-center text-nceladus-light font-bold">1</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">Post Your Project</h4>
                      <p className="text-white/70">Describe your venture and the creative talent you're looking to collaborate with.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-nceladus-light/20 flex items-center justify-center text-nceladus-light font-bold">2</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">Review Designer Profiles</h4>
                      <p className="text-white/70">Browse portfolios from talented student designers across top programs.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-nceladus-light/20 flex items-center justify-center text-nceladus-light font-bold">3</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">Build Your Dream Team</h4>
                      <p className="text-white/70">Connect with designers who bring your vision to life and elevate your venture.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <div className="mt-10">
              <a href="#join" className="inline-flex items-center text-nceladus-light hover:text-white transition-colors">
                <span>Learn more about our process</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* Right side - Stories */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-garamond font-bold mb-6">Success Stories</h3>
            
            <div className="space-y-6">
              {(activeTab === 'designers' ? designerStories : founderStories).map((story, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-nceladus-light/20 flex items-center justify-center">
                        <span className="text-nceladus-light font-bold">{story.name[0]}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold">{story.name}</h4>
                          <p className="text-sm text-nceladus-light">{story.title}</p>
                        </div>
                        <div className="text-xs text-white/50 mt-1 sm:mt-0">{story.school}</div>
                      </div>
                      <p className="text-white/80">{story.story}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-card p-6 mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-1">Ready to connect?</h4>
                  <p className="text-white/70 text-sm">Join our network today</p>
                </div>
                <a href="#join" className="btn-secondary flex items-center">
                  Get Started
                  <Check size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
