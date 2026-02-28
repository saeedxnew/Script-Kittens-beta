'use client';

import { useState, useEffect } from 'react';
import { Search, Code, Wrench, Box, Unlock, Shield, CheckCheck, Users, Download, Star, CloudUpload, Terminal, Image as ImageIcon, Plus, X, ArrowRight } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import gsap from 'gsap';

export default function CheatsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    gsap.fromTo('.reveal', 
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <>
      <div className="min-h-screen pt-32 px-8 pb-20 max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <h1 className="font-outfit text-6xl md:text-7xl font-extrabold tracking-tight mb-5 relative inline-block">
            Free Cheats <span className="text-gradient">Vault</span>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[100px] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent rounded-sm" />
          </h1>
          <p className="text-white/70 text-base max-w-[520px] mx-auto leading-relaxed mt-10">
            Explore community-verified scripts, tools, and configs — curated by the ScriptKittens community.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center flex-wrap gap-3 mb-10 reveal">
          {[
            { icon: Unlock, text: 'Open Source' },
            { icon: Shield, text: 'Malware Free' },
            { icon: CheckCheck, text: 'Verified Scripts' },
            { icon: Users, text: 'Community Driven' }
          ].map((badge, i) => (
            <div key={i} className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-white/70 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:text-white hover:-translate-y-0.5">
              <badge.icon className="w-3 h-3 text-emerald-400" /> {badge.text}
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mb-12 py-4 px-8 bg-[#0c0c11] border border-white/5 rounded-[50px] max-w-[600px] mx-auto reveal">
          {[
            { icon: Code, num: '6', text: 'Scripts' },
            { icon: Download, num: '1,993', text: 'Downloads' },
            { icon: Users, num: '248', text: 'Users' },
            { icon: Star, num: '4.6', text: 'Avg Rating' }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-white/70 justify-center">
              <stat.icon className="w-3.5 h-3.5 text-white/40" />
              <span className="font-bold text-white text-base">{stat.num}</span> {stat.text}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8 reveal">
          <div className="flex items-center gap-2.5 bg-[#0c0c11] border border-white/5 rounded-xl px-4 py-2.5 w-full md:w-[300px] transition-all focus-within:border-white/15 focus-within:ring-2 focus-within:ring-white/5">
            <Search className="w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search scripts..." 
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex bg-[#0c0c11] border border-white/5 rounded-xl p-1 overflow-x-auto">
            {['all', 'code', 'tool', 'project'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.2)]' 
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}{tab === 'all' ? '' : 's'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 reveal">
          {/* Example Card 1 */}
          <div className="bg-[#0c0c11] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111118] hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(255,255,255,0.03)] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex justify-between items-center mb-3.5 relative z-10">
              <div className="text-[11px] font-semibold text-white/70 bg-white/5 px-2.5 py-1 rounded flex items-center gap-1.5 border border-white/5">
                <Terminal className="w-3 h-3" /> CODE
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.4)] animate-pulse" /> Updated
              </div>
            </div>
            <h3 className="text-[17px] font-bold text-white mb-1.5 relative z-10 group-hover:text-[#f0f0f0] transition-colors">Aimbot Script V2</h3>
            <p className="text-[13px] text-white/70 leading-relaxed mb-3.5 relative z-10">Advanced aimbot script with smooth tracking and bone selection.</p>
            <div className="flex flex-wrap gap-1.5 mb-3.5 relative z-10">
              <span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-white/70 flex items-center gap-1 transition-colors hover:border-white/10 hover:text-white">
                <Code className="w-3 h-3" /> Lua
              </span>
            </div>
            <div className="flex justify-between items-center pt-3.5 border-t border-white/5 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1a1a20] to-[#222230] flex items-center justify-center text-[10px] font-bold text-white/70 border border-white/5">
                  SK
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[#ccc]">ScriptKittens</div>
                  <div className="text-[10px] text-white/40">Verified</div>
                </div>
              </div>
              <div className="flex gap-2.5">
                <span className="text-[11px] text-white/40 flex items-center gap-1"><Download className="w-3 h-3" /> 1.2k</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-3.5 relative z-10">
              <button className="flex-1 bg-white text-black py-2 rounded-lg font-bold text-[12px] flex items-center justify-center gap-1.5 transition-all hover:bg-[#e8e8e8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.1)]">
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          </div>
          
          {/* Example Card 2 */}
          <div className="bg-[#0c0c11] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#111118] hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(255,255,255,0.03)] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex justify-between items-center mb-3.5 relative z-10">
              <div className="text-[11px] font-semibold text-white/70 bg-white/5 px-2.5 py-1 rounded flex items-center gap-1.5 border border-white/5">
                <Wrench className="w-3 h-3" /> TOOL
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.4)] animate-pulse" /> Safe
              </div>
            </div>
            <h3 className="text-[17px] font-bold text-white mb-1.5 relative z-10 group-hover:text-[#f0f0f0] transition-colors">Memory Scanner</h3>
            <p className="text-[13px] text-white/70 leading-relaxed mb-3.5 relative z-10">Fast and undetectable memory scanner for finding offsets.</p>
            <div className="flex flex-wrap gap-1.5 mb-3.5 relative z-10">
              <span className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/5 text-white/70 flex items-center gap-1 transition-colors hover:border-white/10 hover:text-white">
                <Code className="w-3 h-3" /> C++
              </span>
            </div>
            <div className="flex justify-between items-center pt-3.5 border-t border-white/5 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1a1a20] to-[#222230] flex items-center justify-center text-[10px] font-bold text-white/70 border border-white/5">
                  FZ
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-[#ccc]">Fuzion</div>
                  <div className="text-[10px] text-white/40">Member</div>
                </div>
              </div>
              <div className="flex gap-2.5">
                <span className="text-[11px] text-white/40 flex items-center gap-1"><Download className="w-3 h-3" /> 845</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-3.5 relative z-10">
              <button className="flex-1 bg-white text-black py-2 rounded-lg font-bold text-[12px] flex items-center justify-center gap-1.5 transition-all hover:bg-[#e8e8e8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.1)]">
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          </div>
        </div>

        {/* Publish Section */}
        <section id="upload-section" className="bg-gradient-to-br from-[#0c0c12]/95 to-[#08080e]/98 border border-white/5 rounded-3xl p-12 mb-20 relative overflow-hidden reveal">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          
          <div className="text-center mb-8">
            <div className="w-[52px] h-[52px] mx-auto mb-3.5 bg-gradient-to-br from-purple-500/15 to-blue-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-xl text-purple-500 animate-float">
              <CloudUpload />
            </div>
            <h2 className="font-outfit text-[26px] font-extrabold mb-1.5 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">Publish to Vault</h2>
            <p className="text-white/40 text-sm">Share your projects, codes, and tools with the community</p>
          </div>

          <div className="flex gap-1 max-w-[420px] mx-auto mb-8 bg-white/5 border border-white/10 rounded-xl p-1">
            {['project', 'code', 'tool'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                  tab === 'project' 
                    ? 'bg-purple-500/15 border border-purple-500/30 text-white shadow-[0_0_20px_rgba(168,85,247,0.08)]' 
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent'
                }`}
              >
                {tab === 'project' && <Box className="w-3.5 h-3.5" />}
                {tab === 'code' && <Terminal className="w-3.5 h-3.5" />}
                {tab === 'tool' && <Wrench className="w-3.5 h-3.5" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <form className="max-w-[680px] mx-auto flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-white/70 tracking-[0.3px]">Project Name</label>
              <input type="text" placeholder="e.g. Super Aimbot V2" className="bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white outline-none transition-all focus:border-purple-500/40 focus:ring-2 focus:ring-purple-500/10 placeholder:text-white/20" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-white/70 tracking-[0.3px]">Category</label>
                <select className="bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white outline-none transition-all focus:border-purple-500/40 focus:ring-2 focus:ring-purple-500/10 appearance-none cursor-pointer">
                  <option value="external" className="bg-[#0c0c11]">External Tool</option>
                  <option value="internal" className="bg-[#0c0c11]">Internal Mod</option>
                  <option value="config" className="bg-[#0c0c11]">Config / Preset</option>
                  <option value="other" className="bg-[#0c0c11]">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-white/70 tracking-[0.3px]">Author</label>
                <input type="text" placeholder="Your name" defaultValue="Anonymous" className="bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white outline-none transition-all focus:border-purple-500/40 focus:ring-2 focus:ring-purple-500/10 placeholder:text-white/20" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-white/70 tracking-[0.3px]">Description</label>
              <textarea placeholder="Describe features, compatibility, system requirements..." rows={3} className="bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white outline-none transition-all focus:border-purple-500/40 focus:ring-2 focus:ring-purple-500/10 placeholder:text-white/20 resize-none min-h-[80px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-white/70 tracking-[0.3px]">Cover Image <span className="text-white/40 font-normal text-[12px]">(optional)</span></label>
                <div className="relative cursor-pointer overflow-hidden rounded-xl group">
                  <div className="w-full min-h-[130px] border-2 border-dashed border-purple-500/15 bg-purple-500/5 flex flex-col items-center justify-center gap-2.5 text-white/40 text-[13px] transition-all group-hover:border-purple-500/35 group-hover:bg-purple-500/10">
                    <ImageIcon className="w-6 h-6 text-purple-500/35" />
                    <span>Click to upload image</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-white/70 tracking-[0.3px]">Project File <span className="text-red-500 font-bold">*</span></label>
                <div className="relative cursor-pointer overflow-hidden rounded-xl group">
                  <div className="w-full min-h-[130px] border-2 border-dashed border-purple-500/15 bg-purple-500/5 flex flex-col items-center justify-center gap-2.5 text-white/40 text-[13px] transition-all group-hover:border-purple-500/35 group-hover:bg-purple-500/10">
                    <CloudUpload className="w-6 h-6 text-purple-500/35" />
                    <span>Drop .zip / .rar or click</span>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="w-full bg-gradient-to-br from-purple-500 to-purple-700 text-white p-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(168,85,247,0.3)] mt-1">
              <CloudUpload className="w-4 h-4" /> Publish Project
            </button>
          </form>
        </section>

      </div>
      <Footer />
    </>
  );
}
