'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative mt-16 z-10 px-5 md:px-8 pb-8">
      {/* Top chalk rule */}
      <div className="max-w-[1240px] mx-auto mb-8">
        <div className="chalk-rule" />
      </div>

      <div className="max-w-[1240px] mx-auto">
        <div className="relative overflow-hidden p-8 md:p-10"
          style={{
            background: 'rgba(120,100,200,0.05)',
            border: '1.5px solid rgba(167,139,250,0.14)',
            borderRadius: '8px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.40), 0 0 0 1px rgba(124,58,237,0.08)',
          }}>

          {/* Corner brackets */}
          {[['top-2 left-2', 'borderTop borderLeft'], ['top-2 right-2', 'borderTop borderRight'],
            ['bottom-2 left-2', 'borderBottom borderLeft'], ['bottom-2 right-2', 'borderBottom borderRight']].map(([pos], idx) => {
            const styles: Record<string, string>[] = [
              { borderTop: '1.5px solid rgba(167,139,250,0.28)', borderLeft: '1.5px solid rgba(167,139,250,0.28)' },
              { borderTop: '1.5px solid rgba(167,139,250,0.28)', borderRight: '1.5px solid rgba(167,139,250,0.28)' },
              { borderBottom: '1.5px solid rgba(167,139,250,0.28)', borderLeft: '1.5px solid rgba(167,139,250,0.28)' },
              { borderBottom: '1.5px solid rgba(167,139,250,0.28)', borderRight: '1.5px solid rgba(167,139,250,0.28)' },
            ];
            return (
              <div key={idx} className={`absolute ${pos} w-5 h-5 pointer-events-none`} style={styles[idx]} />
            );
          })}

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-8 relative z-10">

            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-2">
                <span className="font-space-grotesk text-[19px] font-bold tracking-[4px]" style={{ color: '#f0eeff' }}>SCRIPT</span>
                <span className="text-gradient font-space-grotesk text-[19px] font-bold tracking-[4px]">KITTENS</span>
              </Link>
              <p className="text-[13px] leading-[1.75] max-w-[260px]" style={{ color: 'rgba(224,216,255,0.52)' }}>
                Crafting premium gaming tools and experiences for the next generation. Innovation meets excellence.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 font-jetbrains-mono text-[10px]"
                style={{
                  border: '1px solid rgba(52,211,153,0.22)',
                  borderRadius: '4px',
                  background: 'rgba(52,211,153,0.05)',
                  color: 'rgba(52,211,153,0.70)',
                }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" style={{ boxShadow: '0 0 8px rgba(52,211,153,0.6)' }} />
                All Systems Operational
              </div>
            </div>

            {/* Products */}
            <div className="space-y-3">
              <p className="font-jetbrains-mono text-[10px] uppercase tracking-[2.5px] font-bold"
                style={{ color: 'rgba(167,139,250,0.45)' }}>Products</p>
              {[
                ['/#products', 'Premium Cheats'],
                ['/#features', 'Advanced Features'],
                ['/#pricing', 'API Access'],
                ['/cheats', 'Cheats Vault'],
              ].map(([href, label]) => (
                <Link key={label} href={href}
                  className="block text-[13px] font-medium transition-all duration-200"
                  style={{ color: 'rgba(224,216,255,0.55)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#a78bfa'; (e.currentTarget as HTMLElement).style.paddingLeft = '4px'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(224,216,255,0.55)'; (e.currentTarget as HTMLElement).style.paddingLeft = '0'; }}>
                  {label}
                </Link>
              ))}
            </div>

            {/* Support */}
            <div className="space-y-3">
              <p className="font-jetbrains-mono text-[10px] uppercase tracking-[2.5px] font-bold"
                style={{ color: 'rgba(167,139,250,0.45)' }}>Support</p>
              {[
                ['#', 'Documentation'],
                ['#', 'FAQ'],
                ['/#contact', 'Contact'],
                ['#', 'System Status'],
              ].map(([href, label]) => (
                <Link key={label} href={href}
                  className="block text-[13px] font-medium transition-all duration-200"
                  style={{ color: 'rgba(224,216,255,0.55)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#a78bfa'; (e.currentTarget as HTMLElement).style.paddingLeft = '4px'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(224,216,255,0.55)'; (e.currentTarget as HTMLElement).style.paddingLeft = '0'; }}>
                  {label}
                </Link>
              ))}
            </div>

            {/* Contact column */}
            <div className="space-y-3">
              <p className="font-jetbrains-mono text-[10px] uppercase tracking-[2.5px] font-bold"
                style={{ color: 'rgba(167,139,250,0.45)' }}>Get in touch</p>
              <a href="mailto:support@scriptkittens.com"
                className="block text-[13px] font-semibold transition-colors duration-200"
                style={{ color: '#f0eeff' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#a78bfa'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#f0eeff'; }}>
                support@scriptkittens.com
              </a>
              <div className="flex gap-2.5 pt-1">
                {[
                  { href: 'https://discord.gg/AqkdsPMU7M', src: 'https://img.icons8.com/liquid-glass/96/discord-logo.png', alt: 'Discord' },
                  { href: 'https://www.youtube.com/channel/UCIlubysLx-75CVZ1dcIfWvA', src: 'https://img.icons8.com/liquid-glass/96/youtube-play.png', alt: 'YouTube' },
                  { href: 'https://www.instagram.com/fuqii69/', src: 'https://img.icons8.com/liquid-glass/96/instagram-new.png', alt: 'Instagram' },
                ].map(s => (
                  <a key={s.alt} href={s.href} target="_blank" rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center transition-all duration-250"
                    style={{
                      border: '1.5px solid rgba(167,139,250,0.18)',
                      borderRadius: '6px',
                      background: 'rgba(167,139,250,0.05)',
                      boxShadow: '0 0 12px rgba(124,58,237,0.06)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(167,139,250,0.45)';
                      el.style.background = 'rgba(167,139,250,0.12)';
                      el.style.boxShadow = '0 8px 20px rgba(124,58,237,0.25), 0 0 0 1px rgba(167,139,250,0.30)';
                      el.style.transform = 'perspective(400px) translateZ(6px) translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(167,139,250,0.18)';
                      el.style.background = 'rgba(167,139,250,0.05)';
                      el.style.boxShadow = '0 0 12px rgba(124,58,237,0.06)';
                      el.style.transform = '';
                    }}>
                    <Image src={s.src} alt={s.alt} width={24} height={24} className="object-contain" unoptimized />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1240px] mx-auto mt-5 px-3 flex flex-wrap items-center justify-between gap-3 font-jetbrains-mono text-[11px]"
        style={{ color: 'rgba(224,216,255,0.30)' }}>
        <span>© 2026 Script Kittens. All rights reserved.</span>
        <div className="flex items-center gap-3">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l, i) => (
            <Link key={l} href="#"
              className="transition-colors duration-200"
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(167,139,250,0.70)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(224,216,255,0.30)'; }}>
              {i > 0 && <span className="mr-3" style={{ color: 'rgba(167,139,250,0.25)' }}>•</span>}{l}
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center font-jetbrains-mono text-[10px] mt-3"
        style={{ color: 'rgba(224,216,255,0.20)' }}>
        Made With 🫀 By 1Shot | All Credits To Kittens X TSun
      </div>
    </footer>
  );
}
