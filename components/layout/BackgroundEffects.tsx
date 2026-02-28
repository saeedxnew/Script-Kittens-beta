'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resizeCanvas = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: any[] = [];
    const count = Math.min(40, Math.floor(w / 30));
    
    const colors = ['143,0,255', '255,0,168', '0,240,255'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 3 + 0.5,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        opacity: Math.random() * 0.5 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationFrameId: number;

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x > w || p.x < 0) p.vx *= -1;
        if (p.y > h || p.y < 0) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 130) {
            ctx.strokeStyle = `rgba(143,0,255,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };
    
    loop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-[-100px] z-[-1] overflow-visible pointer-events-none">
        <div className="absolute inset-[-80%] bg-[radial-gradient(ellipse_at_25%_15%,rgba(143,0,255,0.12)_0%,transparent_45%),radial-gradient(ellipse_at_75%_80%,rgba(0,240,255,0.08)_0%,transparent_45%),radial-gradient(ellipse_at_50%_50%,rgba(255,0,168,0.04)_0%,transparent_50%)] animate-[bg-move_25s_ease-in-out_infinite_alternate]" />
        <div className="absolute inset-[-150px] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-30" />
      </div>
      
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-[1] opacity-40"
      />
      
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-visible transition-opacity duration-300">
        <div className="absolute w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(143,0,255,0.35)_0%,rgba(143,0,255,0.1)_40%,transparent_70%)] rounded-full blur-[40px] top-[10%] left-[10%] animate-[orbFloat_10s_ease-in-out_infinite]" />
        <div className="absolute w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(0,240,255,0.3)_0%,rgba(0,240,255,0.08)_40%,transparent_70%)] rounded-full blur-[40px] top-[60%] right-[10%] animate-[orbFloat_10s_ease-in-out_infinite] [animation-delay:2s]" />
        <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,0,168,0.25)_0%,rgba(255,0,168,0.06)_40%,transparent_70%)] rounded-full blur-[40px] bottom-[10%] left-[30%] animate-[orbFloat_10s_ease-in-out_infinite] [animation-delay:4s]" />
      </div>
    </>
  );
}
