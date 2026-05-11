/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Puzzle, 
  Gamepad2, 
  Wrench, 
  Sparkles, 
  Search, 
  Star,
  Download,
  Share2,
  ChevronRight,
  Monitor,
  LayoutGrid,
  ArrowLeft
} from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface MiniAppCenterProps {
  onNavigate: (screen: Screen) => void;
}

export default function MiniAppCenter({ onNavigate }: MiniAppCenterProps) {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Header */}
      <div className="px-6 pt-12 pb-8 sticky top-0 z-30 bg-white">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={() => onNavigate('more')}
            className="p-3 bg-slate-50 rounded-2xl text-slate-400 active:scale-90 transition-all shadow-sm"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-black tracking-tighter text-slate-900 uppercase">App centre</h1>
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Ecosystem & integrations</p>
      </div>

      <main className="flex-1 px-6 pb-32 flex flex-col items-center justify-center text-center">
        <div className="relative mb-12">
          <div className="size-48 bg-primary/5 rounded-[64px] flex items-center justify-center text-primary shadow-inner ring-[24px] ring-primary/5">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Puzzle size={84} strokeWidth={2.5} />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-4 -right-4 bg-slate-900 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl border-4 border-white"
          >
            Q3 2026
          </motion.div>
        </div>

        <div className="space-y-6 max-w-sm mx-auto">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-none">Coming soon</h2>
            <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em]">Connecting the continent</p>
          </div>
          
          <p className="text-slate-500 text-base font-medium leading-relaxed">
            The Snap Africa Mini-App Center is being built to host thousands of decentralized tools, games, and services. 
            A unified ecosystem for the new digital heritage.
          </p>

          <div className="pt-8 grid grid-cols-1 gap-4 w-full">
            <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 flex items-center gap-5 text-left opacity-60 grayscale">
               <div className="size-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-300">
                 <Gamepad2 size={28} />
               </div>
               <div>
                  <h4 className="font-black text-slate-900 text-sm tracking-tight">Mini games</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Tribe quests & rewards</p>
               </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-[32px] border border-slate-100 flex items-center gap-5 text-left opacity-60 grayscale">
               <div className="size-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-300">
                 <Sparkles size={28} />
               </div>
               <div>
                  <h4 className="font-black text-slate-900 text-sm tracking-tight">Ai utilities</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Heritage recognition</p>
               </div>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('more')}
            className="w-full mt-12 bg-slate-900 text-white py-6 rounded-[32px] font-black text-[11px] uppercase tracking-widest shadow-2xl shadow-slate-900/20 active:scale-95 transition-all"
          >
            Return to dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
