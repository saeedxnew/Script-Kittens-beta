'use client';

import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldAlert, Lock, ShieldCheck, Minus, Plus, X } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import gsap from 'gsap';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    gsap.fromTo('.reveal', 
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <>
      <div className="min-h-screen pt-32 px-5 md:px-10 pb-20 max-w-[1260px] mx-auto relative z-10">
        
        {/* Alert */}
        <div className="surface-card-soft border-l-4 border-l-red-500 rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-10 reveal">
          <ShieldAlert className="w-6 h-6 text-red-500 shrink-0" />
          <div className="flex-1">
            <h3 className="text-base font-bold text-white mb-1">Payment Disabled</h3>
            <p className="text-sm text-white/60">Purchases are currently disabled on the website. Please join our Discord to open a ticket.</p>
          </div>
          <a href="https://discord.gg/AqkdsPMU7M" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-semibold text-[13px] transition-colors whitespace-nowrap">
            Join Discord
          </a>
        </div>

        {/* Steps */}
        <div className="flex gap-8 mb-8 border-b border-white/10 pb-4 reveal">
          <div className="text-[13px] font-semibold text-white flex items-center gap-2 pb-4 -mb-[17px] border-b-2 border-white">
            <span className="bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded">01</span> Review
          </div>
          <div className="text-[13px] font-semibold text-white/40 flex items-center gap-2 pb-4 -mb-[17px] border-b-2 border-transparent">
            <span className="bg-[#222] text-white/50 text-[10px] font-bold px-1.5 py-0.5 rounded">02</span> Details
          </div>
          <div className="text-[13px] font-semibold text-white/40 flex items-center gap-2 pb-4 -mb-[17px] border-b-2 border-transparent">
            <span className="bg-[#222] text-white/50 text-[10px] font-bold px-1.5 py-0.5 rounded">03</span> Payment
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start reveal">
          
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <h2 className="font-outfit text-2xl font-bold text-white mb-2">Cart Review</h2>
              <p className="text-white/60">Verify your selected products.</p>
            </div>

            <div className="border border-white/10 rounded-xl overflow-hidden bg-[#0A0A0A]">
              {/* Item 1 */}
              <div className="grid grid-cols-[64px_1fr_auto_auto_auto] gap-6 items-center p-6 border-b border-white/10">
                <img src="https://i.postimg.cc/sg838cbj/download-(7).gif" alt="Product" className="w-16 h-16 rounded object-cover bg-[#222]" />
                <div>
                  <h4 className="text-[15px] font-semibold text-white mb-1">Premium Kitty Panel</h4>
                  <span className="text-[11px] uppercase text-white/40 font-bold tracking-wider">Lifetime</span>
                </div>
                <div className="flex items-center bg-[#111] border border-white/10 rounded">
                  <button className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#222] transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="w-3 h-3" />
                  </button>
                  <input type="text" value={quantity} readOnly className="w-10 bg-transparent text-center text-white text-sm outline-none" />
                  <button className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#222] transition-colors" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <span className="font-bold text-[15px] text-white">${(49.99 * quantity).toFixed(2)}</span>
                <button className="text-white/40 hover:text-red-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Item 2 */}
              {plan === 'monthly' && (
                <div className="grid grid-cols-[64px_1fr_auto_auto_auto] gap-6 items-center p-6">
                  <img src="https://i.postimg.cc/RVgS19R6/jentop-lisabottom-fanfiction-Fanfiction-amreading-books-wattpad.gif" alt="Product" className="w-16 h-16 rounded object-cover bg-[#222]" />
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">API Access Pro</h4>
                    <span className="text-[11px] uppercase text-white/40 font-bold tracking-wider">Monthly</span>
                  </div>
                  <div className="flex items-center bg-[#111] border border-white/10 rounded">
                    <button className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#222] transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <input type="text" value="1" readOnly className="w-10 bg-transparent text-center text-white text-sm outline-none" />
                    <button className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#222] transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="font-bold text-[15px] text-white">$29.99</span>
                  <button className="text-white/40 hover:text-red-500 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <button className="btn-primary w-full mt-8">
              Continue to Details
            </button>
          </div>

          {/* Right Column */}
          <div className="surface-card-soft p-8 sticky top-[100px]">
            <div className="mb-6 pb-4 border-b border-white/10">
              <h3 className="font-outfit text-base font-bold text-white">Order Summary</h3>
            </div>
            
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between text-white/60 text-sm">
                <span>Subtotal</span>
                <span>${((49.99 * quantity) + (plan === 'monthly' ? 29.99 : 0)).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-emerald-500 text-sm">
                <span>Discount</span>
                <span>-$0.00</span>
              </div>
              <div className="flex justify-between text-white/60 text-sm">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-white/10 font-bold text-lg text-white mb-8">
              <span>Total</span>
              <span>${((49.99 * quantity) + (plan === 'monthly' ? 29.99 : 0)).toFixed(2)}</span>
            </div>

            <div className="flex gap-2 mb-8">
              <input type="text" placeholder="Promo Code" className="flex-1 bg-[#111] border border-white/10 h-10 px-3 rounded text-white text-sm outline-none focus:border-white/30 transition-colors" />
              <button className="px-4 bg-[#222] text-white rounded text-[13px] font-medium hover:bg-[#333] transition-colors">Apply</button>
            </div>

            <div className="flex flex-col gap-2 text-xs text-white/40">
              <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> SSL Encrypted</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> Secure Payment</span>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <CheckoutContent />
    </Suspense>
  );
}
