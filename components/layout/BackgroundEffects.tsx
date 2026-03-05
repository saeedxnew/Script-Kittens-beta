'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener('resize', resize);

    // Chalk dust particle colors
    const colors = [
      '200,184,232', // lavender
      '168,200,232', // sky blue
      '168,220,200', // mint
      '232,196,168', // peach
      '232,216,160', // chalk yellow
      '240,237,228', // chalk white
    ];

    const count = Math.min(60, Math.floor(w / 20));
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      opacity: number; color: string;
      rx: number; ry: number; angle: number; rotV: number;
      type: 'dust' | 'stroke';
      len: number;
    }> = [];

    for (let i = 0; i < count; i++) {
      const isStroke = Math.random() > 0.65;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.22,
        opacity: Math.random() * 0.20 + 0.04,
        color: colors[Math.floor(Math.random() * colors.length)],
        rx: Math.random() * 3.5 + 0.8,
        ry: Math.random() * 1.8 + 0.4,
        angle: Math.random() * Math.PI,
        rotV: (Math.random() - 0.5) * 0.005,
        type: isStroke ? 'stroke' : 'dust',
        len: Math.random() * 14 + 4,
      });
    }

    let rafId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.rotV;

        if (p.x > w + 15) p.x = -15;
        else if (p.x < -15) p.x = w + 15;
        if (p.y > h + 15) p.y = -15;
        else if (p.y < -15) p.y = h + 15;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.type === 'stroke') {
          // Chalk stroke — elongated soft line
          const grad = ctx.createLinearGradient(-p.len / 2, 0, p.len / 2, 0);
          grad.addColorStop(0, `rgba(${p.color},0)`);
          grad.addColorStop(0.3, `rgba(${p.color},${p.opacity})`);
          grad.addColorStop(0.7, `rgba(${p.color},${p.opacity * 0.7})`);
          grad.addColorStop(1, `rgba(${p.color},0)`);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.len / 2, p.ry * 0.7, 0, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        } else {
          // Dust speck
          ctx.beginPath();
          ctx.ellipse(0, 0, p.rx, p.ry, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
          ctx.fill();
        }

        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
