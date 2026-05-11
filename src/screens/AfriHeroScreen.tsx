/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  History, 
  Library, 
  ShieldCheck, 
  Search, 
  Sparkles,
  BookOpen,
  Award,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface AfriHeroScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function AfriHeroScreen({ onNavigate }: AfriHeroScreenProps) {
  const heroes = [
    { name: 'Nelson mandela', bio: 'Champion of peace and anti-apartheid.', category: 'Leadership', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbdbT_FInfR8uxmxmI7MuTPPRnz92srUYfLCZGODrfnnSNlvl0JnQ1jhuwLmFimYOa-8AYZ8s7HNG6QNjX2e3LGyfC1xr87hI2SDjE9VuH6sdwx82JQxkNsXHvYRcAYDbJywMj2mPea3OySYZmSBHz9yzaMH1j7hmlRarebGmB_qSp7WDqc43y5L4977lDvhMBZsTNImUU9FK_rEmTB1A5JmkzIieZqg7ZvCdF4auLVTferxfHmv-z30sH5JTZswOA3xZr7itAI' },
    { name: 'Wangari maathai', bio: 'Inaugural african female nobel peace prize laureate.', category: 'Environment', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa7kMSnak5Z7TvZWOEKQAbm6CbO3ODtMNbcDpHbSCmI-nVtbjbopcryUHPV4zJOWRW12Wc01rnkTMgOB25pW4pHliiEPM5pHy1Zy5deuxJaSZn2VsSfau3kmv3bxnuf2_PYfOhZheJVH22vwTRX9EHqC7emYnxTvXDQhs_eHxoZf7XEUmy9GCIHLiRpc2QWxuDuVTuG74Lonkv6HsdM00RKE-Rmn3S1RMLYmWccp0ZLuCEkgxUdgnwkzkB7AdX88R_MxTqZHpt9qg' },
    { name: 'Fela kuti', bio: 'Pioneer of afrobeat and social activist.', category: 'Culture', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPVLtZ9ebNSCsefwON9tx0ts5LmldUZe4kD1u4zS9PMxbjJ4O5uglg1WHhHKYApsOYZB50QKrSldgC1RLaTjErqoHZdtO-AK1szrOensz0B73S8NOEVXz0TDckAP_e-3WdzJ6VzCWegeyM7_k8nqdGZFHduhqVRZVxlGUD4Ld-ka0zo22oe0SJ8Y5RuwrQlyCRH2J3gUfoYX_ErsNZiDgJGpWAlaYduA3uiOQwJ-fqwYNCxJ-k8gFVVW7tCoC0I4lbXhlrjwzMYtI' },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="px-6 pt-16 pb-12 bg-white border-b border-slate-100 rounded-b-[4rem] shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6 text-amber-600">
            <div className="p-3 bg-amber-50 rounded-2xl">
              <Library size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">Archive center</span>
              <h1 className="text-3xl font-black tracking-tighter text-slate-900 leading-none">Afrihero archive</h1>
            </div>
          </div>
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
            Africa’s digital legacy. Explore hero profiles and the documentary timeline of our shared history.
          </p>
        </div>
        
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 size-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      </div>

      <main className="flex-1 px-6 pt-12 pb-32">
        {/* Search & AI Tools */}
        <div className="mb-12">
          <div className="relative mb-4 group">
            <div className="absolute inset-y-0 left-5 flex items-center text-slate-400 group-focus-within:text-amber-500 transition-colors">
              <Search size={22} />
            </div>
            <input 
              type="text" 
              placeholder="Search heroes or historical events..." 
              className="w-full h-16 pl-14 pr-6 bg-white border border-slate-100 rounded-[24px] shadow-sm font-bold text-slate-900 focus:ring-4 focus:ring-amber-500/5 outline-none placeholder:text-slate-300"
            />
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest px-4">
            <Sparkles size={16} className="text-amber-500" />
            AI Moderation active: Ensuring accuracy & citations
          </div>
        </div>

        {/* Featured Heroes */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <h2 className="text-2xl font-black tracking-tight leading-none text-slate-900">Hero profiles</h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Documenting legends</p>
            </div>
            <button className="text-amber-600 text-[10px] font-black uppercase tracking-widest bg-amber-50 px-4 py-2 rounded-xl border border-amber-100 shadow-sm active:scale-95 transition-all">Contribute</button>
          </div>
          
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 px-2">
            {heroes.map((hero, i) => (
              <div key={i} className="min-w-[280px] bg-white rounded-[40px] border border-slate-50 p-2 shadow-sm overflow-hidden group cursor-pointer active:scale-[0.98] transition-all hover:shadow-xl">
                <div className="h-48 rounded-[34px] overflow-hidden mb-5 shadow-inner">
                  <img src={hero.img} alt={hero.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="px-5 pb-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Award size={16} className="text-amber-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{hero.category}</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 tracking-tight mb-3 lowercase first-letter:uppercase">{hero.name}</h4>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed line-clamp-2">{hero.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documentary Timeline */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <h2 className="text-2xl font-black tracking-tight leading-none text-slate-900">Archive</h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Historical milestones</p>
            </div>
            <button className="text-indigo-600 text-[10px] font-black uppercase tracking-widest">Filter era</button>
          </div>
          
          <div className="space-y-5">
            {[
              { year: '2024', event: 'African union tech summit', sub: 'Ikeja digital hub launch', color: 'border-indigo-500 bg-white' },
              { year: '2020', event: 'Continental trade agreement', sub: 'AFCFTA implementation kick-off', color: 'border-emerald-500 bg-white' },
              { year: '1963', event: 'African unity foundation', sub: 'OAU establishment in addis ababa', color: 'border-amber-500 bg-white' },
            ].map((entry, i) => (
              <div key={i} className={`p-6 rounded-[32px] border-l-8 border border-slate-50 ${entry.color} flex justify-between items-center group cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-[0.99]`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={14} className="text-slate-300 font-black" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{entry.year}</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 tracking-tight lowercase first-letter:uppercase">{entry.event}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{entry.sub}</p>
                </div>
                <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                  <ChevronRight size={22} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Knowledge Proof */}
        <section className="mb-12 p-10 rounded-[48px] bg-amber-500 text-white relative overflow-hidden shadow-2xl shadow-amber-500/20">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-amber-100">
              <ShieldCheck size={28} />
              <h3 className="font-black uppercase tracking-[0.2em] text-[10px]">Reputation reward</h3>
            </div>
            <h4 className="text-3xl font-black mb-3">Verified author</h4>
            <p className="text-amber-50 text-sm font-medium opacity-90 mb-8 max-w-[80%] leading-relaxed">Earn reputation by contributing verified data to hero profiles and archives.</p>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all">Start contributing</button>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-10 transform scale-[1.5] text-white">
            <BookOpen size={180} />
          </div>
        </section>
      </main>
    </div>
  );
}
