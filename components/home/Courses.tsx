'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Crosshair, Hash, Star, PlayCircle, Clock, Signal, Subtitles, Unlock, Shield, Cpu, Syringe, Plane, Eye, Map, Ghost, Infinity, Headphones, GitBranch, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const courses = [
  {
    id: 'cs-external',
    title: 'C# .NET External Cheat Development',
    desc: 'The complete guide to building professional external game cheats using C# and .NET framework. From basics to deployment.',
    color: 'purple',
    badge: 'BESTSELLER',
    icon: Crosshair,
    lang: 'C# .NET',
    rating: 4.8,
    reviews: 127,
    modules: [
      { icon: Crosshair, text: 'Aimbot Scripting' },
      { icon: Eye, text: 'Finding Game Codes & Offsets' },
      { icon: Shield, text: 'Memory Dumping Techniques' },
      { icon: Map, text: 'Player Location System' },
      { icon: Cpu, text: 'Building Control Panels' },
      { icon: Ghost, text: 'Anti-Detection Methods' }
    ],
    completion: 94,
    meta: [
      { icon: PlayCircle, text: '42 Lessons' },
      { icon: Clock, text: '18+ Hours' },
      { icon: Signal, text: 'Beginner → Pro' },
      { icon: Subtitles, text: 'Subtitles' }
    ],
    price: { old: 79, current: 29, save: 50 },
    students: 243
  },
  {
    id: 'cs-internal',
    title: 'C# Internal Cheat Engineering',
    desc: 'Deep dive into internal cheat development — inject directly into game processes and build advanced features.',
    color: 'cyan',
    badge: 'ADVANCED',
    icon: Cpu,
    lang: 'C# Internal',
    rating: 4.9,
    reviews: 98,
    modules: [
      { icon: Syringe, text: 'DLL Injection & Hooking' },
      { icon: Plane, text: 'Fly Hack Development' },
      { icon: Eye, text: 'ESP & Wallhack Systems' },
      { icon: Map, text: 'World-to-Screen & Location' },
      { icon: Crosshair, text: 'Internal Aimbot Engine' },
      { icon: Ghost, text: 'Stealth & Anti-Cheat Bypass' }
    ],
    completion: 91,
    meta: [
      { icon: PlayCircle, text: '56 Lessons' },
      { icon: Clock, text: '24+ Hours' },
      { icon: Signal, text: 'Intermediate → Elite' },
      { icon: Subtitles, text: 'Subtitles' }
    ],
    price: { old: 99, current: 39, save: 60 },
    students: 183
  }
];

const perks = [
  { icon: Infinity, title: 'Lifetime Access', desc: 'Buy once, learn forever. All future updates included.' },
  { icon: Headphones, title: 'Private Discord', desc: 'Get direct help from instructors in exclusive channels.' },
  { icon: GitBranch, title: 'Source Code', desc: 'Full source code for every project and module included.' },
  { icon: Award, title: 'Certificate', desc: 'Earn a Script Kittens verified completion certificate.' }
];

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.course-card',
        { y: 70, opacity: 0, scale: 0.93 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.courses-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.courses-perk',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.courses-perks',
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="courses" ref={sectionRef} className="py-[120px] pb-[100px] relative overflow-hidden">
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(143,0,255,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-[11px] font-bold tracking-[3px] text-purple-500 mb-5">
            PREMIUM EDUCATION
          </span>
          <h2 className="font-outfit text-[clamp(36px,6vw,56px)] font-extrabold mb-5">
            Master <span className="text-gradient">Game Hacking</span>
          </h2>
          <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
            Go from zero to elite. Our professional courses teach you everything — from finding offsets to building undetectable tools.
          </p>
        </div>

        <div className="courses-grid grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto mb-16">
          {courses.map((course) => {
            const isCyan = course.color === 'cyan';
            
            return (
              <div key={course.id} className={`course-card relative bg-[linear-gradient(168deg,rgba(22,18,42,0.9)_0%,rgba(10,8,22,0.95)_50%,rgba(16,12,32,0.92)_100%)] backdrop-blur-xl border border-purple-500/15 rounded-[28px] p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2.5 hover:border-purple-500/35 hover:shadow-[0_30px_80px_rgba(143,0,255,0.14),0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] group ${isCyan ? 'hover:border-cyan-500/35 hover:shadow-[0_30px_80px_rgba(0,200,255,0.12),0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]' : ''}`}>
                
                {/* Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] opacity-80 rounded-t-[28px] ${isCyan ? 'bg-gradient-to-r from-[#00b4d8] via-[#00f0ff] to-[#72efdd]' : 'bg-gradient-to-r from-[#8f00ff] via-[#c084fc] to-[#e040fb]'}`} />
                
                {/* Badge */}
                <div className={`absolute top-5 right-5 font-space-grotesk text-[10px] font-bold tracking-[1.5px] text-white px-4 py-1.5 rounded-full z-10 flex items-center gap-1.5 shadow-[0_4px_20px_rgba(143,0,255,0.4)] ${isCyan ? 'bg-gradient-to-br from-[#00b4d8] to-[#00e0ff] shadow-[0_4px_20px_rgba(0,200,255,0.35)]' : 'bg-gradient-to-br from-[#8f00ff] to-[#c040ff]'}`}>
                  <Zap className="w-3 h-3" /> {course.badge}
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6 mt-3 relative z-10">
                  <div className={`w-[60px] h-[60px] rounded-[18px] border flex items-center justify-center text-[26px] shrink-0 relative transition-all duration-400 group-hover:scale-110 group-hover:-rotate-3 ${isCyan ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border-cyan-500/25 text-cyan-400 group-hover:shadow-[0_8px_28px_rgba(0,200,255,0.2)] group-hover:bg-gradient-to-br group-hover:from-cyan-500/30 group-hover:to-cyan-500/15' : 'bg-gradient-to-br from-purple-500/20 to-purple-500/10 border-purple-500/25 text-purple-400 group-hover:shadow-[0_8px_28px_rgba(143,0,255,0.25)] group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:to-purple-500/15'}`}>
                    <course.icon className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-space-grotesk text-[12px] font-semibold text-white/50 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 tracking-[0.5px] w-fit">
                      <Hash className="w-3 h-3" /> {course.lang}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 fill-current ${isCyan ? 'text-[#00e0ff]' : 'text-amber-400'}`} />
                        ))}
                      </div>
                      <span className={`font-space-grotesk text-[14px] font-bold ${isCyan ? 'text-[#00e0ff]' : 'text-amber-400'}`}>{course.rating}</span>
                      <span className="text-[12px] text-white/30">({course.reviews})</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-space-grotesk text-[22px] font-bold text-white leading-[1.3] mb-2.5 relative z-10">{course.title}</h3>
                <p className="text-[14px] leading-[1.7] text-white/45 mb-5 relative z-10">{course.desc}</p>

                {/* Modules */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 relative z-10">
                  {course.modules.map((mod, i) => (
                    <div key={i} className={`flex items-center gap-2.5 text-[13px] text-white/60 px-3.5 py-2.5 rounded-xl border transition-all duration-300 hover:text-white/90 hover:translate-x-1 ${isCyan ? 'bg-cyan-500/5 border-cyan-500/10 hover:bg-cyan-500/10 hover:border-cyan-500/20' : 'bg-purple-500/5 border-purple-500/10 hover:bg-purple-500/10 hover:border-purple-500/20'}`}>
                      <mod.icon className={`w-4 h-4 shrink-0 ${isCyan ? 'text-[#00e0ff]' : 'text-purple-400'}`} />
                      <span>{mod.text}</span>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="mb-5 relative z-10">
                  <div className="font-space-grotesk text-[11px] font-semibold text-white/35 uppercase tracking-[1px] mb-2">Course Completion Rate</div>
                  <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden mb-1.5">
                    <div className={`h-full rounded-full relative ${isCyan ? 'bg-gradient-to-r from-[#00b4d8] to-[#00f0ff]' : 'bg-gradient-to-r from-[#8f00ff] to-[#c084fc]'}`} style={{ width: `${course.completion}%` }}>
                      <div className={`absolute right-0 top-[-1px] w-2 h-2 rounded-full ${isCyan ? 'bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.6)]' : 'bg-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.6)]'}`} />
                    </div>
                  </div>
                  <span className="font-space-grotesk text-[11px] text-white/30">{course.completion}% of students finish</span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-6 pb-5 border-b border-white/5 relative z-10">
                  {course.meta.map((m, i) => (
                    <span key={i} className="text-[12px] text-white/40 flex items-center gap-1.5">
                      <m.icon className="w-3 h-3 text-purple-400/50" /> {m.text}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 relative z-10">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <span className="font-space-grotesk text-[16px] text-white/20 line-through">${course.price.old}</span>
                    <span className={`font-space-grotesk text-[38px] font-extrabold leading-none bg-clip-text text-transparent ${isCyan ? 'bg-gradient-to-br from-[#00f0ff] to-[#00b4d8]' : 'bg-gradient-to-br from-[#c084fc] to-[#8f00ff]'}`}>${course.price.current}</span>
                    <span className={`font-space-grotesk text-[11px] font-bold px-2.5 py-1 rounded-md tracking-[0.3px] ${isCyan ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20' : 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/20'}`}>Save ${course.price.save}</span>
                  </div>
                  <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className={`relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-space-grotesk text-[14px] font-bold text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 group/btn w-full sm:w-auto ${isCyan ? 'shadow-[0_10px_36px_rgba(0,200,255,0.45)]' : 'shadow-[0_10px_36px_rgba(143,0,255,0.45)]'}`}>
                    <div className={`absolute inset-0 rounded-xl z-0 transition-colors duration-300 ${isCyan ? 'bg-gradient-to-br from-[#00c8ff] via-[#00a8e8] to-[#0080cc] group-hover/btn:from-[#00e0ff] group-hover/btn:via-[#00c8ff] group-hover/btn:to-[#00a8e8]' : 'bg-gradient-to-br from-[#8f00ff] via-[#7c00e6] to-[#6b00cc] group-hover/btn:from-[#a020f0] group-hover/btn:via-[#8f00ff] group-hover/btn:to-[#7c00e6]'}`} />
                    <div className="relative z-10 flex items-center gap-2">
                      <Unlock className="w-4 h-4" /> Enroll Now
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="flex items-center">
                    {['F', 'H', 'A'].map((char, i) => (
                      <span key={i} className={`w-8 h-8 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center text-[11px] font-bold -ml-2 first:ml-0 ${isCyan ? 'bg-gradient-to-br from-cyan-500/35 to-cyan-500/15 text-cyan-400' : 'bg-gradient-to-br from-purple-500/35 to-purple-500/15 text-purple-400'}`}>
                        {char}
                      </span>
                    ))}
                    <span className="w-8 h-8 rounded-full bg-purple-500/10 border-2 border-[#0a0a0f] flex items-center justify-center text-[9px] font-bold text-white/45 -ml-2">
                      +240
                    </span>
                  </div>
                  <span className="text-[12px] text-white/30">{course.students} students enrolled</span>
                </div>

                <div className={`flex items-center gap-2 text-[11px] px-3.5 py-2.5 rounded-xl relative z-10 ${isCyan ? 'text-emerald-400/70 bg-emerald-400/5 border border-emerald-400/10' : 'text-emerald-500/70 bg-emerald-500/5 border border-emerald-500/10'}`}>
                  <Shield className="w-3.5 h-3.5" />
                  <span>30-Day Money-Back Guarantee</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Perks */}
        <div className="courses-perks grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
          {perks.map((perk, i) => (
            <div key={i} className="courses-perk text-center p-8 bg-[linear-gradient(165deg,rgba(22,18,40,0.5)_0%,rgba(12,10,24,0.6)_100%)] border border-purple-500/10 rounded-[18px] transition-all duration-350 hover:border-purple-500/20 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(143,0,255,0.1)]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/15 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center text-[21px] text-purple-400 mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <perk.icon className="w-6 h-6" />
              </div>
              <h4 className="font-space-grotesk text-[15px] font-bold text-white mb-2">{perk.title}</h4>
              <p className="text-[13px] text-white/40 leading-[1.6]">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
