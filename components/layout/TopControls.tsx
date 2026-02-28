'use client';

import { User, MousePointer2, Expand, Hand } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TopControls() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isNormalCursor, setIsNormalCursor] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleCursor = () => {
    setIsNormalCursor(!isNormalCursor);
    if (!isNormalCursor) {
      document.body.classList.add('normal-cursor');
    } else {
      document.body.classList.remove('normal-cursor');
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="fixed top-5 right-8 flex gap-3 z-[9999] transition-all duration-400">
      <Link href="/profile" className="flex items-center gap-2 px-4 py-3 bg-[#08060f]/85 backdrop-blur-xl border border-purple-500/20 rounded-xl text-white/70 font-outfit text-[13px] font-semibold transition-all duration-400 hover:border-purple-500/60 hover:text-white hover:shadow-[0_8px_30px_rgba(143,0,255,0.3),0_0_20px_rgba(143,0,255,0.2)] hover:-translate-y-1 hover:scale-105 active:-translate-y-0.5 active:scale-95 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        <User className="w-3.5 h-3.5 relative z-10 animate-pulse-glow" />
        <span className="relative z-10 hidden sm:inline">Profile</span>
      </Link>
      
      <button onClick={toggleCursor} className="flex items-center gap-2 px-4 py-3 bg-[#08060f]/85 backdrop-blur-xl border border-purple-500/20 rounded-xl text-white/70 font-outfit text-[13px] font-semibold transition-all duration-400 hover:border-purple-500/60 hover:text-white hover:shadow-[0_8px_30px_rgba(143,0,255,0.3),0_0_20px_rgba(143,0,255,0.2)] hover:-translate-y-1 hover:scale-105 active:-translate-y-0.5 active:scale-95 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        {isNormalCursor ? (
          <Hand className="w-3.5 h-3.5 relative z-10 animate-pulse-glow" />
        ) : (
          <MousePointer2 className="w-3.5 h-3.5 relative z-10 animate-pulse-glow" />
        )}
        <span className="relative z-10 hidden sm:inline">Cursor</span>
      </button>

      <button onClick={toggleFullscreen} className="flex items-center gap-2 px-4 py-3 bg-[#08060f]/85 backdrop-blur-xl border border-purple-500/20 rounded-xl text-white/70 font-outfit text-[13px] font-semibold transition-all duration-400 hover:border-purple-500/60 hover:text-white hover:shadow-[0_8px_30px_rgba(143,0,255,0.3),0_0_20px_rgba(143,0,255,0.2)] hover:-translate-y-1 hover:scale-105 active:-translate-y-0.5 active:scale-95 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        <Expand className="w-3.5 h-3.5 relative z-10 animate-pulse-glow" />
      </button>
    </div>
  );
}
