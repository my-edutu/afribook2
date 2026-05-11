/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowLeft, 
  QrCode, 
  Share2, 
  Rotate3d, 
  Wallet, 
  Play, 
  Bot, 
  MessageCircle, 
  Sparkles,
  Store,
  Shirt,
  Wand2,
  User as UserIcon
} from 'lucide-react';
import { Screen } from '../types';

interface ShowroomAIScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function ShowroomAIScreen({ onNavigate }: ShowroomAIScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f5] text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md p-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('ari-market')}
            className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="text-slate-900" size={24} />
          </button>
          <div>
            <h2 className="text-lg font-black leading-tight tracking-tight uppercase">Amina's Boutique</h2>
            <p className="text-[10px] font-black text-[#ff8c00] uppercase tracking-widest">Showroom AI</p>
          </div>
        </div>
        <div className="flex gap-2 text-slate-600">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100">
            <QrCode size={20} />
          </button>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100">
            <Share2 size={20} />
          </button>
        </div>
      </header>

      <main className="flex-1 pb-32 max-w-md mx-auto w-full bg-white shadow-sm">
        {/* Main Product View */}
        <div className="p-4">
          <div className="relative group overflow-hidden rounded-[2rem] bg-slate-100 aspect-[4/5] shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCk4PzoY0YUHrzDV2XhkShLFwcjdDzHvCLiZrMDO9cHSEEBqSrx7p-KNGi_dGhdzzPT_a7yQn3K7ykXCAJdaWM24tBrQrYut_JdUpm8cI_LzdywDIKhOzXaCiKc23ot5-YVMstWGvIAlcNpzyIeBSEwFV97hKSVL-9HhvXWAxBewmY6k-kh_3RLIrpUD8cjYqYmY9He5CtCGI3ayJWZIpglL6P9g3zTvp_znIrCxRVdBgv6IyZbcwRxFrjn4-ULwkQSMqDaMztZC04")' }}
            >
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-[10px] font-black text-white border border-white/30 uppercase tracking-widest">
                <Rotate3d size={14} /> 3D PREVIEW
              </span>
            </div>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-[10px] font-black opacity-90 uppercase tracking-widest mb-1">Collection 2024</p>
              <h1 className="text-3xl font-black leading-tight uppercase tracking-tight">Modern Ankara Fusion Dress</h1>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="px-6 py-4 flex items-center justify-between border-y border-slate-100 my-2">
          <div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Current Price</p>
            <p className="text-3xl font-black text-[#ff8c00]">45.00 AFR</p>
          </div>
          <button className="flex items-center gap-2 bg-[#ff8c00] hover:brightness-110 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-orange-500/20 active:scale-95">
            <Wallet size={18} />
            Buy via AfriPay
          </button>
        </div>

        {/* Features Selection */}
        <div className="p-6 space-y-6">
          {/* AI Presenter Video Mock */}
          <div className="relative flex items-center justify-center bg-slate-900 rounded-[2rem] aspect-video overflow-hidden group shadow-lg">
            <div 
              className="absolute inset-0 opacity-60 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpTe4HozcqlywjC8dGKQXXd8TKeI0HD7CyP5_cGpWjWwuzTv5GTmSWkpKKBOUEzbxS_H_J5SmgfTl4-oHl5osCX4sDrYX1XRYYAKqOCPIcnPMncjo2ml9gsdS49YSllmBYukoBB9OlwTO6C276YUDuYCFiuOOjceJIyomhahvl5SwGpIQXktVqSpjwcPruSquqCGc8yIcJC3o_0btYG2p0zD4y91fnErJlv_lfN6ZMApL-qu4n_5Py63KVvyi2bfpblCmabd25UUs")' }}
            >
            </div>
            <button className="z-10 flex size-16 items-center justify-center rounded-full bg-[#ff8c00] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95">
              <Play size={32} fill="currentColor" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white text-[10px] font-black flex items-center gap-2 uppercase tracking-widest">
                <Bot size={14} className="text-[#ff8c00]" />
                AI Presenter: Watch Demo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center gap-3 rounded-[2rem] border-2 border-slate-100 p-6 hover:bg-slate-50 transition-colors active:scale-95 shadow-sm">
              <div className="size-14 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ff8c00]">
                {/* STRAIGHTEN was used in original, using custom lucide variation or simple div for sizing icon */}
                <div className="border-2 border-[#ff8c00] w-8 h-4 rounded-sm flex items-center justify-center font-black text-[8px]">CM</div>
              </div>
              <span className="text-xs font-black uppercase tracking-tight">Virtual Fitting</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-3 rounded-[2rem] border-2 border-slate-100 p-6 hover:bg-slate-50 transition-colors active:scale-95 shadow-sm">
              <div className="size-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                <MessageCircle size={28} />
              </div>
              <span className="text-xs font-black uppercase tracking-tight">WhatsApp Shop</span>
            </button>
          </div>
        </div>

        {/* Recommendations */}
        <div className="p-6">
          <h3 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center gap-2">
            <Sparkles size={20} className="text-[#ff8c00]" />
            Stylist Recommendations
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-orange-50/50 p-4 rounded-3xl border border-orange-100 shadow-sm">
              <div 
                className="size-16 rounded-2xl bg-cover bg-center shrink-0 border border-orange-200 shadow-sm" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq8SNtCPoBde1Ej6941iZcTJ6jSDS6-aPIaQ6IeQKgQzrsExd3rbVPtpqbchGir1onK8AyRzkDknFf9xreKqThgMbxgMPDnrQc2Ne6MLZpwYW_NKBHmQnPuMIQeL76j2p6hMOf2gMk4slDh670dz_qlfZcD6cNEbB-gUXwQs3AD-_if0qHUIQE6RzK40YqdX3X72MS7tbsADA_cCRVnJDIUGZi7ZFRyNhebiORwVAdFc9I8MP-dBYyPxQz4TA6J4FpgdvfrmMe1eU")' }}
              ></div>
              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-tight">Gold Accent Clutch</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Perfect match for this pattern</p>
              </div>
              <p className="text-sm font-black text-[#ff8c00]">12 AFR</p>
            </div>
          </div>
        </div>
      </main>

      {/* AI Assistant FAB */}
      <div className="fixed bottom-32 right-6 z-50">
        <button className="group relative flex size-16 items-center justify-center rounded-full bg-[#ff8c00] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all">
          <Bot size={32} />
          <span className="absolute right-full mr-4 whitespace-nowrap rounded-2xl bg-slate-900 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with AI Stylist
          </span>
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff8c00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-[#ff8c00] border-2 border-white"></span>
          </span>
        </button>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40 flex gap-2 border-t border-slate-100 bg-white/95 backdrop-blur-md px-4 pb-8 pt-3">
        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-[#ff8c00]">
          <Store size={24} />
          <p className="text-[10px] font-black uppercase tracking-widest">Showroom</p>
        </button>
        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400">
          <Shirt size={24} />
          <p className="text-[10px] font-black uppercase tracking-widest">Wardrobe</p>
        </button>
        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400">
          <Wand2 size={24} />
          <p className="text-[10px] font-black uppercase tracking-widest">Stylist</p>
        </button>
        <button className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400">
          <UserIcon size={24} />
          <p className="text-[10px] font-black uppercase tracking-widest">Profile</p>
        </button>
      </nav>
    </div>
  );
}
