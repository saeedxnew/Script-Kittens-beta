'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-box',
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-box',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.contact-card',
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.contact-cards',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-[120px] relative">
      <div className="max-w-[1400px] mx-auto px-10">
        
        <div className="cta-box grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-16 items-center p-20 bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 rounded-[40px] mb-16 relative overflow-hidden">
          
          <div className="cta-3d-element relative flex items-center justify-center lg:order-none order-first">
            <div className="relative w-[200px] h-[200px] flex items-center justify-center">
              <div className="relative w-[200px] h-[200px] flex items-center justify-center animate-[ctaIconFloat_4s_ease-in-out_infinite]">
                <span className="text-[80px] bg-clip-text text-transparent bg-gradient-to-br from-[#8f00ff] to-[#ff00a8] drop-shadow-[0_0_30px_rgba(143,0,255,0.8)] animate-[iconPulse_2s_ease-in-out_infinite]">
                  <i className="fab fa-discord" />
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute border-2 border-purple-500 rounded-full opacity-0 animate-[ctaRingPulse_3s_ease-out_infinite] w-[100px] h-[100px]" />
                  <div className="absolute border-2 border-purple-500 rounded-full opacity-0 animate-[ctaRingPulse_3s_ease-out_infinite] w-[140px] h-[140px] [animation-delay:0.5s]" />
                  <div className="absolute border-2 border-purple-500 rounded-full opacity-0 animate-[ctaRingPulse_3s_ease-out_infinite] w-[180px] h-[180px] [animation-delay:1s]" />
                </div>
              </div>
            </div>
          </div>

          <div className="cta-content text-center lg:text-left">
            <h2 className="font-outfit text-[42px] font-extrabold mb-4">
              Ready to <span className="text-gradient">Dominate?</span>
            </h2>
            <p className="text-[18px] text-white/70 mb-8">
              Join thousands of gamers who trust Script Kittens.
            </p>
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="relative px-10 py-5 rounded-xl font-semibold text-[16px] overflow-hidden group inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8f00ff] to-[#ff00a8] transition-opacity duration-400 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff] to-[#8f00ff] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-2.5 text-white">
                  <i className="fab fa-discord text-xl" /> Join Our Discord
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-cards grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="contact-card flex flex-col items-center text-center p-10 bg-white/5 border border-white/10 rounded-3xl transition-all duration-400 hover:-translate-y-1.5 hover:border-purple-500/30 group">
            <i className="fab fa-discord text-[32px] text-purple-500 mb-5 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-outfit text-[20px] font-bold mb-2 text-white">Discord</h4>
            <p className="text-[14px] text-white/70">Join our community</p>
          </a>
          <a href="#" className="contact-card flex flex-col items-center text-center p-10 bg-white/5 border border-white/10 rounded-3xl transition-all duration-400 hover:-translate-y-1.5 hover:border-purple-500/30 group">
            <i className="fab fa-telegram text-[32px] text-purple-500 mb-5 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-outfit text-[20px] font-bold mb-2 text-white">Telegram</h4>
            <p className="text-[14px] text-white/70">Quick support</p>
          </a>
          <a href="mailto:support@script-kittens.com" className="contact-card flex flex-col items-center text-center p-10 bg-white/5 border border-white/10 rounded-3xl transition-all duration-400 hover:-translate-y-1.5 hover:border-purple-500/30 group">
            <i className="fas fa-envelope text-[32px] text-purple-500 mb-5 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="font-outfit text-[20px] font-bold mb-2 text-white">Email</h4>
            <p className="text-[14px] text-white/70">support@script-kittens.com</p>
          </a>
        </div>

      </div>
    </section>
  );
}
