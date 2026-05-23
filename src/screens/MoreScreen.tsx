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
  Tv, 
  MapPin, 
  BadgeCheck, 
  HelpCircle, 
  LogOut,
  ChevronRight,
} from 'lucide-react';
import { Screen } from '../types';
import { IconButton, MobilePage, SectionLabel, SurfaceCard } from '../components/MobileUI';

interface MoreScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function MoreScreen({ onNavigate }: MoreScreenProps) {
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

  return (
    <MobilePage className="overflow-y-auto no-scrollbar">
      <main className="px-6 pt-6 space-y-8">
        {/* User quick stats */}
        <SurfaceCard className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <div className="size-20 rounded-full bg-slate-200 border-4 border-white shadow-md overflow-hidden ring-4 ring-slate-50">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbdbT_FInfR8uxmxmI7MuTPPRnz92srUYfLCZGODrfnnSNlvl0JnQ1jhuwLmFimYOa-8AYZ8s7HNG6QNjX2e3LGyfC1xr87hI2SDjE9VuH6sdwx82JQxkNsXHvYRcAYDbJywMj2mPea3OySYZmSBHz9yzaMH1j7hmlRarebGmB_qSp7WDqc43y5L4977lDvhMBZsTNImUU9FK_rEmTB1A5JmkzIieZqg7ZvCdF4auLVTferxfHmv-z30sH5JTZswOA3xZr7itAI" alt="Me" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <h2 className="truncate text-2xl font-extrabold leading-tight text-slate-950">Kemi Adeniyi</h2>
                <div className="flex items-center gap-1.5 mt-1">
                  <BadgeCheck size={16} className="text-primary" />
                  <span className="text-xs font-bold text-slate-400">Verified identity</span>
                </div>
              </div>
            </div>
            <IconButton label="Open settings" icon={Settings} onClick={() => onNavigate('settings')} />
          </div>
        </SurfaceCard>

        {/* Feature sections */}
        {sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <SectionLabel className="pl-2">{section.title}</SectionLabel>
            <div className="grid grid-cols-1 gap-3">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id as Screen)}
                  className="flex items-center justify-between gap-4 rounded-3xl border border-transparent bg-white p-4 text-left shadow-sm transition-colors hover:border-slate-100 active:scale-[0.98]"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className={`size-12 shrink-0 rounded-2xl flex items-center justify-center ${item.color}`}>
                      <item.icon size={26} />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="truncate text-base font-bold text-slate-950">{item.label}</p>
                      {item.sub && <p className="text-xs text-slate-400 font-medium">{item.sub}</p>}
                    </div>
                  </div>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-300 transition-colors group-hover:text-primary">
                    <ChevronRight size={18} />
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}

        {/* Footer actions */}
        <div className="pt-10 border-t border-slate-200 grid grid-cols-1 gap-4">
          <button type="button" className="flex items-center gap-5 rounded-3xl bg-white p-5 font-bold text-slate-600 transition-colors hover:text-primary">
            <HelpCircle size={24} />
            <span className="text-base">Help & support</span>
          </button>
          <button type="button" className="flex items-center gap-5 rounded-3xl bg-white p-5 font-bold text-rose-500 transition-colors">
            <LogOut size={24} />
            <span className="text-base">Logout</span>
          </button>
        </div>
      </main>
    </MobilePage>
  );
}
