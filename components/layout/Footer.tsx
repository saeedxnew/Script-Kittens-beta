'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden z-10 bg-[#050508] mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(15,10,30,0.95)_0%,#050508_50%,#030305_100%)] opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]" />
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,240,255,0.25)_0%,transparent_70%)] rounded-full blur-[80px] opacity-35 -top-[120px] left-[10%] animate-float" />
        <div className="absolute w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(143,0,255,0.3)_0%,transparent_70%)] rounded-full blur-[80px] opacity-35 -top-[80px] right-[15%] animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,0,168,0.2)_0%,transparent_70%)] rounded-full blur-[80px] opacity-35 bottom-[20%] left-[50%] animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="relative pt-[72px] px-6 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0c0a168c] backdrop-blur-xl border border-white/5 rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(0,240,255,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-10 items-start">
              
              <div className="flex flex-col gap-4">
                <Link href="/" className="inline-flex items-center gap-3.5 transition-transform hover:translate-x-1 hover:opacity-90">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-outfit text-xl font-bold text-white tracking-wide">SCRIPT <span className="text-gradient">KITTENS</span></span>
                    <span className="text-[11px] text-white/45 tracking-wide">Elite Gaming Tools Studio</span>
                  </div>
                </Link>
                <p className="text-[13px] leading-[1.6] text-white/50 max-w-[280px]">
                  Crafting premium gaming tools and experiences for the next generation. Innovation meets excellence.
                </p>
                <div className="inline-flex items-center gap-2.5 text-[12px] text-white/50 py-2 px-3.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full w-fit">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.6)] animate-pulse" />
                  All Systems Operational
                </div>
              </div>

              <div className="flex flex-col gap-3.5">
                <span className="font-outfit text-[10px] font-bold tracking-[2px] text-white/35 uppercase mb-1">Products</span>
                <Link href="/#products" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">Premium Cheats</Link>
                <Link href="/#features" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">Advanced Features</Link>
                <Link href="/#pricing" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">API Access</Link>
                <Link href="/cheats" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">Cheats Vault</Link>
              </div>

              <div className="flex flex-col gap-3.5">
                <span className="font-outfit text-[10px] font-bold tracking-[2px] text-white/35 uppercase mb-1">Company</span>
                <Link href="/#about" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">About Us</Link>
                <Link href="/#team" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">Our Team</Link>
                <Link href="#" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">Careers</Link>
                <Link href="#" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">Blog</Link>
              </div>

              <div className="flex flex-col gap-3.5">
                <span className="font-outfit text-[10px] font-bold tracking-[2px] text-white/35 uppercase mb-1">Support</span>
                <Link href="#" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">Documentation</Link>
                <Link href="#" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">FAQ</Link>
                <Link href="/#contact" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">Contact</Link>
                <Link href="#" className="font-outfit text-[13px] font-medium text-white/70 hover:text-[#00f0ff] hover:translate-x-1 transition-all">System Status</Link>
              </div>

              <div className="flex flex-col gap-3.5">
                <span className="font-outfit text-[10px] font-bold tracking-[2px] text-white/35 uppercase mb-1">Get in touch</span>
                <a href="mailto:support@scriptkittens.com" className="text-[15px] font-semibold text-white hover:text-[#00f0ff] transition-colors">support@scriptkittens.com</a>
                <div className="flex flex-wrap gap-2.5 mt-2">
                  <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/60 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/25 hover:text-[#00f0ff] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all">
                    <img src="https://img.icons8.com/liquid-glass/96/discord-logo.png" alt="Discord" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCIlubysLx-75CVZ1dcIfWvA" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/60 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/25 hover:text-[#00f0ff] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all">
                    <img src="https://img.icons8.com/liquid-glass/96/youtube-play.png" alt="YouTube" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="https://www.instagram.com/fuqii69/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/60 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/25 hover:text-[#00f0ff] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all">
                    <img src="https://img.icons8.com/liquid-glass/96/instagram-new.png" alt="Instagram" className="w-6 h-6 object-contain" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="relative py-12 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-shimmer" style={{ animationDuration: '25s' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-outfit text-[clamp(42px,8vw,100px)] font-black tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] via-[#8f00ff] to-[#ff00a8] drop-shadow-[0_0_24px_rgba(143,0,255,0.2)]">
              SCRIPT KITTENS
            </span>
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[120px] bg-[radial-gradient(ellipse_at_center,rgba(143,0,255,0.2)_0%,transparent_65%)] blur-[40px] pointer-events-none animate-pulse-glow" />
      </div>

      <div className="relative px-6 pb-8">
        <div className="max-w-[1200px] mx-auto bg-[#08061299] backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <span className="font-outfit text-[12px] font-medium text-white/40 tracking-[0.3px]">
              © 2026 Script Kittens. All rights reserved.
            </span>
            <div className="flex items-center gap-3">
              <Link href="#" className="font-outfit text-[12px] font-medium text-white/45 hover:text-[#00f0ff] transition-colors">Privacy Policy</Link>
              <span className="w-1 h-1 bg-white/25 rounded-full" />
              <Link href="#" className="font-outfit text-[12px] font-medium text-white/45 hover:text-[#00f0ff] transition-colors">Terms of Service</Link>
              <span className="w-1 h-1 bg-white/25 rounded-full" />
              <Link href="#" className="font-outfit text-[12px] font-medium text-white/45 hover:text-[#00f0ff] transition-colors">Cookie Policy</Link>
            </div>
            <div className="flex flex-wrap gap-2.5 justify-end">
              {['#GAMING', '#FREEFIRE', '#TOOLS', '#COMMUNITY', '#SCRIPTKITTENS'].map((tag) => (
                <span key={tag} className="font-outfit text-[11px] font-semibold text-white/40 py-2 px-3.5 bg-white/5 border border-white/5 rounded-full tracking-[0.5px] cursor-default transition-all hover:text-white/90 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/20 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:-translate-y-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-[10px] text-white/20 pb-4">
        Made With 🫀 By ༯𝙎ค૯𝙀𝘿✘🫀 | All Credits To TSun Studio
      </div>
    </footer>
  );
}
