'use client';

import React, { useEffect, useState, useRef } from 'react';

type Phase = 'loading' | 'ready' | 'launching' | 'done';

export default function Preloader() {
  const [phase, setPhase] = useState<Phase>('loading');
  const [pct, setPct] = useState(0);
  const [removed, setRemoved] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const launchButtonRef = useRef<HTMLButtonElement>(null);
  const launchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const LOAD_MS = 2000; // progress bar duration

  // Animate percentage counter
  useEffect(() => {
    const animate = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const p = Math.min(((now - startRef.current) / LOAD_MS) * 100, 100);
      setPct(Math.floor(p));
      if (p < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setPhase('ready');
      }
    };
    // Small delay so letters animate in first
    const t = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, 600);
    return () => {
      clearTimeout(t);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Focus the launch button when ready; make background inert while open
  useEffect(() => {
    if (phase === 'ready') {
      launchButtonRef.current?.focus();
    }
    // Make page content inaccessible while preloader is shown
    const appRoot = document.getElementById('app-main') ?? document.querySelector('main');
    if (appRoot) {
      if (phase !== 'done') {
        (appRoot as HTMLElement).setAttribute('inert', '');
        (appRoot as HTMLElement).setAttribute('aria-hidden', 'true');
      } else {
        (appRoot as HTMLElement).removeAttribute('inert');
        (appRoot as HTMLElement).removeAttribute('aria-hidden');
      }
    }
    // Always clean up on unmount so a non-happy-path unmount never leaves
    // the app root permanently inert.
    return () => {
      const root = document.getElementById('app-main') ?? document.querySelector('main');
      if (root) {
        (root as HTMLElement).removeAttribute('inert');
        (root as HTMLElement).removeAttribute('aria-hidden');
      }
    };
  }, [phase]);

  const handleLaunch = () => {
    setPhase('launching');
    // Clear any previous launch timeout before scheduling a new one.
    if (launchTimeoutRef.current !== null) {
      clearTimeout(launchTimeoutRef.current);
    }
    // After exit animation completes, restore background and unmount.
    launchTimeoutRef.current = setTimeout(() => {
      launchTimeoutRef.current = null;
      setPhase('done');
      setRemoved(true);
      const appRoot = document.getElementById('app-main') ?? document.querySelector('main');
      if (appRoot) {
        (appRoot as HTMLElement).removeAttribute('inert');
        (appRoot as HTMLElement).removeAttribute('aria-hidden');
      }
    }, 1200);
  };

  // Global unmount cleanup: cancel any in-flight timers / animation frames
  // and null out DOM refs so stale closures cannot touch detached elements.
  useEffect(() => {
    return () => {
      if (launchTimeoutRef.current !== null) {
        clearTimeout(launchTimeoutRef.current);
        launchTimeoutRef.current = null;
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      startRef.current = null;
    };
  }, []);

  if (removed) return null;

  const isLaunching = phase === 'launching';
  const isReady = phase === 'ready';

  const statusText =
    phase === 'loading' ? `Loading — ${pct}%` :
    phase === 'ready'   ? 'All systems ready. Press Launch to continue.' :
    'Launching...';

  return (
    <div
      className={`pl-root${isLaunching ? ' pl-root--exit' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Loading screen"
    >
      {/* Screen-reader live status */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {statusText}
      </div>

      {/* Animated grid overlay */}
      <div className="pl-grid" />

      {/* Corner bracket decorations */}
      <div className="pl-corner pl-corner--tl" />
      <div className="pl-corner pl-corner--tr" />
      <div className="pl-corner pl-corner--bl" />
      <div className="pl-corner pl-corner--br" />

      {/* Scan line sweep */}
      <div className="pl-scanline" />

      {/* Side vertical lines */}
      <div className="pl-vline pl-vline--l" />
      <div className="pl-vline pl-vline--r" />

      {/* Center content */}
      <div className="pl-body">

        {/* Cat GIF logo */}
        <div className="pl-logo-wrap">
          <div className="pl-logo-ring pl-logo-ring--outer" />
          <div className="pl-logo-ring pl-logo-ring--inner" />
          <div className="pl-logo-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.postimg.cc/sg838cbj/download-(7).gif"
              alt="Script Kittens"
              className="pl-logo-img"
            />
          </div>
        </div>

        {/* Brand name */}
        <div className="pl-title-wrap">
          {'SCRIPT KITTENS'.split('').map((char, i) => (
            <span
              key={i}
              className="pl-letter"
              style={{ animationDelay: `${i * 0.045}s`, width: char === ' ' ? '18px' : undefined }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="pl-tagline">Elite Free Fire Gaming Tools Studio</p>

        {/* Progress section */}
        <div className="pl-progress-wrap">
          <div className="pl-progress-track">
            <div className="pl-progress-fill" style={{ width: `${pct}%` }} />
            <div className="pl-progress-glow" style={{ left: `${pct}%` }} />
          </div>
          <div className="pl-progress-labels">
            <span className="pl-progress-status">
              {phase === 'loading' && 'INITIALIZING SYSTEMS...'}
              {phase === 'ready' && '✓ ALL SYSTEMS READY'}
              {phase === 'launching' && '⚡ LAUNCHING...'}
            </span>
            <span className="pl-progress-pct">{pct}%</span>
          </div>
        </div>

        {/* System checks */}
        <div className="pl-checks">
          {[
            { label: 'STEALTH ENGINE',    delay: 0.2  },
            { label: 'SECURITY LAYER',    delay: 0.5  },
            { label: 'API GATEWAY',       delay: 0.9  },
            { label: 'ANTI-DETECT CORE',  delay: 1.3  },
          ].map((item) => (
            <div key={item.label} className="pl-check-item" style={{ animationDelay: `${item.delay}s` }}>
              <span className="pl-check-dot" />
              <span className="pl-check-label">{item.label}</span>
              <span className="pl-check-ok">ONLINE</span>
            </div>
          ))}
        </div>

        {/* Launch button */}
        <button
          ref={launchButtonRef}
          className={`pl-launch-btn${isReady || isLaunching ? ' pl-launch-btn--visible' : ''}${isLaunching ? ' pl-launch-btn--firing' : ''}`}
          onClick={handleLaunch}
          disabled={!isReady}
          aria-label="Launch site"
        >
          <span className="pl-btn-bg" />
          <span className="pl-btn-shine" />
          <span className="pl-btn-text">
            {isLaunching ? '⚡ LAUNCHING' : '▶ LAUNCH SITE'}
          </span>
          <span className="pl-btn-border-top" />
          <span className="pl-btn-border-bottom" />
        </button>

      </div>

      {/* Exit shutter panels */}
      <div className="pl-shutter pl-shutter--top" />
      <div className="pl-shutter pl-shutter--bottom" />
    </div>
  );
}

