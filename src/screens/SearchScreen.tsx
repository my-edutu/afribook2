/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Banknote,
  Compass,
  Flame,
  ReceiptText,
  Search,
  TrendingUp,
  Tv,
  Users,
  Vote,
} from 'lucide-react';
import { Screen } from '../types';

interface SearchScreenProps {
  onNavigate: (screen: Screen) => void;
}

const quickLinks = [
  { label: 'Tribes', icon: Users, target: 'tribes' as Screen, bg: 'bg-emerald-100', color: 'text-emerald-700' },
  { label: 'AfriRecord', icon: ReceiptText, target: 'afrirecord' as Screen, bg: 'bg-orange-100', color: 'text-orange-600' },
  { label: 'AfriPay', icon: Banknote, target: 'afripay' as Screen, bg: 'bg-blue-100', color: 'text-blue-600' },
  { label: 'AfriVote', icon: Vote, target: 'arivote' as Screen, bg: 'bg-purple-100', color: 'text-purple-600' },
  { label: 'Watch Live', icon: Tv, target: 'watch' as Screen, bg: 'bg-rose-100', color: 'text-red-600' },
  { label: 'Discover', icon: Compass, target: 'discover' as Screen, bg: 'bg-yellow-100', color: 'text-amber-600' },
];

const journeyCards = [
  {
    label: 'Vote Active',
    title: 'Active Vote in Lagos Tech Tribe',
    action: 'Cast Vote',
    target: 'arivote' as Screen,
    className: 'bg-emerald-700 text-white',
  },
  {
    label: 'New Record',
    title: 'New Record Community Challenge',
    action: 'View',
    target: 'afrirecord' as Screen,
    className: 'bg-blue-600 text-white',
  },
];

const trendingTribes = [
  {
    label: 'High Activity',
    icon: Flame,
    title: 'Nairobi Creatives Collective',
    meta: '12.4k Members • 42 Live Now',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    tone: 'text-orange-300',
  },
  {
    label: 'Fastest Growing',
    icon: TrendingUp,
    title: 'Lagos Tech Vanguard',
    meta: '45.8k Members • 12 New Votes',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    tone: 'text-blue-300',
  },
];

export default function SearchScreen({ onNavigate }: SearchScreenProps) {
  return (
    <div className="min-h-full bg-[#fffaf2] pb-28">
      <section className="px-5 pt-7">
        <label className="relative block">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
          <input
            type="search"
            autoFocus
            placeholder="Search Africa..."
            className="h-[74px] w-full rounded-[20px] border border-slate-200 bg-white pl-16 pr-5 text-[22px] font-semibold text-slate-700 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </label>
      </section>

      <section className="grid grid-cols-3 gap-x-8 gap-y-7 px-8 py-12">
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavigate(item.target)}
              className="flex min-w-0 flex-col items-center gap-3 text-center active:scale-95"
            >
              <span className={`flex size-20 items-center justify-center rounded-[28px] ${item.bg} ${item.color}`}>
                <Icon size={31} strokeWidth={2.8} />
              </span>
              <span className="w-full text-[16px] font-extrabold leading-tight text-slate-900">{item.label}</span>
            </button>
          );
        })}
      </section>

      <section className="px-5">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-[25px] font-black leading-tight text-slate-950">For Your Journey</h2>
          <button
            type="button"
            onClick={() => onNavigate('discover')}
            className="text-[17px] font-extrabold text-emerald-600"
          >
            See All
          </button>
        </div>

        <div className="flex snap-x gap-5 overflow-x-auto pb-2 no-scrollbar">
          {journeyCards.map((card) => (
            <article
              key={card.title}
              className={`relative min-h-[235px] w-[354px] shrink-0 snap-start overflow-hidden rounded-[30px] p-8 ${card.className}`}
            >
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-[13px] font-black uppercase">
                {card.label}
              </span>
              <h3 className="mt-6 max-w-[260px] text-[25px] font-black leading-tight">{card.title}</h3>
              <button
                type="button"
                onClick={() => onNavigate(card.target)}
                className="mt-6 h-12 rounded-2xl bg-white px-8 text-[16px] font-extrabold text-emerald-700"
              >
                {card.action}
              </button>
              <Vote className="absolute -bottom-6 right-4 text-white/20" size={118} strokeWidth={1.8} />
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 px-5">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-[25px] font-black leading-tight text-slate-950">Trending Tribes</h2>
          <button
            type="button"
            onClick={() => onNavigate('tribes')}
            className="text-[17px] font-extrabold text-emerald-600"
          >
            View Hub
          </button>
        </div>

        <div className="space-y-5">
          {trendingTribes.map((tribe) => {
            const Icon = tribe.icon;

            return (
              <button
                key={tribe.title}
                type="button"
                onClick={() => onNavigate('tribe-detail')}
                className="relative block h-[242px] w-full overflow-hidden rounded-[24px] text-left shadow-sm active:scale-[0.99]"
              >
                <img src={tribe.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                <span className={`absolute left-8 top-[125px] flex items-center gap-2 text-[15px] font-black uppercase ${tribe.tone}`}>
                  <Icon size={15} fill="currentColor" />
                  {tribe.label}
                </span>
                <span className="absolute bottom-16 left-8 right-8 text-[25px] font-black leading-tight text-white">
                  {tribe.title}
                </span>
                <span className="absolute bottom-9 left-8 right-8 text-[16px] font-semibold text-white/90">
                  {tribe.meta}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
