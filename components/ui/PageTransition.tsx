'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Simple transition effect on route change
    setIsTransitioning(true);
    
    const tl = gsap.timeline();
    tl.to('#page-transition', {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.inOut'
    }).to('#page-transition', {
      opacity: 0,
      duration: 0.4,
      delay: 0.2,
      ease: 'power2.inOut',
      onComplete: () => setIsTransitioning(false)
    });

  }, [pathname]);

  return (
    <div 
      id="page-transition" 
      className={`fixed inset-0 bg-[#050505] z-[99999] flex items-center justify-center pointer-events-none ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-[60px] h-[60px] border-[3px] border-purple-500/20 border-t-purple-500 rounded-full animate-spin shadow-[0_0_40px_rgba(143,0,255,0.3)]" />
    </div>
  );
}
