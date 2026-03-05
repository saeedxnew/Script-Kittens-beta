'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Rocket, MessageSquare, Users, Shield, Zap } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.6 });
      tl.fromTo('.title-line',
        { clipPath: 'inset(100% 0 0 0)', y: 60 },
        { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1.2, ease: 'power4.out', stagger: 0.15 }
      )
      .fromTo('.hero-tagline', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6')
      .fromTo('.hero-description', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.5')
      .fromTo('.hero-buttons > *', { y: 30, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12 }, '-=0.4')
      .fromTo('.hero-stat-item', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="section-wrap min-h-screen flex items-center overflow-hidden pt-32 md:pt-20">
      {/* Graph paper overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Chalk smudge blobs */}
      <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,184,232,0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-60px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(168,200,232,0.05) 0%, transparent 70%)' }} />

      <div className="section-shell grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

        <div className="z-10">
          {/* Overline chip */}
          <div className="hero-tagline mb-8">
            <span className="section-chip">REDEFINING THE IMPOSSIBLE</span>
          </div>

          {/* Big title */}
          <h1 className="font-outfit text-[clamp(48px,10vw,110px)] font-black leading-[0.88] mb-6" style={{ color: '#f0ede4' }}>
            <span className="title-line block overflow-hidden">
              <span className="inline-block tracking-[3px]">SCRIPT</span>
            </span>
            <span className="title-line block overflow-hidden">
              <span className="inline-block text-gradient tracking-[7px]">KITTENS</span>
            </span>
          </h1>

          {/* Chalk rule */}
          <div className="mb-8 h-[2px] w-[220px] chalk-rule" />

          <p className="hero-description section-subtitle max-w-[580px] mb-10 leading-[1.85]">
            Welcome to Script Kittens — your ultimate destination for premium Free Fire automation solutions.
            Our cutting-edge tools are meticulously crafted with advanced algorithms and robust security protocols,
            ensuring seamless performance and maximum efficiency.
          </p>

          <div className="hero-buttons flex flex-wrap gap-4 mb-14">
            <Link href="#products" className="btn-primary">
              <Rocket className="w-4 h-4" /> Explore Tools
            </Link>
            <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="btn-secondary">
              <MessageSquare className="w-4 h-4" /> Join Community
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 max-w-[460px]">
            {[['150+', 'Active Users'], ['26', 'Premium Tools'], ['95%', 'Success Rate']].map((item) => (
              <div key={item[1]} className="hero-stat-item sketch-corner p-4 text-center relative"
                style={{ border: '1.5px solid rgba(200,184,232,0.18)', borderRadius: '3px', background: 'rgba(200,184,232,0.05)', boxShadow: '3px 3px 0 rgba(200,184,232,0.07), 5px 5px 0 rgba(200,184,232,0.03)' }}>
                <span className="font-outfit text-[26px] font-extrabold text-gradient block leading-none">{item[0]}</span>
                <span className="text-[10px] mt-1.5 block font-jetbrains-mono tracking-[1.5px] uppercase" style={{ color: 'rgba(240,237,228,0.42)' }}>{item[1]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal card */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 translate-x-[8px] translate-y-[8px] rounded-[3px] pointer-events-none" style={{ border: '1px solid rgba(200,184,232,0.07)' }} />
          <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] rounded-[3px] pointer-events-none" style={{ border: '1px solid rgba(200,184,232,0.04)' }} />

          <div className="relative overflow-hidden sketch-corner" style={{ borderRadius: '3px', border: '1.5px solid rgba(200,184,232,0.18)', background: 'rgba(16,14,24,0.94)', backdropFilter: 'blur(20px)' }}>
            <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, rgba(200,184,232,0.55) 0%, rgba(168,200,232,0.35) 60%, transparent 100%)' }} />

            <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid rgba(200,184,232,0.09)', background: 'rgba(200,184,232,0.03)' }}>
              <div className="flex gap-1.5">
                {['rgba(232,168,184,0.55)', 'rgba(232,216,160,0.55)', 'rgba(168,220,200,0.55)'].map((c, i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c, boxShadow: `0 0 4px ${c}` }} />
                ))}
              </div>
              <span className="font-jetbrains-mono text-[11px] tracking-[1px] flex-1 text-center" style={{ color: 'rgba(240,237,228,0.28)' }}>script-kittens — bash</span>
              <span className="inline-flex items-center gap-1 font-jetbrains-mono text-[10px]" style={{ color: 'rgba(168,220,200,0.65)' }}>
                <Zap className="w-2.5 h-2.5" /> LIVE
              </span>
            </div>

            <div className="p-5 font-jetbrains-mono text-[12px] leading-[2.0]" style={{ color: 'rgba(240,237,228,0.72)' }}>
              <div className="flex items-center gap-1.5 mb-4 pb-3" style={{ color: 'rgba(240,237,228,0.28)', borderBottom: '1px dashed rgba(200,184,232,0.08)' }}>
                <Shield className="w-3 h-3" style={{ color: 'rgba(200,184,232,0.50)' }} />
                <span>session started — stealth kernel v4.2</span>
              </div>
              <p><span style={{ color: 'rgba(200,184,232,0.80)' }}>❯ </span>initialize --mode=stealth</p>
              <p style={{ color: 'rgba(168,220,200,0.85)' }}>✓ Engine initialized — stealth mode active</p>
              <p className="mt-1"><span style={{ color: 'rgba(200,184,232,0.80)' }}>❯ </span>scan --target=lobby</p>
              <p style={{ color: 'rgba(232,216,160,0.85)' }}>⟳ Scanning... 48 players detected</p>
              <p className="mt-1"><span style={{ color: 'rgba(200,184,232,0.80)' }}>❯ </span>deploy --module=aimbot</p>
              <p style={{ color: 'rgba(168,220,200,0.85)' }}>✓ Module deployed — precision lock engaged</p>
              <p className="mt-2">
                <span style={{ color: 'rgba(200,184,232,0.80)' }}>❯ </span>
                <span className="inline-block w-[7px] h-[13px] align-middle animate-pulse" style={{ background: 'rgba(200,184,232,0.55)', borderRadius: '1px' }} />
              </p>
            </div>

            <div className="flex items-center justify-between px-5 py-2.5" style={{ borderTop: '1px solid rgba(200,184,232,0.07)', background: 'rgba(200,184,232,0.02)' }}>
              <span className="font-jetbrains-mono text-[10px]" style={{ color: 'rgba(168,220,200,0.55)' }}>● connected</span>
              <span className="inline-flex items-center gap-1 font-jetbrains-mono text-[10px]" style={{ color: 'rgba(240,237,228,0.28)' }}>
                <Users className="w-2.5 h-2.5" /> 2,847 online
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
