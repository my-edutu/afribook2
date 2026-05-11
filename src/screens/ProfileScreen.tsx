/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Settings, Share2, Edit3, Trophy, Users, ShieldCheck, MapPin, Grid, List } from 'lucide-react';
import { Screen } from '../types';

interface ProfileScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="flex flex-col pb-8">
      {/* Profile Header */}
      <section className="relative px-4 pt-8 pb-6 bg-white border-b border-slate-100">
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className="size-24 rounded-full border-4 border-primary/20 p-1">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYcG24Dieu84a3gmMn85e5BjbaF9vnbx5O6VKycbLNsSuEZtwI-9vn7p9Eo9EX8ATUs7wdAXSllcaK28WG5KMp08jOA2SagxmnxsI2wl95LLSiy0a6fr4Xo3CzifS7z86lE2Myaiduu0Xpvdc6vh2SmhXxHxUfDNBy6nOQltZOFtRDohhkW0UHE1XGHMHtwjQ-IJOYYialORWdwChDCX7dJTOp0OTYsdio87oL_Dp-yodBVOfHQunDDCI_7adeRosZVWbhfMaFev4" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white">
              <ShieldCheck size={14} />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-100 rounded-full text-slate-600">
              <Share2 size={20} />
            </button>
            <button className="p-2 bg-slate-100 rounded-full text-slate-600">
              <Settings size={20} />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-black tracking-tight text-slate-900">Kofi mensah</h1>
          <p className="text-slate-500 text-sm font-bold flex items-center gap-1 mt-1">
            @kofimensah • <MapPin size={12} /> Accra, ghana
          </p>
          <p className="mt-4 text-sm text-slate-500 font-medium leading-relaxed">
            Digital artist & cultural archivist. Passionate about documenting west african heritage through modern technology.
          </p>
        </div>

        <div className="flex gap-4 border-t border-slate-50 pt-8">
          <div className="flex-1 text-center">
            <p className="text-xl font-black text-slate-900">12</p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Records</p>
          </div>
          <div className="w-px h-10 bg-slate-100 self-center opacity-50"></div>
          <div className="flex-1 text-center">
            <p className="text-xl font-black text-slate-900">1.2k</p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Followers</p>
          </div>
          <div className="w-px h-10 bg-slate-100 self-center opacity-50"></div>
          <div className="flex-1 text-center">
            <p className="text-xl font-black text-slate-900">450</p>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Voting power</p>
          </div>
        </div>
      </section>

      {/* Profile Tabs */}
      <section className="sticky top-16 z-10 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6">
        <div className="flex gap-8">
          <button className="py-5 text-[10px] font-black text-primary border-b-4 border-primary uppercase tracking-widest">My records</button>
          <button className="py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tribes</button>
          <button className="py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Activity</button>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6 pt-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Verified achievements</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-100 text-slate-400 rounded-xl">
              <Grid size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Largest Mural', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA15Elxt6oFPrdhzcuSi0AEbU6AfgsuTczLG6OeFvGkr1zOxDXmTQvo3yG0uVW9EjwZO6GYAmnA-UoUrJFi7vBA2c5gefvjmIcBx38cj-HSsFoG1uLFE5awZZVIb9VGEmaWbdVsKc5CcigeI2XRG2igoMkZyKUZda7Bgw70UvfZTnueiPstukcUZktE21oTdqBjonVQmJWIry6sYLBPB47WQVCIMxFCjXLjIg9TQwMExWJELsqVzkQAKPXZT7pp33C-dMzuP1xz_R8' },
            { title: 'Fastest Code', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVcG06xrmE1M93ppf47PsxRLhxfGF6lrjPvBtqmqo5R-hN5XeDTltitXsLUnyI-k34LbAyPNln30TkCciDj4cYbXqlqFydZKSkEJ3OFxKn9Mc0gamnjvEyBkAnT_OufwXg7A8PG6cem89PMF2NstSIQMQNr1Foc0IXQ-E5UvFKveM7gV1ficFnAJPNz29ESPME3fL3RG5HzkNecr0r0iztnH1p2xZddGN05onYScuKqjoaH6MzHkTmzRb4BnnM6pjAS-FoVNunh2o' },
            { title: 'Adumu Dance', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB26IIVxVOcqq8sbawzKm1vpRcVX48H8aNcW0Jkb3UJXeZWPP7vvWybEd2GONwaXsL-kOtNJxCEAuL4IeTwxuLsWna_7lHl_WUkoPv_dQ_A_hoQVhu8EV_Sw-aBcbrHFfvfS31NPHaF76f-9196vHzElgh2hjF6geaeZ1g0SUVmzmfamlmIlYxmFPmQYGNrLUozHWg_vgLo102CR91FNQWRF8PTM4SoWLRUWGKeePo6y9ZyFf6MXATdag0OigTbMlrwf0nB_aIEKSo' },
            { title: 'Street Food', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vmTeHy5H8yzuIwYzT8byl_nfsz5EX_5GqzIpvXIVQkAxMFJvmkzkdEX8uxiWo2M9cwsnVbyTp4iJLxWQgzCINiG8PPLA-ZAh6-v77_QkovNERVcpKxsmWkydZxWuOi3wSYYvNeNfClaOKeAPIasGqcHNyX_GyXm2tI9V5kQ9DTEvNRgA2Lkz5o2CIcfh2jb9XmyOqXsTVxClwbjdZhsN96efmVcf5QNv3dG0K-ZXlp94BF1wyCm9zfhguF3jRDj3bCH-HCrw0qI' },
          ].map((item, i) => (
            <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-[10px] font-bold text-white truncate">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tribe Membership */}
      <section className="px-4 mt-4">
        <h2 className="font-bold text-slate-900 mb-4">Active Tribes</h2>
        <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm">Lagos Tech Founders</h4>
              <p className="text-[11px] text-slate-500 font-medium">1.2k members • Verified</p>
            </div>
          </div>
          <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold border border-slate-200">View</button>
        </div>
      </section>
    </div>
  );
}
