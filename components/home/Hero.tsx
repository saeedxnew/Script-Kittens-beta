'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Rocket, MessageSquare, Users, Shield, Zap, Globe, RefreshCw, Headphones } from 'lucide-react';
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
      .fromTo('.hero-tagline',
        { clipPath: 'inset(100% 0 0 0)', y: 30, opacity: 0 },
        { clipPath: 'inset(0% 0 0 0)', y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-description',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.hero-buttons > *',
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.12 },
        '-=0.4'
      )
      .fromTo('.hero-stats',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center px-6 md:px-10 py-20 relative overflow-hidden">
      <div className="max-w-[600px] z-10">
        <h1 className="font-outfit text-[clamp(40px,10vw,100px)] font-black leading-[0.95] mb-4 -mt-5">
          <span className="title-line block overflow-hidden">
            <span className="inline-block">SCRIPT</span>
          </span>
          <span className="title-line block overflow-hidden tracking-[4px]">
            <span className="inline-block text-gradient">KITTENS</span>
          </span>
        </h1>

        <p className="hero-tagline font-space-grotesk text-base tracking-[6px] uppercase mb-6 font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#a855f7,#38bdf8,#7c3aed,#c026d3,#34d399,#c97b3d,#38bdf8,#a855f7)] bg-[size:400%_100%] animate-[gradientShift_15s_linear_infinite]">
          REDEFINING THE IMPOSSIBLE
        </p>

        <p className="hero-description text-base text-white/70 leading-[1.9] mb-10 max-w-[600px]">
          Welcome to Script Kittens — your ultimate destination for premium Free Fire automation solutions.
          Our cutting-edge tools are meticulously crafted with advanced algorithms and robust security protocols,
          ensuring seamless performance and maximum efficiency.
        </p>

        <div className="hero-buttons flex flex-wrap gap-5 mb-14">
          <Link href="#products" className="relative px-8 py-4 rounded-xl font-semibold text-[15px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8f00ff] to-[#ff00a8] transition-opacity duration-400 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff] to-[#8f00ff] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            <div className="relative z-10 flex items-center gap-2.5">
              <Rocket className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              Explore Tools
            </div>
          </Link>
          <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="relative px-8 py-4 rounded-xl font-semibold text-[15px] overflow-hidden border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 group">
            <div className="relative z-10 flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              Join Community
            </div>
          </a>
        </div>

        <div className="hero-stats flex items-center gap-10 flex-wrap">
          <div className="text-center">
            <span className="font-outfit text-[42px] font-extrabold text-gradient block leading-none">150+</span>
            <span className="text-[13px] text-white/40 mt-1 block">Active Users</span>
          </div>
          <div className="w-[1px] h-[50px] bg-white/10" />
          <div className="text-center">
            <span className="font-outfit text-[42px] font-extrabold text-gradient block leading-none">26</span>
            <span className="text-[13px] text-white/40 mt-1 block">Premium Tools</span>
          </div>
          <div className="w-[1px] h-[50px] bg-white/10" />
          <div className="text-center">
            <span className="font-outfit text-[42px] font-extrabold text-gradient block leading-none">95%</span>
            <span className="text-[13px] text-white/40 mt-1 block">Success Rate</span>
          </div>
        </div>
      </div>

      {/* 3D Command Center Element */}
      <div className="hidden lg:flex absolute right-[5%] top-1/2 -translate-y-1/2 w-[40%] max-w-[480px] z-20 perspective-[1200px]">
        <div className="relative w-full transform-style-3d transition-transform duration-400 hover:-translate-y-1">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(143,0,255,0.15)_0%,rgba(139,92,246,0.08)_30%,transparent_60%)] blur-[60px] -z-10 animate-pulse-glow" />
          
          <div className="bg-[linear-gradient(165deg,rgba(15,20,28,0.98)_0%,rgba(22,15,38,0.96)_50%,rgba(15,20,28,0.98)_100%)] border border-purple-500/20 rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(143,0,255,0.08),0_20px_60px_rgba(0,0,0,0.7),0_0_80px_rgba(143,0,255,0.06)]">
            
            {/* Topbar */}
            <div className="flex items-center justify-between p-3 bg-purple-500/5 border-b border-purple-500/10">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded font-space-grotesk text-[9px] font-bold tracking-[1.2px] text-purple-400">
                  <Zap className="w-2 h-2 text-yellow-400" /> LIVE
                </span>
                <span className="font-space-grotesk text-[10px] text-white/50 flex items-center gap-1">
                  <Users className="w-2.5 h-2.5 text-purple-500/60" /> <span className="text-white/70 font-semibold">2,847</span> online
                </span>
              </div>
            </div>

            {/* Terminal */}
            <div className="h-[400px] flex flex-col">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22e6] border-b border-white/10">
                <span className="font-space-grotesk text-[11px] text-white/50 tracking-[0.5px] flex items-center gap-1.5 font-semibold">
                  <Shield className="w-2.5 h-2.5 text-purple-500/60" /> script-kittens — bash
                </span>
              </div>
              
              <div className="flex-1 p-4 font-space-grotesk text-[11.5px] leading-[1.6] text-[#e6edf3] overflow-hidden bg-[#0d111766]">
                <div className="text-white/25 italic text-[10px] mb-2">// Script Kittens Engine v4.2.0 — Elite Gaming Suite</div>
                <div className="mb-1"><span className="text-purple-500 font-bold mr-1.5">❯</span> <span className="text-[#79c0ff] font-semibold">initialize</span> <span className="text-[#7ee787] font-medium">--mode</span>=stealth</div>
                <div className="text-[#3fb950] font-semibold mb-1">✓ Engine initialized — stealth mode active</div>
                <div className="mb-1"><span className="text-purple-500 font-bold mr-1.5">❯</span> <span className="text-[#79c0ff] font-semibold">scan</span> <span className="text-[#7ee787] font-medium">--target</span>=lobby</div>
                <div className="text-[#d29922] font-semibold mb-1">⟳ Scanning... 48 players detected</div>
                <div className="mb-1"><span className="text-purple-500 font-bold mr-1.5">❯</span> <span className="text-[#79c0ff] font-semibold">deploy</span> <span className="text-[#7ee787] font-medium">--module</span>=aimbot</div>
                <div className="text-[#3fb950] font-semibold mb-1">✓ Module deployed — precision lock engaged</div>
                <div className="text-[#e6edf3]"><span className="text-purple-500 font-bold mr-1.5">❯</span> <span className="inline-block text-purple-500 font-bold animate-pulse">|</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
