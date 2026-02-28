'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const leadTeam = [
  { name: '1Shot', role: 'Chief Consecutive Officer', tag: 'Founder', img: 'https://files.catbox.moe/kkrw1e.png' },
  { name: 'Hassan', role: 'Server Owner', tag: 'Co-Founder', img: 'https://files.catbox.moe/bto1yh.png' }
];

const coreTeam = [
  { name: 'Rithu Kishan', role: 'Manager', img: 'https://files.catbox.moe/btnwhr.png' },
  { name: 'Adil', role: 'Bot Manager', img: 'https://files.catbox.moe/5m5uhm.png' },
  { name: '𝙎ค૯𝙀𝘿✘🫀', role: 'Second Bot Manager', img: 'https://i.postimg.cc/43GDC8Jf/image00006.png' },
  { name: 'Saad', role: 'Support Host', img: 'https://files.catbox.moe/jsaycj.png' },
  { name: 'Tayyab', role: 'Trial Moderator', img: 'https://files.catbox.moe/xmktpc.jpg' },
  { name: 'Bilal', role: 'Moderator', img: 'https://files.catbox.moe/g9y3n9.jpg' }
];

const exclusiveTeam = [
  { name: 'Saad', img: 'https://files.catbox.moe/jsaycj.png' },
  { name: 'Tayyab', img: 'https://files.catbox.moe/xmktpc.jpg' },
  { name: 'Bilal', img: 'https://files.catbox.moe/g9y3n9.jpg' },
  { name: 'Masoom', img: 'https://files.catbox.moe/j355rq.jpg' },
  { name: 'Fahad', img: 'https://files.catbox.moe/srcr25.gif' }
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const thTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.team-header',
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        }
      });
      
      thTl.fromTo('.team-overline', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
          .fromTo('.team-headline', { clipPath: 'inset(100% 0 0 0)', y: 30 }, { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
          .fromTo('.team-sub', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.5');

      gsap.fromTo('.team-grid--lead .team-member',
        { y: 60, opacity: 0, scale: 0.92 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 1.1, ease: 'power3.out',
          stagger: 0.18,
          scrollTrigger: {
            trigger: '.team-grid--lead',
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.team-grid--core .team-member',
        { y: 45, opacity: 0, scale: 0.93 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.9, ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.team-grid--core',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.team-exclusive__divider',
        { opacity: 0, scaleX: 0.5 },
        {
          opacity: 1, scaleX: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-exclusive',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.team-exclusive__member',
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.team-exclusive__row',
            start: 'top 92%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const slide = (direction: 'next' | 'prev') => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;

    const itemWidth = (track.children[0] as HTMLElement).offsetWidth;
    const gap = 30;
    const totalItemWidth = itemWidth + gap;

    if (direction === 'next') {
      gsap.to(track, {
        x: -totalItemWidth,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          track.appendChild(track.children[0]);
          gsap.set(track, { x: 0 });
        }
      });
    } else {
      track.insertBefore(track.lastElementChild!, track.firstChild);
      gsap.set(track, { x: -totalItemWidth });
      gsap.to(track, {
        x: 0,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section id="team" ref={sectionRef} className="py-[140px] pb-[120px] relative">
      <div className="max-w-[1400px] mx-auto px-10">
        
        <div className="team-header text-center mb-20 max-w-[560px] mx-auto">
          <span className="team-overline font-inter text-[12px] font-semibold uppercase tracking-[4px] text-purple-500 block mb-4">
            The Team
          </span>
          <h2 className="team-headline font-outfit text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.12] text-white tracking-[-1.5px] mb-4">
            Meet the people<br/>behind <span className="team-headline-em text-gradient">Script Kittens</span>
          </h2>
          <p className="team-sub font-inter text-[15px] text-white/70 leading-[1.7] max-w-[420px] mx-auto">
            We're a squad of passionate gamers, developers, and community builders.
          </p>
        </div>

        {/* Leadership Row */}
        <div className="team-grid--lead grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-[740px] mx-auto mb-7">
          {leadTeam.map((member, i) => (
            <div key={i} className="team-member relative cursor-default transition-transform duration-600 hover:-translate-y-1.5 group">
              <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-[linear-gradient(145deg,rgba(139,92,246,0.06)_0%,rgba(255,255,255,0.02)_100%)] border border-white/10 mb-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-600 group-hover:border-purple-500/30 group-hover:shadow-[0_8px_50px_rgba(139,92,246,0.15),0_4px_30px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 rounded-[20px] border border-purple-500/0 z-10 transition-colors duration-500 group-hover:border-purple-500/15 pointer-events-none" />
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top grayscale-[20%] brightness-90 contrast-105 scale-102 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030308b3] via-[#03030826] to-transparent pointer-events-none transition-opacity duration-500 opacity-100 group-hover:opacity-50" />
              </div>
              <div className="px-1">
                <span className="font-inter text-[10px] font-semibold uppercase tracking-[2.5px] text-purple-500 block mb-1.5">{member.tag}</span>
                <h3 className="font-outfit text-[22px] font-bold text-white tracking-[-0.3px] leading-[1.2] mb-1">{member.name}</h3>
                <span className="font-inter text-[13px] text-white/70 tracking-[0.2px]">{member.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Team Slider */}
        <div className="relative max-w-[1210px] mx-auto px-10 lg:px-20 mb-20">
          <button onClick={() => slide('prev')} className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#140f2399] backdrop-blur-md border border-purple-500/20 text-white flex items-center justify-center z-10 transition-all duration-300 hover:bg-purple-500 hover:border-purple-500 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="overflow-hidden py-5 mx-auto w-full max-w-[1050px]">
            <div ref={trackRef} className="team-grid--core flex flex-nowrap gap-[30px]">
              {coreTeam.map((member, i) => (
                <div key={i} className="team-member team-member--sm flex-none w-[240px] relative cursor-default transition-transform duration-600 hover:-translate-y-1.5 group">
                  <div className="relative w-full aspect-[3/4] rounded-[16px] overflow-hidden bg-[linear-gradient(145deg,rgba(139,92,246,0.06)_0%,rgba(255,255,255,0.02)_100%)] border border-white/10 mb-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-600 group-hover:border-purple-500/30 group-hover:shadow-[0_8px_50px_rgba(139,92,246,0.15),0_4px_30px_rgba(0,0,0,0.4)]">
                    <div className="absolute inset-0 rounded-[16px] border border-purple-500/0 z-10 transition-colors duration-500 group-hover:border-purple-500/15 pointer-events-none" />
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top grayscale-[20%] brightness-90 contrast-105 scale-102 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030308b3] via-[#03030826] to-transparent pointer-events-none transition-opacity duration-500 opacity-100 group-hover:opacity-50" />
                  </div>
                  <div className="px-1">
                    <h3 className="font-outfit text-[17px] font-bold text-white tracking-[-0.3px] leading-[1.2] mb-1">{member.name}</h3>
                    <span className="font-inter text-[12px] text-white/70 tracking-[0.2px]">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => slide('next')} className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#140f2399] backdrop-blur-md border border-purple-500/20 text-white flex items-center justify-center z-10 transition-all duration-300 hover:bg-purple-500 hover:border-purple-500 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Exclusive Members */}
        <div className="team-exclusive max-w-[740px] mx-auto">
          <div className="team-exclusive__divider relative flex items-center justify-center mb-10">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
            <span className="font-inter text-[11px] font-semibold uppercase tracking-[3px] text-white/35 px-6 whitespace-nowrap">Exclusive Members</span>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
          </div>
          
          <div className="team-exclusive__row flex justify-center gap-8 flex-wrap">
            {exclusiveTeam.map((member, i) => (
              <div key={i} className="team-exclusive__member flex flex-col items-center gap-2.5 cursor-default group">
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white/10 transition-all duration-500 bg-[linear-gradient(145deg,rgba(139,92,246,0.08)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:border-purple-500 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.25),0_4px_20px_rgba(0,0,0,0.4)] group-hover:-translate-y-1 group-hover:scale-105">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top grayscale-[15%] brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100" loading="lazy" />
                </div>
                <span className="font-inter text-[13px] font-medium text-white/45 transition-colors duration-400 tracking-[0.3px] group-hover:text-white/90">{member.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
