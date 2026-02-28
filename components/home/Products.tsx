'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Crown, Cpu, Code, Server, ArrowRight, Crosshair, Eye, Camera, Tv, Zap, Infinity, Ghost, MapPin, PersonStanding, Palette, Plug, Mail, Key } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const products = [
  {
    id: 'premium-panel',
    title: 'Premium Kitty Panel',
    type: 'EXTERNAL',
    badge: 'BEST SELLER',
    icon: Crown,
    color: 'purple',
    features: [
      { icon: Crosshair, text: 'Aimbot Suite (Head, Neck, Body, Drag)' },
      { icon: Eye, text: 'ESP & Chams (Box, RGB, Moco)' },
      { icon: Camera, text: 'Sniper Scope, Quick & Camera' },
      { icon: Tv, text: 'Streamer Mode' }
    ],
    prices: [
      { label: '1 MONTH', value: '$9.99' },
      { label: 'PERMANENT', value: '$14.99', featured: true }
    ]
  },
  {
    id: 'internal-panel',
    title: 'Internal Kitty Panel',
    type: 'INTERNAL',
    badge: 'ADVANCED',
    icon: Cpu,
    color: 'cyan',
    features: [
      { icon: Crosshair, text: 'Silent Aim & Head Rotation' },
      { icon: Zap, text: 'Teleport, Speed Hack, Fly' },
      { icon: Infinity, text: 'Unlimited Ammo, No Recoil' },
      { icon: Ghost, text: 'Full ESP & Skeleton' }
    ],
    prices: [
      { label: '1 DAY', value: '$1' },
      { label: '1 MONTH', value: '$14.99' },
      { label: 'PERMANENT', value: '$24.99', featured: true }
    ]
  },
  {
    id: 'premium-codes',
    title: 'Premium Kitty Codes',
    type: 'EXTERNAL CODES',
    badge: 'BEST VALUE',
    icon: Code,
    color: 'pink',
    features: [
      { icon: Crosshair, text: 'Aimbot x64 & x86' },
      { icon: MapPin, text: 'Sniper & Ammo Location' },
      { icon: PersonStanding, text: 'Speed Hack & Fly Run' },
      { icon: Palette, text: 'All Chams Types' }
    ],
    prices: [
      { label: 'PERMANENT', value: '$4.99', featured: true, large: true }
    ]
  },
  {
    id: 'api',
    title: 'Free Fire API',
    type: 'API SERVICES',
    badge: 'DEVELOPERS',
    icon: Server,
    color: 'emerald',
    features: [
      { icon: Plug, text: 'Player Info & Like API' },
      { icon: Mail, text: 'Friend Request Spam API' },
      { icon: Key, text: 'JWT Token & UID Bypass' },
      { icon: Zap, text: '24/7 Uptime & Fast Response' }
    ],
    prices: [
      { label: 'STARTING FROM', value: '$1', suffix: '/endpoint', featured: true, large: true }
    ]
  }
];

const colorMap = {
  purple: {
    bg: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/25',
    text: 'text-purple-500',
    glow: 'shadow-[0_0_20px_rgba(168,85,247,0.1)]',
    hoverGlow: 'hover:shadow-[0_10px_30px_rgba(168,85,247,0.3),0_0_40px_rgba(168,85,247,0.2)]',
    gradient: 'from-[#a855f7] to-[#ec4899]'
  },
  cyan: {
    bg: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/25',
    text: 'text-cyan-500',
    glow: 'shadow-[0_0_20px_rgba(6,182,212,0.1)]',
    hoverGlow: 'hover:shadow-[0_10px_30px_rgba(6,182,212,0.3),0_0_40px_rgba(6,182,212,0.2)]',
    gradient: 'from-[#06b6d4] to-[#3b82f6]'
  },
  pink: {
    bg: 'from-pink-500/10 to-pink-500/5',
    border: 'border-pink-500/25',
    text: 'text-pink-500',
    glow: 'shadow-[0_0_20px_rgba(244,114,182,0.1)]',
    hoverGlow: 'hover:shadow-[0_10px_30px_rgba(244,114,182,0.3),0_0_40px_rgba(244,114,182,0.2)]',
    gradient: 'from-[#f472b6] to-[#a855f7]'
  },
  emerald: {
    bg: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/25',
    text: 'text-emerald-500',
    glow: 'shadow-[0_0_20px_rgba(52,211,153,0.1)]',
    hoverGlow: 'hover:shadow-[0_10px_30px_rgba(52,211,153,0.3),0_0_40px_rgba(52,211,153,0.2)]',
    gradient: 'from-[#34d399] to-[#06b6d4]'
  }
};

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-[120px] relative">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-[11px] font-bold tracking-[3px] text-purple-500 mb-5">
            OUR ARSENAL
          </span>
          <h2 className="font-outfit text-[clamp(36px,6vw,56px)] font-extrabold mb-5">
            Premium <span className="text-gradient">Products</span>
          </h2>
          <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
            Elite Free Fire tools designed for serious gamers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const colors = colorMap[product.color as keyof typeof colorMap];
            
            return (
              <div key={product.id} className="product-card relative bg-gradient-to-br from-[#1e083c]/85 to-[#140a28]/92 border border-purple-500/15 rounded-[22px] backdrop-blur-md transition-all duration-400 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_16px_60px_rgba(143,0,255,0.25)] flex flex-col overflow-hidden group">
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center text-[22px] ${colors.text} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                      <product.icon className="w-6 h-6" />
                    </div>
                    <div className={`px-3 py-1.5 bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-lg text-[9px] font-extrabold tracking-[1.5px] ${colors.text} uppercase`}>
                      {product.badge}
                    </div>
                  </div>

                  <h3 className="font-outfit text-[22px] font-bold text-white mb-1 tracking-[-0.5px] transition-colors duration-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-400">
                    {product.title}
                  </h3>
                  <span className={`font-space-grotesk text-[10px] font-semibold ${colors.text} uppercase tracking-[3px] mb-6 opacity-70`}>
                    {product.type}
                  </span>

                  <div className="flex flex-col gap-2 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3.5 p-3 bg-white/5 border border-white/5 rounded-xl text-[13px] font-space-grotesk text-white/75 transition-all duration-300 hover:bg-white/10 hover:translate-x-1">
                        <feature.icon className={`w-3.5 h-3.5 ${colors.text}`} />
                        <span className="flex-1 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className={`flex gap-2 mb-4 ${product.prices.length === 1 ? 'justify-center' : ''}`}>
                      {product.prices.map((price, i) => (
                        <div key={i} className={`flex-1 flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-400 ${
                          price.featured 
                            ? `bg-gradient-to-br ${colors.bg} ${colors.border} ${colors.glow}` 
                            : 'bg-white/5 border-white/10 hover:border-white/20 hover:-translate-y-0.5'
                        } ${price.large ? 'py-4 px-10 flex-none' : ''}`}>
                          <span className="font-space-grotesk text-[9px] text-white/40 font-bold tracking-[0.5px] mb-0.5 uppercase">
                            {price.label}
                          </span>
                          <span className={`font-outfit text-[15px] font-bold ${price.featured ? colors.text : 'text-white'}`}>
                            {price.value}
                            {price.suffix && <small className="text-[11px] font-medium opacity-60 ml-0.5">{price.suffix}</small>}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className={`w-full flex items-center justify-center gap-2.5 p-4 rounded-xl font-space-grotesk text-[14px] font-bold text-white uppercase tracking-[1px] transition-all duration-300 border ${colors.border} bg-gradient-to-br ${colors.bg} ${colors.hoverGlow} group/btn overflow-hidden relative`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                      <span className="relative z-10">Get Now</span>
                      <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
