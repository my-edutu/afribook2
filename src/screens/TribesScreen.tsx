/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  Vote, 
  Bell, 
  User, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Users, 
  Plus, 
  ChevronRight, 
  Heart, 
  ShoppingBag,
  Flame,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';

interface TribesScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function TribesScreen({ onNavigate }: TribesScreenProps) {
  const [showSearch, setShowSearch] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop < -20) setShowSearch(true);
  };

  const stats = [
    { label: 'Active votes', value: '12', color: 'text-primary' },
    { label: 'Upcoming', value: '5', color: 'text-secondary' },
    { label: 'Voting power', value: '450 vp', color: 'text-white', bg: 'bg-primary' },
    { label: 'Participation', value: '88%', color: 'text-slate-900' },
  ];

  const fundraisers = [
    {
      id: 1,
      title: 'Lagos tech scholars 2024',
      goal: '$25,000',
      raised: '$18,450',
      progress: 74,
      donors: 142,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALTpoLYDvoTRiMa3meOACeUhUxxojUNfqwR3QILA9_hRaFlF0dQ4aEnomiDgMG4hddpWm1mzOKP5XG2q1h1GuRFwFIOk77KEoZWtuNaDNQeZ65dGWTFznPCJrU0VWKHKIbF0pf1Oxr91Tl0PHixram-jZWClYSRio9xpXrYrSBT6MuATaOsx8Wptxi1EiAbe5PFKYVY0ip7Z-KuKMLICx3hHiXh50rW0817hCGUPDmCoA9AuktAeYQEWxb9L0CcW7p76VJMmTnbZI'
    }
  ];

  return (
    <div 
      className="flex flex-col bg-slate-50 min-h-screen overflow-y-auto no-scrollbar scroll-smooth"
      onScroll={handleScroll}
      ref={scrollRef}
    >
      {/* Search and header */}
      <div className="bg-white px-6 py-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight text-slate-900">Tribes hub</h1>
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="p-3 rounded-full bg-slate-50 text-slate-400 hover:text-primary transition-all active:scale-90"
          >
            <Search size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 py-4 bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search tribes, elections, or grants..." 
                autoFocus
                className="w-full h-12 bg-slate-50 rounded-[20px] pl-12 pr-4 text-sm font-medium outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pb-32 pt-6">
        {/* Stats overview */}
        <section className="px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 py-2 min-w-max">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className={`w-36 p-6 rounded-[32px] shadow-sm ${stat.bg || 'bg-white border border-slate-50'}`}
              >
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${stat.bg ? 'text-white/80' : 'text-slate-400'}`}>{stat.label}</p>
                <p className={`text-2xl font-black mt-2 tracking-tighter ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Create a tribe cta */}
        <section className="px-6 mt-12">
          <button 
            onClick={() => onNavigate('create-tribe')}
            className="w-full bg-white border-2 border-slate-100 rounded-[40px] p-10 flex items-center justify-between group transition-all active:scale-[0.98] shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-6 text-left">
              <div className="size-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-inner ring-8 ring-primary/5">
                <Users size={36} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 leading-tight">Create a tribe</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Launch your community treasury</p>
              </div>
            </div>
            <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shadow-sm">
              <Plus size={28} strokeWidth={3} />
            </div>
          </button>
        </section>

        {/* Tribe shop cta */}
        <section className="px-6 mt-10">
          <button 
            onClick={() => onNavigate('ari-market')}
            className="w-full bg-slate-900 rounded-[32px] p-8 flex items-center justify-between group overflow-hidden relative shadow-2xl active:scale-[0.98] transition-all"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6rxH8nemEjHoButoPj0u7G9bEP5Lx_ShHuerp2lhZYtHwRMafucYgCavPWT1f6vQqjLap-TzOxEKLDkgkDmztjtIhGCIz7fvHvNWzhOJGs8fY-RmbhVzFK_rufmOX9V0mAkHPy1r1_9pVHU16b3npoD6aFSjSFfschpBiQjI-eM_-OcTX8sDFMsvf_Wkc7cbiuS0AhR1lQUKk0z1vGG2eEGftONjvX8Pwa13JkhY1GHRL91cQbZSWetIYqchHdYfAxBlmtTtVK5o" 
                alt="Merch"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="flex items-center gap-5 text-left relative z-10">
              <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                <ShoppingBag size={32} />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">Arimarket shop</h3>
                <p className="text-xs text-white/50 font-bold uppercase tracking-tight leading-none mt-1">Exclusive hardware & merch</p>
              </div>
            </div>
            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white relative z-10">
              <ChevronRight size={24} />
            </div>
          </button>
        </section>

        {/* AI debate assistant banner */}
        <section className="px-6 mt-10">
          <div className="relative overflow-hidden bg-gradient-to-br from-secondary to-blue-700 rounded-[32px] p-8 text-white shadow-xl">
            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <h3 className="font-black text-2xl mb-2 flex items-center gap-3">
                  <Sparkles size={28} className="text-primary" />
                  Ai debate assistant
                </h3>
                <p className="text-sm text-blue-100 font-medium leading-relaxed opacity-90">Summarize 48+ candidate manifestos in seconds with ai insights.</p>
              </div>
              <button className="bg-white text-secondary w-fit px-8 py-4 rounded-2xl text-sm font-black transition-all hover:scale-105 active:scale-95 shadow-lg">Try assistant now</button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Active elections */}
        <section className="px-6 mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Active elections</h2>
            <button className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-xl">View all</button>
          </div>

          <div className="space-y-6">
            {/* Election card 1 */}
            <div className="bg-white rounded-[32px] shadow-sm overflow-hidden border border-slate-50">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black px-3 py-1.5 rounded-xl flex items-center gap-1.5 tracking-widest uppercase">
                    <ShieldCheck size={14} /> Blockchain verified
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                    <Clock size={14} /> 2d 14h left
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Youth council election 2026</h3>
                <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">Electing 5 regional representatives for the 2026 term. Review all 12 candidate manifestos before voting.</p>
                <div className="flex flex-col gap-3">
                  <button className="w-full py-4 px-6 rounded-2xl border-2 border-slate-50 bg-slate-50/30 text-sm font-black text-slate-600 hover:bg-slate-50 transition-colors">
                    Review candidates
                  </button>
                  <button 
                    onClick={() => onNavigate('tribe-voting')}
                    className="w-full py-4 px-6 rounded-2xl bg-primary text-white text-sm font-black shadow-xl shadow-primary/20 hover:brightness-110 transition-all active:scale-[0.98]"
                  >
                    Vote now
                  </button>
                </div>
              </div>
              <div className="bg-slate-50/50 px-8 py-4 flex justify-between items-center border-t border-slate-50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">8,421 votes cast</span>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="size-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="voter" />
                    </div>
                  ))}
                  <div className="size-8 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-[8px] font-black text-white shadow-sm">+12</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing fundraisers */}
        <section className="px-6 mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Ongoing fundraisers</h2>
            <button 
              onClick={() => onNavigate('fundraiser')}
              className="text-[10px] font-black text-slate-400 uppercase tracking-widest"
            >
              Manage
            </button>
          </div>
          
          <div className="space-y-4">
            {fundraisers.map(fund => (
              <div 
                key={fund.id}
                onClick={() => onNavigate('fundraiser')}
                className="bg-white rounded-[32px] shadow-sm border border-slate-50 overflow-hidden cursor-pointer active:scale-[0.98] transition-all group"
              >
                <div className="p-6 flex gap-6">
                  <div className="size-24 rounded-2xl overflow-hidden shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    <img src={fund.img} alt={fund.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 py-1">
                    <div className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-2">
                       Active fundraiser
                    </div>
                    <h3 className="font-black text-base text-slate-900 mb-3 line-clamp-1">{fund.title}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-lg font-black text-primary leading-none">{fund.raised}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Goal: {fund.goal}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${fund.progress}%` }}
                          className="h-full bg-primary"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating action button */}
      <div className="fixed bottom-10 right-8 z-30">
        <button 
          onClick={() => onNavigate('create-tribe')}
          className="size-20 bg-primary rounded-[28px] shadow-2xl shadow-primary/40 border-4 border-white flex items-center justify-center text-white active:scale-95 transition-all hover:scale-105 rotate-3 hover:rotate-0"
        >
          <Plus size={44} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
