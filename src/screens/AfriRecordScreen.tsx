/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Trophy, Star, Share2, Verified, History, AlertTriangle, Plus } from 'lucide-react';
import { MOCK_RECORDS } from '../constants';
import { Screen } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function AfriRecordScreen({ onNavigate }: HomeScreenProps) {
  const categories = [
    { id: 'discover', label: 'All Records', active: true },
    { id: 'discover', label: 'Sports', icon: '⚽' },
    { id: 'discover', label: 'Innovation', icon: '💡' },
    { id: 'discover', label: 'Culture', icon: '🎭' },
    { id: 'discover', label: 'Youth', icon: '👥' },
    { id: 'discover', label: 'Agriculture', icon: '🚜' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="px-4 pt-6 pb-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Africa’s Official <span className="text-primary">Record Archive</span>
        </h1>
        <p className="mt-2 text-slate-600 text-sm">
          Documenting excellence, heritage, and the extraordinary across the continent.
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => onNavigate('discover')}
            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold transition-colors ${
              cat.active 
                ? 'bg-primary text-white shadow-sm' 
                : 'bg-primary/10 text-slate-700 hover:bg-primary/20'
            }`}
          >
            {cat.icon && <span>{cat.icon}</span>}
            <p>{cat.label}</p>
          </button>
        ))}
      </div>

      {/* CTA Section */}
      <div className="px-4 py-2">
        <button 
          onClick={() => onNavigate('claim-new-record')}
          className="w-full flex items-center justify-between gap-3 bg-white border-2 border-dashed border-primary/20 p-6 rounded-3xl group hover:border-primary/40 transition-all shadow-sm"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Trophy size={24} />
            </div>
            <div>
              <h3 className="font-black text-slate-900 uppercase tracking-tight">Claim a Record</h3>
              <p className="text-xs text-slate-500 font-bold">Document your achievement</p>
            </div>
          </div>
          <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-primary">
            <Plus size={20} />
          </div>
        </button>
      </div>

      {/* Trending Records */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between py-4">
          <h3 className="text-xl font-bold">Trending Records</h3>
          <button 
            onClick={() => onNavigate('discover')}
            className="text-primary text-sm font-semibold"
          >
            View All
          </button>
        </div>

        <div className="space-y-4">
          {MOCK_RECORDS.map((record) => (
            <div 
              key={record.id} 
              onClick={() => onNavigate('watch')}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div className="relative h-48 w-full">
                <img 
                  src={record.image} 
                  alt={record.title} 
                  className="h-full w-full object-cover"
                />
                <div className={`absolute top-3 right-3 flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${
                  record.status === 'verified' ? 'bg-green-500' : 
                  record.status === 'pending' ? 'bg-amber-500' : 'bg-red-500'
                }`}>
                  {record.status === 'verified' && <Verified size={12} />}
                  {record.status === 'pending' && <History size={12} />}
                  {record.status === 'disputed' && <AlertTriangle size={12} />}
                  {record.status}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold leading-tight">{record.title}</h4>
                  {record.rating && (
                    <div className="flex items-center gap-1 text-primary">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm font-bold">{record.rating}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Claimed by: <span className="font-semibold text-slate-900">{record.claimedBy}</span>
                </p>
                <div className="flex items-center justify-between border-t border-primary/5 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Verification Score</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
                        <div 
                          className={`h-full ${
                            record.verificationScore > 80 ? 'bg-primary' : 
                            record.verificationScore > 50 ? 'bg-amber-500' : 'bg-red-500'
                          }`} 
                          style={{ width: `${record.verificationScore}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs font-bold ${
                         record.verificationScore > 80 ? 'text-primary' : 
                         record.verificationScore > 50 ? 'text-amber-500' : 'text-red-500'
                      }`}>{record.verificationScore}%</span>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Share logic here
                    }}
                    className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-28 right-6 z-30">
        <button 
          onClick={() => onNavigate('claim-new-record')}
          className="w-16 h-16 bg-primary rounded-full shadow-2xl shadow-primary/40 border-4 border-white flex items-center justify-center text-white active:scale-95 transition-all hover:scale-105"
        >
          <Plus size={36} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
