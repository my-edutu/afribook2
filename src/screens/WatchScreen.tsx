/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Heart, 
  Coins, 
  Users, 
  Eye, 
  Sparkles,
  MessageCircle,
  Share2,
  MoreVertical,
  Plus,
  Music2,
  Search,
  ArrowLeft,
  Settings,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';

interface Stream {
  id: number;
  user: {
    name: string;
    handle: string;
    img: string;
    isVerified: boolean;
  };
  title: string;
  description: string;
  location: string;
  viewers: string;
  likes: string;
  videoUrl: string; // Using image placeholder for demo
  aiHighlights: string[];
  subtitles: string;
}

const MOCK_STREAMS: Stream[] = [
  {
    id: 1,
    user: {
      name: 'Amina J.',
      handle: '@amina_lagos',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbdbT_FInfR8uxmxmI7MuTPPRnz92srUYfLCZGODrfnnSNlvl0JnQ1jhuwLmFimYOa-8AYZ8s7HNG6QNjX2e3LGyfC1xr87hI2SDjE9VuH6sdwx82JQxkNsXHvYRcAYDbJywMj2mPea3OySYZmSBHz9yzaMH1j7hmlRarebGmB_qSp7WDqc43y5L4977lDvhMBZsTNImUU9FK_rEmTB1A5JmkzIieZqg7ZvCdF4auLVTferxfHmv-z30sH5JTZswOA3xZr7itAI',
      isVerified: true
    },
    title: 'Lagos Tech Summit Live!',
    description: 'Discussing the future of African digital economy with top founders. Join the tribe for exclusive insights.',
    location: 'Lagos, Nigeria',
    viewers: '12.4k',
    likes: '45.2k',
    videoUrl: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop',
    aiHighlights: ['Future of Fintech', 'Seed Funding Tips', 'Market Expansion'],
    subtitles: 'The digital transformation in West Africa is just beginning...'
  },
  {
    id: 2,
    user: {
      name: 'Kofi Mensah',
      handle: '@koficooks',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa7kMSnak5Z7TvZWOEKQAbm6CbO3ODtMNbcDpHbSCmI-nVtbjbopcryUHPV4zJOWRW12Wc01rnkTMgOB25pW4pHliiEPM5pHy1Zy5deuxJaSZn2VsSfau3kmv3bxnuf2_PYfOhZheJVH22vwTRX9EHqC7emYnxTvXDQhs_eHxoZf7XEUmy9GCIHLiRpc2QWxuDuVTuG74Lonkv6HsdM00RKE-Rmn3S1RMLYmWccp0ZLuCEkgxUdgnwkzkB7AdX88R_MxTqZHpt9qg',
      isVerified: false
    },
    title: 'Secret Jollof Recipes',
    description: 'Today we cook the authentic Ghana Jollof. No shortcuts! Subscribe for the ingredient list.',
    location: 'Accra, Ghana',
    viewers: '8.1k',
    likes: '15.9k',
    videoUrl: 'https://images.unsplash.com/photo-1547516508-4c1f9c7c4ec3?q=80&w=2070&auto=format&fit=crop',
    aiHighlights: ['Spice Selection', 'Rice Textures', 'Smoke Effect'],
    subtitles: 'Now, the key to the smoke flavor is the duration of...'
  },
  {
    id: 3,
    user: {
      name: 'Fatima Zahra',
      handle: '@fatima_designs',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm1D2MR21PdFvHkTTzfOduC4cXL4lb7xdBi05uhu1vv3cCnkKzqMvPQM23QpcYsFs4uILWSqLZR7k2DJo-3wPLgbulURUuxyU8_7CL_IiDhtC5eWFkLApvmQoGbbCJ0eX1pREmVrc69ArDP0tjQuYD4efjmPmtH7Y6wPIi3km80ROFi5rZfWibuFSAFw_khsceF4wpcwkHwHQv_aVJy4SMUulp6DYZPMcBHCFnfxyh2xtSX7rHCwoJ6aQzWCdsPEuLErmqEm6kQCE',
      isVerified: true
    },
    title: 'Traditional meets Modern Fashion',
    description: 'Sketching the new Fall collection inspired by Sahel textures and patterns.',
    location: 'Dakar, Senegal',
    viewers: '5.2k',
    likes: '22.1k',
    videoUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop',
    aiHighlights: ['Fabric Science', 'Pattern Design', 'Heritage Styling'],
    subtitles: 'Each pattern tells a story of the ancestors...'
  }
];

interface WatchScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function WatchScreen({ onNavigate }: WatchScreenProps) {
  const [activeTab, setActiveTab] = useState<'following' | 'foryou'>('foryou');
  const [showAI, setShowAI] = useState(true);
  const [reactions, setReactions] = useState<{ id: number; icon: any; x: number }[]>([]);
  
  const addReaction = () => {
    const icons = [Heart, Sparkles, Flame, Coins, Music2];
    const Icon = icons[Math.floor(Math.random() * icons.length)];
    const newReaction = {
      id: Date.now(),
      icon: Icon,
      x: Math.random() * 80 - 40 // Random horizontal offset
    };
    setReactions(prev => [...prev, newReaction]);
    setTimeout(() => {
      setReactions(prev => prev.filter(r => r.id !== newReaction.id));
    }, 2000);
  };

  return (
    <div className="h-full w-full bg-black overflow-y-scroll snap-y snap-mandatory no-scrollbar relative scroll-smooth">
      {/* Immersive Header Overlays */}
      <div className="absolute top-0 inset-x-0 z-50 flex flex-col pt-12 pointer-events-none">
        <div className="flex justify-center gap-8 pointer-events-auto">
          <button 
            onClick={() => setActiveTab('following')}
            className={`text-sm font-extrabold transition-colors drop-shadow-2xl tracking-wide ${activeTab === 'following' ? 'text-white scale-110' : 'text-white/40'}`}
          >
            Following
          </button>
          <div className="w-[1px] h-4 bg-white/10 self-center" />
          <button 
            onClick={() => setActiveTab('foryou')}
            className={`text-sm font-extrabold transition-colors drop-shadow-2xl tracking-wide ${activeTab === 'foryou' ? 'text-white scale-110' : 'text-white/40'}`}
          >
            For you
          </button>
        </div>
      </div>

      {MOCK_STREAMS.map((stream) => (
        <section 
          key={stream.id} 
          className="h-full w-full snap-start relative flex flex-col justify-end overflow-hidden"
          onClick={addReaction}
        >
          {/* Main Video/Image Backdrop */}
          <div className="absolute inset-0 z-0">
            <img 
              src={stream.videoUrl} 
              alt={stream.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          </div>

          {/* Floating Reactions Layer */}
          <div className="absolute inset-0 pointer-events-none z-30">
            <AnimatePresence>
              {reactions.map((r) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 1, y: '80%', x: `${r.x}%`, scale: 0.5 }}
                  animate={{ opacity: 0, y: '10%', scale: 2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="absolute bottom-20 left-1/2 text-primary"
                >
                  <r.icon size={48} className="fill-current drop-shadow-2xl" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Side UI - Action Buttons */}
          <div className="absolute right-4 bottom-32 flex flex-col items-center gap-6 z-40">
            <div className="relative mb-4 group">
              <div className="size-14 rounded-full border-2 border-white overflow-hidden shadow-2xl transition-transform group-active:scale-95">
                <img src={stream.user.img} alt={stream.user.name} className="w-full h-full object-cover" />
              </div>
              <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-6 bg-primary rounded-full flex items-center justify-center text-white ring-2 ring-black hover:scale-110 transition-colors">
                <Plus size={16} />
              </button>
            </div>

            <button className="flex flex-col items-center gap-1 group" onClick={(e) => { e.stopPropagation(); addReaction(); }}>
              <div className="size-14 rounded-full bg-white/10 backdrop-blur-3xl flex items-center justify-center text-white border border-white/10 group-active:scale-125 transition-colors shadow-xl">
                <Heart size={28} className="fill-white" />
              </div>
              <span className="text-[10px] text-white font-extrabold drop-shadow-md tracking-tight mt-1">{stream.likes}</span>
            </button>

            <button className="flex flex-col items-center gap-1 group" onClick={(e) => e.stopPropagation()}>
              <div className="size-14 rounded-full bg-white/10 backdrop-blur-3xl flex items-center justify-center text-white border border-white/10 group-active:scale-125 transition-colors shadow-xl">
                <MessageCircle size={28} fill="white" />
              </div>
              <span className="text-[10px] text-white font-extrabold drop-shadow-md tracking-tight mt-1">1.2k</span>
            </button>

            <button className="flex flex-col items-center gap-1 group" onClick={(e) => e.stopPropagation()}>
              <div className="size-14 rounded-full bg-amber-500 backdrop-blur-3xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(245,158,11,0.4)] group-active:scale-90 transition-colors">
                <Coins size={28} />
              </div>
              <span className="text-[10px] text-white font-extrabold drop-shadow-md tracking-tight mt-1">Gift</span>
            </button>

            <button className="flex flex-col items-center gap-1 group" onClick={(e) => e.stopPropagation()}>
              <div className="size-14 rounded-full bg-white/10 backdrop-blur-3xl flex items-center justify-center text-white border border-white/10 group-active:scale-125 transition-colors shadow-xl">
                <Share2 size={26} fill="white" />
              </div>
              <span className="text-[10px] text-white font-extrabold drop-shadow-md tracking-tight mt-1">Share</span>
            </button>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="size-12 rounded-full border-4 border-white/20 p-1 flex items-center justify-center shadow-2xl mt-4"
            >
              <div className="w-full h-full rounded-full bg-primary animate-pulse" />
            </motion.div>
          </div>

          {/* Bottom Info UI */}
          <div className="relative z-10 px-6 pb-20 flex flex-col gap-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            {/* AI Summary Overlay */}
            {showAI && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-3 max-w-[85%]"
              >
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-2xl p-4 rounded-[24px] border border-white/10 shadow-2xl">
                   <div className="bg-primary/20 p-2 rounded-xl">
                     <Sparkles size={18} className="text-primary" />
                   </div>
                   <p className="text-xs text-white/90 font-medium leading-relaxed">
                     <span className="text-primary font-extrabold text-[10px] tracking-wide block mb-1">AI Subtitles</span>
                     {stream.subtitles}
                   </p>
                </div>
                <div className="flex flex-wrap gap-2">
                   {stream.aiHighlights.map((h, i) => (
                     <div key={i} className="flex items-center gap-2 bg-indigo-600/40 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 shadow-sm border-l-4 border-l-primary">
                        <TrendingUp size={12} className="text-primary" />
                        <span className="text-[10px] text-white font-extrabold tracking-tight">{h}</span>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}

            <div className="max-w-[85%] space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="text-white font-extrabold text-xl drop-shadow-2xl tracking-tight">{stream.user.name}</h3>
                {stream.user.isVerified && <ShieldCheck size={18} className="text-primary" />}
                <button className="bg-primary text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full tracking-wide active:scale-95 transition-colors">Join tribe</button>
              </div>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2 font-medium">
                {stream.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-white/50 text-[10px] font-extrabold bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/5">
                  <Music2 size={14} />
                  <span className="truncate max-w-[120px] tracking-tight">Original live audio - {stream.user.handle}</span>
                </div>
              </div>
            </div>

            {/* Live Chat Component */}
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 max-w-full space-y-3 mt-2 border border-white/10 shadow-2xl">
               <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div className="size-6 rounded-full bg-amber-400 overflow-hidden border border-white/20">
                    <img src={stream.user.img} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] font-extrabold text-amber-300">Amina:</span>
                  <span className="text-[11px] text-white/90 font-medium">This tech is fire.</span>
               </div>
               <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-700">
                  <div className="size-6 rounded-full bg-blue-400 border border-white/20" />
                  <span className="text-[11px] font-extrabold text-blue-300">Kofi:</span>
                  <span className="text-[11px] text-white/90 font-medium">Join the tribe everyone.</span>
               </div>
               <div className="pt-2">
                 <input 
                   placeholder="Add a comment…"
                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[11px] text-white placeholder:text-white/30 focus-visible:outline-none focus:bg-white/10 transition-colors font-medium"
                   onClick={(e) => e.stopPropagation()}
                 />
               </div>
            </div>
          </div>

          {/* Top Live Indicators */}
          <div className="absolute top-24 left-6 flex gap-3 z-30 pointer-events-none">
             <div className="flex items-center gap-2 bg-red-600 px-4 py-1.5 rounded-full text-[10px] font-extrabold text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-pulse">
                <span className="size-2 bg-white rounded-full" />
                LIVE
             </div>
             <div className="bg-white/10 backdrop-blur-2xl px-4 py-1.5 rounded-full text-[10px] font-extrabold text-white flex items-center gap-2 border border-white/20">
                <Eye size={14} className="text-primary" />
                {stream.viewers}
             </div>
             <div className="bg-white/10 backdrop-blur-2xl px-4 py-1.5 rounded-full text-[10px] font-extrabold text-white flex items-center gap-2 border border-white/20">
                <MapPin size={14} className="text-primary" />
                {stream.location}
             </div>
          </div>
        </section>
      ))}

    </div>
  );
}

