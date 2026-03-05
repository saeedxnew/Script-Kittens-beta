'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, MousePointer2, Expand, Minimize, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import CustomCursor from '@/components/ui/CustomCursor';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#products', label: 'Products' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'API Access' },
  { href: '/#courses', label: 'Courses' },
  { href: '/#about', label: 'About' },
  { href: '/#team', label: 'Team' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isNormalCursor, setIsNormalCursor] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Enable custom cursor on first load
    document.body.classList.add('custom-cursor-active');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });
      // If scrolled back above the first section, reset to home
      const firstSection = sections[0] as HTMLElement | undefined;
      if (firstSection && window.scrollY < firstSection.offsetTop - 150) {
        current = '';
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    const onFS = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFS);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('fullscreenchange', onFS);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
  };

  const toggleCursor = () => {
    const next = !isNormalCursor;
    setIsNormalCursor(next);
    // next=true → custom cursor ON (hide OS cursor)
    // next=false → custom cursor OFF (show OS cursor)
    document.body.classList.toggle('custom-cursor-active', next);
  };

  const isActiveLink = (href: string) => {
    if (href === '/') {
      // Home is only active when on the home page with no section scrolled into view
      return pathname === '/' && activeSection === '';
    }
    if (href.startsWith('/#')) {
      return pathname === '/' && activeSection === href.substring(2);
    }
    return pathname === href;
  };

  const navBtn: React.CSSProperties = {
    border: '1.5px solid rgba(200,184,232,0.14)',
    borderRadius: '3px',
    background: 'rgba(255,253,245,0.03)',
    color: 'rgba(240,237,228,0.50)',
    boxShadow: '2px 2px 0 rgba(200,184,232,0.06)',
    transition: 'all 0.2s ease',
  };

  const navBtnHover = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = 'rgba(200,184,232,0.35)';
    el.style.color = '#c8b8e8';
    el.style.boxShadow = '2px 2px 0 rgba(200,184,232,0.15), 4px 4px 0 rgba(200,184,232,0.07)';
    el.style.transform = 'translate(-1px,-1px)';
  };

  const navBtnLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = 'rgba(200,184,232,0.14)';
    el.style.color = 'rgba(240,237,228,0.50)';
    el.style.boxShadow = '2px 2px 0 rgba(200,184,232,0.06)';
    el.style.transform = '';
  };

  return (
    <>
      <CustomCursor active={mounted && isNormalCursor} />
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        suppressHydrationWarning
        style={{
          background: mounted && scrolled ? 'rgba(13,11,18,0.96)' : 'rgba(13,11,18,0.78)',
          borderBottom: mounted && scrolled ? '1.5px solid rgba(200,184,232,0.14)' : '1.5px solid rgba(200,184,232,0.07)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          boxShadow: mounted && scrolled ? '0 4px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(200,184,232,0.05)' : 'none',
        }}
      >
        {/* Chalk top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(200,184,232,0.55) 25%, rgba(168,200,232,0.40) 55%, rgba(168,220,200,0.25) 80%, transparent 100%)' }} />

        <div className="max-w-[1380px] mx-auto px-5 md:px-8 h-[72px] flex items-center gap-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-9 h-9 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]"
              style={{
                border: '1.5px solid rgba(200,184,232,0.28)',
                borderRadius: '4px',
                background: 'rgba(200,184,232,0.06)',
                boxShadow: '2px 2px 0 rgba(200,184,232,0.12), 4px 4px 0 rgba(200,184,232,0.05)',
              }}>
              <img src="https://i.postimg.cc/sg838cbj/download-(7).gif" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-space-grotesk text-[17px] font-bold tracking-[4px]"
                style={{ color: '#f0ede4', textShadow: '0 0 16px rgba(200,184,232,0.18)' }}>SCRIPT</span>
              <span className="font-space-grotesk text-[9px] font-semibold tracking-[5px] mt-[1px]"
                style={{ color: 'rgba(200,184,232,0.48)' }}>KITTENS</span>
            </div>
          </Link>

          {/* Pencil divider */}
          <div className="hidden md:block w-[1.5px] h-7 shrink-0 rounded-full"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(200,184,232,0.18), transparent)' }} />

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-3.5 py-2 font-outfit font-medium text-[13px] tracking-[0.3px] transition-all duration-200 rounded-[3px]"
                  style={{
                    color: active ? '#f0ede4' : 'rgba(240,237,228,0.45)',
                    border: active ? '1.5px solid rgba(200,184,232,0.22)' : '1.5px solid transparent',
                    background: active ? 'rgba(200,184,232,0.07)' : 'transparent',
                    boxShadow: active ? '2px 2px 0 rgba(200,184,232,0.08)' : 'none',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = 'rgba(240,237,228,0.85)';
                      el.style.borderColor = 'rgba(200,184,232,0.15)';
                      el.style.background = 'rgba(200,184,232,0.04)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = 'rgba(240,237,228,0.45)';
                      el.style.borderColor = 'transparent';
                      el.style.background = 'transparent';
                    }
                  }}
                >
                  {active && (
                    <span className="absolute bottom-[-1.5px] left-[15%] right-[15%] h-[1.5px] rounded-full"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(200,184,232,0.80), transparent)' }} />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            {/* Status */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 font-jetbrains-mono text-[10px] font-medium rounded-[3px]"
              style={{ color: 'rgba(168,220,200,0.65)', border: '1px solid rgba(168,220,200,0.15)', background: 'rgba(168,220,200,0.04)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#a8dccc', boxShadow: '0 0 5px rgba(168,220,200,0.6)' }} />
              Online
            </div>

            {/* Cursor */}
            <button
              onClick={toggleCursor}
              title={mounted && isNormalCursor ? 'Disable custom cursor' : 'Enable custom cursor'}
              className="w-9 h-9 flex items-center justify-center rounded-[3px] transition-all duration-200"
              style={{
                ...navBtn,
                background: mounted && isNormalCursor ? 'rgba(200,184,232,0.12)' : navBtn.background,
                color: mounted && isNormalCursor ? '#c8b8e8' : navBtn.color,
                borderColor: mounted && isNormalCursor ? 'rgba(200,184,232,0.35)' : navBtn.borderColor,
                boxShadow: mounted && isNormalCursor
                  ? '2px 2px 0 rgba(200,184,232,0.15), 4px 4px 0 rgba(200,184,232,0.07), 0 0 8px rgba(200,184,232,0.12)'
                  : navBtn.boxShadow,
              }}
              onMouseEnter={navBtnHover}
              onMouseLeave={navBtnLeave}
            >
              <MousePointer2 className="w-3.5 h-3.5" />
            </button>

            {/* Fullscreen */}
            <button onClick={toggleFullscreen} title="Toggle fullscreen"
              className="w-9 h-9 flex items-center justify-center rounded-[3px] transition-all duration-200"
              style={navBtn}
              onMouseEnter={navBtnHover} onMouseLeave={navBtnLeave}>
              {mounted && isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Expand className="w-3.5 h-3.5" />}
            </button>

            {/* Profile */}
            <Link href="/profile"
              className="hidden sm:flex items-center gap-2 px-4 py-2 font-jetbrains-mono text-[12px] font-semibold rounded-[3px] transition-all duration-200"
              style={{ border: '1.5px solid rgba(200,184,232,0.22)', background: 'rgba(200,184,232,0.07)', color: '#c8b8e8', boxShadow: '2px 2px 0 rgba(200,184,232,0.12), 4px 4px 0 rgba(200,184,232,0.06)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(200,184,232,0.14)';
                el.style.boxShadow = '3px 3px 0 rgba(200,184,232,0.20), 5px 5px 0 rgba(200,184,232,0.10)';
                el.style.transform = 'translate(-1px,-1px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(200,184,232,0.07)';
                el.style.boxShadow = '2px 2px 0 rgba(200,184,232,0.12), 4px 4px 0 rgba(200,184,232,0.06)';
                el.style.transform = '';
              }}>
              <User className="w-3.5 h-3.5" />
              Profile
            </Link>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(p => !p)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-[3px] transition-all duration-200"
              style={{ border: '1.5px solid rgba(200,184,232,0.18)', background: 'rgba(200,184,232,0.05)', color: 'rgba(240,237,228,0.65)' }}>
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden animate-chalk-fadein"
            style={{ background: 'rgba(13,11,18,0.98)', borderTop: '1px solid rgba(200,184,232,0.10)', borderBottom: '1.5px solid rgba(200,184,232,0.14)' }}>
            <div className="px-5 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 font-outfit font-medium text-[14px] tracking-[0.3px] transition-all duration-200 rounded-[3px]"
                    style={{
                      border: active ? '1.5px solid rgba(200,184,232,0.22)' : '1.5px solid transparent',
                      background: active ? 'rgba(200,184,232,0.07)' : 'transparent',
                      color: active ? '#f0ede4' : 'rgba(240,237,228,0.55)',
                      boxShadow: active ? '2px 2px 0 rgba(200,184,232,0.08)' : 'none',
                    }}>
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex items-center justify-between pt-3 mt-2"
                style={{ borderTop: '1px dashed rgba(200,184,232,0.12)' }}>
                <Link href="/profile" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 font-jetbrains-mono text-[12px] font-semibold rounded-[3px]"
                  style={{ border: '1.5px solid rgba(200,184,232,0.22)', background: 'rgba(200,184,232,0.07)', color: '#c8b8e8', boxShadow: '2px 2px 0 rgba(200,184,232,0.10)' }}>
                  <User className="w-3.5 h-3.5" /> Profile
                </Link>
                <div className="flex items-center gap-1.5 font-jetbrains-mono text-[10px]"
                  style={{ color: 'rgba(168,220,200,0.65)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#a8dccc' }} />
                  Online
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
