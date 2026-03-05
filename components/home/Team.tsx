'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const leadTeam = [
  { name: 'FURQAN', role: 'Server Owner', tag: 'Manager', img: '/coreteam/Furqan.png' },
  { name: '1Shot', role: 'Chief Consecutive Officer', tag: 'Co-Founder', img: '/coreteam/1Shot.png' },
];

const coreTeam = [
  { name: 'ha.zenn', role: 'Internal Developer', img: '/coreteam/ha.zenn.png' },
  { name: 'HASAN', role: 'Internal Developer', img: '/coreteam/hasan.png' },
  { name: '𝙎ค૯𝙀𝘿', role: 'Bot Manager', img: '/coreteam/𝙎ค૯𝙀𝘿.png' },
  { name: 'SAHIL', role: 'Support Host', img: '/coreteam/sahil.png' },
  { name: 'Ƴυτα', role: 'External Panel Dev', img: '/coreteam/yuta.png' },
  { name: 'CYBER YOTO X', role: 'SERVER BOOSTER', img: '/coreteam/yoto.png' }, 
  { name: 'FUCKER', role: 'SERVER BOT', img: '/coreteam/fucker.png' },
];

type ExclusiveMember = { name: string; img: string };

const SUPABASE_URL = 'https://xttkdoyulbfjiswnysye.supabase.co/rest/v1/server_members?select=*&limit=1000&order=joined_at.asc';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [exclusiveTeam, setExclusiveTeam] = useState<ExclusiveMember[]>([]);

  // ── Carousel state ──────────────────────────────────────────────
  const [offset, setOffset] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Build the 8-slot window — no wrap, slots beyond pool end are null (hidden)
  const getSlots = useCallback(
    (pool: ExclusiveMember[], off: number): (ExclusiveMember | null)[] => {
      if (pool.length === 0) return [];
      return Array.from({ length: 8 }, (_, i) => {
        const idx = off + i;
        return idx < pool.length ? pool[idx] : null;
      });
    },
    []
  );

  const startInterval = useCallback((poolSize: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setOffset(prev => {
        const next = prev + 1;
        // Stop when all members have passed through the visible window
        if (next + 2 < poolSize) return next;
        clearInterval(autoRef.current!);
        return prev;
      });
    }, 2600);
  }, []);

  // Auto-play — start once members are loaded
  useEffect(() => {
    if (exclusiveTeam.length < 2) return;
    startInterval(exclusiveTeam.length);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [exclusiveTeam.length, startInterval]);

  const pauseAuto = () => { if (autoRef.current) clearInterval(autoRef.current); };
  const resumeAuto = () => {
    if (exclusiveTeam.length < 2) return;
    if (offset + 2 >= exclusiveTeam.length) return;
    startInterval(exclusiveTeam.length);
  };

  useEffect(() => {
    fetch(SUPABASE_URL, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    })
      .then(res => res.json())
      .then((data: { global_name: string; avatar_url: string }[]) => {
        setExclusiveTeam(
          data.map(m => ({ name: m.global_name, img: m.avatar_url }))
        );
      })
      .catch(err => console.error('Failed to fetch exclusive members:', err));
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const thTl = gsap.timeline({
        scrollTrigger: { trigger: '.team-header', start: 'top 88%', toggleActions: 'play none none reverse' }
      });
      thTl
        .fromTo('.team-overline', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
        .fromTo('.team-headline', { clipPath: 'inset(100% 0 0 0)', y: 30 }, { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
        .fromTo('.team-sub', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.5');

      gsap.fromTo('.team-grid--lead .team-member',
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', stagger: 0.16,
          scrollTrigger: { trigger: '.team-grid--lead', start: 'top 88%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.team-grid--core .team-member',
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.team-grid--core', start: 'top 90%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.team-exclusive__member',
        { y: 25, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.09,
          scrollTrigger: { trigger: '.team-exclusive__row', start: 'top 92%', toggleActions: 'play none none reverse' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const slide = (direction: 'next' | 'prev') => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    const itemWidth = (track.children[0] as HTMLElement).offsetWidth;
    const totalItemWidth = itemWidth + 24;
    if (direction === 'next') {
      gsap.to(track, { x: -totalItemWidth, duration: 0.3, ease: 'power2.inOut',
        onComplete: () => { track.appendChild(track.children[0]); gsap.set(track, { x: 0 }); } });
    } else {
      track.insertBefore(track.lastElementChild!, track.firstChild);
      gsap.set(track, { x: -totalItemWidth });
      gsap.to(track, { x: 0, duration: 0.55, ease: 'power2.inOut' });
    }
  };

  const slideBtn = {
    base: {
      background: 'rgba(13,11,18,0.90)',
      border: '1.5px solid rgba(200,184,232,0.14)',
      borderRadius: '3px',
      color: 'rgba(240,237,228,0.55)',
      boxShadow: '2px 2px 0 rgba(200,184,232,0.06)',
      transition: 'all 0.2s ease',
    } as React.CSSProperties,
  };

  return (
    <section id="team" ref={sectionRef} className="section-wrap relative">
      <div className="section-shell">

        {/* Header */}
        <div className="team-header text-center mb-20 max-w-[520px] mx-auto">
          <span className="team-overline section-chip mb-5">The Team</span>
          <h2 className="team-headline section-title mb-4">
            Meet the people behind <span className="text-fire">Script Kittens</span>
          </h2>
          <p className="team-sub section-subtitle max-w-[380px] mx-auto">
            A squad of passionate gamers, developers, and community builders.
          </p>
        </div>

        {/* Leadership grid */}
        <div className="team-grid--lead grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[640px] mx-auto mb-12">
          {leadTeam.map((member, i) => (
            <div key={i} className="team-member group cursor-default transition-transform duration-500 hover:-translate-y-1.5">
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 transition-all duration-500"
                style={{
                  border: '1.5px solid rgba(200,184,232,0.14)',
                  borderRadius: '4px',
                  background: 'rgba(10,9,16,0.9)',
                  boxShadow: '4px 4px 0 rgba(200,184,232,0.07), 7px 7px 0 rgba(200,184,232,0.03)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(200,184,232,0.30)';
                  el.style.boxShadow = '5px 5px 0 rgba(200,184,232,0.12), 9px 9px 0 rgba(200,184,232,0.05)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(200,184,232,0.14)';
                  el.style.boxShadow = '4px 4px 0 rgba(200,184,232,0.07), 7px 7px 0 rgba(200,184,232,0.03)';
                }}>
                {/* Top chalk line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] z-10"
                  style={{ background: 'linear-gradient(90deg, rgba(200,184,232,0.40), transparent)' }} />
                <img src={member.img} alt={member.name}
                  className="w-full h-full object-cover object-top grayscale-[20%] brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  loading="lazy" />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(5,5,10,0.75) 0%, rgba(5,5,10,0.18) 40%, transparent 70%)' }} />
              </div>
              <div>
                <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-[3px] block mb-1.5"
                  style={{ color: 'rgba(200,184,232,0.60)' }}>{member.tag}</span>
                <h3 className="font-outfit text-[20px] font-bold tracking-[-0.3px] mb-0.5" style={{ color: '#f0ede4' }}>{member.name}</h3>
                <span className="font-inter text-[13px]" style={{ color: 'rgba(240,237,228,0.50)' }}>{member.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center max-w-[680px] mx-auto mb-12">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,184,232,0.14))' }} />
          <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-[3px] px-6 whitespace-nowrap"
            style={{ color: 'rgba(200,184,232,0.38)' }}>Server Core Team</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(200,184,232,0.14))' }} />
        </div>

        {/* Core team slider */}
        <div className="relative max-w-[1100px] mx-auto px-10 lg:px-16 mb-20">
          {/* Prev */}
          <button onClick={() => slide('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
            style={slideBtn.base}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(200,184,232,0.35)';
              el.style.color = '#c8b8e8';
              el.style.boxShadow = '3px 3px 0 rgba(200,184,232,0.12)';
              el.style.transform = 'translate(-1px,-1px)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(200,184,232,0.14)';
              el.style.color = 'rgba(240,237,228,0.55)';
              el.style.boxShadow = '2px 2px 0 rgba(200,184,232,0.06)';
              el.style.transform = '';
            }}>
            <ChevronLeft className="w-[18px] h-[18px]" />
          </button>

          <div className="overflow-hidden py-4">
            <div ref={trackRef} className="team-grid--core flex flex-nowrap gap-6">
              {coreTeam.map((member, i) => (
                <div key={i} className="team-member flex-none w-[220px] group cursor-default hover:-translate-y-1.5 transition-transform duration-500">
                  <div className="relative w-full aspect-[3/4] overflow-hidden mb-3.5 transition-all duration-500"
                    style={{
                      border: '1.5px solid rgba(200,184,232,0.12)',
                      borderRadius: '4px',
                      background: 'rgba(10,9,16,0.9)',
                      boxShadow: '3px 3px 0 rgba(200,184,232,0.05)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,184,232,0.28)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,184,232,0.12)'; }}>
                    <img src={member.img} alt={member.name}
                      className="w-full h-full object-cover object-top grayscale-[20%] brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                      loading="lazy" />
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(5,5,10,0.75) 0%, rgba(5,5,10,0.12) 45%, transparent 70%)' }} />
                  </div>
                  <h3 className="font-outfit text-[16px] font-bold mb-0.5" style={{ color: '#f0ede4' }}>{member.name}</h3>
                  <span className="font-inter text-[12px]" style={{ color: 'rgba(240,237,228,0.45)' }}>{member.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button onClick={() => slide('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center z-10"
            style={slideBtn.base}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(200,184,232,0.35)';
              el.style.color = '#c8b8e8';
              el.style.boxShadow = '3px 3px 0 rgba(200,184,232,0.12)';
              el.style.transform = 'translate(-1px,-1px)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(200,184,232,0.14)';
              el.style.color = 'rgba(240,237,228,0.55)';
              el.style.boxShadow = '2px 2px 0 rgba(200,184,232,0.06)';
              el.style.transform = '';
            }}>
            <ChevronRight className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Exclusive members — 3D Perspective Infinite Carousel */}
        <div className="team-exclusive max-w-[900px] mx-auto" style={{ overflow: 'visible' }}>
          <div className="relative flex items-center justify-center mb-10">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(200,184,232,0.14))' }} />
            <span className="font-jetbrains-mono text-[9px] font-bold uppercase tracking-[3px] px-6 whitespace-nowrap"
              style={{ color: 'rgba(200,184,232,0.38)' }}>Kitten Patrons</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(200,184,232,0.14))' }} />
          </div>

          {exclusiveTeam.length > 0 && (
            <div
              className="team-exclusive__row relative flex items-center justify-center"
              style={{ perspective: '900px', perspectiveOrigin: '50% 50%', height: '110px', overflow: 'visible' }}
              onMouseEnter={pauseAuto}
              onMouseLeave={resumeAuto}
            >
              {(getSlots(exclusiveTeam, offset) as (ExclusiveMember | null)[]).map((member, slot) => {
                // null slot = beyond the pool end, render invisible placeholder
                if (!member) return (
                  <div key={`empty-${slot}`} style={{ position: 'absolute', width: 66, height: 66, opacity: 0, pointerEvents: 'none' }} />
                );
                // ── per-slot transform values ──────────────────────────────
                // slot 0 → exiting (left ghost): shrink, recede, blur, fade
                // slot 1 → transitioning in from left edge
                // slots 2–5 → fully visible centre all same size
                // slot 6 → transitioning out to right edge
                // slot 7 → entering (right ghost): emerge from depth
                type SlotStyle = {
                  translateX: string;
                  translateZ: string;
                  scale: number;
                  opacity: number;
                  blur: string;
                  zIndex: number;
                };
                const cx = 86; // px gap between centre items
                const slotStyles: SlotStyle[] = [
                  // slot 0 — exit ghost (far left, fully invisible)
                  { translateX: `-${cx * 2.5 + 130}px`, translateZ: '-100px', scale: 0.48, opacity: 0,    blur: '8px', zIndex: 0 },
                  // slot 1 — left edge (partially visible)
                  { translateX: `-${cx * 2.5 + 20}px`,  translateZ: '-40px',  scale: 0.72, opacity: 0.50, blur: '2px', zIndex: 2 },
                  // slots 2–5 — fully visible, identical
                  { translateX: `-${cx * 1.5}px`,        translateZ: '0px',    scale: 1,    opacity: 1,    blur: '0px', zIndex: 4 },
                  { translateX: `-${cx * 0.5}px`,        translateZ: '0px',    scale: 1,    opacity: 1,    blur: '0px', zIndex: 4 },
                  { translateX: `${cx * 0.5}px`,         translateZ: '0px',    scale: 1,    opacity: 1,    blur: '0px', zIndex: 4 },
                  { translateX: `${cx * 1.5}px`,         translateZ: '0px',    scale: 1,    opacity: 1,    blur: '0px', zIndex: 4 },
                  // slot 6 — right edge (partially visible)
                  { translateX: `${cx * 2.5 + 20}px`,   translateZ: '-40px',  scale: 0.72, opacity: 0.50, blur: '2px', zIndex: 2 },
                  // slot 7 — entrance ghost (far right, fully invisible)
                  { translateX: `${cx * 2.5 + 130}px`,  translateZ: '-100px', scale: 0.48, opacity: 0,    blur: '8px', zIndex: 0 },
                ];

                const s = slotStyles[slot];
                const isCentre = slot >= 2 && slot <= 5;
                // Stable key = actual pool index so the DOM node persists across advances
                const poolIdx = offset + slot;
                return (
                  <div
                    key={poolIdx}
                    className="team-exclusive__member absolute flex flex-col items-center cursor-default"
                    style={{
                      transform: `translate3d(${s.translateX}, -50%, ${s.translateZ}) scale(${s.scale})`,
                      top: '50%',
                      opacity: s.opacity,
                      filter: s.blur !== '0px' ? `blur(${s.blur})` : 'none',
                      zIndex: s.zIndex,
                      willChange: 'transform, opacity, filter',
                      // Always-on transition — smooth slide at all times
                      transition: 'transform 700ms cubic-bezier(0.33,1,0.68,1), opacity 700ms ease, filter 700ms ease',
                      pointerEvents: isCentre ? 'auto' : 'none',
                    }}
                  >
                    <div
                      style={{
                        width: '66px',
                        height: '66px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: isCentre
                          ? '1.5px solid rgba(200,184,232,0.42)'
                          : '1.5px solid rgba(200,184,232,0.12)',
                        background: 'rgba(10,9,16,0.9)',
                      }}
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          filter: isCentre ? 'brightness(1)' : 'brightness(0.65) grayscale(25%)',
                          display: 'block',
                        }}
                      />
                    </div>
                    {isCentre && (
                      <span
                        className="font-inter font-medium whitespace-nowrap"
                        style={{
                          fontSize: '11px',
                          color: 'rgba(240,237,228,0.55)',
                          marginTop: '6px',
                        }}
                      >
                        {member.name}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
