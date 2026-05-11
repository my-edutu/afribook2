/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  User, 
  Settings, 
  ShieldCheck, 
  Users, 
  Trophy, 
  Wallet, 
  Heart, 
  ShoppingBag, 
  Sparkles, 
  Globe, 
  Archive, 
  Puzzle, 
  GraduationCap, 
  Vote, 
  Camera, 
  Tv, 
  MapPin, 
  History, 
  Gamepad2, 
  BadgeCheck, 
  Bell, 
  Menu,
  HelpCircle, 
  LogOut,
  ChevronRight,
  TrendingUp,
  Coins
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';

interface MoreScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function MoreScreen({ onNavigate }: MoreScreenProps) {
  const [showSearch, setShowSearch] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const sections = [
    {
      title: 'Identity & accounts',
      items: [
        { id: 'profile', icon: User, label: 'Personal profile', sub: 'Bio & verified id', color: 'text-blue-500 bg-blue-50' },
        { id: 'security', icon: ShieldCheck, label: 'Account security', sub: 'Biometrics active', color: 'text-slate-500 bg-slate-50' },
      ]
    },
    {
      title: 'Quick access',
      items: [
        { id: 'afripay', icon: Wallet, label: 'Afripay wallet', sub: 'Send & receive', color: 'text-emerald-600 bg-emerald-50' },
        { id: 'ari-market', icon: ShoppingBag, label: 'Arimarket', sub: 'Buy & sell', color: 'text-amber-600 bg-amber-50' },
        { id: 'watch', icon: Tv, label: 'Live streams', sub: 'Watch now', color: 'text-rose-500 bg-rose-50' },
      ]
    },
    {
      title: 'Discovery & heritage',
      items: [
        { id: 'discover', icon: MapPin, label: 'Snap africa', sub: 'Photo map', color: 'text-amber-500 bg-amber-50' },
        { id: 'afrihero', icon: Archive, label: 'Afrihero & history', sub: 'Archive', color: 'text-indigo-500 bg-indigo-50' },
        { id: 'heritage', icon: GraduationCap, label: 'Afriheritage', sub: 'Relive history', color: 'text-sky-500 bg-sky-50' },
      ]
    },
    {
      title: 'Community & governance',
      items: [
        { id: 'tribes', icon: Users, label: 'Tribes hub', sub: 'Community networks', color: 'text-violet-500 bg-violet-50' },
        { id: 'arivote', icon: Vote, label: 'Ari-vote', sub: 'Secure voting', color: 'text-purple-500 bg-purple-50' },
        { id: 'fundraiser', icon: Heart, label: 'Fundraisers', color: 'text-rose-500 bg-rose-50' },
      ]
    },
    {
      title: 'Achievements',
      items: [
        { id: 'afrirecord', icon: Trophy, label: 'Afrirecord', sub: 'National records', color: 'text-amber-600 bg-amber-50' },
      ]
    },
    {
      title: 'Virtual & tech',
      items: [
        { id: 'metaverse', icon: Globe, label: 'Metaverse africa', sub: 'Virtual land', color: 'text-indigo-600 bg-indigo-50' },
        { id: 'ari-market-store', icon: Sparkles, label: 'Ai storefront', sub: 'Showroom ai', color: 'text-purple-600 bg-purple-50' },
        { id: 'miniapps', icon: Puzzle, label: 'Mini-app center', color: 'text-slate-500 bg-slate-50' },
      ]
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    if (scrollTop < -20) {
      setShowSearch(true);
    } else if (scrollTop > 50 && showSearch) {
      // Keep it if we are far up, but maybe hide if we scroll down deep
    }
  };

  return (
    <div 
      className="flex flex-col bg-slate-50 min-h-screen overflow-y-auto no-scrollbar"
      onScroll={handleScroll}
      ref={scrollRef}
    >
      {/* Header */}
      <div className="bg-white px-6 py-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight text-slate-900">Explore afribook</h1>
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-primary transition-colors"
          >
            <Sparkles size={20} />
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
              <Menu className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search features, friends, or tribes..." 
                autoFocus
                className="w-full h-12 bg-slate-100 rounded-[20px] pl-12 pr-4 text-sm font-medium outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="px-6 pt-6 pb-32 space-y-8">
        {/* User quick stats */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-5">
              <div className="size-20 rounded-full bg-slate-200 border-4 border-white shadow-md overflow-hidden ring-4 ring-slate-50">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbdbT_FInfR8uxmxmI7MuTPPRnz92srUYfLCZGODrfnnSNlvl0JnQ1jhuwLmFimYOa-8AYZ8s7HNG6QNjX2e3LGyfC1xr87hI2SDjE9VuH6sdwx82JQxkNsXHvYRcAYDbJywMj2mPea3OySYZmSBHz9yzaMH1j7hmlRarebGmB_qSp7WDqc43y5L4977lDvhMBZsTNImUU9FK_rEmTB1A5JmkzIieZqg7ZvCdF4auLVTferxfHmv-z30sH5JTZswOA3xZr7itAI" alt="Me" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">Kemi adeniyi</h2>
                <div className="flex items-center gap-1.5 mt-1">
                  <BadgeCheck size={16} className="text-primary" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Verified identity</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('settings')}
              className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-all active:scale-90"
            >
              <Settings size={22} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-50 rounded-2xl p-4 text-center">
              <p className="text-xl font-black text-slate-900">12</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Records</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 text-center">
              <p className="text-xl font-black text-slate-900">42</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Tribes</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 text-center">
              <p className="text-xl font-black text-slate-900">850</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Followers</p>
            </div>
          </div>
        </div>

        {/* Feature sections */}
        {sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-2">{section.title}</h3>
            <div className="grid grid-cols-1 gap-3">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as Screen)}
                  className="flex items-center justify-between p-5 bg-white rounded-[28px] active:scale-[0.98] transition-all group border border-transparent hover:border-slate-100 shadow-sm"
                >
                  <div className="flex items-center gap-5">
                    <div className={`size-14 rounded-2xl flex items-center justify-center transition-all ${item.color} group-hover:scale-105`}>
                      <item.icon size={26} />
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-slate-900">{item.label}</p>
                      {item.sub && <p className="text-xs text-slate-400 font-medium">{item.sub}</p>}
                    </div>
                  </div>
                  <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-primary transition-colors">
                    <ChevronRight size={18} />
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}

        {/* Footer actions */}
        <div className="pt-10 border-t border-slate-200 grid grid-cols-1 gap-4">
          <button className="flex items-center gap-5 p-6 rounded-[28px] bg-white text-slate-600 hover:text-primary transition-all font-bold">
            <HelpCircle size={24} />
            <span className="text-base">Help & support</span>
          </button>
          <button className="flex items-center gap-5 p-6 rounded-[28px] bg-white text-rose-500 transition-all font-bold">
            <LogOut size={24} />
            <span className="text-base">Logout</span>
          </button>
        </div>
      </main>
    </div>
  );
}
