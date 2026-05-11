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
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const tribes = [
    { 
      id: 'lagos-tech', 
      name: 'Lagos Tech Founders', 
      members: '15.2k', 
      desc: 'The heartbeat of West African innovation.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiwy0V9JvcnMi_MPwpUv629LZgcgMSGM8JKw8kGwF5Xhu_8jnycAf-lYGUeMcBHtRfpXaO5Sm1IkOxh_oZGuZ1pPbbDUAmv1rAONOuaoY6m4pakqUZ1b0HPZ0ShFlcz_oNPaCL8nHTvydyOdHzAmumwTQchkCSMQ_rGIrCr750z608EBo_foM9t7rvZQSUjXtLVH10elDh45J7gQ9OlNcUJlPO1eQktBANRGKeOUAe8MWcV6xjxgmd6ltdhgWyniAkY5BPqGZXx1g',
      category: 'tech'
    },
    { 
      id: 'nairobi-art', 
      name: 'Nairobi Creatives', 
      members: '8.4k', 
      desc: 'Exploring the intersection of tradition and digital art.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbNNQk1_FwijWinaA3SY5ksMs_f48eebyAjlp8TvIlExB7Zr4bg5VorcBN9KGX25LNLmMErGe9vyc5ZG_-JNcspnkftMNwbJ5EG6iElrZr1IUcPNA9hfm_ZQolx_ywh45VSGc7wPg3CqNd2QQzoUJWvpJKd6XyEUSTyIu7L4IQTdtQsuiWbbsSfreEvokQvObIal6h1q58fmwBEHzixPP0vEm6lXU1go5fyMKnzzKoVOxaUohCvSrjT3iv1zZzLcemB3JY5KhzD7U',
      category: 'creative'
    },
    { 
      id: 'accra-devs', 
      name: 'Accra Dev Circle', 
      members: '12.1k', 
      desc: 'Building the protocols for a decentralised Ghana.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_exvvwk_lpu5Xk_VeDBqc_6BSCFmnW8FX6DwuarbJ-2j-NTS6l31wz-zdSdQTjLfxM50SsLrun3RF-AqgaBVY4BP5PCrpe1KQQgqioSZeHSoqgPhl_I0f8K3cwqrPAP7wzCzocBn0er11QnQEiHnyLj8djEAkPgqlgCLFLX1UL8PGhczcEA5uvSBp10YpNrhWSp7NkG75-ozrJ1X7TXrjOktPkqQVxzMgcQk4WWPqAxQ4Qchk0eHB5HMOgH1UcdjhN0q8gsUn-TM',
      category: 'tech'
    }
  ];

  const categories = [
    { id: 'all', label: 'All tribes' },
    { id: 'tech', label: 'Tech & dev' },
    { id: 'creative', label: 'Art & culture' },
    { id: 'heritage', label: 'History' },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="px-6 pt-16 pb-8 bg-white border-b border-slate-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tighter text-slate-900 leading-none">Tribes hub</h1>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2">Discover your digital community</p>
          </div>
          <button 
            onClick={() => onNavigate('create-tribe')}
            className="size-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 active:scale-90 transition-all border-4 border-white"
          >
            <Plus size={28} strokeWidth={3} />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-sm ${
                activeCategory === cat.id 
                  ? 'bg-slate-900 text-white shadow-slate-900/10' 
                  : 'bg-slate-50 text-slate-400 hover:text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <main className="px-6 py-10 pb-32">
        <div className="flex items-center justify-between mb-8 px-2">
           <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Popular tribes</h2>
           <TrendingUp size={16} className="text-slate-300" />
        </div>

        <div className="space-y-6">
          {tribes.filter(t => activeCategory === 'all' || t.category === activeCategory).map((tribe) => (
            <div 
              key={tribe.id} 
              className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="size-20 rounded-3xl overflow-hidden shadow-inner ring-4 ring-slate-50 shrink-0">
                  <img src={tribe.img} alt={tribe.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none">{tribe.name}</h3>
                    <ShieldCheck size={16} className="text-emerald-500" />
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{tribe.members} Members</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">{tribe.desc}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => onNavigate('tribe-detail')}
                  className="flex-1 bg-slate-50 text-slate-900 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-colors"
                >
                  View details
                </button>
                <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/10 active:scale-95 transition-all">
                  Join tribe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Treasury Highlight */}
        <div className="mt-12 bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <Flame size={40} className="text-primary mb-6" />
            <h3 className="text-2xl font-black tracking-tight mb-3">Community vaults</h3>
            <p className="text-white/50 text-sm font-medium leading-relaxed mb-8 max-w-xs">Participate in decentralized treasuries. 45M AFRI currently managed by active tribes.</p>
            <button 
              onClick={() => onNavigate('ari-market')}
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all"
            >
              Explore arimarket
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 text-white/5 transform rotate-12">
            <Users size={200} />
          </div>
        </div>
      </main>
    </div>
  );
}
