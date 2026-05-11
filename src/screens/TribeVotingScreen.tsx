/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  Clock, 
  BarChart3, 
  ShieldCheck, 
  Wallet, 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare, 
  ChevronDown,
  Bolt,
  CheckCircle2,
  XCircle,
  Verified
} from 'lucide-react';
import { Screen } from '../types';

interface TribeVotingScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function TribeVotingScreen({ onNavigate }: TribeVotingScreenProps) {
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null);

  const comments = [
    {
      id: 1,
      user: 'Kofi_Builds',
      time: '4h ago',
      content: 'Full support here. The location is prime and the hybrid infrastructure is exactly what we need to ensure members in Nairobi and Jo\'burg feel included.',
      likes: 14,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOHU-HNV7EhpF3s2ebVoFLx6LiPwkBIxM33j-vBFamEnOLw7cRELjB29yaI8bK9kzBNe0H8jjfhgTk46RYaNAnisRh1p0l2Or2JVK3m_XNGpRy-Vml_68uAi_T_4zoXHbxARswhQA1s9adB5_Ai9qjBtozpu42R74m5y5HfxdaKLDGbAorc4HJTSBp3VzUoeJxsQTNdsqGK0upPT_EKcYko1wpDh6GJqkIY2GQ_Ur6_ZR4bXh4W7jx3MSJRpSnvSUf9u9mpbqVcN0'
    },
    {
      id: 2,
      user: 'Chinwe_Ops',
      time: '6h ago',
      content: 'Has the technical team verified the fiber speed stability? Last time we had jitter issues during the keynote.',
      likes: 3,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0i1peVxFcbrCdW86wre54Js1lErPpDO0JJOA3t8BTGY0baj9npO4yWPXlFOOpw8GxB4HEwUp-1TQg0-C_mvKzp8_MxHGalKbNLaIZQQ463uaLtaSG1ZOpSIuFf99M9u_7iJn_TkwLphfcxbwTnrcppmc8XWCAzgO93RwfuUsCRgJnMqJfJixdP4FXdaaXsKm5gUJmeDhhUHyXm7utTN9DNLsoS4-Subxd8FPBvSH0Z-bDI8MOPIA78xS11hTmnag03OEJHmtcQ-c'
    }
  ];

  return (
    <div className="flex flex-col bg-[#fdf9ee] min-h-screen text-[#1c1c15]">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#fdf9ee]/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('tribes')}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200/50 transition-colors active:scale-95"
          >
            <ArrowLeft className="text-[#904d00]" size={24} />
          </button>
          <span className="text-2xl font-black bg-gradient-to-br from-[#904d00] to-[#ff8c00] bg-clip-text text-transparent">
            AfriBook
          </span>
        </div>
        <div className="size-10 rounded-full border-2 border-primary/20 overflow-hidden shadow-sm">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU6TkTGVH2SjwUux0hCTHQId-vs1J9oYLk_arDhi31Yokm41DwkfNhm1C4MnsYWNW6U4ip_K1welz5eGD9jXSumD8egnUy-PGgLwtqrVvYzcabo2rUp0OWRm21-9nEp3eWkN2_W22OV06MSg1Fr9N2vITFeTYZNNqQtk_S-70VdBaVYSH-KYl5I9EF0zBpvgOw0jphdBNRXLqw4lIFPCzVByK-4UWAKQILE9aWMgYepXbw3WtAa71TtU0Y9aOHZNxZMnHd44b7IEQ" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <main className="flex-1 px-6 pt-4 pb-40 max-w-3xl mx-auto w-full">
        {/* Chips */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-[#0070ea] text-white rounded-full text-[10px] font-black uppercase tracking-wider">Governance</span>
          <span className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-[10px] font-black uppercase tracking-wider">ID: #4402</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-[#1c1c15] leading-tight mb-4 tracking-tight uppercase">
          Lagos Tech Hub Venue Booking
        </h1>

        {/* Metadata */}
        <div className="flex items-center gap-6 mb-10 text-xs font-bold text-stone-500 uppercase tracking-tight">
          <div className="flex items-center gap-1.5">
            <User size={14} className="text-primary" />
            <span>@adewale_dev</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-secondary" />
            <span>2 days left</span>
          </div>
        </div>

        {/* Current Status Card */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-stone-200/50 space-y-8 mb-8">
          <h3 className="text-lg font-black flex items-center gap-2 uppercase tracking-tight">
            <BarChart3 className="text-secondary" size={24} />
            Current Voting Status
          </h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2 font-black text-xs uppercase tracking-tight">
                <span>Yes (Support)</span>
                <span className="text-secondary">74%</span>
              </div>
              <div className="h-4 w-full bg-stone-100 rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: '74%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 font-black text-xs uppercase tracking-tight">
                <span>No (Against)</span>
                <span className="text-stone-400">26%</span>
              </div>
              <div className="h-4 w-full bg-stone-100 rounded-full overflow-hidden">
                <div className="h-full bg-stone-400 rounded-full" style={{ width: '26%' }}></div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-100 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-stone-400">
            <span>Quorum: 15,400 / 20,000 $AFR</span>
            <span className="text-secondary">Reached</span>
          </div>
        </div>

        {/* Side Details Card */}
        <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 space-y-6 mb-12">
          <div>
            <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest mb-2">Blockchain</p>
            <div className="flex items-center gap-2 font-black text-sm uppercase tracking-tight">
              <ShieldCheck className="text-primary" size={20} />
              Ethereum Mainnet
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest mb-2">Voting Power</p>
            <div className="text-2xl font-black text-[#1c1c15]">1,250 <span className="text-sm font-bold text-stone-400">$AFR</span></div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video relative shadow-lg">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9y5W3QVihUAwYZCDEps07dTM7Zk1sWRdSPIsk4idLTz6nkh_wdY0_IZ2FloAuthUYu63EdJJz8hdQykJubppg-us2diFZzPaTKLElTOAXQ9J5fkwlRK5IZ94rw217sjpB3x38kqXox06gk2Gwsarod3R-5AjKFuRyOKSeYbtdJmwNbGO3oUEiSU5lXXh-3o7zW1IwU-UtTysQomcxVIZhBjBy7k914ZBv2Sf4NPOrjMO-3QTsO4MYExJRgH15TGUMBs7KN1eN7cE" 
              alt="Venue" 
              className="w-full h-full object-cover grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-[10px] font-black uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Venue Preview</span>
            </div>
          </div>
        </div>

        {/* Proposal Description */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-[#1c1c15] uppercase tracking-tight mb-6">Proposal Description</h2>
          <div className="space-y-4 text-stone-600 font-medium leading-relaxed">
            <p>This proposal seeks community approval for the strategic booking of the <strong>Lagos Tech Hub</strong> Main Auditorium for the upcoming <em>Pan-African Builders Conference</em> scheduled for October 12-14, 2024.</p>
            <p>The Lagos Tech Hub represents the heart of West African innovation. By securing this venue, AfriBook positions itself at the center of the continent's most active developer ecosystem.</p>
            <ul className="list-disc pl-5 space-y-2 py-2">
              <li className="font-black text-xs uppercase">Total Budget: 4,500 USDC</li>
              <li className="font-black text-xs uppercase">Capacity: 500 Attendees (Hybrid)</li>
              <li className="font-black text-xs uppercase">Includes live-streaming infrastructure</li>
            </ul>
          </div>
        </section>

        {/* Discussion Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black uppercase tracking-tight">Discussion (12)</h2>
            <button className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-1">
              Recent <ChevronDown size={14} />
            </button>
          </div>
          <div className="space-y-8">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <div className="size-12 rounded-full overflow-hidden border border-stone-200 shrink-0">
                  <img src={comment.img} alt={comment.user} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 bg-stone-100 p-6 rounded-3xl rounded-tl-none">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-xs uppercase tracking-tight">{comment.user}</span>
                    <span className="text-[10px] font-bold text-stone-400">{comment.time}</span>
                  </div>
                  <p className="text-stone-600 text-sm font-medium leading-relaxed mb-4">{comment.content}</p>
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#0070ea]">
                      <ThumbsUp size={14} fill="currentColor" /> {comment.likes}
                    </button>
                    <button className="text-[10px] font-black uppercase tracking-widest text-stone-400">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-5 border-2 border-dashed border-stone-200 rounded-2xl text-stone-400 font-black uppercase tracking-widest text-xs hover:bg-stone-50 transition-colors">
            Add to the conversation
          </button>
        </section>
      </main>

      {/* Voting Bottom Sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 flex justify-center">
        <div className="bg-[#fdf9ee] w-full max-w-md rounded-[2.5rem] shadow-2xl shadow-stone-900/30 border border-stone-200/50 overflow-hidden pb-8">
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1.5 bg-stone-200 rounded-full"></div>
          </div>
          <div className="px-8 pt-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-black text-[#1c1c15] uppercase tracking-tight leading-none">Cast Your Vote</h2>
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">Gas fee: ~0.002 ETH</p>
              </div>
              <div className="size-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <Wallet size={24} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <button 
                onClick={() => setVoted('yes')}
                className={`flex flex-col items-center justify-center py-6 rounded-3xl transition-all active:scale-95 border-2 ${voted === 'yes' ? 'bg-[#0070ea]/5 border-[#0070ea]' : 'bg-stone-50 border-transparent'}`}
              >
                <CheckCircle2 className={`mb-2 ${voted === 'yes' ? 'text-[#0070ea]' : 'text-stone-300'}`} size={32} />
                <span className="font-black text-xs uppercase tracking-tight">Vote Yes</span>
              </button>
              <button 
                onClick={() => setVoted('no')}
                className={`flex flex-col items-center justify-center py-6 rounded-3xl transition-all active:scale-95 border-2 ${voted === 'no' ? 'bg-red-50 border-red-500' : 'bg-stone-50 border-transparent'}`}
              >
                <XCircle className={`mb-2 ${voted === 'no' ? 'text-red-500' : 'text-stone-300'}`} size={32} />
                <span className="font-black text-xs uppercase tracking-tight">Vote No</span>
              </button>
            </div>

            <button className="w-full py-5 rounded-full bg-gradient-to-br from-[#904d00] to-[#ff8c00] text-white font-black text-lg shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 active:scale-95 transition-transform uppercase tracking-wider">
              <Bolt size={24} fill="currentColor" />
              Confirm on Blockchain
            </button>
            
            <div className="flex items-center gap-2 justify-center mt-4 opacity-40">
              <Verified size={12} className="text-stone-500" />
              <p className="text-[9px] font-black uppercase tracking-widest text-stone-500">
                Encrypted Smart Contract Execution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
