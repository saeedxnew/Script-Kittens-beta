'use client';

import { useState, useEffect } from 'react';
import { Camera, CheckCircle, Quote, Pen, Calendar, MapPin, User, Flame, Trophy, Users, TrendingUp, Gamepad2, Download, Shield, Settings, Lock, Bell, ChevronRight } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import gsap from 'gsap';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    gsap.fromTo('.reveal', 
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <>
      <div className="min-h-screen pt-24 px-6 pb-6 max-w-[1100px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="bg-[linear-gradient(145deg,rgba(22,18,48,0.92)_0%,rgba(12,10,28,0.88)_100%)] border border-purple-500/15 rounded-[22px] shadow-[0_12px_50px_rgba(0,0,0,0.5),0_0_100px_rgba(143,0,255,0.04),inset_0_1px_0_rgba(255,255,255,0.08)] mb-4 backdrop-blur-[60px] relative overflow-hidden transition-all duration-600 hover:border-purple-500/25 hover:-translate-y-[3px] reveal">
          
          {/* Banner */}
          <div className="relative h-[140px] overflow-hidden rounded-t-[22px] z-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(143,0,255,0.35)_0%,rgba(255,0,168,0.2)_25%,rgba(0,240,255,0.15)_50%,rgba(143,0,255,0.25)_75%,rgba(255,0,168,0.18)_100%)] bg-[size:400%_400%] animate-[bannerShift_12s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(143,0,255,0.2)_0%,transparent_50%),radial-gradient(ellipse_at_85%_30%,rgba(0,240,255,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_50%_90%,rgba(255,0,168,0.12)_0%,transparent_50%)] mix-blend-screen" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,transparent,rgba(143,0,255,0.5)_20%,rgba(0,240,255,0.4)_40%,rgba(255,0,168,0.4)_60%,rgba(251,191,36,0.3)_80%,transparent)] z-20 shadow-[0_0_15px_rgba(143,0,255,0.3),0_0_30px_rgba(0,240,255,0.15)]" />
          </div>

          <div className="relative z-10 px-6 pb-5 -mt-10">
            <div className="flex flex-col md:flex-row items-start gap-5">
              
              {/* Avatar */}
              <div className="relative shrink-0 w-[100px] h-[100px] group">
                <div className="absolute -inset-[30px] bg-[radial-gradient(circle,rgba(143,0,255,0.6),rgba(255,0,168,0.3),rgba(0,240,255,0.15),transparent_70%)] blur-[35px] animate-[glowPulse_4s_ease-in-out_infinite]" />
                <img src="https://files.catbox.moe/f7mmfi.jpg" alt="Avatar" className="w-[100px] h-[100px] rounded-full object-cover border-[3px] border-purple-500/40 relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:border-purple-500/70 shadow-[0_4px_25px_rgba(143,0,255,0.2),0_0_40px_rgba(143,0,255,0.08)]" />
                <button className="absolute bottom-0.5 right-0.5 w-[30px] h-[30px] rounded-full bg-gradient-to-br from-[#8f00ff] to-[#ff00a8] border-2 border-[#030305] text-white flex items-center justify-center z-20 transition-all hover:scale-110 hover:rotate-12 shadow-[0_2px_10px_rgba(143,0,255,0.4)]">
                  <Camera className="w-3 h-3" />
                </button>
                <div className="absolute bottom-1.5 right-1.5 w-[18px] h-[18px] rounded-full bg-emerald-500 border-[3px] border-[#030305] z-10">
                  <div className="absolute -inset-[3px] rounded-full border-2 border-emerald-500 animate-[pulseRing_2s_ease-out_infinite]" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 pt-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2.5 flex-wrap mb-1">
                  <h1 className="font-outfit text-[34px] font-extrabold bg-clip-text text-transparent bg-[linear-gradient(135deg,#ff4444_0%,#ff6b00_25%,#ffaa00_50%,#ffd700_75%,#ff6b00_100%)] bg-[size:300%_auto] leading-[1.1] tracking-[-0.5px] animate-[nameShimmer_4s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                    Guest
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-space-grotesk text-[10px] font-bold tracking-[0.3px] uppercase bg-gradient-to-br from-amber-500/20 to-amber-400/25 border border-amber-400/50 text-amber-400 shadow-[0_2px_12px_rgba(255,215,0,0.2)]">
                    <Crown className="w-2.5 h-2.5" /> Founder
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
                  <span className="font-jetbrains-mono text-[13px] text-white/35 font-medium tracking-[0.3px]">@guest</span>
                  <span className="font-inter text-[11px] text-cyan-400/55 font-semibold tracking-[0.3px] px-2 py-0.5 rounded bg-cyan-400/5 border border-cyan-400/10">he/him</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                  <div className="inline-flex items-center gap-1.5 font-inter text-[12px] font-semibold text-white/70 px-3 py-1 rounded-full bg-white/5 border border-white/10 tracking-[0.2px]">
                    <i className="fab fa-discord text-[10px] text-[#5865F2]" /> Discord
                  </div>
                  <button className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white font-inter text-[13px] font-semibold transition-colors hover:bg-white/10 hover:border-white/15">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Available
                  </button>
                </div>
              </div>

              {/* Completion */}
              <div className="flex flex-col items-center gap-1.5 pt-2 shrink-0 hidden md:flex">
                <div className="relative w-14 h-14">
                  <svg className="w-14 h-14 drop-shadow-[0_0_8px_rgba(143,0,255,0.2)]" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="4" />
                    <circle cx="40" cy="40" r="34" fill="none" stroke="url(#grad)" strokeWidth="4" strokeDasharray="214" strokeDashoffset="42.8" strokeLinecap="round" transform="rotate(-90 40 40)" />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8f00ff" />
                        <stop offset="50%" stopColor="#ff00a8" />
                        <stop offset="100%" stopColor="#00f0ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-outfit text-[13px] font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-[#ff00a8] to-[#fbbf24]">80%</span>
                  </div>
                </div>
                <div className="flex gap-[3px] justify-center">
                  {[...Array(7)].map((_, i) => (
                    <CheckCircle key={i} className={`w-3.5 h-3.5 ${i < 5 ? 'text-emerald-500 drop-shadow-[0_0_4px_rgba(0,255,136,0.4)]' : 'text-white/15'}`} />
                  ))}
                </div>
              </div>

            </div>

            {/* XP Bar */}
            <div className="mt-3.5">
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-jetbrains-mono text-[10px] font-bold text-amber-400 flex items-center gap-1 tracking-[0.5px] uppercase">
                  <Zap className="w-2.5 h-2.5 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]" /> Level 12
                </span>
                <span className="font-jetbrains-mono text-[9px] font-medium text-white/35 tracking-[0.3px]">2,450 / 3,000 XP</span>
              </div>
              <div className="w-full h-[5px] bg-white/5 rounded-full overflow-hidden relative shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]">
                <div className="h-full bg-[linear-gradient(90deg,#8f00ff,#ff00a8,#fbbf24,#00f0ff)] bg-[size:300%_100%] rounded-full w-[80%] animate-[xpBarShimmer_4s_ease-in-out_infinite] shadow-[0_0_10px_rgba(143,0,255,0.3),0_0_20px_rgba(255,0,168,0.15)]" />
              </div>
            </div>

            <div className="h-[1px] my-4 bg-[linear-gradient(90deg,transparent,rgba(143,0,255,0.2)_15%,rgba(0,240,255,0.15)_40%,rgba(255,0,168,0.12)_65%,rgba(251,191,36,0.08)_85%,transparent)] relative">
              <div className="absolute -inset-y-[2px] inset-x-0 bg-inherit blur-[4px] opacity-50" />
            </div>

            {/* About Me */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-outfit text-[14px] font-bold flex items-center gap-1.5 text-white tracking-[0.3px]">
                  <Quote className="w-3 h-3 text-purple-500/50 drop-shadow-[0_0_4px_rgba(143,0,255,0.3)]" /> About Me
                </h3>
                <button className="w-6 h-6 rounded-md bg-purple-500/5 border border-white/5 text-purple-500 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-purple-500/10 hover:scale-105 transition-all">
                  <Pen className="w-2.5 h-2.5" />
                </button>
              </div>
              <p className="text-[13px] text-white/70 leading-[1.7] tracking-[0.15px] opacity-85">
                I Love Script Kittens
              </p>
              <div className="flex flex-wrap gap-3.5 mt-2.5 pt-2.5 border-t border-white/5">
                <div className="flex items-center gap-1 font-inter text-[11px] text-white/60 hover:opacity-100 transition-opacity">
                  <Calendar className="w-2.5 h-2.5 text-purple-500 opacity-60" /> Member since <strong className="text-white font-semibold ml-0.5">January 2024</strong>
                </div>
                <div className="flex items-center gap-1 font-inter text-[11px] text-white/60 hover:opacity-100 transition-opacity">
                  <MapPin className="w-2.5 h-2.5 text-purple-500 opacity-60" /> New York, USA
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 my-3.5 relative z-10 reveal">
          {[
            { icon: Flame, label: 'Points', value: '2,450', color: 'orange' },
            { icon: Trophy, label: 'Achievements', value: '8', color: 'amber' },
            { icon: Users, label: 'Followers', value: '142', color: 'cyan' },
            { icon: TrendingUp, label: 'Level', value: '12', color: 'emerald' },
            { icon: Gamepad2, label: 'Games', value: '5', color: 'purple' },
            { icon: Download, label: 'Downloads', value: '34', color: 'pink' }
          ].map((stat, i) => (
            <div key={i} className="bg-[linear-gradient(145deg,rgba(22,18,48,0.85)_0%,rgba(12,10,28,0.75)_100%)] border border-white/5 rounded-2xl p-4 flex items-center gap-3.5 backdrop-blur-[40px] transition-all duration-400 hover:-translate-y-1 hover:border-purple-500/25 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5),0_0_30px_rgba(143,0,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)] group relative overflow-hidden">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 border border-white/5 transition-all duration-350 group-hover:scale-110 group-hover:rotate-6
                ${stat.color === 'orange' ? 'bg-[#ff6b35]/10 text-[#ff6b35]' : ''}
                ${stat.color === 'amber' ? 'bg-amber-400/10 text-amber-400' : ''}
                ${stat.color === 'cyan' ? 'bg-cyan-400/10 text-cyan-400' : ''}
                ${stat.color === 'emerald' ? 'bg-emerald-400/10 text-emerald-400' : ''}
                ${stat.color === 'purple' ? 'bg-purple-400/10 text-purple-400' : ''}
                ${stat.color === 'pink' ? 'bg-pink-400/10 text-pink-400' : ''}
              `}>
                <stat.icon className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <span className={`font-outfit text-[22px] font-extrabold leading-[1.2] block transition-transform group-hover:scale-105 origin-left
                  ${stat.color === 'orange' ? 'text-[#ff6b35]' : ''}
                  ${stat.color === 'amber' ? 'text-amber-400' : ''}
                  ${stat.color === 'cyan' ? 'text-cyan-400' : ''}
                  ${stat.color === 'emerald' ? 'text-emerald-400' : ''}
                  ${stat.color === 'purple' ? 'text-purple-400' : ''}
                  ${stat.color === 'pink' ? 'text-pink-400' : ''}
                `}>{stat.value}</span>
                <span className="font-inter text-[9px] text-white/35 font-bold uppercase tracking-[1px] block mt-0.5 truncate">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-2.5 mb-2.5 reveal">
          
          {/* Sidebar */}
          <aside className="bg-[linear-gradient(145deg,rgba(22,18,48,0.85)_0%,rgba(12,10,28,0.75)_100%)] border border-white/5 rounded-[16px] p-5 h-fit sticky top-[84px] backdrop-blur-[40px] transition-all hover:border-purple-500/20">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-purple-500/10 font-outfit text-[14px] font-bold">
              <Settings className="w-4 h-4 text-cyan-400" /> Settings
            </div>
            <nav className="flex flex-col gap-1">
              {[
                { id: 'general', icon: User, label: 'General' },
                { id: 'account', icon: Settings, label: 'Account' },
                { id: 'privacy', icon: Shield, label: 'Privacy' },
                { id: 'notifications', icon: Bell, label: 'Notifications' },
                { id: 'security', icon: Lock, label: 'Security' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-inter text-[13px] font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-br from-purple-500/15 to-purple-500/5 border border-purple-500/30 border-l-[3px] border-l-purple-500 text-white shadow-[0_4px_18px_rgba(143,0,255,0.12)]'
                      : 'text-white/70 hover:bg-purple-500/10 hover:border-purple-500/15 hover:text-white hover:translate-x-1 border border-transparent'
                  }`}
                >
                  <tab.icon className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'text-cyan-400' : ''}`} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="bg-[linear-gradient(145deg,rgba(22,18,48,0.85)_0%,rgba(12,10,28,0.75)_100%)] border border-white/5 rounded-[16px] p-7 backdrop-blur-[40px] transition-all hover:border-purple-500/20">
            
            {activeTab === 'general' && (
              <div className="animate-[tabIn_0.35s_ease]">
                <div className="mb-7 relative pb-3 border-b border-white/5">
                  <h2 className="font-outfit text-[22px] font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-white to-cyan-400 mb-1.5 flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-500 drop-shadow-[0_0_8px_rgba(143,0,255,0.4)]" /> General Information
                  </h2>
                  <p className="text-[13px] text-white/40 tracking-[0.2px]">Manage your personal information and profile details</p>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] font-bold text-white/65 flex items-center gap-1.5 uppercase tracking-[1px]">
                        <User className="w-2.5 h-2.5 text-purple-500" /> Display Name
                      </label>
                      <input type="text" defaultValue="Guest" className="w-full p-3.5 bg-[#08061299] border border-purple-500/10 rounded-xl text-[13px] text-white outline-none transition-all focus:border-purple-500/50 focus:bg-purple-500/10 focus:shadow-[0_0_40px_rgba(143,0,255,0.1),0_0_0_3px_rgba(143,0,255,0.06)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-inter text-[11px] font-bold text-white/65 flex items-center gap-1.5 uppercase tracking-[1px]">
                        <User className="w-2.5 h-2.5 text-purple-500" /> Username
                      </label>
                      <input type="text" defaultValue="guest" className="w-full p-3.5 bg-[#08061299] border border-purple-500/10 rounded-xl text-[13px] text-white outline-none transition-all focus:border-purple-500/50 focus:bg-purple-500/10 focus:shadow-[0_0_40px_rgba(143,0,255,0.1),0_0_0_3px_rgba(143,0,255,0.06)]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-[11px] font-bold text-white/65 flex items-center gap-1.5 uppercase tracking-[1px]">
                      <User className="w-2.5 h-2.5 text-purple-500" /> Bio
                    </label>
                    <textarea rows={4} defaultValue="I Love Script Kittens" className="w-full p-3.5 bg-[#08061299] border border-purple-500/10 rounded-xl text-[13px] text-white outline-none transition-all focus:border-purple-500/50 focus:bg-purple-500/10 focus:shadow-[0_0_40px_rgba(143,0,255,0.1),0_0_0_3px_rgba(143,0,255,0.06)] resize-y min-h-[90px]" />
                  </div>

                  <div className="flex gap-3.5 mt-4 pt-5 border-t border-purple-500/10">
                    <button className="px-7 py-3.5 rounded-xl font-inter text-[13px] font-bold bg-gradient-to-br from-[#8f00ff] to-[#ff00a8] text-white shadow-[0_6px_25px_rgba(143,0,255,0.3)] transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(143,0,255,0.45)] flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" /> Save Changes
                    </button>
                    <button className="px-7 py-3.5 rounded-xl font-inter text-[13px] font-bold bg-white/5 border border-white/10 text-white/70 transition-all hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-white hover:-translate-y-0.5">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== 'general' && (
              <div className="animate-[tabIn_0.35s_ease] flex flex-col items-center justify-center py-20 text-center">
                <Settings className="w-12 h-12 text-purple-500/30 mb-4 animate-spin-slow" />
                <h3 className="text-xl font-bold text-white mb-2">Settings Section</h3>
                <p className="text-white/40 text-sm max-w-[300px]">This section is currently under development. Check back later for updates.</p>
              </div>
            )}

          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
