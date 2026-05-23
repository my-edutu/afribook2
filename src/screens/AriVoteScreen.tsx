/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Vote, 
  Users, 
  ChevronRight, 
  Plus, 
  ShieldCheck, 
  TrendingUp, 
  Timer, 
  Search,
  CheckCircle2,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';

interface AriVoteScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function AriVoteScreen({ onNavigate }: AriVoteScreenProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'nominations' | 'completed'>('active');

  const elections = [
    { 
      id: 1, 
      title: 'Tribe Council: Elder Board', 
      desc: 'Electing new representatives for the Lagos Tech Founders council.', 
      endsIn: '2 days', 
      votes: 1240, 
      participants: 12,
      category: 'Governance'
    },
    { 
      id: 2, 
      title: 'Heritage Site Preservation', 
      desc: 'Vote on which site receives the next restoration grant.', 
      endsIn: '5 hours', 
      votes: 4500, 
      participants: 5,
      category: 'Funding'
    }
  ];

  const nominations = [
    { id: 1, name: 'Kofi Mensah', tribe: 'Digital Archivists', reason: 'Outstanding contribution to bronze record preservation.', nominations: 45 },
    { id: 2, name: 'Amina Diallo', tribe: 'Lagos Tech', reason: 'Leadership in decentralised identity nodes.', nominations: 32 }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="px-6 pt-16 pb-8 bg-white border-b border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Arivote</h1>
            <p className="text-slate-400 text-xs font-bold tracking-wide mt-1">Decentralised governance</p>
          </div>
          <button className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center active:scale-95 transition-colors">
            <Plus size={24} />
          </button>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('active')}
            className={`px-6 py-2 rounded-full text-[10px] font-extrabold tracking-wide transition-colors ${activeTab === 'active' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}
          >
            Active polls
          </button>
          <button 
            onClick={() => setActiveTab('nominations')}
            className={`px-6 py-2 rounded-full text-[10px] font-extrabold tracking-wide transition-colors ${activeTab === 'nominations' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}
          >
            Nominations
          </button>
        </div>
      </div>

      <main className="px-6 py-8 pb-32">
        {activeTab === 'active' && (
          <div className="space-y-6">
            <section className="bg-emerald-600 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-600/20">
               <div className="relative z-10">
                 <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={18} />
                    <span className="text-[10px] font-extrabold tracking-wide">Verified voting power: 450</span>
                 </div>
                 <h2 className="text-2xl font-extrabold mb-2 tracking-tight">Your vote matters.</h2>
                 <p className="text-emerald-100 text-xs font-medium opacity-80 leading-relaxed mb-6">Participate in tribe decisions and earn reputation for governance activity.</p>
                 <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-extrabold text-[10px] tracking-wide active:scale-95 transition-colors">View eligibility</button>
               </div>
               <div className="absolute -right-8 -bottom-8 text-white/5 transform rotate-12">
                 <Vote size={200} />
               </div>
            </section>

            <div className="flex items-center justify-between px-2">
              <h3 className="text-[10px] font-extrabold text-slate-400 tracking-wide">Ongoing elections</h3>
              <TrendingUp size={16} className="text-slate-300" />
            </div>

            {elections.map((election) => (
              <div key={election.id} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-colors group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-50 text-slate-400 rounded-lg text-[9px] font-extrabold tracking-wide">{election.category}</span>
                  <div className="flex items-center gap-1.5 text-rose-500">
                    <Timer size={14} />
                    <span className="text-[10px] font-extrabold">{election.endsIn}</span>
                  </div>
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{election.title}</h4>
                <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">{election.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span className="text-[10px] font-bold">{election.votes} voted</span>
                    </div>
                  </div>
                  <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-[9px] font-extrabold tracking-wide group-hover:bg-primary transition-colors">Cast vote</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'nominations' && (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm mb-8">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Nominate a Hero</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">Nominate cultural leaders or high-achievers for official record verification and tribe leadership roles.</p>
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search user by @handle…" 
                  className="w-full h-14 bg-slate-50 rounded-2xl pl-12 pr-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 border border-slate-100 focus:border-primary/30 transition-colors"
                />
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-extrabold text-[11px] tracking-wide active:scale-95 transition-colors">Start nomination</button>
            </div>

            <h3 className="text-[10px] font-extrabold text-slate-400 tracking-wide px-2">Recent nominations</h3>
            
            {nominations.map((nom) => (
              <div key={nom.id} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 leading-tight mb-1">{nom.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold tracking-tight">{nom.tribe} / {nom.nominations} supports</p>
                  </div>
                </div>
                <button className="p-3 bg-slate-50 rounded-full text-slate-400 hover:text-primary transition-colors">
                  <CheckCircle2 size={24} />
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
