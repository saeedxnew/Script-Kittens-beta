'use client';

import { useEffect, useRef } from 'react';

interface Props {
  active: boolean;
}

export default function CustomCursor({ active }: Props) {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    const pos  = { x: -200, y: -200 };
    const ring = { x: -200, y: -200 };
    let raf = 0;
    let isHovering = false;
    let isClicking = false;

    // ── Pure DOM setters (no React state) ────────────────────────────────
    const applyRingStyle = () => {
      const el = ringRef.current;
      if (!el) return;
      const size = isClicking ? '28px' : isHovering ? '52px' : '38px';
      el.style.width  = size;
      el.style.height = size;
      el.style.opacity = isClicking ? '0.5' : '1';
      el.style.borderColor = isHovering ? 'rgba(167,139,250,0.9)' : 'rgba(52,211,153,0.7)';
      el.style.boxShadow   = isHovering
        ? '0 0 14px 3px rgba(124,58,237,0.40), inset 0 0 8px rgba(167,139,250,0.18)'
        : '0 0 10px 2px rgba(52,211,153,0.28), inset 0 0 6px rgba(52,211,153,0.12)';
    };

    const applyDotStyle = () => {
      const el = dotRef.current;
      if (!el) return;
      const size = isClicking ? '3px' : isHovering ? '6px' : '5px';
      el.style.width  = size;
      el.style.height = size;
      el.style.background = isHovering ? 'rgba(167,139,250,1)' : 'rgba(52,211,153,1)';
      el.style.boxShadow  = isHovering
        ? '0 0 10px 3px rgba(124,58,237,0.85)'
        : '0 0 8px 2px rgba(52,211,153,0.75)';
    };

    const applyTrailStyle = () => {
      const el = trailRef.current;
      if (!el) return;
      el.style.opacity = isClicking ? '0.55' : '0';
    };

    // ── Mouse move — snap dot + trail, detect hover ───────────────────────
    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      // Dot snaps instantly (GPU transform only)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
      }

      // Hover detection — only update style if state changed
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const nowHovering = !!(el?.closest('a,button,[role="button"],input,textarea,select,label,[tabindex]:not([tabindex="-1"])'));
      if (nowHovering !== isHovering) {
        isHovering = nowHovering;
        applyRingStyle();
        applyDotStyle();
      }
    };

    const onDown = () => {
      isClicking = true;
      applyRingStyle();
      applyDotStyle();
      applyTrailStyle();
    };
    const onUp = () => {
      isClicking = false;
      applyRingStyle();
      applyDotStyle();
      applyTrailStyle();
    };

    // ── Ring follows with lerp via rAF ─────────────────────────────────────
    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.22;  // 0.22 = snappy but still smooth
      ring.y += (pos.y - ring.y) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px,${ring.y}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Init styles with off-screen position so there's no flash at (0,0)
    if (dotRef.current)   dotRef.current.style.transform   = 'translate(-9999px,-9999px) translate(-50%,-50%)';
    if (trailRef.current) trailRef.current.style.transform = 'translate(-9999px,-9999px) translate(-50%,-50%)';
    if (ringRef.current)  ringRef.current.style.transform  = 'translate(-9999px,-9999px) translate(-50%,-50%)';
    applyRingStyle();
    applyDotStyle();
    applyTrailStyle();

    // Reset clicking state when the pointer is cancelled (e.g. touch stolen by
    // scroll) or the window loses focus, so the cursor never stays "pressed".
    const onCancel = () => {
      if (!isClicking) return;
      isClicking = false;
      applyRingStyle();
      applyDotStyle();
      applyTrailStyle();
    };

    window.addEventListener('mousemove',    onMove,   { passive: true });
    window.addEventListener('mousedown',    onDown);
    window.addEventListener('mouseup',      onUp);
    window.addEventListener('pointercancel', onCancel);
    window.addEventListener('blur',          onCancel);

    return () => {
      window.removeEventListener('mousemove',    onMove);
      window.removeEventListener('mousedown',    onDown);
      window.removeEventListener('mouseup',      onUp);
      window.removeEventListener('pointercancel', onCancel);
      window.removeEventListener('blur',          onCancel);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      {/* Outer glow ring — lerp-follows cursor */}
      <div ref={ringRef} className="custom-cursor-ring" />

      {/* Inner dot — snaps instantly */}
      <div ref={dotRef} className="custom-cursor-dot" />

      {/* Click ripple */}
      <div ref={trailRef} className="custom-cursor-trail" />
    </>
  );
}
