/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Bell, 
  Filter, 
  ShoppingBag,
  Store,
  User,
  Plus,
  Settings,
  ChevronRight,
  TrendingUp,
  Package,
  DollarSign
} from 'lucide-react';
import { Screen } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface AriMarketScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function AriMarketScreen({ onNavigate }: AriMarketScreenProps) {
  const [view, setView] = useState<'explore' | 'manage'>('explore');
  const [showSearch, setShowSearch] = useState(false);
  const [setupStep, setSetupStep] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop < -20) setShowSearch(true);
  };

  const shopItems = [
    {
      id: 1,
      title: 'Neural link pro headphones',
      desc: 'Hyper-focused sound for deep work. Experience the next level of immersive audio with neural tracking.',
      price: 'NGN 245,000',
      tag: "Best seller",
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6rxH8nemEjHoButoPj0u7G9bEP5Lx_ShHuerp2lhZYtHwRMafucYgCavPWT1f6vQqjLap-TzOxEKLDkgkDmztjtIhGCIz7fvHvNWzhOJGs8fY-RmbhVzFK_rufmOX9V0mAkHPy1r1_9pVHU16b3npoD6aFSjSFfschpBiQjI-eM_-OcTX8sDFMsvf_Wkc7cbiuS0AhR1lQUKk0z1vGG2eEGftONjvX8Pwa13JkhY1GHRL91cQbZSWetIYqchHdYfAxBlmtTtVK5o',
      featured: true
    },
    {
      id: 2,
      title: 'Founders watch v2',
      desc: 'Track productivity & vitals across all your connected devices in the metaverse.',
      price: 'NGN 185,000',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVCz7_YCt2K3dmAioX760cuvvGHuXKkDnuov34jHm-Fb_kbBRYn9bjwudUZSd1iGDfd7jN50AdDBYaYq6AzxoifhOYkIqzoCRJQDrlhUxAXAhLLPRPetei7wL4ppc7bt6j-cuGjN8t4_IFbInVkwmVoh-TuAYKxgjvZUpXwUJo4qr2iSqEtebiedUl36ljSNP4h82xAwUAYLcusn9yXwLcBrQMLOe2rcbSMIL-i9qhtTuG0omuv4AWLLLg_31KV92ZeO0ElHnS1MI'
    }
  ];

  const myStores = [
    { id: 1, name: "Amina's Boutique", sales: 'NGN 1.2M', inventory: 48, status: 'Active' },
    { id: 2, name: "Tech Hub Hardware", sales: 'NGN 450k', inventory: 12, status: 'Review' }
  ];

  return (
    <div 
      className="flex flex-col bg-slate-50 min-h-screen overflow-y-auto no-scrollbar scroll-smooth"
      onScroll={handleScroll}
      ref={scrollRef}
    >
      {/* Header */}
      <header className="bg-white px-6 py-8 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Arimarket</h1>
          </div>
          <div className="flex items-center gap-4">
             <button 
               onClick={() => setShowSearch(!showSearch)}
               className={`p-3 rounded-2xl transition-colors shadow-sm ${showSearch ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400'}`}
             >
               <Package size={22} />
             </button>
             <div className="flex bg-slate-50 p-1.5 rounded-2xl shadow-inner">
               <button 
                 onClick={() => setView('explore')}
                 className={`px-5 py-2.5 rounded-xl text-[10px] font-extrabold tracking-wide transition-colors ${view === 'explore' ? 'bg-white shadow-md text-primary' : 'text-slate-400'}`}
               >
                 Explore
               </button>
               <button 
                 onClick={() => setView('manage')}
                 className={`px-5 py-2.5 rounded-xl text-[10px] font-extrabold tracking-wide transition-colors ${view === 'manage' ? 'bg-white shadow-md text-primary' : 'text-slate-400'}`}
               >
                 Manage
               </button>
             </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 py-6 bg-white border-b border-slate-100 overflow-hidden shadow-sm"
          >
            <div className="relative">
              <Package className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
              <input 
                type="text" 
                placeholder="Search products, brands, stores…" 
                className="w-full h-16 bg-slate-50 rounded-3xl pl-16 pr-6 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 shadow-inner border-none focus:ring-4 focus:ring-primary/5 transition-colors text-slate-900 placeholder:text-slate-300"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pb-32">
        <AnimatePresence mode="wait">
          {view === 'explore' ? (
            <motion.div
              key="explore"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="px-6 pt-10 max-w-lg mx-auto w-full"
            >
              <h2 className="text-[10px] font-extrabold text-slate-400 tracking-wide mb-10 ml-2">Market discovery</h2>
              
              <div className="grid grid-cols-1 gap-10">
                {shopItems.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => onNavigate('ari-market-store')}
                    className="bg-white rounded-[56px] overflow-hidden flex flex-col transition-colors hover:shadow-2xl cursor-pointer border border-slate-100 shadow-sm p-4 group"
                  >
                    <div className="h-72 relative overflow-hidden rounded-[40px] shadow-inner mb-2">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      {item.tag && (
                        <span className="absolute top-8 left-8 bg-primary text-white px-5 py-2.5 rounded-2xl text-[10px] font-extrabold tracking-wide shadow-2xl shadow-primary/40 ring-4 ring-white/20 backdrop-blur-sm">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-extrabold text-2xl text-slate-900 leading-tight tracking-tight">{item.title}</h3>
                        <p className="text-primary font-extrabold text-xl bg-primary/5 px-4 py-2 rounded-2xl">{item.price}</p>
                      </div>
                      <p className="text-slate-500 text-sm mb-10 font-medium leading-relaxed">{item.desc}</p>
                      <button className="w-full py-5 bg-slate-900 text-white rounded-[24px] text-[10px] font-extrabold tracking-wide hover:bg-primary transition-colors active:scale-[0.98] shadow-2xl shadow-slate-900/10 flex items-center justify-center gap-3">
                        <Store size={20} />
                        View showroom
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="manage"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="px-6 pt-10 max-w-lg mx-auto w-full"
            >
              {setupStep === 0 && myStores.length === 0 ? (
                <div className="px-6 py-12 flex flex-col items-center justify-center min-h-[60vh] text-center bg-white rounded-[56px] shadow-sm border border-slate-100 p-10">
                  <div className="size-28 bg-primary/5 rounded-[40px] flex items-center justify-center text-primary mx-auto mb-10 shadow-inner ring-8 ring-primary/5">
                    <ShoppingBag size={56} />
                  </div>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Open your store</h2>
                  <p className="text-slate-500 text-base font-medium leading-relaxed max-w-xs mx-auto mb-12">Start selling your crafts, products, and services to the entire continent.</p>
                  <button 
                    onClick={() => setSetupStep(1)}
                    className="w-full bg-slate-900 text-white py-6 rounded-[32px] font-extrabold text-[11px] tracking-wide shadow-2xl shadow-slate-900/20 active:scale-95 transition-colors flex items-center justify-center gap-4 group"
                  >
                    Get started
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : setupStep > 0 ? (
                <div className="w-full space-y-12 text-left py-10">
                  <div>
                     <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none">Store profile</h3>
                     <p className="text-slate-400 text-[11px] font-extrabold tracking-wide mt-4 flex items-center gap-2">
                       Step {setupStep} of 3 <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: `${(setupStep/3)*100}%` }} /></div>
                     </p>
                  </div>
                  <div className="space-y-8">
                     <div className="space-y-4">
                       <label className="text-[10px] font-extrabold text-slate-400 tracking-wide ml-2">Store name</label>
                       <input className="w-full h-20 bg-white rounded-[32px] px-8 border border-slate-100 shadow-sm focus:ring-0 focus:border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 font-bold text-slate-900 placeholder:text-slate-300 text-lg" placeholder="e.g. Benin heritage crafts" />
                     </div>
                     <div className="space-y-4 relative">
                       <label className="text-[10px] font-extrabold text-slate-400 tracking-wide ml-2">Store category</label>
                       <select className="w-full h-20 bg-white rounded-[32px] px-8 border border-slate-100 shadow-sm focus:ring-0 focus:border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 font-bold appearance-none text-slate-900 text-lg">
                         <option>Arts & crafts</option>
                         <option>Fashion & textiles</option>
                         <option>Food & produce</option>
                         <option>Digital services</option>
                       </select>
                       <ChevronRight className="absolute right-8 top-[4rem] translate-y-0.5 rotate-90 text-slate-300 pointer-events-none" size={24} />
                     </div>
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button onClick={() => setSetupStep(0)} className="size-20 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 active:scale-90 transition-colors shadow-sm">
                      <ArrowLeft size={32} />
                    </button>
                    <button className="flex-1 bg-primary text-white py-6 rounded-[32px] font-extrabold text-[11px] tracking-wide shadow-2xl shadow-primary/20 active:scale-95 transition-colors">
                      Continue setup
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="bg-slate-900 rounded-[64px] p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                      <p className="text-white/40 text-[10px] font-extrabold tracking-wide mb-4">Total revenue</p>
                      <h3 className="text-5xl font-extrabold mb-10 tracking-tight">NGN 1,650,000</h3>
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-white/10 backdrop-blur-3xl px-6 py-4 rounded-[28px] flex items-center gap-3 border border-white/5 shadow-2xl">
                          <TrendingUp size={20} className="text-emerald-400" />
                          <span className="text-base font-extrabold tracking-tight">+12.5%</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl px-6 py-4 rounded-[28px] flex items-center gap-3 border border-white/5 shadow-2xl">
                          <ShoppingCart size={20} className="text-primary" />
                          <span className="text-base font-extrabold tracking-tight">142 sales</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-40 -top-40 size-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute -left-40 -bottom-40 size-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-[10px] font-extrabold text-slate-400 tracking-wide ml-2">My stores</h2>
                    <button 
                      onClick={() => setSetupStep(1)}
                      className="text-primary text-[10px] font-extrabold tracking-wide bg-primary/5 px-6 py-3 rounded-[20px] flex items-center gap-3 transition-colors hover:bg-primary/10 active:scale-95 shadow-sm"
                    >
                      <Plus size={18} strokeWidth={4} />
                      New store
                    </button>
                  </div>

                  <div className="space-y-6">
                    {myStores.map(store => (
                      <div key={store.id} className="bg-white p-8 rounded-[48px] border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-primary/20 transition-colors shadow-sm active:scale-[0.99]">
                        <div className="flex items-center gap-6">
                          <div className="size-20 rounded-3xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-inner ring-8 ring-slate-50/50">
                            <Store size={36} />
                          </div>
                          <div>
                            <h4 className="font-extrabold text-xl text-slate-900 tracking-tight">{store.name}</h4>
                            <div className="flex items-center gap-6 text-[10px] text-slate-400 font-bold tracking-wide mt-2 opacity-80">
                               <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl"><Package size={14} /> {store.inventory} items</span>
                               <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl"><DollarSign size={14} /> {store.sales} sales</span>
                            </div>
                          </div>
                        </div>
                        <div className="size-14 rounded-[20px] bg-slate-50 flex items-center justify-center text-slate-200 group-hover:text-primary transition-colors shadow-sm">
                          <ChevronRight size={28} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-6 pb-12">
                    <button className="bg-white p-10 rounded-[48px] border border-slate-100 flex flex-col gap-6 hover:border-primary/20 transition-colors shadow-sm active:scale-95 text-left group">
                      <div className="size-20 rounded-[28px] bg-orange-50 flex items-center justify-center text-orange-500 shadow-inner ring-8 ring-orange-50/20 group-hover:scale-105 transition-transform">
                        <User size={36} />
                      </div>
                      <div>
                        <span className="text-lg font-extrabold text-slate-900 tracking-tight leading-none block">Seller profile</span>
                        <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-2">Personal store info</p>
                      </div>
                    </button>
                    <button className="bg-white p-10 rounded-[48px] border border-slate-100 flex flex-col gap-6 hover:border-primary/20 transition-colors shadow-sm active:scale-95 text-left group">
                      <div className="size-20 rounded-[28px] bg-blue-50 flex items-center justify-center text-blue-500 shadow-inner ring-8 ring-blue-50/20 group-hover:scale-105 transition-transform">
                        <Settings size={36} />
                      </div>
                      <div>
                        <span className="text-lg font-extrabold text-slate-900 tracking-tight leading-none block">Market settings</span>
                        <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-2">Manage shop prefs</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Cart button overlay */}
      {view === 'explore' && (
        <div className="fixed bottom-12 right-8 z-50">
          <button className="size-24 rounded-[40px] bg-slate-900 text-white shadow-2xl flex items-center justify-center relative active:scale-95 transition-colors rotate-3 hover:rotate-0 border-4 border-white group">
            <ShoppingBag size={38} className="group-hover:scale-110 transition-transform" />
            <span className="absolute -top-3 -right-3 size-10 bg-primary rounded-full border-4 border-slate-50 text-xs font-extrabold flex items-center justify-center shadow-2xl">3</span>
          </button>
        </div>
      )}
    </div>
  );
}

