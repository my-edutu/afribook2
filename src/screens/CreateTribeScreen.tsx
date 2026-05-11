/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Palette, 
  Wallet as WalletIcon, 
  Rocket, 
  ChevronRight,
  Info
} from 'lucide-react';
import { Screen } from '../types';

interface CreateTribeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function CreateTribeScreen({ onNavigate }: CreateTribeScreenProps) {
  return (
    <div className="flex flex-col bg-background-light min-h-screen pb-32">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md px-4 py-3 border-b border-primary/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('tribes')}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent tracking-tight">Create Tribe</h1>
        </div>
      </header>

      <main className="px-4 py-8">
        {/* Step Indicator */}
        <nav className="mb-12 relative">
          <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
          <div className="flex justify-between items-center px-2">
            <div className="flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">1</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Identity</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold">2</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Asset Art</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold">3</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Treasury</span>
            </div>
          </div>
        </nav>

        <div className="space-y-8">
          {/* Main Form Section */}
          <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Primary Identity</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Establish a digital community built on shared heritage and collective prosperity.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Tribe Name</label>
                <input 
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-slate-400 font-medium" 
                  placeholder="e.g. Lagos Tech Collective" 
                  type="text"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Category</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/40 font-medium appearance-none">
                    <option>Art & Culture</option>
                    <option>Tech & Innovation</option>
                    <option>Finance</option>
                    <option>Education</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Privacy</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/40 font-medium appearance-none">
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Description</label>
                <textarea 
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-slate-400 font-medium" 
                  placeholder="What is the mission of your tribe?" 
                  rows={4}
                />
              </div>
            </form>
          </section>

          {/* AI Art Generator Module */}
          <section className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100 relative overflow-hidden group shadow-sm">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-emerald-600" size={32} fill="currentColor" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Generate Membership Art</h3>
              </div>
              <p className="text-slate-600 text-sm mb-6 max-w-md font-medium">Use our cultural AI to create unique NFT membership badges based on your tribe's name and category.</p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-lg shadow-emerald-200 hover:scale-105 transition-all active:scale-95 group">
                <Palette size={20} className="group-hover:rotate-12 transition-transform" />
                Generate AI Art
              </button>
            </div>
            <div className="absolute -right-6 -bottom-6 size-48 opacity-10 rotate-12 pointer-events-none">
               <svg className="w-full h-full fill-emerald-600" viewBox="0 0 100 100">
                <path d="M50 0 L100 50 L50 100 L0 50 Z"></path>
              </svg>
            </div>
          </section>

          {/* NFT Preview Card */}
          <section className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/50">
            <div className="aspect-square relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD6sE_VM5M_CUg38I30sJSzMfCufpjlpE3QPmzjWsUejCyrr8QTr2i36K1KpwN8bxJHb3SlivW0zRqi5IXRsnAR_pNhDU8vqwhreEV_1T9OT5O5G1j9GFCuFUKM-AuwEJTB0O6q8Gon7QV99E_Ax35k9YhdxGmovf0gTmZZFhhIBWOkdyW3_s6Nt9lCXpngZrfMRl_FRHdCFOzLld2T1P731ffWQ0C-z3EQPAocG0TVZa1lJlHGKLtKkV-gVD_3CMr83EPWPLS540" 
                alt="Membership Art"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] mb-1">Membership Badge</span>
                <h4 className="text-white font-black text-2xl">Lagos Tech Genesis</h4>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center bg-slate-50 border-t border-slate-100">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="size-8 rounded-full border-2 border-white bg-slate-300" />
                ))}
              </div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-tighter">0 / 500 Minted</span>
            </div>
          </section>

          {/* Treasury Setup */}
          <section className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-xs font-black text-slate-900 mb-6 uppercase tracking-widest flex items-center gap-2">
              <WalletIcon className="text-secondary" size={18} />
              Tribe Treasury Setup
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-2xl flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Membership Fee</span>
                <span className="font-black text-primary">0.05 ETH</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Voting Power</span>
                <span className="font-black text-slate-900">1 Member = 1 Vote</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500">Quorum</span>
                <span className="font-black text-slate-900">25%</span>
              </div>
            </div>
            <button className="w-full mt-6 text-secondary text-xs font-bold hover:underline uppercase tracking-tight">Edit Governance Rules</button>
          </section>
        </div>
      </main>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 left-0 w-full max-w-md mx-auto left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border-t border-slate-100 px-6 py-6 z-40 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. Gas Fee</span>
            <span className="text-sm font-black text-slate-900">~0.0024 ETH</span>
          </div>
          <button className="flex-1 h-16 bg-gradient-to-br from-primary to-accent text-white font-black rounded-full shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all group">
            Launch Tribe
            <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
