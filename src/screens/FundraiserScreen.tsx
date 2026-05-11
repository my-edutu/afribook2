/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowLeft, 
  Bell, 
  PlusCircle, 
  Wallet, 
  Share2, 
  Sparkles, 
  History, 
  Heart, 
  TrendingUp, 
  CheckCircle2, 
  MoreHorizontal,
  ChevronRight,
  Clock,
  ExternalLink,
  Menu
} from 'lucide-react';
import { Screen } from '../types';

interface FundraiserScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function FundraiserScreen({ onNavigate }: FundraiserScreenProps) {
  const donors = [
    {
      name: 'Amara Okafor',
      amount: '$250.00',
      time: '2h ago',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZwWosRibZhbVlz7VlwgQe_mUsmy-P33bZgKvhWMDZpBuV2oz5Hq7y54rjMV7F_zia-qTl7I0b16RteTosukxdMMeThxR83vUWNDPXYnix0osl8EB_C_ALX_DkuW3MYw8M1X5892NshisQ9hEqHV4ByojqQJixOXWwPC0xL5Dx2wiQVxBhb0BIhzkcNkjWqlqyKUab9RIhDf5O1Bbuyx5NBC2ZGu2sJ-WD53bXMYL0cZNThkPHZOp0PgxPGgAJ4hEW6LKJZmQztxg',
      thanked: false
    },
    {
      name: 'Kofi Mensah',
      amount: '$1,000.00',
      time: '5h ago',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdWH98aVcwewDSoFC5G12ZnW67xbFgNnso2rzqnjaySMKFyPST3i6EV0bPlrxtBWgevIAX6FIM5gdd1gd29iQPgEyoYbWlrFs0jTKoOcBpfDSLOCVddsmNesNth3iH2xytKVFoIdfIWLEtvBi57NZFDzDvjAgd1yzRLHZT_uxoD_Hj8B5TrGJv9lyMFwfLizSqlSxPu7ucGHeo_76ugm7gEG5jdaye_a6BVklMY10EeHdc8Kv_02_TcfoU0zmc7whWiQtdcmulWRg',
      thanked: true
    }
  ];

  const stats = [
    { label: 'Views', value: '2.4k' },
    { label: 'Shares', value: '842' },
    { label: 'Followers', value: '315' },
    { label: 'Days Left', value: '14', color: 'text-primary' }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen text-slate-900 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <span className="text-2xl font-black text-primary uppercase">
            AfriBook
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
            <Menu size={26} />
          </button>
        </div>
      </header>

      <main className="flex-1 px-4 pt-8 pb-32 max-w-md mx-auto w-full">
        {/* Main Campaign Section */}
        <section className="mb-8">
          <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 relative overflow-hidden shadow-xl shadow-slate-200/50">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALTpoLYDvoTRiMa3meOACeUhUxxojUNfqwR3QILA9_hRaFlF0dQ4aEnomiDgMG4hddpWm1mzOKP5XG2q1h1GuRFwFIOk77KEoZWtuNaDNQeZ65dGWTFznPCJrU0VWKHKIbF0pf1Oxr91Tl0PHixram-jZWClYSRio9xpXrYrSBT6MuATaOsx8Wptxi1EiAbe5PFKYVY0ip7Z-KuKMLICx3hHiXh50rW0817hCGUPDmCoA9AuktAeYQEWxb9L0CcW7p76VJMmTnbZI" 
                alt="pattern" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-black text-[9px] uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Fundraising Active
              </div>
              
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-3 uppercase leading-none">
                Lagos Tech Scholars 2024
              </h1>
              
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                Empowering 50 young women in Lagos with coding bootcamps and laptops to bridge the digital divide.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Raised</span>
                    <span className="text-3xl font-black text-primary">$18,450.00</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Goal: $25k</span>
                    <span className="text-sm font-black text-slate-900">74%</span>
                  </div>
                </div>

                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '74%' }}></div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform">
                    <Wallet size={16} />
                    Donate Now
                  </button>
                  <button className="px-5 bg-slate-50 text-slate-900 border border-slate-100 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center shadow-sm active:scale-95 transition-transform">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Storyteller */}
        <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles size={22} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-tight">AI Storyteller</h3>
                <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest tracking-tighter">Automated updates</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-primary transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="bg-primary/[0.03] border border-primary/5 rounded-2xl p-4 mb-6">
            <p className="text-slate-600 text-xs leading-relaxed">
              "We've reached 74% generated! Thanks to 142 donors, we've secured 15 laptops. Impact delivery starts this Friday!"
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-primary/10 text-primary py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
              Post Update
            </button>
            <button className="flex-1 bg-slate-50 text-slate-500 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-100 transition-all">
              Edit Draft
            </button>
          </div>
        </div>

        {/* Recent Donors */}
        <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-black uppercase tracking-tight">Recent Donors</h3>
            <span className="text-[9px] font-black text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">142 Total</span>
          </div>

          <div className="space-y-6">
            {donors.map((donor, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full overflow-hidden border border-slate-100">
                    <img src={donor.img} alt={donor.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] text-slate-900 uppercase tracking-tight">{donor.name}</h4>
                    <p className="text-primary font-black text-xs">{donor.amount} <span className="text-slate-300 font-bold text-[8px] ml-1 uppercase tracking-widest">{donor.time}</span></p>
                  </div>
                </div>
                {donor.thanked ? (
                  <span className="bg-emerald-50 text-emerald-600 text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Thanked</span>
                ) : (
                  <button className="size-8 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all">
                    <Heart size={16} fill="currentColor" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm text-center">
              <span className="block text-slate-400 text-[8px] font-black uppercase tracking-widest mb-1">{stat.label}</span>
              <span className={`text-xl font-black ${stat.color || 'text-slate-900'}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Plus CTA */}
      <div className="fixed bottom-28 right-6 z-40">
        <button className="size-14 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/30 border-4 border-white active:scale-95 transition-transform">
          <PlusCircle size={24} />
        </button>
      </div>
    </div>
  );
}
