'use client';

import { useEffect, useRef } from 'react';
import { Instagram, MessageCircle, Youtube } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-grid', start: 'top 85%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.about-founder',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-grid', start: 'top 85%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.about-stat',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.about-stats-row', start: 'top 92%', toggleActions: 'play none none reverse' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-wrap relative">
      <div className="section-shell">
        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left content */}
          <div className="about-content">
            <span className="section-chip mb-6">ABOUT US</span>
            <h2 className="section-title mb-7">
              Who We <span className="text-gradient">Are</span>
            </h2>
            <p className="section-subtitle mb-5">
              <strong style={{ color: '#f0ede4', fontWeight: 600 }}>Script Kittens</strong> is a gaming tools studio built by gamers, for gamers.
              We craft premium Free Fire tools, mods, and utilities that give players the edge
              they need — clean, reliable, and always ahead of the curve.
            </p>
            <p className="section-subtitle mb-8">
              What started as a solo passion project by <strong style={{ color: '#f0ede4', fontWeight: 600 }}>Furqan</strong> has grown into a
              tight-knit crew of developers, designers, and community builders united by one mission:
              making gaming better for everyone.
            </p>

            {/* Stats row */}
            <div className="about-stats-row flex flex-wrap gap-10 pt-8"
              style={{ borderTop: '1.5px dashed rgba(200,184,232,0.15)' }}>
              {[['10K+', 'Active Users'], ['50+', 'Tools Built'], ['24/7', 'Community']].map(([val, label]) => (
                <div key={label} className="about-stat flex flex-col gap-1.5">
                  <span className="font-outfit text-[30px] font-extrabold text-gradient tracking-[-1px]">{val}</span>
                  <span className="font-jetbrains-mono text-[11px] font-bold uppercase tracking-[2px]"
                    style={{ color: 'rgba(240,237,228,0.40)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right founder card */}
          <div className="about-founder flex flex-col items-center gap-6">
            <div className="sketch-corner relative w-full max-w-[360px] aspect-[4/5] overflow-hidden group"
              style={{
                border: '1.5px solid rgba(200,184,232,0.18)',
                borderRadius: '4px',
                background: 'rgba(10,9,16,0.9)',
                boxShadow: '5px 5px 0 rgba(200,184,232,0.08), 9px 9px 0 rgba(200,184,232,0.04)',
              }}>
              {/* Top chalk line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] z-10"
                style={{ background: 'linear-gradient(90deg, rgba(200,184,232,0.50), rgba(168,200,232,0.30), transparent)' }} />
              <div className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(10,9,16,0.7) 0%, rgba(10,9,16,0.15) 40%, transparent 70%)' }} />
              <img
                src="/coreteam/Furqan.png"
                alt="Furqan — Founder of Script Kittens"
                className="w-full h-full object-cover object-[center_25%] grayscale-[15%] brightness-95 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Founder info */}
            <div className="text-center">
              <span className="font-jetbrains-mono text-[10px] font-bold uppercase tracking-[3px] block mb-2"
                style={{ color: 'rgba(200,184,232,0.60)' }}>Founder</span>
              <h3 className="font-outfit text-[26px] font-extrabold tracking-[-0.5px] mb-1" style={{ color: '#f0ede4' }}>Furqan</h3>
              <p className="text-[13px] mb-5" style={{ color: 'rgba(240,237,228,0.55)' }}>Lead Developer & Visionary</p>
              <div className="flex justify-center gap-2.5">
                {[
                  { href: 'https://discord.gg/AqkdsPMU7M', icon: MessageCircle },
                  { href: 'https://www.youtube.com/channel/UCIlubysLx-75CVZ1dcIfWvA', icon: Youtube },
                  { href: 'https://www.instagram.com/fuqii69/', icon: Instagram },
                ].map(({ href, icon: Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                    style={{ border: '1.5px solid rgba(200,184,232,0.18)', borderRadius: '3px', background: 'rgba(200,184,232,0.05)', color: 'rgba(240,237,228,0.50)', boxShadow: '2px 2px 0 rgba(200,184,232,0.08)' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(200,184,232,0.40)';
                      el.style.color = '#c8b8e8';
                      el.style.background = 'rgba(200,184,232,0.10)';
                      el.style.transform = 'translate(-1px,-2px)';
                      el.style.boxShadow = '3px 3px 0 rgba(200,184,232,0.15)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(200,184,232,0.18)';
                      el.style.color = 'rgba(240,237,228,0.50)';
                      el.style.background = 'rgba(200,184,232,0.05)';
                      el.style.transform = '';
                      el.style.boxShadow = '2px 2px 0 rgba(200,184,232,0.08)';
                    }}>
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
