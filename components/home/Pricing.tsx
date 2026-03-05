'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Leaf, Crown, Zap, Check, X, ArrowRight, Vault } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    icon: Leaf,
    color: 'rgba(168,220,200,1)',
    colorMuted: 'rgba(168,220,200,0.18)',
    colorBorder: 'rgba(168,220,200,0.22)',
    features: [
      { text: '5 Daily API Calls', included: true },
      { text: 'Basic Tools Access', included: true },
      { text: 'Community Support', included: true },
      { text: 'Priority Queue', included: false },
      { text: 'Early Access', included: false },
    ],
    buttonText: 'Get Started',
    buttonHref: '/cheats',
    isFeatured: false,
  },
  {
    name: 'Monthly',
    price: '5',
    period: 'per month',
    icon: Crown,
    badge: 'MOST POPULAR',
    color: 'rgba(200,184,232,1)',
    colorMuted: 'rgba(200,184,232,0.18)',
    colorBorder: 'rgba(200,184,232,0.32)',
    features: [
      { text: 'Unlimited API Calls', included: true },
      { text: 'All Tools Access', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Early Access to New Tools', included: true },
      { text: 'Exclusive Discord Role', included: true },
    ],
    buttonText: 'Get Started',
    buttonHref: '/checkout?plan=monthly',
    isFeatured: true,
  },
  {
    name: 'Weekly',
    price: '2',
    period: 'per week',
    icon: Zap,
    color: 'rgba(232,216,160,1)',
    colorMuted: 'rgba(232,216,160,0.18)',
    colorBorder: 'rgba(232,216,160,0.22)',
    features: [
      { text: 'Unlimited API Calls', included: true },
      { text: 'All Tools Access', included: true },
      { text: 'Discord Support', included: true },
      { text: 'Early Access', included: false },
      { text: 'Exclusive Role', included: false },
    ],
    buttonText: 'Get Started',
    buttonHref: '/checkout?plan=weekly',
    isFeatured: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card',
        { y: 60, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.pricing-grid', start: 'top 85%', toggleActions: 'play none none reverse' } }
      );
      gsap.fromTo('.pricing-vault-btn',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.pricing-vault-btn', start: 'top 92%', toggleActions: 'play none none reverse' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="section-wrap relative">
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" />

      <div className="section-shell">
        <div className="text-center mb-20">
          <span className="section-chip mb-5">PRICING</span>
          <h2 className="section-title mb-5">
            API <span className="text-gradient">Access</span>
          </h2>
          <p className="section-subtitle max-w-[440px] mx-auto leading-[1.7]">
            Choose the plan that fits your workflow. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[980px] mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div key={i}
              className="pricing-card relative flex flex-col transition-all duration-300"
              style={{
                background: plan.isFeatured ? `rgba(200,184,232,0.06)` : 'rgba(255,253,245,0.03)',
                border: `1.5px solid ${plan.isFeatured ? plan.colorBorder : 'rgba(200,184,232,0.12)'}`,
                borderRadius: '4px',
                boxShadow: plan.isFeatured
                  ? `4px 4px 0 rgba(200,184,232,0.14), 8px 8px 0 rgba(200,184,232,0.07), 0 20px 60px rgba(0,0,0,0.35)`
                  : '3px 3px 0 rgba(200,184,232,0.05), 5px 5px 0 rgba(200,184,232,0.025)',
                padding: plan.isFeatured ? '36px 32px' : '32px 28px',
              }}
              onMouseEnter={e => {
                if (!plan.isFeatured) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = plan.colorBorder;
                  el.style.transform = 'translate(-2px,-2px)';
                  el.style.boxShadow = `4px 4px 0 ${plan.colorMuted}, 7px 7px 0 rgba(200,184,232,0.04)`;
                }
              }}
              onMouseLeave={e => {
                if (!plan.isFeatured) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(200,184,232,0.12)';
                  el.style.transform = '';
                  el.style.boxShadow = '3px 3px 0 rgba(200,184,232,0.05), 5px 5px 0 rgba(200,184,232,0.025)';
                }
              }}>

              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 font-jetbrains-mono text-[10px] font-bold tracking-[1.5px] whitespace-nowrap"
                  style={{
                    border: `1.5px solid ${plan.colorBorder}`,
                    borderRadius: '2px',
                    background: 'rgba(13,11,18,0.95)',
                    color: plan.color,
                    boxShadow: '2px 2px 0 rgba(200,184,232,0.10)',
                  }}>
                  <Zap className="inline w-2.5 h-2.5 mr-1" />{plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center"
                  style={{
                    border: `1.5px solid ${plan.colorBorder}`,
                    borderRadius: '3px',
                    background: plan.colorMuted,
                    color: plan.color,
                    boxShadow: '2px 2px 0 rgba(200,184,232,0.08)',
                  }}>
                  <plan.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                </div>
                <div>
                  <span className="font-jetbrains-mono text-[11px] font-bold uppercase tracking-[2px]"
                    style={{ color: 'rgba(240,237,228,0.38)' }}>{plan.name}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-2 flex items-start gap-0.5">
                <span className="font-inter text-[18px] font-semibold mt-2" style={{ color: 'rgba(240,237,228,0.45)' }}>$</span>
                <span className="font-outfit text-[56px] font-black leading-none tracking-[-2px] text-gradient">{plan.price}</span>
              </div>
              <span className="font-jetbrains-mono text-[11px] mb-7 block"
                style={{ color: 'rgba(240,237,228,0.32)' }}>{plan.period}</span>

              {/* Chalk divider */}
              <div className="mb-7 chalk-rule opacity-60" />

              {/* Feature list */}
              <ul className="flex-1 flex flex-col gap-2 mb-8">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 py-1.5 font-inter text-[13.5px] tracking-[0.1px]"
                    style={{ color: feat.included ? 'rgba(240,237,228,0.75)' : 'rgba(240,237,228,0.22)' }}>
                    {feat.included
                      ? <Check className="w-3.5 h-3.5 shrink-0" style={{ color: 'rgba(168,220,200,0.85)' }} />
                      : <X className="w-3.5 h-3.5 shrink-0" style={{ color: 'rgba(240,237,228,0.18)' }} />
                    }
                    {feat.text}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Link href={plan.buttonHref}
                className="group flex items-center justify-center gap-2.5 w-full py-3.5 font-outfit font-bold text-[14px] tracking-[0.5px] mt-auto transition-all duration-300"
                style={{
                  border: `1.5px solid ${plan.colorBorder}`,
                  borderRadius: '3px',
                  background: plan.isFeatured ? plan.colorMuted : 'transparent',
                  color: plan.isFeatured ? plan.color : 'rgba(240,237,228,0.65)',
                  boxShadow: plan.isFeatured ? `3px 3px 0 ${plan.colorMuted}, 5px 5px 0 rgba(200,184,232,0.04)` : '2px 2px 0 rgba(200,184,232,0.05)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = plan.colorMuted;
                  el.style.color = plan.color;
                  el.style.transform = 'translate(-1px,-1px)';
                  el.style.boxShadow = `4px 4px 0 ${plan.colorMuted}, 6px 6px 0 rgba(200,184,232,0.04)`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = plan.isFeatured ? plan.colorMuted : 'transparent';
                  el.style.color = plan.isFeatured ? plan.color : 'rgba(240,237,228,0.65)';
                  el.style.transform = '';
                  el.style.boxShadow = plan.isFeatured ? `3px 3px 0 ${plan.colorMuted}` : '2px 2px 0 rgba(200,184,232,0.05)';
                }}>
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Free Cheats Vault CTA */}
        <div className="pricing-vault-btn mt-10 max-w-[980px] mx-auto">
          <Link
            href="/cheats"
            className="group relative flex items-center justify-between gap-6 w-full px-8 py-5 transition-all duration-300 overflow-hidden"
            style={{
              border: '1.5px solid rgba(168,220,200,0.22)',
              borderRadius: '4px',
              background: 'rgba(168,220,200,0.04)',
              boxShadow: '3px 3px 0 rgba(168,220,200,0.08), 6px 6px 0 rgba(168,220,200,0.04)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(168,220,200,0.45)';
              el.style.background = 'rgba(168,220,200,0.08)';
              el.style.transform = 'translate(-2px,-2px)';
              el.style.boxShadow = '5px 5px 0 rgba(168,220,200,0.14), 9px 9px 0 rgba(168,220,200,0.06)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(168,220,200,0.22)';
              el.style.background = 'rgba(168,220,200,0.04)';
              el.style.transform = '';
              el.style.boxShadow = '3px 3px 0 rgba(168,220,200,0.08), 6px 6px 0 rgba(168,220,200,0.04)';
            }}
          >
            {/* Corner marks */}
            <span className="absolute top-2 left-2 w-4 h-4 pointer-events-none" style={{ borderTop: '1.5px solid rgba(168,220,200,0.35)', borderLeft: '1.5px solid rgba(168,220,200,0.35)' }} />
            <span className="absolute top-2 right-2 w-4 h-4 pointer-events-none" style={{ borderTop: '1.5px solid rgba(168,220,200,0.35)', borderRight: '1.5px solid rgba(168,220,200,0.35)' }} />
            <span className="absolute bottom-2 left-2 w-4 h-4 pointer-events-none" style={{ borderBottom: '1.5px solid rgba(168,220,200,0.35)', borderLeft: '1.5px solid rgba(168,220,200,0.35)' }} />
            <span className="absolute bottom-2 right-2 w-4 h-4 pointer-events-none" style={{ borderBottom: '1.5px solid rgba(168,220,200,0.35)', borderRight: '1.5px solid rgba(168,220,200,0.35)' }} />

            {/* Left — icon + text */}
            <div className="flex items-center gap-5">
              <div className="w-11 h-11 shrink-0 flex items-center justify-center"
                style={{
                  border: '1.5px solid rgba(168,220,200,0.28)',
                  borderRadius: '3px',
                  background: 'rgba(168,220,200,0.10)',
                  color: 'rgba(168,220,200,0.9)',
                  boxShadow: '2px 2px 0 rgba(168,220,200,0.10)',
                }}>
                <Vault className="w-5 h-5" />
              </div>
              <div>
                <p className="font-outfit font-bold text-[15px] tracking-[0.3px] mb-0.5" style={{ color: 'rgba(240,237,228,0.90)' }}>
                  Free Cheats Vault
                </p>
                <p className="font-jetbrains-mono text-[11px]" style={{ color: 'rgba(168,220,200,0.60)' }}>
                  Browse free tools — no account required
                </p>
              </div>
            </div>

            {/* Right — badge + arrow */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden sm:block font-jetbrains-mono text-[10px] font-bold tracking-[1.5px] px-3 py-1"
                style={{
                  border: '1px solid rgba(168,220,200,0.25)',
                  borderRadius: '2px',
                  background: 'rgba(168,220,200,0.07)',
                  color: 'rgba(168,220,200,0.75)',
                }}>
                FREE
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'rgba(168,220,200,0.75)' }} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
