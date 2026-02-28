'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Leaf, Crown, Zap, Check, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    icon: Leaf,
    features: [
      { text: '5 Daily API Calls', included: true },
      { text: 'Basic Tools Access', included: true },
      { text: 'Community Support', included: true },
      { text: 'Priority Queue', included: false },
      { text: 'Early Access', included: false }
    ],
    buttonText: 'Get Started',
    buttonHref: '/cheats',
    isFeatured: false
  },
  {
    name: 'Monthly',
    price: '5',
    period: 'per month',
    icon: Crown,
    badge: 'MOST POPULAR',
    features: [
      { text: 'Unlimited API Calls', included: true },
      { text: 'All Tools Access', included: true },
      { text: 'Priority Support', included: true },
      { text: 'Early Access to New Tools', included: true },
      { text: 'Exclusive Discord Role', included: true }
    ],
    buttonText: 'Get Started',
    buttonHref: '/checkout?plan=monthly',
    isFeatured: true
  },
  {
    name: 'Weekly',
    price: '2',
    period: 'per week',
    icon: Zap,
    features: [
      { text: 'Unlimited API Calls', included: true },
      { text: 'All Tools Access', included: true },
      { text: 'Discord Support', included: true },
      { text: 'Early Access', included: false },
      { text: 'Exclusive Role', included: false }
    ],
    buttonText: 'Get Started',
    buttonHref: '/checkout?plan=weekly',
    isFeatured: false
  }
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card',
        { y: 70, opacity: 0, scale: 0.93 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-[140px] relative">
      <div className="max-w-[1020px] mx-auto px-10">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-[11px] font-bold tracking-[3px] text-purple-500 mb-5">
            PRICING
          </span>
          <h2 className="font-outfit text-[clamp(36px,6vw,56px)] font-extrabold mb-5">
            API <span className="text-gradient">Access</span>
          </h2>
          <p className="text-[15px] text-white/70 max-w-[440px] mx-auto leading-[1.7]">
            Choose the plan that fits your workflow. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card relative p-10 bg-[#0c0a1699] backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-500 flex flex-col hover:-translate-y-2 hover:border-purple-500/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(139,92,246,0.06)] ${
              plan.isFeatured 
                ? 'bg-gradient-to-b from-purple-500/10 via-[#0c0a16b3] to-[#0c0a16a6] border-purple-500/25 z-10 shadow-[0_12px_50px_rgba(0,0,0,0.25),0_0_50px_rgba(139,92,246,0.08)]' 
                : ''
            }`}>
              
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full font-inter text-[11px] font-bold tracking-[1px] text-white whitespace-nowrap flex items-center gap-1.5 shadow-[0_4px_20px_rgba(168,85,247,0.35)]">
                  <Zap className="w-3 h-3" /> {plan.badge}
                </div>
              )}

              <div className="text-center mb-0">
                <div className={`w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-purple-500/10 border border-purple-500/15 rounded-xl text-lg text-white/50 transition-all duration-400 ${plan.isFeatured ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300' : ''}`}>
                  <plan.icon className="w-5 h-5" />
                </div>
                <span className="font-inter text-[14px] font-semibold text-white/70 mb-3 block uppercase tracking-[1.5px]">{plan.name}</span>
                <div className="flex items-start justify-center gap-0.5">
                  <span className="font-inter text-[22px] font-semibold text-white/50 mt-2">$</span>
                  <span className={`font-outfit text-[60px] font-extrabold leading-none tracking-[-2px] ${plan.isFeatured ? 'text-gradient' : 'text-white'}`}>{plan.price}</span>
                </div>
                <span className="block font-inter text-[13px] text-white/30 mt-1.5">{plan.period}</span>
              </div>

              <div className={`h-[1px] my-7 ${plan.isFeatured ? 'bg-gradient-to-r from-transparent via-purple-500/15 to-transparent' : 'bg-gradient-to-r from-transparent via-white/5 to-transparent'}`} />

              <ul className="mb-8 flex-1 flex flex-col gap-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center gap-3 py-2 font-inter text-[14px] tracking-[0.1px] ${feature.included ? 'text-white/70' : 'text-white/25'}`}>
                    {feature.included ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    ) : (
                      <X className="w-3.5 h-3.5 text-white/15 shrink-0" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              <Link href={plan.buttonHref} className={`flex items-center justify-center gap-2.5 w-full p-4 rounded-xl font-inter text-[14px] font-semibold text-center transition-all duration-400 tracking-[0.3px] mt-auto group ${
                plan.isFeatured
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-[0_4px_20px_rgba(168,85,247,0.25)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(139,92,246,0.12)]'
              }`}>
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
