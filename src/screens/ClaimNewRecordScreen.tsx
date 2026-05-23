/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowLeft, 
  Search, 
  Bell, 
  Camera, 
  Video, 
  Image as ImageIcon, 
  X, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Info, 
  Send,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  ChevronDown
} from 'lucide-react';
import { Screen } from '../types';

interface ClaimNewRecordScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function ClaimNewRecordScreen({ onNavigate }: ClaimNewRecordScreenProps) {
  return (
    <div className="flex flex-col bg-background-light min-h-screen pb-32">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-xl px-4 py-3 border-b border-primary/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('afrirecord')}
            className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-extrabold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent tracking-tight">AfriBook</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-primary/10 text-slate-500">
            <Bell size={22} />
          </button>
          <div className="size-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJbzSEzpUv1DDrwbK2WoO6bgor_AkVAGFYqblq7EkRGwr6DlATFXc3TBpsTuEGj_4WD6gsLtZhBAy5mbMtV-Xsil8C6ZE0GvMElXCfoPtMTRGdUXyFqsnY-SsbGEYe6jWiwTv8tfBQuyev4Qz3hO2GdQpKCMMiZn2Bxf1NsDBQ-RWOlmIe-5oSp5clArcoOI7NxKneZvG_xpS9_fM6Dg_w2YSAdz_Gg6AaTEQ39WHTceOx-Nn2NuJawfK7P4Wapsex7oZ9b-TSbeQ" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="px-6 py-10 space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-none">Claim a new record</h1>
          <p className="text-slate-500 text-base leading-relaxed font-medium">Document your achievement and submit it for community verification on the afrirecord ledger.</p>
        </header>

        <div className="space-y-10">
          {/* Form Fields */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <label className="text-[10px] font-extrabold tracking-wide text-slate-400 ml-2">Record title</label>
                <input 
                  className="w-full bg-white border border-slate-100 rounded-3xl p-6 focus:ring-0 focus:border-primary/20 transition-colors text-slate-900 placeholder:text-slate-300 font-bold shadow-sm" 
                  placeholder="e.g. Largest community mural in lagos" 
                  type="text"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-extrabold tracking-wide text-slate-400 ml-2">Category</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-100 rounded-3xl p-6 appearance-none focus:ring-0 focus:border-primary/20 transition-colors text-slate-900 font-bold shadow-sm">
                    <option>Arts & culture</option>
                    <option>Technology</option>
                    <option>Sports</option>
                    <option>Community</option>
                    <option>Agriculture</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300" size={24} />
                </div>
              </div>
            </div>

            {/* Editor placeholder */}
            <div className="space-y-4">
              <label className="text-[10px] font-extrabold tracking-wide text-slate-400 ml-2">Description & impact</label>
              <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 p-2">
                <div className="flex items-center gap-2 p-4 border-b border-slate-50 bg-slate-50/50 rounded-t-[32px]">
                  <button className="p-3 hover:bg-white rounded-2xl text-slate-400 hover:text-primary transition-colors"><Bold size={20} /></button>
                  <button className="p-3 hover:bg-white rounded-2xl text-slate-400 hover:text-primary transition-colors"><Italic size={20} /></button>
                  <button className="p-3 hover:bg-white rounded-2xl text-slate-400 hover:text-primary transition-colors"><List size={20} /></button>
                </div>
                <textarea 
                  className="w-full border-none focus:ring-0 p-8 bg-transparent text-slate-900 placeholder:text-slate-300 font-bold resize-none min-h-[200px]" 
                  placeholder="Describe the achievement in detail. What makes this unique? Who was involved?"
                />
              </div>
            </div>

            {/* Evidence Upload */}
            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <label className="text-[10px] font-extrabold tracking-wide text-slate-400">Evidence upload</label>
                <span className="text-[10px] text-slate-300 font-extrabold tracking-wide">Max 50mb per file</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <label className="aspect-square rounded-[40px] border-2 border-dashed border-slate-100 bg-white flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/20 transition-colors group shadow-sm p-4">
                  <div className="size-16 rounded-3xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                    <Camera size={32} />
                  </div>
                  <span className="text-[10px] font-extrabold tracking-wide text-slate-400 group-hover:text-primary">Add photo</span>
                  <input className="hidden" type="file" />
                </label>
                <div className="aspect-square rounded-3xl overflow-hidden relative group shadow-lg">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXJbKBbtQ9vMS4WiKPIvTk7trPLFXXoOfz-TL7rl1b5IfBJT7s0qY_ZwTowGRUb9yqCsSjwkYEOTAMYofIqDb_3e5sVwOUMMz8WeSYhamnRWi8AK2d-2Pxd1rthY3g3AJvUD8wyjxH7OZdK1kxq7TiKfWs3cGUXZrC4iTC-ctuqmgQCAylD2wliWzOjVNlduhYFJ4k5B2L87ETdOi-MBPm6iM30-bbjttRqCK10OWdwnBXDDh71-zw_JlEVnT2tA1GKMIGuiaRkRE" 
                    alt="evidence" 
                  />
                  <button className="absolute top-2 right-2 bg-black/40 text-white rounded-full p-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <X size={14} />
                  </button>
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden relative group shadow-lg">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwmt1Ry26fXw5qktzELK9SKtso5uJfAQzP59-BUcy0WZUNiRC3AjiFoZUNx4FymV0sxupz5JdrajNwXgiSTEllS0n9SIMOEV6WRi6gPEdBMeOP9zv9kyCOBb1YAWCmbPdW3H9in9q7N0TmZLLrRMjO7_Sle1n-xBOwvqjIFsVbF8vk8LjIDc1ylZl7Ebd2fFpDGyhi5DVnSeAtfCJn04Lh4k0lmD_LwbQZts-2kKz_PbKjAxRdpNqC4FpjWPm3z9FXSqrKwgXuSj0" 
                    alt="evidence" 
                  />
                  <button className="absolute top-2 right-2 bg-black/40 text-white rounded-full p-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <X size={14} />
                  </button>
                </div>
                <div className="aspect-square rounded-3xl bg-slate-100 flex flex-col items-center justify-center gap-2 border border-slate-200">
                  <Video className="text-slate-400" size={28} />
                  <span className="text-[10px] text-slate-500 font-extrabold tracking-tight">MURAL_VID.MP4</span>
                </div>
              </div>
            </div>

            {/* Geotagging & Metadata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl flex items-center justify-between shadow-sm border border-slate-100">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={20} fill="currentColor" />
                    <span className="font-extrabold text-slate-900 tracking-tight">Enable Geotagging</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold">Verify the exact location of the record.</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                  <div className="size-4 bg-white rounded-full absolute right-1"></div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl flex items-center gap-4 shadow-sm border border-slate-100">
                <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-primary border border-slate-200 shadow-sm">
                  <Calendar size={22} fill="currentColor" />
                </div>
                <div className="space-y-0">
                  <span className="text-[10px] font-extrabold tracking-wide text-slate-400">Date of Event</span>
                  <p className="font-extrabold text-slate-900 text-lg">Oct 24, 2023</p>
                </div>
              </div>
            </div>

            {/* Staking Deposit Info */}
            <div className="bg-primary/5 rounded-[2.5rem] p-8 border border-primary/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-lg tracking-tight">Staking Deposit: 500 AfriTokens</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">To prevent fraudulent claims, a small staking deposit is required. This will be returned to your AfriPay wallet once the record is verified by the community.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 ml-16">
                <Info size={14} className="text-primary" />
                <button className="text-[10px] font-extrabold text-primary underline underline-offset-4 tracking-wide">Learn about Anti-Fraud</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-8 space-y-4">
          <button className="w-full py-5 rounded-full bg-gradient-to-br from-primary to-accent text-white font-extrabold text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-colors group">
            Submit to Community Review
            <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-center text-[10px] text-slate-400 px-8 font-bold leading-relaxed">By submitting, you agree to the AfriBook Terms of Service and Decentralized Governance Protocol.</p>
        </footer>
      </main>
    </div>
  );
}
