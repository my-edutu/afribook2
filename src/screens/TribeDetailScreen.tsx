/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MoreVertical, 
  Share2, 
  ShieldCheck, 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Upload, 
  Calendar, 
  Plus, 
  Award, 
  Rocket, 
  Brain, 
  ShoppingBag, 
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  ChevronRight,
  Verified,
  Lock
} from 'lucide-react';
import { Screen } from '../types';

interface TribeDetailScreenProps {
  onNavigate: (screen: Screen) => void;
}

type TribeTab = 'feed' | 'events' | 'treasury' | 'awards' | 'shop' | 'governance';

export default function TribeDetailScreen({ onNavigate }: TribeDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<TribeTab>('treasury');

  const tabs: { id: TribeTab; label: string }[] = [
    { id: 'feed', label: 'Feed' },
    { id: 'events', label: 'Events' },
    { id: 'treasury', label: 'Treasury' },
    { id: 'awards', label: 'Awards' },
    { id: 'governance', label: 'Governance' },
    { id: 'shop', label: 'Shop' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-slate-200" />
                <div className="flex-1">
                  <div className="h-4 bg-slate-100 rounded w-1/3 mb-2" />
                  <div className="h-3 bg-slate-50 rounded w-1/4" />
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4 uppercase font-bold tracking-tight">Excited to announce our next demo day! Virtual tickets available in the shop.</p>
              <div className="h-48 bg-slate-100 rounded-3xl" />
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="space-y-4">
            {[
              { title: 'Demo Day Q4', date: 'Oct 24, 2:00 PM', loc: 'Lagos Hub / Meta', tag: 'Hybrid' },
              { title: 'Founders Mixer', date: 'Nov 02, 6:00 PM', loc: 'Victoria Island', tag: 'In-person' }
            ].map((event, i) => (
              <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded-md mb-2 inline-block">{event.tag}</span>
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight leading-none">{event.title}</h4>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-tight">{event.date} • {event.loc}</p>
                </div>
                <button className="size-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                  <Calendar size={20} />
                </button>
              </div>
            ))}
          </div>
        );
      case 'treasury':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Contributions</p>
                <p className="text-xl font-black text-slate-900">32,000 AFR</p>
                <div className="flex items-center gap-1 text-emerald-500 text-[10px] font-bold mt-1">
                  <TrendingUp size={12} />
                  <span>12% this month</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Monthly Spending</p>
                <p className="text-xl font-black text-slate-900">8,400 AFR</p>
                <div className="flex items-center gap-1 text-rose-500 text-[10px] font-bold mt-1">
                  <TrendingDown size={12} />
                  <span>5% decrease</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
              <button className="flex-none bg-primary text-white px-5 py-3 rounded-xl flex items-center gap-2 font-black text-xs shadow-lg shadow-primary/20">
                <ThumbsUp size={16} fill="currentColor" />
                Vote on Spending
              </button>
              <button className="flex-none bg-white border border-primary/20 text-primary px-5 py-3 rounded-xl flex items-center gap-2 font-black text-xs">
                <Plus size={16} />
                Contribute
              </button>
            </div>

            {/* Transaction Log */}
            <section>
              <div className="flex justify-between items-end mb-4 px-1">
                <h3 className="font-black text-slate-900 uppercase tracking-tight">Transaction Log</h3>
                <button className="text-primary text-[10px] font-black uppercase tracking-widest">View All</button>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Community Grant #042', date: 'Today, 2:45 PM', status: 'Verified', amount: '-1,200 AFR', color: 'text-rose-500', icon: <Download size={18} className="text-emerald-600" />, bg: 'bg-emerald-50' },
                  { title: 'Member Contributions', date: 'Yesterday • Bulk (42 members)', status: '', amount: '+4,500 AFR', color: 'text-emerald-600', icon: <Upload size={18} className="text-blue-600" />, bg: 'bg-blue-50' },
                  { title: 'Nairobi Meetup Venue', date: 'Oct 24, 2023 • Proposal Approved', status: '', amount: '-3,000 AFR', color: 'text-rose-500', icon: <Calendar size={18} className="text-primary" />, bg: 'bg-orange-50' }
                ].map((log, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl flex items-center justify-between border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-full ${log.bg} flex items-center justify-center`}>
                        {log.icon}
                      </div>
                      <div>
                        <p className="font-black text-xs text-slate-900">{log.title}</p>
                        <p className="text-[10px] font-bold text-slate-400">{log.date} {log.status && <span className="text-emerald-500 ml-1">• {log.status}</span>}</p>
                      </div>
                    </div>
                    <p className={`font-black text-sm ${log.color}`}>{log.amount}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Trust Banner */}
            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl flex items-center gap-4 shadow-sm">
              <ShieldCheck className="text-emerald-600 shrink-0" size={32} />
              <div className="space-y-1">
                <p className="font-black text-sm text-slate-900 uppercase tracking-tight leading-tight">Community Verified Hub</p>
                <p className="text-[10px] font-bold text-slate-500 leading-normal">This tribe's treasury is smart-contract managed and audited by the AfriBook Governance protocol.</p>
              </div>
            </div>
          </div>
        );
      case 'awards':
        return (
          <div className="space-y-8">
            {/* Tribe Badges */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-900 text-lg font-black uppercase tracking-tight">Tribe Badges</h3>
                <span className="text-primary text-[10px] font-black px-3 py-1 bg-primary/10 rounded-full uppercase tracking-widest">8 Earned</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Top Contributor', icon: <Award className="text-white" size={28} />, bg: 'bg-primary' },
                  { label: 'Early Backer', icon: <Rocket className="text-white" size={28} />, bg: 'bg-indigo-500' },
                  { label: 'Tech Maven', icon: <Brain className="text-white" size={28} />, bg: 'bg-emerald-500' }
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center p-4 bg-white rounded-2xl text-center border border-slate-100 shadow-sm">
                    <div className={`size-14 ${badge.bg} rounded-full flex items-center justify-center mb-3 shadow-lg shadow-${badge.bg.split('-')[1]}/20`}>
                      {badge.icon}
                    </div>
                    <p className="text-[10px] font-black text-slate-900 leading-tight uppercase tracking-tight">{badge.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Current Challenges */}
            <section>
              <h3 className="text-slate-900 text-lg font-black uppercase tracking-tight mb-4">Current Challenges</h3>
              <div className="space-y-4">
                {[
                  { title: 'Post 5 Tech Tips', reward: '500 AFRI + Tipster Badge', progress: 3, total: 5 },
                  { title: 'Attend 2 Demo Days', reward: 'Exclusive NFT Access', progress: 1, total: 2 }
                ].map((challenge, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-black text-sm text-slate-900 uppercase tracking-tight">{challenge.title}</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Reward: {challenge.reward}</p>
                      </div>
                      <span className="text-xs font-black text-primary">{challenge.progress}/{challenge.total}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'shop':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-900 text-lg font-black uppercase tracking-tight">Tribe Shop</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Founders Hoodie', price: '2,500 AFRI', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCE8Cgz7zW97K0zRtv3OtQibhSYS2I7qBuN4-6FXmkEQ63BQccF27bxow7IEqZENS24gfSMDS3bBO3Nk4sISsEJypEbTgzV2GbsSgDT4tcMMEMEPMKcs8tljwCiMMnzvzQ9rNGAD6bU3Aim1Fx81pUdWTL1SZ5lr-zIabaXPfHJoSY2lxs8dX9esG4wRK5D2udPC9ZtcyBMoNdYicumpBaB0igk0e8hkbrFyxLSsdm2j-giGiRHxA-X2hZo31yl0O3OTShMhlzZoE' },
                { name: 'Membership NFT', price: '1,200 AFRI', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwMUnwq8GzQc38IZRKLnmkFjeGqQBedYiGtmRDXvsFgjPbr99K3UahY7P-TikSToy9Wi_zzLvC6lEgLrUwnsgzfYRbV4oX_fKP6NAuGHyoQsfveOevUFVD0KwCbbVBnm1Bz_ZtEFtxE_c4RRCP8Gr1_GZFXP22Awj4N3kxcWBq5vT72LM24d-_6-YtE0MmhLDGVoNqHNFkkulLzgrJst_D5mQitYiwQQj0mZ2m_1i_INs9uE3-sQ_ZghMbRLxaIBQuHS14D6RPPNo' }
              ].map((product, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
                  <div className="aspect-square relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="font-black text-xs text-slate-900 mb-1 uppercase tracking-tight">{product.name}</p>
                    <p className="text-primary font-black text-sm mb-4">{product.price}</p>
                    <button className="w-full bg-primary text-white py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mt-auto shadow-lg shadow-primary/20">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 py-4 opacity-40">
              <ShoppingBag size={14} />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Powered by Showroom AI</p>
            </div>
          </div>
        );
      case 'governance':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="relative flex size-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-2 bg-blue-500"></span>
                  </div>
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Community Voting Active</p>
                </div>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">4h 20m left</span>
              </div>
              <h3 className="font-black text-slate-900 text-lg tracking-tight mb-6">Proposal: Spend $500 on venue booking for Q3 Networking Event</h3>
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 text-white font-black py-3 rounded-2xl flex items-center justify-center gap-2 text-xs shadow-lg shadow-blue-200 uppercase tracking-widest">
                  <ThumbsUp size={16} fill="currentColor" /> Vote Yes
                </button>
                <button className="flex-1 bg-white border border-blue-200 text-blue-600 font-black py-3 rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
                  <ThumbsDown size={16} fill="currentColor" /> Vote No
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-black text-xl text-slate-900 tracking-tight uppercase">Tech Meetup Fund</h3>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Target: $2,000.00 • 12 days left</p>
                </div>
                <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Crowdfund</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black uppercase tracking-tight">
                  <span className="text-slate-900">$1,500 Raised</span>
                  <span className="text-primary">75%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all duration-700" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="size-8 rounded-full border-2 border-white bg-slate-300" />
                  ))}
                  <div className="size-8 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">+42</div>
                </div>
                <button className="bg-slate-900 text-white font-black py-3 px-6 rounded-2xl flex items-center gap-2 text-[10px] uppercase tracking-widest shadow-xl shadow-slate-200">
                  <Wallet size={16} />
                  Donate via AfriPay
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="py-20 text-center opacity-40">
            <p className="text-sm font-black uppercase tracking-widest">Module Loading...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen pb-32">
      {/* Banner Section */}
      <div className="relative h-56 bg-gradient-to-br from-primary to-secondary">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EBo52oLiDLV7vCgREn8LIl_gtUbeBSk2ObbO2oBSiOYHZ8C1JVm8MCKLLix9L38BYKF0ZEvDsQnvRUsMwRvOLYVZZP4KKERzp-SyWclKdru-ueRbiLH7iE-H2fqfJ0VGy2VmLYrSr20YYJ9ecw2B4wMxjcn19VEbUCvQ7kzNW1L-7JJY7HtJsr6xzblwRE1ngO-jySaZdRTGKE5xj3QKJhs5ybQXP_yvfK0tHgw6A0wG-0qCJJRGYJ5MlfvXy6MnrVD7VznhwLk" 
          alt="Banner" 
          className="w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button 
            onClick={() => onNavigate('tribes')}
            className="size-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex gap-2">
            <button className="size-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              <Share2 size={20} />
            </button>
            <button className="size-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Overlap Card */}
      <div className="px-4 -mt-16 relative z-10 space-y-4">
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-300/30 border border-slate-100">
          <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between">
              <div className="size-24 rounded-2xl border-4 border-white bg-slate-900 shadow-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiwy0V9JvcnMi_MPwpUv629LZgcgMSGM8JKw8kGwF5Xhu_8jnycAf-lYGUeMcBHtRfpXaO5Sm1IkOxh_oZGuZ1pPbbDUAmv1rAONOuaoY6m4pakqUZ1b0HPZ0ShFlcz_oNPaCL8nHTvydyOdHzAmumwTQchkCSMQ_rGIrCr750z608EBo_foM9t7rvZQSUjXtLVH10elDh45J7gQ9OlNcUJlPO1eQktBANRGKeOUAe8MWcV6xjxgmd6ltdhgWyniAkY5BPqGZXx1g" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="bg-primary hover:scale-105 transition-transform text-white font-black py-3 px-6 rounded-2xl shadow-xl shadow-primary/20 text-xs uppercase tracking-widest flex items-center gap-2">
                <Award size={16} />
                Mint NFT
              </button>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Lagos Tech Founders</h2>
                <Verified className="text-secondary" size={20} fill="currentColor" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">15.2k Members • Digital Nation</p>
            </div>

            {/* Treasury Glance */}
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between border-l-4 border-primary">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tribe Treasury</p>
                  <p className="text-xl font-black text-slate-900 leading-tight">45,000 <span className="text-primary">AFR</span></p>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('treasury')}
                className="bg-white border border-slate-200 text-slate-900 size-10 rounded-xl flex items-center justify-center shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mt-8 px-4 overflow-x-auto no-scrollbar sticky top-0 bg-slate-50/80 backdrop-blur-md z-20 py-2 border-b border-slate-200">
        <div className="flex gap-8 px-2 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-xs font-black uppercase tracking-widest transition-all relative ${
                activeTab === tab.id 
                  ? 'text-primary' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="p-4 pt-6">
        {renderContent()}
      </main>

      {/* Global Status Footer */}
      <div className="mt-12 mb-20 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm opacity-50">
          <Lock size={12} className="text-slate-400" />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">End-to-end Encrypted Governance</p>
        </div>
      </div>
    </div>
  );
}
