/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Bell,
  ChevronRight,
  CircleDollarSign,
  Eye,
  Globe,
  HelpCircle,
  Info,
  Lock,
  LogOut,
  MapPin,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Trophy,
  User,
  Users,
  Wallet,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Screen } from '../types';

interface SettingsScreenProps {
  onNavigate?: (screen: Screen) => void;
}

interface SettingsRow {
  icon: LucideIcon;
  label: string;
  detail: string;
  value?: string;
  target?: Screen;
  tone?: string;
}

export default function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const navigate = (screen: Screen) => onNavigate?.(screen);

  const projectLinks = [
    { id: 'profile', icon: User, label: 'Profile', detail: 'Identity and public page', tone: 'bg-blue-50 text-blue-600' },
    { id: 'afripay', icon: Wallet, label: 'AfriPay', detail: 'Wallet and payments', tone: 'bg-emerald-50 text-emerald-600' },
    { id: 'tribes', icon: Users, label: 'Tribes', detail: 'Communities and treasury', tone: 'bg-orange-50 text-orange-600' },
    { id: 'afrirecord', icon: Trophy, label: 'Records', detail: 'Claims and achievements', tone: 'bg-amber-50 text-amber-600' },
  ];

  const sections: { title: string; rows: SettingsRow[] }[] = [
    {
      title: 'Account controls',
      rows: [
        { icon: Bell, label: 'Notifications', detail: 'Posts, tribes, wallet activity', value: 'On' },
        { icon: Lock, label: 'Security & privacy', detail: 'Biometrics, sessions, recovery', value: 'Managed', target: 'security' },
        { icon: Eye, label: 'Profile visibility', detail: 'Control who can view your records', value: 'Public', target: 'profile' },
      ],
    },
    {
      title: 'App preferences',
      rows: [
        { icon: Smartphone, label: 'Appearance', detail: 'Theme, text size, motion', value: 'Light' },
        { icon: Globe, label: 'Language & region', detail: 'English, Lagos time, local formats', value: 'EN' },
        { icon: CircleDollarSign, label: 'Currency', detail: 'Balances, tips, marketplace pricing', value: 'USD' },
      ],
    },
    {
      title: 'Support',
      rows: [
        { icon: HelpCircle, label: 'Help center', detail: 'Guides and account support', target: 'help' },
        { icon: ReceiptText, label: 'Activity records', detail: 'Exports, receipts, audit history', target: 'afripay' },
        { icon: Info, label: 'About AfriBook', detail: 'Version 2.4.0' },
      ],
    },
  ];

  return (
    <div className="min-h-full bg-slate-50 pb-8">
      <main className="space-y-6 px-5 py-5">
        <section className="overflow-hidden rounded-[24px] border border-orange-100 bg-white">
          <div className="border-b border-slate-100 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-[20px] bg-slate-100">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYcG24Dieu84a3gmMn85e5BjbaF9vnbx5O6VKycbLNsSuEZtwI-9vn7p9Eo9EX8ATUs7wdAXSllcaK28WG5KMp08jOA2SagxmnxsI2wl95LLSiy0a6fr4Xo3CzifS7z86lE2Myaiduu0Xpvdc6vh2SmhXxHxUfDNBy6nOQltZOFtRDohhkW0UHE1XGHMHtwjQ-IJOYYialORWdwChDCX7dJTOp0OTYsdio87oL_Dp-yodBVOfHQunDDCI_7adeRosZVWbhfMaFev4"
                    alt="Kofi Mensah"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 flex size-5 items-center justify-center rounded-full bg-orange-500 text-white ring-2 ring-white">
                    <ShieldCheck size={12} />
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-orange-500">Verified account</p>
                  <h1 className="truncate text-2xl font-extrabold leading-tight text-slate-950">Kofi Mensah</h1>
                  <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-slate-400">
                    <MapPin size={13} />
                    Accra, Ghana
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => navigate('profile')}
                className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors hover:text-orange-500 active:scale-95"
                aria-label="Open profile"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-slate-100">
            {[
              ['12', 'Records'],
              ['8', 'Tribes'],
              ['99%', 'Trust'],
            ].map(([value, label]) => (
              <div key={label} className="px-3 py-4 text-center">
                <p className="text-lg font-extrabold text-slate-950">{value}</p>
                <p className="text-[10px] font-bold text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between px-1">
            <h2 className="text-sm font-extrabold text-slate-950">Project pages</h2>
            <span className="text-xs font-bold text-slate-400">Quick navigation</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {projectLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => navigate(link.id as Screen)}
                className="rounded-[22px] border border-slate-100 bg-white p-4 text-left transition-colors hover:border-orange-100 hover:bg-orange-50/30 active:scale-[0.98]"
              >
                <span className={`mb-4 flex size-11 items-center justify-center rounded-2xl ${link.tone}`}>
                  <link.icon size={22} />
                </span>
                <span className="block text-sm font-extrabold text-slate-950">{link.label}</span>
                <span className="mt-1 block text-xs font-semibold leading-snug text-slate-400">{link.detail}</span>
              </button>
            ))}
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 px-1 text-sm font-extrabold text-slate-950">{section.title}</h2>
            <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-white">
              {section.rows.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => item.target && navigate(item.target)}
                  className={`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-slate-50 active:scale-[0.99] ${
                    index > 0 ? 'border-t border-slate-100' : ''
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-500">
                      <item.icon size={21} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-extrabold text-slate-950">{item.label}</span>
                      <span className="mt-0.5 block truncate text-xs font-semibold text-slate-400">{item.detail}</span>
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    {item.value && (
                      <span className="rounded-xl bg-orange-50 px-3 py-1.5 text-xs font-extrabold text-orange-500">
                        {item.value}
                      </span>
                    )}
                    {(item.target || !item.value) && <ChevronRight size={19} className="text-slate-300" />}
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}

        <section className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="rounded-[22px] border border-slate-100 bg-white px-4 py-4 text-sm font-extrabold text-slate-500 transition-colors hover:bg-slate-50 active:scale-[0.98]"
          >
            Clear cache
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-[22px] bg-slate-950 px-4 py-4 text-sm font-extrabold text-white transition-colors hover:bg-slate-800 active:scale-[0.98]"
          >
            <LogOut size={18} />
            Sign out
          </button>
        </section>
      </main>
    </div>
  );
}
