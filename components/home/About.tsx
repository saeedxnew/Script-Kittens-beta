'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content',
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-founder',
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-stat',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.about-stats-row',
            start: 'top 92%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-[140px] relative">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="about-content">
            <span className="inline-block px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-[11px] font-bold tracking-[3px] text-purple-500 mb-5">
              ABOUT US
            </span>
            <h2 className="font-outfit text-[clamp(36px,6vw,56px)] font-extrabold mb-6">
              Who We <span className="text-gradient">Are</span>
            </h2>
            <p className="font-inter text-[15px] text-white/70 leading-[1.85] mb-4">
              <strong className="text-white font-semibold">Script Kittens</strong> is a gaming tools studio built by gamers, for gamers.
              We craft premium Free Fire tools, mods, and utilities that give players the edge
              they need — clean, reliable, and always ahead of the curve.
            </p>
            <p className="font-inter text-[15px] text-white/70 leading-[1.85] mb-4">
              What started as a solo passion project by <strong className="text-white font-semibold">Furqan</strong> has grown into a
              tight-knit crew of developers, designers, and community builders united by one mission:
              making gaming better for everyone.
            </p>
            
            <div className="about-stats-row flex flex-wrap gap-10 mt-9 pt-8 border-t border-white/5">
              <div className="about-stat flex flex-col gap-1">
                <span className="font-outfit text-[28px] font-extrabold text-gradient tracking-[-0.5px]">10K+</span>
                <span className="font-inter text-[12px] font-medium text-white/70 uppercase tracking-[1.5px]">Active Users</span>
              </div>
              <div className="about-stat flex flex-col gap-1">
                <span className="font-outfit text-[28px] font-extrabold text-gradient tracking-[-0.5px]">50+</span>
                <span className="font-inter text-[12px] font-medium text-white/70 uppercase tracking-[1.5px]">Tools Built</span>
              </div>
              <div className="about-stat flex flex-col gap-1">
                <span className="font-outfit text-[28px] font-extrabold text-gradient tracking-[-0.5px]">24/7</span>
                <span className="font-inter text-[12px] font-medium text-white/70 uppercase tracking-[1.5px]">Community</span>
              </div>
            </div>
          </div>

          <div className="about-founder flex flex-col items-center gap-6">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#08060f] group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_35%,transparent_40%,rgba(8,6,15,0.7)_75%,rgba(8,6,15,0.95)_100%)] z-10 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl border border-purple-500/10 z-20 pointer-events-none transition-colors duration-500 group-hover:border-purple-500/25" />
              <img 
                src="https://files.catbox.moe/f7mmfi.jpg" 
                alt="Furqan — Founder of Script Kittens" 
                className="w-full h-full object-cover object-[center_25%] grayscale-[20%] brightness-95 contrast-105 transition-all duration-800 group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[radial-gradient(ellipse,rgba(139,92,246,0.25)_0%,transparent_70%)] blur-[40px] pointer-events-none" />
            </div>
            <div className="text-center">
              <span className="font-inter text-[10px] font-bold uppercase tracking-[3px] text-purple-500 block mb-2">Founder</span>
              <h3 className="font-outfit text-[26px] font-extrabold text-white tracking-[-0.5px] mb-1">Furqan</h3>
              <p className="font-inter text-[13px] text-white/70 mb-4">Lead Developer & Visionary</p>
              <div className="flex justify-center gap-3">
                <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/50 text-base transition-all duration-300 hover:bg-purple-500 hover:border-purple-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)]">
                  <i className="fab fa-discord" />
                </a>
                <a href="https://www.youtube.com/channel/UCIlubysLx-75CVZ1dcIfWvA" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/50 text-base transition-all duration-300 hover:bg-purple-500 hover:border-purple-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)]">
                  <i className="fab fa-youtube" />
                </a>
                <a href="https://www.instagram.com/fuqii69/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/50 text-base transition-all duration-300 hover:bg-purple-500 hover:border-purple-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(139,92,246,0.3)]">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
