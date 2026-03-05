'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Crosshair, Hash, Star, PlayCircle, Clock, Signal, Subtitles, Unlock, Shield, Cpu, Syringe, Plane, Eye, Map, Ghost, Infinity, Headphones, GitBranch, Award, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const courses = [
  {
    id: 'cs-external',
    title: 'C# .NET External Cheat Development',
    desc: 'The complete guide to building professional external game cheats using C# and .NET framework. From basics to deployment.',
    accentRGB: '200,184,232',
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
      { icon: Ghost, text: 'Anti-Detection Methods' },
    ],
    completion: 94,
    meta: [
      { icon: PlayCircle, text: '42 Lessons' },
      { icon: Clock, text: '18+ Hours' },
      { icon: Signal, text: 'Beginner to Pro' },
      { icon: Subtitles, text: 'Subtitles' },
    ],
    price: { old: 79, current: 29, save: 50 },
    students: 243,
  },
  {
    id: 'cs-internal',
    title: 'C# Internal Cheat Engineering',
    desc: 'Deep dive into internal cheat development — inject directly into game processes and build advanced features.',
    accentRGB: '168,200,232',
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
      { icon: Ghost, text: 'Stealth & Anti-Cheat Bypass' },
    ],
    completion: 91,
    meta: [
      { icon: PlayCircle, text: '56 Lessons' },
      { icon: Clock, text: '24+ Hours' },
      { icon: Signal, text: 'Intermediate to Elite' },
      { icon: Subtitles, text: 'Subtitles' },
    ],
    price: { old: 99, current: 39, save: 60 },
    students: 183,
  },
];

const perks = [
  { icon: Infinity, title: 'Lifetime Access', desc: 'Buy once, learn forever. All future updates included.' },
  { icon: Headphones, title: 'Private Discord', desc: 'Get direct help from instructors in exclusive channels.' },
  { icon: GitBranch, title: 'Source Code', desc: 'Full source code for every project and module included.' },
  { icon: Award, title: 'Certificate', desc: 'Earn a Script Kittens verified completion certificate.' },
];

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.course-card',
        { y: 30, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.courses-grid', start: 'top 88%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.courses-perk',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: '.courses-perks', start: 'top 90%', toggleActions: 'play none none reverse' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="courses" ref={sectionRef} className="section-wrap relative">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="section-shell">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-chip mb-5">PREMIUM EDUCATION</span>
          <h2 className="section-title mb-5">
            Master <span className="text-fire">Game Hacking</span>
          </h2>
          <p className="section-subtitle max-w-[560px] mx-auto">
            Go from zero to elite. Our professional courses teach you everything — from finding offsets to building undetectable tools.
          </p>
        </div>

        {/* Course cards */}
        <div className="courses-grid grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1000px] mx-auto mb-16">
          {courses.map((course) => (
            <div key={course.id} className="course-card group relative overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(255,253,245,0.03)',
                border: '1.5px solid rgba(200,184,232,0.12)',
                borderRadius: '4px',
                boxShadow: '3px 3px 0 rgba(200,184,232,0.05), 5px 5px 0 rgba(200,184,232,0.025)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `rgba(${course.accentRGB},0.30)`;
                el.style.transform = 'translate(-2px,-2px)';
                el.style.boxShadow = `4px 4px 0 rgba(${course.accentRGB},0.10), 7px 7px 0 rgba(${course.accentRGB},0.04)`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(200,184,232,0.12)';
                el.style.transform = '';
                el.style.boxShadow = '3px 3px 0 rgba(200,184,232,0.05), 5px 5px 0 rgba(200,184,232,0.025)';
              }}>

              {/* Top accent line */}
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, rgba(${course.accentRGB},0.65), rgba(${course.accentRGB},0.18), transparent)` }} />

              <div className="p-7 relative z-10">
                {/* Badge */}
                <div className="absolute top-7 right-7 flex items-center gap-1.5 px-3 py-1"
                  style={{
                    background: `rgba(${course.accentRGB},0.10)`,
                    border: `1px solid rgba(${course.accentRGB},0.28)`,
                    borderRadius: '2px',
                  }}>
                  <Zap className="w-2.5 h-2.5" style={{ color: `rgba(${course.accentRGB},1)` }} />
                  <span className="font-jetbrains-mono text-[9px] font-bold tracking-[1.5px]"
                    style={{ color: `rgba(${course.accentRGB},1)` }}>{course.badge}</span>
                </div>

                {/* Course icon + title */}
                <div className="flex items-start gap-4 mb-5 mt-1">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-transform duration-400 group-hover:scale-105"
                    style={{
                      background: `rgba(${course.accentRGB},0.10)`,
                      border: `1.5px solid rgba(${course.accentRGB},0.25)`,
                      borderRadius: '3px',
                      color: `rgba(${course.accentRGB},1)`,
                      boxShadow: '2px 2px 0 rgba(200,184,232,0.07)',
                    }}>
                    <course.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 mb-2 font-jetbrains-mono text-[10px] inline-flex"
                      style={{
                        background: 'rgba(255,253,245,0.04)',
                        border: '1px solid rgba(200,184,232,0.10)',
                        borderRadius: '2px',
                        color: 'rgba(240,237,228,0.45)',
                      }}>
                      <Hash className="w-2.5 h-2.5" /> {course.lang}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current"
                            style={{ color: i < Math.floor(course.rating) ? `rgba(${course.accentRGB},0.85)` : 'rgba(240,237,228,0.18)' }} />
                        ))}
                      </div>
                      <span className="font-jetbrains-mono text-[11px] font-bold" style={{ color: `rgba(${course.accentRGB},1)` }}>{course.rating}</span>
                      <span className="font-inter text-[11px]" style={{ color: 'rgba(240,237,228,0.35)' }}>({course.reviews})</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-outfit text-[18px] font-bold mb-2 tracking-[-0.4px]" style={{ color: '#f0ede4' }}>{course.title}</h3>
                <p className="text-[13px] mb-5 leading-[1.7]" style={{ color: 'rgba(240,237,228,0.55)' }}>{course.desc}</p>

                {/* Modules grid */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {course.modules.map((mod, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2"
                      style={{
                        background: 'rgba(255,253,245,0.02)',
                        border: '1px solid rgba(200,184,232,0.08)',
                        borderRadius: '3px',
                        fontSize: '12px',
                        color: 'rgba(240,237,228,0.60)',
                      }}>
                      <mod.icon className="w-3 h-3 shrink-0" style={{ color: `rgba(${course.accentRGB},0.75)` }} />
                      <span className="font-space-grotesk font-medium">{mod.text}</span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-jetbrains-mono text-[10px]" style={{ color: 'rgba(240,237,228,0.38)' }}>COMPLETION RATE</span>
                    <span className="font-jetbrains-mono text-[11px] font-bold" style={{ color: `rgba(${course.accentRGB},0.85)` }}>{course.completion}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(200,184,232,0.10)' }}>
                    <div className="h-full rounded-full" style={{ width: `${course.completion}%`, background: `rgba(${course.accentRGB},0.55)` }} />
                  </div>
                </div>

                {/* Meta tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {course.meta.map((m, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 font-inter text-[11px]"
                      style={{
                        background: 'rgba(255,253,245,0.03)',
                        border: '1px solid rgba(200,184,232,0.10)',
                        borderRadius: '2px',
                        color: 'rgba(240,237,228,0.45)',
                      }}>
                      <m.icon className="w-3 h-3" style={{ color: `rgba(${course.accentRGB},0.65)` }} />
                      {m.text}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-5"
                  style={{ borderTop: '1px dashed rgba(200,184,232,0.12)' }}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-outfit text-[28px] font-extrabold" style={{ color: `rgba(${course.accentRGB},1)` }}>${course.price.current}</span>
                    <span className="font-inter text-[14px] line-through" style={{ color: 'rgba(240,237,228,0.28)' }}>${course.price.old}</span>
                    <span className="font-jetbrains-mono text-[10px] px-2 py-0.5"
                      style={{
                        background: `rgba(${course.accentRGB},0.12)`,
                        border: `1px solid rgba(${course.accentRGB},0.24)`,
                        borderRadius: '2px',
                        color: `rgba(${course.accentRGB},0.90)`,
                      }}>SAVE ${course.price.save}</span>
                  </div>
                  <Link href="/checkout"
                    className="flex items-center gap-2 px-5 py-2.5 font-outfit font-bold text-[13px] transition-all duration-300 group/btn"
                    style={{
                      border: `1.5px solid rgba(${course.accentRGB},0.30)`,
                      borderRadius: '3px',
                      background: `rgba(${course.accentRGB},0.10)`,
                      color: `rgba(${course.accentRGB},1)`,
                      boxShadow: `2px 2px 0 rgba(${course.accentRGB},0.10)`,
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `rgba(${course.accentRGB},0.18)`;
                      el.style.boxShadow = `3px 3px 0 rgba(${course.accentRGB},0.16)`;
                      el.style.transform = 'translate(-1px,-1px)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = `rgba(${course.accentRGB},0.10)`;
                      el.style.boxShadow = `2px 2px 0 rgba(${course.accentRGB},0.10)`;
                      el.style.transform = '';
                    }}>
                    <Unlock className="w-3.5 h-3.5" /> Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Perks row */}
        <div className="courses-perks grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[900px] mx-auto">
          {perks.map((perk, i) => (
            <div key={i} className="courses-perk p-5 text-center transition-all duration-300"
              style={{
                background: 'rgba(255,253,245,0.03)',
                border: '1.5px solid rgba(200,184,232,0.10)',
                borderRadius: '4px',
                boxShadow: '2px 2px 0 rgba(200,184,232,0.04)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(200,184,232,0.24)';
                el.style.transform = 'translate(-1px,-1px)';
                el.style.boxShadow = '3px 3px 0 rgba(200,184,232,0.09)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(200,184,232,0.10)';
                el.style.transform = '';
                el.style.boxShadow = '2px 2px 0 rgba(200,184,232,0.04)';
              }}>
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center"
                style={{
                  border: '1.5px solid rgba(200,184,232,0.20)',
                  borderRadius: '3px',
                  background: 'rgba(200,184,232,0.07)',
                  color: '#c8b8e8',
                }}>
                <perk.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </div>
              <h4 className="font-outfit text-[14px] font-bold mb-1.5" style={{ color: '#f0ede4' }}>{perk.title}</h4>
              <p className="text-[12px] leading-[1.6]" style={{ color: 'rgba(240,237,228,0.48)' }}>{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
