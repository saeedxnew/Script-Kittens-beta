'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const tl = gsap.timeline();
    tl.set('#page-transition', { opacity: 0 })
    .to('#page-transition', {
      opacity: 1,
      duration: 0.15,
      ease: 'power2.inOut'
    }).to('#page-transition', {
      opacity: 0,
      duration: 0.2,
      delay: 0.05,
      ease: 'power2.inOut'
    });
  }, [pathname, mounted]);

  if (!mounted) return null;

  return (
    <div
      id="page-transition"
      className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none opacity-0"
      style={{ background: '#050505' }}
    >
      {/* Dual-ring spinner */}
      <div className="relative w-14 h-14">
        <div
          className="absolute inset-0 rounded-full border-[2px] animate-spin"
          style={{
            borderColor: 'rgba(255,69,0,0.15)',
            borderTopColor: '#FF4500',
            boxShadow: '0 0 20px rgba(255,69,0,0.3)'
          }}
        />
        <div
          className="absolute inset-2 rounded-full border-[2px] animate-spin"
          style={{
            animationDirection: 'reverse',
            animationDuration: '0.7s',
            borderColor: 'rgba(255,69,0,0.08)',
            borderBottomColor: 'rgba(255,69,0,0.5)'
          }}
        />
      </div>
    </div>
  );
}
