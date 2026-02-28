'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Box, Star, Code, Gamepad2, GraduationCap, Heart, Users, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/#products', icon: Box, label: 'Products' },
  { href: '/#features', icon: Star, label: 'Features' },
  { href: '/#pricing', icon: Code, label: 'API Access' },
  { href: '/cheats', icon: Gamepad2, label: 'Free Cheats' },
  { href: '/#courses', icon: GraduationCap, label: 'Courses' },
  { href: '/#about', icon: Heart, label: 'About Us' },
  { href: '/#team', icon: Users, label: 'Team' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], .hero[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="fixed top-0 left-0 w-[280px] h-screen bg-gradient-to-b from-[#08060f] to-[#05040c] border-r border-white/5 z-50 flex flex-col overflow-hidden hidden md:flex">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      {/* Right Border Glow */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent shadow-[0_0_8px_rgba(168,85,247,0.2)]" />

      {/* Header */}
      <div className="p-4 flex items-center gap-3 relative shrink-0 border-b border-white/5">
        <div className="relative w-10 h-10 flex items-center justify-center shrink-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(143,0,255,0.15)] group hover:scale-105 transition-transform duration-300">
          <img src="https://i.postimg.cc/sg838cbj/download-(7).gif" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col leading-none">
            <span className="font-space-grotesk text-[22px] font-bold tracking-[5px] bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-purple-400 drop-shadow-[0_0_8px_rgba(143,0,255,0.15)]">SCRIPT</span>
            <span className="font-space-grotesk text-[14px] font-semibold tracking-[7px] text-purple-400/60 mt-[1px]">KITTENS</span>
          </div>
          <span className="text-[10px] text-white/30 tracking-[0.5px] font-medium font-space-grotesk flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(143,0,255,0.6)] animate-pulse" />
            Elite Gaming Tools Studio
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 flex flex-col gap-1 overflow-y-auto overflow-x-hidden relative z-10">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href.startsWith('/#') && activeSection === item.href.substring(2));
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex items-center gap-3 px-3 py-2 rounded-lg font-outfit font-medium tracking-[0.3px] transition-all duration-200 min-h-[48px] group ${
                isActive 
                  ? 'text-white bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-500 font-bold' 
                  : 'text-white/60 hover:text-white hover:bg-white/5 hover:translate-x-1'
              }`}
            >
              <div className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-br from-purple-500/25 to-pink-500/12 border-purple-500/40 text-purple-300 shadow-[0_0_24px_rgba(143,0,255,0.25),inset_0_0_10px_rgba(143,0,255,0.1)]'
                  : 'bg-white/5 border-white/5 text-white/40 group-hover:bg-purple-500/15 group-hover:border-purple-500/25 group-hover:text-purple-400 group-hover:shadow-[0_0_14px_rgba(143,0,255,0.12)]'
              }`}>
                <item.icon className="w-4 h-4" />
              </div>
              <span className="flex-1 relative z-10">{item.label}</span>
              <ChevronRight className={`w-3 h-3 transition-all duration-300 ${
                isActive ? 'opacity-100 text-purple-400 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0'
              }`} />
            </Link>
          );
        })}
      </nav>

      {/* Socials */}
      <div className="p-6 flex justify-center gap-4 border-t border-white/5">
        <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 text-xl transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(168,85,247,0.15)] hover:text-[#5865f2] hover:bg-[#5865f2]/10">
          <img src="https://img.icons8.com/liquid-glass/96/discord-logo.png" alt="Discord" className="w-full h-full object-contain rounded-xl" />
        </a>
        <a href="https://www.youtube.com/channel/UCIlubysLx-75CVZ1dcIfWvA" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 text-xl transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(168,85,247,0.15)] hover:text-[#ff0000] hover:bg-[#ff0000]/10">
          <img src="https://img.icons8.com/liquid-glass/96/youtube-play.png" alt="YouTube" className="w-full h-full object-contain rounded-xl" />
        </a>
        <a href="https://www.instagram.com/fuqii69/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 text-xl transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(168,85,247,0.15)] hover:text-[#e1306c] hover:bg-[#e1306c]/10">
          <img src="https://img.icons8.com/liquid-glass/96/instagram-new.png" alt="Instagram" className="w-full h-full object-contain rounded-xl" />
        </a>
      </div>

      {/* Footer */}
      <div className="px-6 pb-4 border-t border-white/5 pt-3">
        <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-lg text-[11px] font-medium text-white/50 tracking-[0.3px]">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
          All Systems Online
        </div>
        <p className="text-center text-[10px] text-white/20 tracking-[0.5px] mt-2">© 2026 Script Kittens</p>
      </div>
    </aside>
  );
}
