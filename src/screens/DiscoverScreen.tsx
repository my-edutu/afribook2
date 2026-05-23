/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Sparkles, 
  Coins, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Flame, 
  TrendingUp,
  Landmark,
  ShieldCheck,
  History
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';
import InteractiveMap from '../components/InteractiveMap';

interface DiscoverScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function DiscoverScreen({ onNavigate }: DiscoverScreenProps) {
  const [showSearch, setShowSearch] = React.useState(false);
  const tribeCards = [
    { title: 'Digital griots', sub: '12.4k Storytellers', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05GEfdbcZGyvIoR36eeertC_fmfmQ0zRtAoh8XU6y2-1WM-G2bNFM0K50US3yP5LzT0EXwaxzdpeg13al7iKocFZiBzgGTJ4pYIYc6cE2PRAMehTQvv5mh0ZFUX-QnI3soJ7s068j2SxWUUOKBBXJUjl_tH2Jgq4BhIhyi5DIk_xuri-DUbr4thZo6BxPnpHvfegMKof-2DTByUy9xVzONv2YJFPDET5u02lUaP_PFx4kRs_A5wnMizeDABhCR9i-6V66q9pFhuo' },
    { title: 'Tech hub lagos', sub: '8.9k Innovators', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALhD0dYn6g_JpGb3QOB9Apt9cOKP1dBijl57wQa2FdXypNd4FvvPASGhhRNSKVb1JBnA4EKnvZCdOxft_8DUDhkEhB7Pyf0XYHbC-uqDX6p2AmeDx0s9bSWXWKZE0u3ZiOhiNGGoZXnLL1EXKap8WYWJsoSegwmXx30nsaX4uH1K_gO07Tx80vpuKLV2j7PvXx_F0z882lQX03Du8hCKycov18j8yc7aTapbllE6BTiDQEey2IfXnGYKyykYjOIGW9YFZlZohb1-A' },
    { title: 'Woven heritage', sub: '5.2k Artisans', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeKZP0rzDrrBfdlHlWVH1DnkZywkoqnzCoCAkUCUFdsFVZvWQVo7LitzzFMCLgztSUFCi737G4r86ckzNqyDx5kW0v_GRBoSZ3i3CHKVejWIwdtYcSSfxGkgl5zZU66ufeTuOHZwt1SEwzsdq04kfgDAm2UE_8EUUMpY_1JzyUqbxfE75iQMw08Xlw2xGxqyF3ewstP65PD2yXOwT0XWWUk41oEqHytYA4usFm8o0hZRSfqPK7ouQIIYtz1B46UaYTm75XIPBPmj0' },
    { title: 'Urban dakar', sub: '15.1k Explorers', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKTR_QADbB2LKxLxCldzFzsdMfREgAKfyP9x1Rhbqr_Zv2m12lFD5ixs7cVv-c7zSSulh0hWPiJfCbsnfhg3rCJZgaF_1J2tnvirrLJHyVSzdG5CTZrfvelDmdtZWgtmVT0u3KyO1588ZvJV-3-JZUUPuLdXlTxoREDC-ID4Slw1bVlpMPi70TU-62NoiNgM3vw-eQ2n1mGyXlhFKxECwT716em0BTD-3MR9uVUWQUxCypFdVh2LcwO2cOWnBYHRt0_YHJ4OBC49A' },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop < -20) setShowSearch(true);
  };

  return (
    <div 
      className="flex flex-col pb-32 bg-slate-50 min-h-screen overflow-y-auto no-scrollbar"
      onScroll={handleScroll}
    >
      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 py-4 bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search snap africa map…" 
                className="w-full h-12 bg-slate-100 rounded-[20px] pl-12 pr-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Recommended Section */}
      <section className="px-6 pt-10 pb-4 space-y-8">
        <div className="flex items-center justify-between">
          <div>
             <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Snap africa</h2>
             <p className="text-[10px] font-bold text-slate-400 tracking-wide mt-2">Ai recommended journey</p>
          </div>
          <span className="text-[10px] font-extrabold text-secondary tracking-wide flex items-center gap-1 bg-secondary/5 px-4 py-2 rounded-xl">
            <Sparkles size={14} fill="currentColor" /> Verified insights
          </span>
        </div>
        
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {[
            {
              title: 'Burnaby sound: Virtual world tour',
              tag: 'Live event hub',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAysc-8Mngpr7BDYIR3KJiMmeDMe-RDDbIV3rYwhItUsBMxkkiU-L3oNuBXH7t9TMYJ-jb6bXGEKRvv5xZR758PsJTyE04PJ-Skxbe2gfxuWSzJmqjXwu1Q_VecPM6O_r1v3Fg2lQtAeDQcS7dNyoMM_WzLjyJsx_m1VbHpnN7jUnxm9MF87a-k2wVh7OkNoXMvm9lp2oB7Wuhl_Ott7kulp-Ai0O6q9vIhvc16YBkHF0fx_fDqXxCPtc5GCZ88hJno_n57UTEAcU',
              color: 'bg-slate-900'
            },
            {
              title: 'Dakar digital: 3d art expo',
              tag: 'Virtual gallery',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05GEfdbcZGyvIoR36eeertC_fmfmQ0zRtAoh8XU6y2-1WM-G2bNFM0K50US3yP5LzT0EXwaxzdpeg13al7iKocFZiBzgGTJ4pYIYc6cE2PRAMehTQvv5mh0ZFUX-QnI3soJ7s068j2SxWUUOKBBXJUjl_tH2Jgq4BhIhyi5DIk_xuri-DUbr4thZo6BxPnpHvfegMKof-2DTByUy9xVzONv2YJFPDET5u02lUaP_PFx4kRs_A5wnMizeDABhCR9i-6V66q9pFhuo',
              color: 'bg-secondary'
            }
          ].map((card, i) => (
            <div key={i} className={`min-w-[320px] relative group overflow-hidden rounded-[48px] ${card.color} h-64 border border-slate-200/10 shadow-xl`}>
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60" 
                src={card.img} 
                alt={card.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-primary font-extrabold text-[10px] tracking-wide mb-2 block">{card.tag}</span>
                <h3 className="text-xl font-extrabold text-white mb-4 leading-tight lowercase first-letter:uppercase">{card.title}</h3>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-extrabold text-[10px] tracking-wide hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-black/20">
                  Join experience
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For Your Journey */}
      <section className="px-6 py-10 space-y-8">
        <h2 className="text-[10px] font-extrabold text-slate-400 tracking-wide ml-2">For your journey</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-secondary/5 border border-secondary/10 p-10 rounded-[48px] relative overflow-hidden group active:scale-[0.99] transition-colors">
            <div className="relative z-10 flex flex-col gap-6">
              <div className="size-16 rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary shadow-inner">
                <Coins size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-slate-900 leading-tight">Afripay tips</h4>
                <p className="text-slate-500 text-sm font-medium mt-2 leading-relaxed">Save 15% on tickets when using your local wallet today.</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 p-10 rounded-[48px] relative overflow-hidden group active:scale-[0.99] transition-colors">
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-3xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                  <FileText size={32} />
                </div>
                <span className="text-[10px] font-extrabold tracking-wide text-emerald-400">New archive</span>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-slate-900 leading-tight">Songhai empire records</h4>
                <p className="text-slate-500 text-sm font-medium mt-2 leading-relaxed">Explore fully verified digitized heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="px-6 py-10">
        <div className="flex items-center justify-between mb-8 px-2">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Africa pulse</h2>
          <span className="text-[10px] font-extrabold text-primary px-4 py-2 bg-primary/5 rounded-xl tracking-wide">Live connect</span>
        </div>
        <div className="relative w-full aspect-[4/5] bg-white rounded-[56px] overflow-hidden border border-slate-100 shadow-2xl p-2">
           <InteractiveMap />
        </div>
      </section>

      {/* Popular Tribes */}
      <section className="px-6 py-10 space-y-10">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Popular tribes</h2>
          <button className="text-primary font-extrabold text-[10px] tracking-wide bg-primary/5 px-4 py-2 rounded-xl">Explore all</button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {tribeCards.map((tribe, i) => (
            <div key={i} className="flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-square rounded-[40px] overflow-hidden bg-white transition-colors group-hover:scale-105 border border-slate-50 shadow-sm p-2">
                <img className="w-full h-full object-cover rounded-[32px] shadow-inner" src={tribe.img} alt={tribe.title} />
              </div>
              <div className="text-center">
                <p className="font-extrabold text-slate-900 text-base lowercase first-letter:uppercase">{tribe.title}</p>
                <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-1">{tribe.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
