/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MoreVertical, 
  Share2, 
  ShieldCheck, 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Upload, 
  Calendar, 
  Plus, 
  Award, 
  Rocket, 
  Brain, 
  ShoppingBag, 
  ChevronRight,
  Verified,
  Lock,
  MessageCircle,
  Coins,
  Shield,
  UserPlus,
  Send,
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import { Screen } from '../types';

interface TribeDetailScreenProps {
  onNavigate: (screen: Screen) => void;
}

type TribeTab = 'room' | 'treasury' | 'members' | 'governance' | 'shop';

export default function TribeDetailScreen({ onNavigate }: TribeDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<TribeTab>('room');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState<string | null>(null);

  const tabs: { id: TribeTab; label: string }[] = [
    { id: 'room', label: 'Room' },
    { id: 'treasury', label: 'Vault' },
    { id: 'members', label: 'Members' },
    { id: 'governance', label: 'Laws' },
    { id: 'shop', label: 'Store' },
  ];

  const members = [
    { id: '1', name: 'Kofi Mensah', role: 'Elder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYcG24Dieu84a3gmMn85e5BjbaF9vnbx5O6VKycbLNsSuEZtwI-9vn7p9Eo9EX8ATUs7wdAXSllcaK28WG5KMp08jOA2SagxmnxsI2wl95LLSiy0a6fr4Xo3CzifS7z86lE2Myaiduu0Xpvdc6vh2SmhXxHxUfDNBy6nOQltZOFtRDohhkW0UHE1XGHMHtwjQ-IJOYYialORWdwChDCX7dJTOp0OTYsdio87oL_Dp-yodBVOfHQunDDCI_7adeRosZVWbhfMaFev4' },
    { id: '2', name: 'Zainab Abiola', role: 'Guardian', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPVLtZ9ebNSCsefwON9tx0ts5LmldUZe4kD1u4zS9PMxbjJ4O5uglg1WHhHKYApsOYZB50QKrSldgC1RLaTjErqoHZdtO-AK1szrOensz0B73S8NOEVXz0TDckAP_e-3WdzJ6VzCWegeyM7_k8nqdGZFHduhqVRZVxlGUD4Ld-ka0zo22oe0SJ8Y5RuwrQlyCRH2J3gUfoYX_ErsNZiDgJGpWAlaYduA3uiOQwJ-fqwYNCxJ-k8gFVVW7tCoC0I4lbXhlrjwzMYtI' },
    { id: '3', name: 'Efe Ovoke', role: 'Nomad', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2XtlpGxrCiPPSTW4VrTLvtkMbQT4TbliNiC_Kt5vqWef0ISzPjcKP_Aplz3_g5uVbZGJ7x_LpaMjr1RbpXcgn-UNKJDBBADO3u_4N_RIkzNO0ckrj8sW9W6N4Wtz1UgT7WHC5apJXrVdIPg9AltF76xY-iQ1hvHOK70yhOwWswH68CRbRD3NMVY8hc57jqgeiOULeRR2oWKI-jefaykjv3HkxSbTkU29MzB0WFR_CM_ZiGKozMjY1NzPlGSKrz-F92TXquBMF4es' },
  ];

  const tribePosts = [
    {
      id: 1,
      user: members[1],
      content: 'Proposing a new hackathon for next month. What do you guys think?',
      likes: 45,
      comments: [
        { id: 1, user: members[2], text: 'I am in! Let s focus on web3 identity.' }
      ],
      time: '2h ago'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'room':
        return (
          <div className="space-y-6">
            {/* Create Post */}
            <div className="bg-white p-4 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="size-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-slate-50">
                <img src={members[0].img} alt="me" className="w-full h-full object-cover" />
              </div>
              <input 
                type="text" 
                placeholder="Message the tribe…" 
                className="flex-1 text-sm font-medium bg-slate-50 h-12 rounded-2xl px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus:bg-slate-100 transition-colors"
              />
              <button className="size-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 active:scale-95 transition-colors">
                <Send size={20} />
              </button>
            </div>

            {/* Posts */}
            {tribePosts.map(post => (
              <div key={post.id} className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={post.user.img} alt={post.user.name} className="size-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 leading-none">{post.user.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-1">{post.user.role} / {post.time}</p>
                    </div>
                  </div>
                  <MoreHorizontal size={20} className="text-slate-300" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium mb-6">{post.content}</p>
                
                <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
                   <button className="flex items-center gap-2 text-slate-400 text-[10px] font-extrabold">
                      <TrendingUp size={16} /> {post.likes}
                   </button>
                   <button className="flex items-center gap-2 text-slate-400 text-[10px] font-extrabold">
                      <MessageCircle size={16} /> {post.comments.length}
                   </button>
                   <button className="flex items-center gap-2 text-primary text-[10px] font-extrabold ml-auto">
                      <Coins size={16} /> Tip
                   </button>
                </div>

                {/* Local Comments */}
                <div className="mt-6 space-y-4">
                   {post.comments.map(c => (
                     <div key={c.id} className="flex gap-3 bg-slate-50 p-4 rounded-2xl">
                        <img src={c.user.img} alt={c.user.name} className="size-8 rounded-full" />
                        <div className="flex-1">
                          <p className="text-[10px] font-extrabold text-slate-900">{c.user.name}</p>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{c.text}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'members':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-[10px] font-extrabold text-slate-400 tracking-wide">Active members</h3>
              <div className="flex gap-2">
                 <button 
                   onClick={() => setIsAdmin(!isAdmin)}
                   className={`px-4 py-2 rounded-xl text-[9px] font-extrabold tracking-wide transition-colors ${isAdmin ? 'bg-rose-50 text-rose-500' : 'bg-slate-100 text-slate-400'}`}
                 >
                   Admin mode: {isAdmin ? 'ON' : 'OFF'}
                 </button>
              </div>
            </div>

            <div className="space-y-3">
              {members.map(member => (
                <div key={member.id} className="bg-white p-4 rounded-[28px] border border-slate-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={member.img} alt={member.name} className="size-12 rounded-2xl object-cover" />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 leading-none">{member.name}</h4>
                      <p className={`text-[10px] font-bold tracking-tight mt-1 ${
                        member.role === 'Elder' ? 'text-amber-500' : 
                        member.role === 'Guardian' ? 'text-emerald-500' : 'text-slate-400'
                      }`}>{member.role}</p>
                    </div>
                  </div>
                  
                  {isAdmin ? (
                    <div className="relative">
                      <button 
                        onClick={() => setShowRoleMenu(showRoleMenu === member.id ? null : member.id)}
                        className="bg-slate-50 px-4 py-2 rounded-xl text-[9px] font-extrabold tracking-wide flex items-center gap-2"
                      >
                        Change role <ChevronDown size={14} />
                      </button>
                      {showRoleMenu === member.id && (
                        <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50">
                           {['Elder', 'Guardian', 'Nomad'].map(r => (
                             <button key={r} className="w-full text-left px-4 py-2 text-[10px] font-extrabold hover:bg-slate-50 transition-colors">{r}</button>
                           ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button className="p-3 bg-slate-50 rounded-xl text-slate-300">
                      <MessageCircle size={18} />
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-[28px] text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors group">
              <UserPlus size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-extrabold tracking-wide">Invite members</span>
            </button>
          </div>
        );
      case 'treasury':
        return (
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10 text-center flex flex-col items-center">
                 <Wallet size={48} className="text-primary mb-6" />
                 <p className="text-white/40 text-[10px] font-extrabold tracking-wide mb-2">Vault balance</p>
                 <h2 className="text-4xl font-extrabold tracking-tight mb-8">45,240 <span className="text-primary">AFR</span></h2>
                 <div className="flex gap-4 w-full">
                    <button className="flex-1 bg-white text-slate-900 py-4 rounded-2xl font-extrabold text-[10px] tracking-wide shadow-xl shadow-white/5 active:scale-95 transition-colors">Deposit</button>
                    <button className="flex-1 bg-white/10 backdrop-blur-md text-white py-4 rounded-2xl font-extrabold text-[10px] tracking-wide border border-white/10 active:scale-95 transition-colors">Proposal</button>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
               </div>
            </div>

            <section>
              <h3 className="text-[10px] font-extrabold text-slate-400 tracking-wide mb-4 px-2">Recent activity</h3>
              <div className="space-y-3">
                {[
                  { title: 'Server Hosting', amount: '-450 AFR', type: 'expense' },
                  { title: 'Tribe Merch Sales', amount: '+1.2k AFR', type: 'income' },
                ].map((act, i) => (
                  <div key={i} className="bg-white p-6 rounded-[32px] flex items-center justify-between border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className={`size-12 rounded-2xl ${act.type === 'income' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'} flex items-center justify-center`}>
                        {act.type === 'income' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                      </div>
                      <h4 className="text-sm font-extrabold text-slate-900">{act.title}</h4>
                    </div>
                    <span className={`text-sm font-extrabold ${act.type === 'income' ? 'text-emerald-500' : 'text-slate-900'}`}>{act.amount}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'governance':
        return (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
               <Shield className="absolute -top-10 -right-10 size-48 text-primary/5 -rotate-12" />
               <div className="relative z-10">
                 <h3 className="text-xl font-extrabold text-slate-900 mb-2">Tribal laws</h3>
                 <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8">This tribe operates under the Lagos Tech Charter, verified by decentralized node verification.</p>
                 <div className="space-y-4">
                    {[
                      '1. Open source by default.',
                      '2. Bi-weekly demo days.',
                      '3. Quadratic funding participation.'
                    ].map(law => (
                      <div key={law} className="flex items-center gap-3 py-3 border-b border-slate-50">
                        <Lock size={14} className="text-primary" />
                        <span className="text-xs font-bold text-slate-600">{law}</span>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
            <button 
              onClick={() => onNavigate('arivote')}
              className="w-full bg-slate-900 text-white py-6 rounded-[32px] font-extrabold text-xs tracking-wide shadow-2xl shadow-slate-900/20 active:scale-95 transition-colors flex items-center justify-center gap-3"
            >
              <Award size={20} />
              Open governance portal
            </button>
          </div>
        );
      case 'shop':
        return (
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Elite Hoodie', price: '2,500 AFR', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCE8Cgz7zW97K0zRtv3OtQibhSYS2I7qBuN4-6FXmkEQ63BQccF27bxow7IEqZENS24gfSMDS3bBO3Nk4sISsEJypEbTgzV2GbsSgDT4tcMMEMEPMKcs8tljwCiMMnzvzQ9rNGAD6bU3Aim1Fx81pUdWTL1SZ5lr-zIabaXPfHJoSY2lxs8dX9esG4wRK5D2udPC9ZtcyBMoNdYicumpBaB0igk0e8hkbrFyxLSsdm2j-giGiRHxA-X2hZo31yl0O3OTShMhlzZoE' },
              { name: 'Founder Cap', price: '850 AFR', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwMUnwq8GzQc38IZRKLnmkFjeGqQBedYiGtmRDXvsFgjPbr99K3UahY7P-TikSToy9Wi_zzLvC6lEgLrUwnsgzfYRbV4oX_fKP6NAuGHyoQsfveOevUFVD0KwCbbVBnm1Bz_ZtEFtxE_c4RRCP8Gr1_GZFXP22Awj4N3kxcWBq5vT72LM24d-_6-YtE0MmhLDGVoNqHNFkkulLzgrJst_D5mQitYiwQQj0mZ2m_1i_INs9uE3-sQ_ZghMbRLxaIBQuHS14D6RPPNo' }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm group">
                <div className="aspect-square relative overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="text-xs font-extrabold text-slate-900 mb-1 tracking-tight">{p.name}</h4>
                  <p className="text-primary font-extrabold text-sm mb-4">{p.price}</p>
                  <button className="w-full bg-slate-900 text-white py-3 rounded-xl text-[9px] font-extrabold tracking-wide shadow-xl shadow-slate-900/10">Buy now</button>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen pb-32">
      {/* Dynamic Header */}
      <div className="relative h-64 bg-slate-900 overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EBo52oLiDLV7vCgREn8LIl_gtUbeBSk2ObbO2oBSiOYHZ8C1JVm8MCKLLix9L38BYKF0ZEvDsQnvRUsMwRvOLYVZZP4KKERzp-SyWclKdru-ueRbiLH7iE-H2fqfJ0VGy2VmLYrSr20YYJ9ecw2B4wMxjcn19VEbUCvQ7kzNW1L-7JJY7HtJsr6xzblwRE1ngO-jySaZdRTGKE5xj3QKJhs5ybQXP_yvfK0tHgw6A0wG-0qCJJRGYJ5MlfvXy6MnrVD7VznhwLk" 
          alt="Banner" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent"></div>
        <div className="absolute top-12 left-6 right-6 flex items-center justify-between z-10">
          <button 
            onClick={() => onNavigate('tribes')}
            className="size-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex gap-3">
             <button className="size-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
               <Share2 size={22} />
             </button>
             <button className="size-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
               <MoreVertical size={22} />
             </button>
          </div>
        </div>

        <div className="absolute bottom-4 left-6 flex items-end gap-6">
           <div className="size-28 rounded-[40px] bg-white p-2 shadow-2xl border border-slate-100 ring-8 ring-white/20">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiwy0V9JvcnMi_MPwpUv629LZgcgMSGM8JKw8kGwF5Xhu_8jnycAf-lYGUeMcBHtRfpXaO5Sm1IkOxh_oZGuZ1pPbbDUAmv1rAONOuaoY6m4pakqUZ1b0HPZ0ShFlcz_oNPaCL8nHTvydyOdHzAmumwTQchkCSMQ_rGIrCr750z608EBo_foM9t7rvZQSUjXtLVH10elDh45J7gQ9OlNcUJlPO1eQktBANRGKeOUAe8MWcV6xjxgmd6ltdhgWyniAkY5BPqGZXx1g" 
                alt="Logo" 
                className="w-full h-full object-cover rounded-[32px]"
              />
           </div>
           <div className="pb-4">
             <div className="flex items-center gap-2 mb-1">
               <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">Lagos Tech</h1>
               <Verified className="text-secondary" size={20} fill="currentColor" />
             </div>
             <p className="text-[10px] font-extrabold tracking-wide text-slate-400">15.2k Members / West Africa</p>
           </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 mt-12 mb-8 overflow-x-auto no-scrollbar sticky top-0 bg-slate-50/80 backdrop-blur-md z-30 py-4 border-y border-slate-100">
         <div className="flex gap-10 min-w-max px-2">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[10px] font-extrabold tracking-wide transition-colors relative ${
                  activeTab === tab.id ? 'text-primary' : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
         </div>
      </div>

      {/* Main Content */}
      <main className="px-6">
        {renderContent()}
      </main>
    </div>
  );
}
