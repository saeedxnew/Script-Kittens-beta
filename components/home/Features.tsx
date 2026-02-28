'use client';

import { useEffect, useRef } from 'react';
import { Cpu, ShieldAlert, Zap, Globe, RefreshCw, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
  {
    icon: Cpu,
    title: 'AI-Powered',
    desc: 'Machine learning algorithms that adapt continuously.'
  },
  {
    icon: ShieldAlert,
    title: 'Undetectable',
    desc: 'Advanced stealth technology keeps you safe.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Optimized for speed with parallel processing.'
  },
  {
    icon: Globe,
    title: 'Multi-Region',
    desc: 'Support for all server regions worldwide.'
  },
  {
    icon: RefreshCw,
    title: 'Auto-Update',
    desc: 'Automatic updates for latest features.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock technical support.'
  }
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-[120px] relative">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-[11px] font-bold tracking-[3px] text-purple-500 mb-5">
            WHY CHOOSE US
          </span>
          <h2 className="font-outfit text-[clamp(36px,6vw,56px)] font-extrabold mb-5">
            Elite <span className="text-gradient">Features</span>
          </h2>
          <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
            Built with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-center">
          <div className="features-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="feature-card p-8 bg-gradient-to-br from-[#1e19328c] to-[#140f23a6] backdrop-blur-md border border-purple-500/15 rounded-3xl transition-all duration-400 hover:-translate-y-2 hover:border-purple-500/35 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25),0_0_30px_rgba(143,0,255,0.1)] group">
                <div className="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-purple-500/15 to-cyan-500/10 border border-purple-500/25 rounded-2xl text-purple-500 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-500/25 group-hover:to-cyan-500/20 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(143,0,255,0.3)]">
                  <feature.icon className="w-6 h-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                </div>
                <h3 className="font-outfit text-lg font-bold mb-2.5 text-white">{feature.title}</h3>
                <p className="text-[14px] text-white/70 leading-[1.7]">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center relative">
            <div className="relative w-[250px] h-[250px] perspective-[1000px] flex items-center justify-center">
              <div className="w-[180px] h-[180px] relative transform-style-3d animate-[cubeRotate_15s_linear_infinite]">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`absolute w-[120px] h-[120px] top-1/2 left-1/2 -mt-[60px] -ml-[60px] bg-gradient-to-br from-purple-500/20 to-cyan-500/10 border-2 border-purple-500 flex items-center justify-center shadow-[inset_0_0_30px_rgba(143,0,255,0.2)] ${
                    i === 0 ? 'transform translate-z-[60px]' :
                    i === 1 ? 'transform rotate-y-90 translate-z-[60px]' :
                    i === 2 ? 'transform rotate-y-180 translate-z-[60px]' :
                    i === 3 ? 'transform rotate-y-270 translate-z-[60px]' :
                    i === 4 ? 'transform rotate-x-90 translate-z-[60px]' :
                    'transform -rotate-x-90 translate-z-[60px]'
                  }`}>
                    <Cpu className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(143,0,255,0.8)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
