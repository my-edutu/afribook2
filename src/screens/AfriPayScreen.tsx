/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  Search, 
  History, 
  CreditCard, 
  ShieldCheck, 
  MoreHorizontal,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { Screen } from '../types';
import { MOCK_TRANSACTIONS } from '../constants';

interface AfriPayScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function AfriPayScreen({ onNavigate }: AfriPayScreenProps) {
  return (
    <div className="flex flex-col pb-8">
      {/* Wallet Card */}
      <section className="px-4 py-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-amber-600 rounded-[20px] p-6 text-white shadow-2xl shadow-primary/30">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                  <Wallet size={20} />
                </div>
                <span className="text-sm font-bold tracking-tight">AfriPay wallet</span>
              </div>
              <button className="bg-white/20 p-2 rounded-full backdrop-blur-md">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div className="mb-8">
              <p className="text-white/80 text-xs font-medium mb-1">Total balance</p>
              <h2 className="text-4xl font-extrabold tracking-tight">₦4,450,200.80</h2>
              <div className="flex items-center gap-1 mt-2 text-green-300 text-xs font-bold">
                <TrendingUp size={14} />
                +12.5% this month
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-white text-primary py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
                <Plus size={18} />
                Add funds
              </button>
              <button className="flex-1 bg-white/20 backdrop-blur-md text-white py-3 rounded-xl font-bold text-sm border border-white/20 active:scale-95 transition-transform flex items-center justify-center gap-2">
                <ArrowUpRight size={18} />
                Send
              </button>
            </div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 mb-8">
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Pay', icon: CreditCard, color: 'bg-blue-100 text-blue-600' },
            { label: 'Request', icon: ArrowDownLeft, color: 'bg-green-100 text-green-600' },
            { label: 'Tribe fund', icon: ShieldCheck, color: 'bg-amber-100 text-amber-600' },
            { label: 'History', icon: History, color: 'bg-slate-100 text-slate-600' },
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-center gap-2">
              <div className={`size-14 rounded-[20px] flex items-center justify-center shadow-sm ${action.color}`}>
                <action.icon size={24} />
              </div>
              <span className="text-[11px] font-bold text-slate-600">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Recent transactions</h2>
          <button className="text-primary text-sm font-semibold">View all</button>
        </div>

        <div className="space-y-3">
          {MOCK_TRANSACTIONS.map((tx) => (
            <div key={tx.id} className="bg-white p-4 rounded-[20px] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-xl flex items-center justify-center ${
                  tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {tx.type === 'credit' ? <ArrowDownLeft size={24} /> : <ArrowUpRight size={24} />}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{tx.title}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-sm ${
                  tx.type === 'credit' ? 'text-green-600' : 'text-slate-900'
                }`}>₦{tx.amount.replace('$', '')}</p>
                {tx.verified && (
                  <span className="text-[10px] font-bold text-primary flex items-center justify-end gap-0.5">
                    <ShieldCheck size={10} /> Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Banner */}
      <section className="px-4 mt-8">
        <div className="bg-slate-900 rounded-[20px] p-5 text-white flex items-center gap-4 shadow-xl">
          <div className="bg-primary/20 p-3 rounded-xl">
            <ShieldCheck size={28} className="text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Blockchain secured</h3>
            <p className="text-xs text-slate-400">All transactions are encrypted and recorded on the AfriChain ledger.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
