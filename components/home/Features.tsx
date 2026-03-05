'use client';

import { useEffect, useRef } from 'react';
import { Cpu, ShieldAlert, Zap, Globe, RefreshCw, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
  { icon: Cpu, title: 'AI-Powered', desc: 'Machine learning algorithms that adapt continuously to new anti-cheat patterns.' },
  { icon: ShieldAlert, title: 'Undetectable', desc: 'Advanced stealth technology keeps you safe from detection systems.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed with parallel processing and low-latency execution.' },
  { icon: Globe, title: 'Multi-Region', desc: 'Full support for all server regions worldwide without performance loss.' },
  { icon: RefreshCw, title: 'Auto-Update', desc: 'Automatic updates keep you running with the latest features always.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock technical support from our expert community team.' },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 60, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.features-grid', start: 'top 85%', toggleActions: 'play none none reverse' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-wrap relative">
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />

      <div className="section-shell">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-chip mb-5">WHY CHOOSE US</span>
          <h2 className="section-title mb-5">
            Elite <span className="text-gradient">Features</span>
          </h2>
          <p className="section-subtitle max-w-[520px] mx-auto">
            Built with cutting-edge technology, designed for maximum performance.
          </p>
        </div>

        {/* Grid */}
        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {features.map((feature, i) => (
            <div key={i} className="feature-card group sketch-corner relative p-7 transition-all duration-300"
              style={{
                background: 'rgba(255,253,245,0.03)',
                border: '1.5px solid rgba(200,184,232,0.12)',
                borderRadius: '4px',
                boxShadow: '3px 3px 0 rgba(200,184,232,0.05), 5px 5px 0 rgba(200,184,232,0.025)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(200,184,232,0.28)';
                el.style.background = 'rgba(200,184,232,0.05)';
                el.style.boxShadow = '4px 4px 0 rgba(200,184,232,0.12), 7px 7px 0 rgba(200,184,232,0.06)';
                el.style.transform = 'translate(-2px,-2px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(200,184,232,0.12)';
                el.style.background = 'rgba(255,253,245,0.03)';
                el.style.boxShadow = '3px 3px 0 rgba(200,184,232,0.05), 5px 5px 0 rgba(200,184,232,0.025)';
                el.style.transform = '';
              }}>

              {/* Icon */}
              <div className="w-11 h-11 mb-5 flex items-center justify-center transition-all duration-300"
                style={{
                  border: '1.5px solid rgba(200,184,232,0.22)',
                  borderRadius: '3px',
                  background: 'rgba(200,184,232,0.07)',
                  color: '#c8b8e8',
                  boxShadow: '2px 2px 0 rgba(200,184,232,0.10)',
                }}>
                <feature.icon className="w-5 h-5" />
              </div>

              {/* Index number — pencil style */}
              <span className="absolute top-5 right-5 font-jetbrains-mono text-[11px] font-bold"
                style={{ color: 'rgba(200,184,232,0.18)' }}>0{i + 1}</span>

              <h3 className="font-outfit text-[17px] font-bold mb-2.5 tracking-[-0.3px]" style={{ color: '#f0ede4' }}>{feature.title}</h3>
              <p className="text-[13.5px] leading-[1.75]" style={{ color: 'rgba(240,237,228,0.55)' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
