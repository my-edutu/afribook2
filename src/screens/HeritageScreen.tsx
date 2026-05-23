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

interface HeritageScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function HeritageScreen({ onNavigate }: HeritageScreenProps) {
  const memoryCircles = [
    { title: 'Ife bronze artifacts', type: 'Heritage', members: '12.5k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbNNQk1_FwijWinaA3SY5ksMs_f48eebyAjlp8TvIlExB7Zr4bg5VorcBN9KGX25LNLmMErGe9vyc5ZG_-JNcspnkftMNwbJ5EG6iElrZr1IUcPNA9hfm_ZQolx_ywh45VSGc7wPg3CqNd2QQzoUJWvpJKd6XyEUSTyIu7L4IQTdtQsuiWbbsSfreEvokQvObIal6h1q58fmwBEHzixPP0vEm6lXU1go5fyMKnzzKoVOxaUohCvSrjT3iv1zZzLcemB3JY5KhzD7U' },
    { title: 'The Great Walls of Benin', type: 'History', members: '8.2k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_exvvwk_lpu5Xk_VeDBqc_6BSCFmnW8FX6DwuarbJ-2j-NTS6l31wz-zdSdQTjLfxM50SsLrun3RF-AqgaBVY4BP5PCrpe1KQQgqioSZeHSoqgPhl_I0f8K3cwqrPAP7wzCzocBn0er11QnQEiHnyLj8djEAkPgqlgCLFLX1UL8PGhczcEA5uvSBp10YpNrhWSp7NkG75-ozrJ1X7TXrjOktPkqQVxzMgcQk4WWPqAxQ4Qchk0eHB5HMOgH1UcdjhN0q8gsUn-TM' },
    { title: 'Adinkra Symbolism', type: 'Culture', members: '15.1k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsK_pzZOJ14Vq8wb3iBogYinmyn-pDIuyAQj5Wvt4EsjazoGrdrZfuYR6Gi7KxJ0ZIeeJaLTy9StVmF3M-Wwo5EezRRRtvhYB0JwlHm3BeWBBDLD0pLqY1r1JJAQ96DXCAx4QL0WDTZmJmn1lLnXBf7JEyUEdnXxMi-6mJe5nnWDXxJsNR_3Yq28vQh7ANlQK6F223EWgoq2ZGSuFdGzRwdbkVte48UtJEAsE9SOAg7ZNBlPlTthJCOJRlXJW-pUq1sP-Krnopcbk' },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="px-6 pt-16 pb-12 bg-gradient-to-b from-amber-600 to-amber-800 text-white rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3 leading-none">Afriheritage</h1>
          <p className="text-amber-100 text-sm font-medium leading-relaxed opacity-90 max-w-xs">
            Africa's digital archive. Preserving our history, artifacts, and cultural legacy for generations to come.
          </p>
        </div>

        {/* Abstract design */}
        <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        {/* Memory Match AI Engine */}
        <div className="mt-10 p-6 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] flex items-center gap-5 relative z-10 shadow-2xl">
          <div className="size-16 bg-white rounded-2xl flex items-center justify-center text-sky-600 shadow-inner">
            <Sparkles size={32} />
          </div>
          <div>
            <p className="text-[10px] font-extrabold tracking-wide text-sky-200 mb-1.5">Memory match engine</p>
            <p className="text-sm font-extrabold text-white tracking-tight leading-tight">3 potential classmates from nysc 2017 joined today.</p>
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 pt-12 pb-32">
        {/* Memory Search */}
        <div className="mb-12">
          <div className="relative group">
            <div className="absolute inset-y-0 left-5 flex items-center text-slate-400 group-hover:text-sky-500 transition-colors">
              <Search size={22} />
            </div>
            <input 
              type="text" 
              placeholder="Search schools, workplaces, or years…" 
              className="w-full h-16 pl-14 pr-7 bg-white border border-slate-100 rounded-[28px] shadow-sm focus-visible:outline-none focus:ring-4 focus:ring-sky-500/5 transition-colors font-bold text-slate-900"
            />
          </div>
        </div>

        {/* GeoMemory Map Preview */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">Geomemory map</h2>
            <button className="text-sky-600 text-[10px] font-extrabold tracking-wide bg-sky-50 px-4 py-2 rounded-xl border border-sky-100">Live map</button>
          </div>
          <div className="relative h-56 rounded-[48px] bg-slate-200 overflow-hidden border-4 border-white shadow-xl shadow-slate-200/50">
            <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=6.5244,3.3792&zoom=11&size=600x300&key=AIzaSy...')] bg-cover bg-center"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-white flex items-center gap-3 shadow-2xl">
                <MapPin size={18} className="text-sky-600" />
                <span className="text-xs font-extrabold text-slate-900 tracking-tight">12 memories near lagos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Memory Circles */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 leading-none tracking-tight">Your circles</h2>
            <button className="text-sky-600 text-[10px] font-extrabold tracking-wide bg-sky-50 px-4 py-2 rounded-xl border border-sky-100">Join new</button>
          </div>
          <div className="space-y-5">
            {memoryCircles.map((circle, i) => (
              <div key={i} className="bg-white p-5 rounded-[40px] border border-slate-50 shadow-sm flex items-center gap-5 group cursor-pointer active:scale-[0.98] transition-colors hover:shadow-md">
                <div className="size-20 rounded-[28px] overflow-hidden shrink-0 shadow-inner ring-4 ring-slate-50">
                  <img src={circle.img} alt={circle.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {circle.type === 'Education' && <GraduationCap size={16} className="text-blue-500" />}
                    {circle.type === 'Service' && <Globe size={16} className="text-emerald-500" />}
                    {circle.type === 'Work' && <Briefcase size={16} className="text-amber-500" />}
                    <span className="text-[10px] font-extrabold tracking-wide text-slate-400">{circle.type}</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg leading-tight mb-1 truncate lowercase first-letter:uppercase">{circle.title}</h4>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wide">{circle.members} alumni reconnecting</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Memory Matches AI */}
        <section className="mb-12 p-10 bg-sky-50 border border-sky-100 rounded-[56px] relative overflow-hidden shadow-sm">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 text-sky-600">
              <Sparkles size={28} />
              <h3 className="font-extrabold tracking-wide text-[10px]">Strategic match</h3>
            </div>
            <p className="text-xl font-extrabold text-sky-950 leading-tight mb-8">
              "We noticed you and Chioma lived in Surulere from 2009-2012."
            </p>
            <div className="flex gap-4">
              <button className="bg-sky-600 text-white px-8 py-4 rounded-2xl font-extrabold text-xs tracking-wide shadow-xl shadow-sky-600/20 active:scale-95 transition-colors">Recall together</button>
              <button className="bg-white text-sky-600 px-8 py-4 rounded-2xl font-extrabold text-xs tracking-wide border border-sky-100 active:scale-95 transition-colors">Dismiss</button>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-5 text-sky-600 transform -rotate-12 pointer-events-none">
            <History size={240} />
          </div>
        </section>
      </main>
    </div>
  );
}
