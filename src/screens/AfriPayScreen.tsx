/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  History,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { MOCK_TRANSACTIONS } from '../constants';
import { ActionButton, IconButton, MobilePage, SectionHeader, SurfaceCard } from '../components/MobileUI';
import { Screen } from '../types';

interface AfriPayScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function AfriPayScreen(_: AfriPayScreenProps) {
  return (
    <MobilePage>
      <section className="px-6 py-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-amber-600 p-6 text-white shadow-xl shadow-primary/20">
          <div className="relative z-10">
            <div className="mb-8 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-xl bg-white/20 p-2 backdrop-blur-md">
                  <Wallet size={20} />
                </div>
                <span className="text-sm font-bold">AfriPay Wallet</span>
              </div>
              <IconButton label="More wallet options" icon={MoreHorizontal} className="bg-white/20 text-white backdrop-blur-md hover:bg-white/30" />
            </div>

            <div className="mb-8">
              <p className="mb-1 text-xs font-medium text-white/80">Total balance</p>
              <h2 className="text-3xl font-extrabold tracking-tight tabular-nums">NGN 4,450,200.80</h2>
              <div className="mt-2 flex items-center gap-1 text-xs font-bold text-green-300">
                <TrendingUp size={14} />
                +12.5% this month
              </div>
            </div>

            <div className="flex gap-3">
              <ActionButton tone="light" className="flex flex-1 items-center justify-center gap-2 text-primary">
                <Plus size={18} />
                Add Funds
              </ActionButton>
              <ActionButton tone="ghost" className="flex flex-1 items-center justify-center gap-2 border border-white/20 bg-white/20 text-white backdrop-blur-md hover:bg-white/30">
                <ArrowUpRight size={18} />
                Send
              </ActionButton>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-amber-400/20 blur-2xl" />
        </div>
      </section>

      <section className="mb-8 px-6">
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Pay', icon: CreditCard, color: 'bg-blue-100 text-blue-600' },
            { label: 'Request', icon: ArrowDownLeft, color: 'bg-green-100 text-green-600' },
            { label: 'Tribe Fund', icon: ShieldCheck, color: 'bg-amber-100 text-amber-600' },
            { label: 'History', icon: History, color: 'bg-slate-100 text-slate-600' },
          ].map((action) => (
            <button key={action.label} type="button" className="flex min-w-0 flex-col items-center gap-2 rounded-2xl p-1 transition-transform active:scale-[0.98]">
              <div className={`flex size-14 items-center justify-center rounded-2xl shadow-sm ${action.color}`}>
                <action.icon size={24} />
              </div>
              <span className="w-full truncate text-center text-[11px] font-bold text-slate-600">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="px-6">
        <SectionHeader title="Recent Transactions" action={<button type="button" className="text-sm font-bold text-primary">View All</button>} />
        <div className="space-y-3">
          {MOCK_TRANSACTIONS.map((tx) => (
            <SurfaceCard key={tx.id} className="flex items-center justify-between p-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {tx.type === 'credit' ? <ArrowDownLeft size={24} /> : <ArrowUpRight size={24} />}
                </div>
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-bold text-slate-950">{tx.title}</h4>
                  <p className="text-[11px] font-medium text-slate-500">{tx.date}</p>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <p className={`text-sm font-bold tabular-nums ${tx.type === 'credit' ? 'text-green-600' : 'text-slate-900'}`}>NGN {tx.amount.replace('$', '')}</p>
                {tx.verified && (
                  <span className="flex items-center justify-end gap-0.5 text-[10px] font-bold text-primary">
                    <ShieldCheck size={10} /> Verified
                  </span>
                )}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section className="mt-8 px-6">
        <div className="flex items-center gap-4 rounded-3xl bg-slate-900 p-5 text-white shadow-xl">
          <div className="rounded-xl bg-primary/20 p-3">
            <ShieldCheck size={28} className="text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Blockchain Secured</h3>
            <p className="text-xs text-slate-400">All transactions are encrypted and recorded on the AfriChain ledger.</p>
          </div>
        </div>
      </section>
    </MobilePage>
  );
}
