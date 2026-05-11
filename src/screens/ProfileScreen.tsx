/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Settings, Share2, Edit3, Trophy, Users, ShieldCheck, MapPin, Grid, List, ChevronRight, Wallet, Shield, Globe, Award, ShoppingBag } from 'lucide-react';
import { Screen } from '../types';

interface ProfileScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const quickAccess = [
    { id: 'afrirecord', icon: Award, label: 'My records', color: 'bg-amber-50 text-amber-600' },
    { id: 'tribes', icon: Users, label: 'My tribes', color: 'bg-violet-50 text-violet-600' },
    { id: 'afripay', icon: Wallet, label: 'Afripay', color: 'bg-emerald-50 text-emerald-600' },
    { id: 'ari-market', icon: ShoppingBag, label: 'Marketplace', color: 'bg-blue-50 text-blue-600' },
    { id: 'security', icon: Shield, label: 'Security', color: 'bg-slate-50 text-slate-600' },
    { id: 'heritage', icon: Globe, label: 'Heritage', color: 'bg-orange-50 text-orange-600' },
  ];

  return (
    <div className="flex flex-col pb-32">
      {/* Profile Header */}
      <section className="relative px-6 pt-12 pb-8 bg-white border-b border-slate-50">
        <div className="flex justify-between items-start mb-8">
          <div className="relative group">
            <div className="size-28 rounded-[40px] border-4 border-primary/10 p-1.5 shadow-xl transition-all group-hover:scale-105">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYcG24Dieu84a3gmMn85e5BjbaF9vnbx5O6VKycbLNsSuEZtwI-9vn7p9Eo9EX8ATUs7wdAXSllcaK28WG5KMp08jOA2SagxmnxsI2wl95LLSiy0a6fr4Xo3CzifS7z86lE2Myaiduu0Xpvdc6vh2SmhXxHxUfDNBy6nOQltZOFtRDohhkW0UHE1XGHMHtwjQ-IJOYYialORWdwChDCX7dJTOp0OTYsdio87oL_Dp-yodBVOfHQunDDCI_7adeRosZVWbhfMaFev4" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-[32px]"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-2xl border-4 border-white shadow-lg">
              <ShieldCheck size={16} />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-all">
              <Share2 size={20} />
            </button>
            <button 
              onClick={() => onNavigate('settings')}
              className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-primary transition-all"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>

        <button 
          onClick={() => {}} // User can click to view full profile details if needed
          className="w-full flex items-center justify-between group transition-all"
        >
          <div className="text-left">
            <h1 className="text-3xl font-black tracking-tighter text-slate-900 mb-1">Kofi mensah</h1>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-tight flex items-center gap-1.5">
              @kofimensah • <MapPin size={12} /> Accra, ghana
            </p>
          </div>
          <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
            <ChevronRight size={24} />
          </div>
        </button>

        <p className="mt-8 text-sm text-slate-500 font-medium leading-relaxed max-w-xs ring-1 ring-slate-50 p-4 rounded-2xl">
          Digital artist & cultural archivist. Passionate about documenting west african heritage through modern technology.
        </p>
      </section>

      {/* Quick Access Grid */}
      <section className="px-6 py-10">
        <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 ml-1">Quick access</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickAccess.map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id as Screen)}
              className="flex flex-col items-start p-6 bg-white rounded-[32px] border border-slate-50 shadow-sm hover:shadow-md transition-all active:scale-[0.98] group"
            >
              <div className={`size-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon size={22} />
              </div>
              <span className="text-sm font-black text-slate-900 tracking-tight">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Achievement Spotlight */}
      <section className="px-6">
        <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl shadow-slate-900/30">
          <div className="relative z-10">
            <div className="size-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Trophy size={24} className="text-amber-400" />
            </div>
            <h3 className="text-xl font-black tracking-tight mb-2">Verified achievements</h3>
            <p className="text-white/60 text-xs font-medium leading-relaxed mb-6">You have 12 verified national records. Your expertise in Adumu dance is unmatched.</p>
            <button className="bg-primary text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-all">View all</button>
          </div>
          <div className="absolute -right-12 -bottom-12 text-white/5 transform rotate-12">
            <Award size={200} />
          </div>
        </div>
      </section>
    </div>
  );
}
