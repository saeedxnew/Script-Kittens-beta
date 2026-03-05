'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  active: boolean;
}

export default function CustomCursor({ active }: Props) {
 const dotRef    = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const trailRef  = useRef<HTMLDivElement>(null);
  const pos       = useRef({ x: -200, y: -200 });
  const ring      = useRef({ x: -200, y: -200 });
  const raf       = useRef<number>(0);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [trailPos, setTrailPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (!active) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setTrailPos({ x: e.clientX, y: e.clientY });

      // Dot & trail snap instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      }

      // Detect hoverable elements
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isHover = !!(el?.closest('a, button, [role="button"], input, textarea, select, label'));
      setHovering(isHover);
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    // Smooth ring follow via rAF
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf.current);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      {/* Outer glow ring — lags behind */}
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          width:  hovering ? '52px' : clicking ? '28px' : '38px',
          height: hovering ? '52px' : clicking ? '28px' : '38px',
          opacity: clicking ? 0.5 : 1,
          borderColor: hovering ? 'rgba(200,184,232,0.9)' : 'rgba(168,220,200,0.7)',
          boxShadow: hovering
            ? '0 0 14px 3px rgba(200,184,232,0.35), inset 0 0 8px rgba(200,184,232,0.15)'
            : '0 0 10px 2px rgba(168,220,200,0.25), inset 0 0 6px rgba(168,220,200,0.10)',
        }}
      />

      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          width:  hovering ? '6px' : clicking ? '3px' : '5px',
          height: hovering ? '6px' : clicking ? '3px' : '5px',
          background: hovering ? 'rgba(200,184,232,1)' : 'rgba(168,220,200,1)',
          boxShadow: hovering
            ? '0 0 10px 3px rgba(200,184,232,0.8)'
            : '0 0 8px 2px rgba(168,220,200,0.7)',
        }}
      />

      {/* Click ripple trail */}
      <div
        ref={trailRef}
        className="custom-cursor-trail"
        style={{
          opacity: clicking ? 0.55 : 0,
          transform: `translate(${trailPos.x}px, ${trailPos.y}px) translate(-50%,-50%)`,
        }}
      />
    </>
  );
}
