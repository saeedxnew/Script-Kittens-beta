'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setHasMounted(true);

    const timer = setTimeout(() => {
      gsap.to('#preloader', {
        opacity: 0,
        duration: 0.8,
        onComplete: () => setIsVisible(false)
      });
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted || !isVisible) return null;

  return (
    <div id="preloader" className="fixed inset-0 bg-[#030305] z-[10000] flex items-center justify-center flex-col">
      <div className="text-center flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-8 relative animate-[loaderFadeIn_0.6s_ease-out]">
          <div className="flex gap-1.5 relative z-10">
            <div className="absolute inset-[-25px] bg-[radial-gradient(ellipse_at_center,rgba(143,0,255,0.12),transparent_65%)] blur-[35px] animate-[loaderGlow_5s_ease-in-out_infinite] -z-10" />
            
            {'SCRIPT KITTENS'.split('').map((char, i) => (
              <span 
                key={i} 
                className={`font-outfit text-[clamp(48px,9vw,90px)] font-black bg-clip-text text-transparent bg-[linear-gradient(135deg,#00f0ff_0%,#8f00ff_50%,#ff00a8_100%)] bg-[size:200%_200%] drop-shadow-[0_0_15px_rgba(143,0,255,0.3)] animate-[letterSlideIn_0.8s_cubic-bezier(0.34,1.56,0.64,1)_forwards,letterGradientShift_6s_ease-in-out_infinite] opacity-0 translate-y-[30px] scale-90 blur-[8px]`}
                style={{ 
                  animationDelay: `${i * 0.05}s, ${i * 0.2}s`,
                  width: char === ' ' ? '24px' : 'auto'
                }}
              >
                {char}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 relative opacity-0 translate-y-[10px] animate-[subtextFadeIn_0.8s_ease-out_0.7s_forwards]">
            <span className="w-[50px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            <span className="font-outfit text-[12px] font-semibold tracking-[3px] text-purple-500/70 uppercase animate-[labelPulse_2.5s_ease-in-out_infinite]">INITIALIZING</span>
            <span className="w-[50px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
          </div>

          <div className="w-[250px] relative opacity-0 translate-y-[10px] animate-[barFadeIn_0.8s_ease-out_0.9s_forwards]">
            <div className="h-[3px] bg-white/10 rounded-full overflow-hidden relative">
              <div className="h-full w-full bg-gradient-to-r from-[#8f00ff] to-[#ff00a8] rounded-full origin-left scale-x-0 animate-[loaderBarFill_2.5s_cubic-bezier(0.34,1.56,0.64,1)_forwards] shadow-[0_0_10px_rgba(143,0,255,0.4)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
