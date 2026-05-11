/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ChevronRight, 
  Bell, 
  Lock, 
  Eye, 
  Smartphone, 
  Globe, 
  HelpCircle,
  Info
} from 'lucide-react';

interface SettingsScreenProps {
  onNavigate?: (screen: any) => void;
}

export default function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const sections = [
    {
      title: 'Account',
      items: [
        { icon: Bell, label: 'Notifications', value: 'On' },
        { icon: Lock, label: 'Security & privacy', value: 'Managed' },
        { icon: Eye, label: 'Profile visibility', value: 'Public' },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Smartphone, label: 'App theme', value: 'Light' },
        { icon: Globe, label: 'Language', value: 'English (UK)' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help center', value: '' },
        { icon: Info, label: 'About afribook', value: 'v2.4.0' },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-32">
      <div className="px-6 py-10 bg-white border-b border-slate-100 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Settings</h2>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Manage your digital heritage experience</p>
      </div>

      <div className="p-6 space-y-12">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{section.title}</h3>
            <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm p-2">
              {section.items.map((item, i) => (
                <button 
                  key={i}
                  className={`w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-all active:scale-[0.98] rounded-[32px] ${
                    i !== section.items.length - 1 ? 'mb-1' : ''
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 shadow-inner">
                      <item.icon size={28} />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {item.value && <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/5 px-3 py-1.5 rounded-lg">{item.value}</span>}
                    <ChevronRight size={20} className="text-slate-200" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 mt-6">
        <button className="w-full py-6 rounded-[32px] bg-white border border-slate-100 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
          Clear cache
        </button>
      </div>
    </div>
  );
}
