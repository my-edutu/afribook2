/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Users, 
  MapPin, 
  Search, 
  Sparkles, 
  Calendar, 
  History,
  GraduationCap,
  Briefcase,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface YearbookScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function YearbookScreen({ onNavigate }: YearbookScreenProps) {
  const memoryCircles = [
    { title: 'UNILAG Class of 2015', type: 'Education', members: '1.2k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbNNQk1_FwijWinaA3SY5ksMs_f48eebyAjlp8TvIlExB7Zr4bg5VorcBN9KGX25LNLmMErGe9vyc5ZG_-JNcspnkftMNwbJ5EG6iElrZr1IUcPNA9hfm_ZQolx_ywh45VSGc7wPg3CqNd2QQzoUJWvpJKd6XyEUSTyIu7L4IQTdtQsuiWbbsSfreEvokQvObIal6h1q58fmwBEHzixPP0vEm6lXU1go5fyMKnzzKoVOxaUohCvSrjT3iv1zZzLcemB3JY5KhzD7U' },
    { title: 'NYSC Oyo 2018', type: 'Service', members: '850', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_exvvwk_lpu5Xk_VeDBqc_6BSCFmnW8FX6DwuarbJ-2j-NTS6l31wz-zdSdQTjLfxM50SsLrun3RF-AqgaBVY4BP5PCrpe1KQQgqioSZeHSoqgPhl_I0f8K3cwqrPAP7wzCzocBn0er11QnQEiHnyLj8djEAkPgqlgCLFLX1UL8PGhczcEA5uvSBp10YpNrhWSp7NkG75-ozrJ1X7TXrjOktPkqQVxzMgcQk4WWPqAxQ4Qchk0eHB5HMOgH1UcdjhN0q8gsUn-TM' },
    { title: 'Kpmg Lagos Alumni', type: 'Work', members: '420', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsK_pzZOJ14Vq8wb3iBogYinmyn-pDIuyAQj5Wvt4EsjazoGrdrZfuYR6Gi7KxJ0ZIeeJaLTy9StVmF3M-Wwo5EezRRRtvhYB0JwlHm3BeWBBDLD0pLqY1r1JJAQ96DXCAx4QL0WDTZmJmn1lLnXBf7JEyUEdnXxMi-6mJe5nnWDXxJsNR_3Yq28vQh7ANlQK6F223EWgoq2ZGSuFdGzRwdbkVte48UtJEAsE9SOAg7ZNBlPlTthJCOJRlXJW-pUq1sP-Krnopcbk' },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="px-6 pt-10 pb-6 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white rounded-b-[3rem] shadow-xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Yearbook</h1>
        <p className="text-indigo-100 text-sm font-medium leading-relaxed opacity-90 max-w-xs">
          Reconnect with your history. Relive the memories that shaped your journey across Africa.
        </p>
        
        {/* Memory Match AI Engine */}
        <div className="mt-8 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] flex items-center gap-4">
          <div className="size-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600">
            <Sparkles size={24} />
          </div>
          <div>
            <p className="text-[10px] font-extrabold tracking-wide text-indigo-200">Memory Match Engine</p>
            <p className="text-sm font-bold text-white tracking-tight leading-tight">3 potential classmates from NYSC 2017 joined today.</p>
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 pt-8 pb-32">
        {/* Memory Search */}
        <div className="mb-8">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center text-slate-400 group-hover:text-primary transition-colors">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search schools, workplaces, or years…" 
              className="w-full h-14 pl-12 pr-6 bg-white border border-slate-100 rounded-2xl shadow-sm focus-visible:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-medium text-slate-900"
            />
          </div>
        </div>

        {/* GeoMemory Map Preview */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">GeoMemory Map</h2>
            <button className="text-indigo-600 text-xs font-extrabold tracking-wide">Open Map</button>
          </div>
          <div className="relative h-48 rounded-[2.5rem] bg-slate-200 overflow-hidden border-4 border-white shadow-lg">
            <div className="absolute inset-0 grayscale opacity-50 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=6.5244,3.3792&zoom=11&size=600x300&key=AIzaSy...')] bg-cover bg-center"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white flex items-center gap-2 shadow-xl">
                <MapPin size={16} className="text-indigo-600" />
                <span className="text-sm font-bold text-slate-900 tracking-tight">12 memories near Lagos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Memory Circles */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">Your Circles</h2>
            <button className="text-indigo-600 text-xs font-extrabold tracking-wide">Join New</button>
          </div>
          <div className="space-y-4">
            {memoryCircles.map((circle, i) => (
              <div key={i} className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group cursor-pointer active:scale-[0.98] transition-colors">
                <div className="size-16 rounded-2xl overflow-hidden shrink-0">
                  <img src={circle.img} alt={circle.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {circle.type === 'Education' && <GraduationCap size={14} className="text-blue-500" />}
                    {circle.type === 'Service' && <Globe size={14} className="text-emerald-500" />}
                    {circle.type === 'Work' && <Briefcase size={14} className="text-amber-500" />}
                    <span className="text-[10px] font-extrabold tracking-wide text-slate-400">{circle.type}</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 tracking-tight truncate leading-tight mb-1">{circle.title}</h4>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wide">{circle.members} alumni reconnecting</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Memory Matches AI */}
        <section className="mb-10 p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-indigo-600">
              <Sparkles size={24} />
              <h3 className="font-extrabold tracking-wide text-sm">Memory Match</h3>
            </div>
            <p className="text-lg font-bold text-indigo-900 leading-tight mb-6">
              "We noticed you and Chioma lived in Surulere from 2009-2012."
            </p>
            <div className="flex gap-3">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-extrabold text-[10px] tracking-wide shadow-lg shadow-indigo-600/30">Recall Together</button>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-extrabold text-[10px] tracking-wide border border-indigo-100">Dismiss</button>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-5 text-indigo-600 transform -rotate-12">
            <History size={160} />
          </div>
        </section>
      </main>
    </div>
  );
}
