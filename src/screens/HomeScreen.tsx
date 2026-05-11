/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Users, 
  FileText, 
  Wallet, 
  Vote, 
  PlayCircle, 
  Compass,
  TrendingUp,
  Flame,
  ChevronRight,
  MapPin,
  Bell,
  Globe,
  Plus,
  BadgeCheck,
  Languages,
  Heart,
  MessageCircle,
  Coins,
  Bookmark,
  Share2,
  MoreHorizontal,
  GraduationCap,
  Archive,
  Sparkles,
  Search,
  Eye,
  Camera,
  Mic,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';
import WatchScreen from './WatchScreen';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [creatingStory, setCreatingStory] = useState<'photo' | 'video' | 'voice' | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const startCreatingStory = (type: 'photo' | 'video' | 'voice') => {
    setCreatingStory(type);
  };

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      onNavigate('watch');
    }
  };

  const renderStoryCreator = () => (
    <div className="fixed inset-0 z-[100] bg-black">
      <div className="absolute top-12 left-8 right-8 flex justify-between items-center z-[110]">
        <button onClick={() => setCreatingStory(null)} className="p-3 bg-white/10 rounded-full text-white">
          <ChevronRight size={28} className="rotate-180" />
        </button>
        <div className="bg-primary/20 backdrop-blur-xl px-4 py-2 rounded-full border border-primary/20 flex items-center gap-2">
          <Sparkles size={16} className="text-primary" />
          <span className="text-[10px] font-black text-white uppercase tracking-widest">AI Enhancing</span>
        </div>
      </div>
      
      <div className="h-full flex flex-col justify-end p-8 pb-16 gap-10">
        <div className="text-center">
          <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
            {creatingStory === 'photo' && 'Capture memory'}
            {creatingStory === 'video' && 'Record story'}
            {creatingStory === 'voice' && 'Speak history'}
          </h3>
          <p className="text-white/60 text-sm font-medium">Your story will vanish in 24 hours.</p>
        </div>

        <div className="flex justify-center items-center gap-10">
           <button className="size-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all">
             <ImageIcon size={28} />
           </button>
           <button className="size-24 rounded-[32px] bg-primary flex items-center justify-center text-white shadow-[0_0_40px_rgba(255,87,34,0.4)] active:scale-95 transition-all">
             {creatingStory === 'voice' ? <Mic size={40} /> : <div className="size-8 rounded-full bg-white" />}
           </button>
           <button className="size-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all">
             <Search size={28} />
           </button>
        </div>

        <div className="flex justify-center gap-4 py-4">
           {['photo', 'video', 'voice'].map((type) => (
             <button 
               key={type}
               onClick={() => setCreatingStory(type as any)}
               className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${creatingStory === type ? 'bg-white text-black' : 'bg-white/5 text-white/40'}`}
             >
               {type}
             </button>
           ))}
        </div>
      </div>
    </div>
  );

  const stories = [
    { id: 1, name: 'Amina', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbdbT_FInfR8uxmxmI7MuTPPRnz92srUYfLCZGODrfnnSNlvl0JnQ1jhuwLmFimYOa-8AYZ8s7HNG6QNjX2e3LGyfC1xr87hI2SDjE9VuH6sdwx82JQxkNsXHvYRcAYDbJywMj2mPea3OySYZmSBHz9yzaMH1j7hmlRarebGmB_qSp7WDqc43y5L4977lDvhMBZsTNImUU9FK_rEmTB1A5JmkzIieZqg7ZvCdF4auLVTferxfHmv-z30sH5JTZswOA3xZr7itAI', type: 'photo' },
    { id: 2, name: 'Kofi', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa7kMSnak5Z7TvZWOEKQAbm6CbO3ODtMNbcDpHbSCmI-nVtbjbopcryUHPV4zJOWRW12Wc01rnkTMgOB25pW4pHliiEPM5pHy1Zy5deuxJaSZn2VsSfau3kmv3bxnuf2_PYfOhZheJVH22vwTRX9EHqC7emYnxTvXDQhs_eHxoZf7XEUmy9GCIHLiRpc2QWxuDuVTuG74Lonkv6HsdM00RKE-Rmn3S1RMLYmWccp0ZLuCEkgxUdgnwkzkB7AdX88R_MxTqZHpt9qg', type: 'video' },
    { id: 3, name: 'Zainab', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPVLtZ9ebNSCsefwON9tx0ts5LmldUZe4kD1u4zS9PMxbjJ4O5uglg1WHhHKYApsOYZB50QKrSldgC1RLaTjErqoHZdtO-AK1szrOensz0B73S8NOEVXz0TDckAP_e-3WdzJ6VzCWegeyM7_k8nqdGZFHduhqVRZVxlGUD4Ld-ka0zo22oe0SJ8Y5RuwrQlyCRH2J3gUfoYX_ErsNZiDgJGpWAlaYduA3uiOQwJ-fqwYNCxJ-k8gFVVW7tCoC0I4lbXhlrjwzMYtI', type: 'voice' },
    { id: 4, name: 'Efe', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2XtlpGxrCiPPSTW4VrTLvtkMbQT4TbliNiC_Kt5vqWef0ISzPjcKP_Aplz3_g5uVbZGJ7x_LpaMjr1RbpXcgn-UNKJDBBADO3u_4N_RIkzNO0ckrj8sW9W6N4Wtz1UgT7WHC5apJXrVdIPg9AltF76xY-iQ1hvHOK70yhOwWswH68CRbRD3NMVY8hc57jqgeiOULeRR2oWKI-jefaykjv3HkxSbTkU29MzB0WFR_CM_ZiGKozMjY1NzPlGSKrz-F92TXquBMF4es', type: 'photo' },
  ];

  const feedPosts = [
    {
      id: 1,
      user: { name: 'Amina diallo', handle: '@amina', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm1D2MR21PdFvHkTTzfOduC4cXL4lb7xdBi05uhu1vv3cCnkKzqMvPQM23QpcYsFs4uILWSqLZR7k2DJo-3wPLgbulURUuxyU8_7CL_IiDhtC5eWFkLApvmQoGbbCJ0eX1pREmVrc69ArDP0tjQuYD4efjmPmtH7Y6wPIi3km80ROFi5rZfWibuFSAFw_khsceF4wpcwkHwHQv_aVJy4SMUulp6DYZPMcBHCFnfxyh2xtSX7rHCwoJ6aQzWCdsPEuLErmqEm6kQCE' },
      content: 'Capturing the golden hour at tarkwa bay. Lagos energy is unmatched! 🌊✨',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsK_pzZOJ14Vq8wb3iBogYinmyn-pDIuyAQj5Wvt4EsjazoGrdrZfuYR6Gi7KxJ0ZIeeJaLTy9StVmF3M-Wwo5EezRRRtvhYB0JwlHm3BeWBBDLD0pLqY1r1JJAQ96DXCAx4QL0WDTZmJmn1lLnXBf7JEyUEdnXxMi-6mJe5nnWDXxJsNR_3Yq28vQh7ANlQK6F223EWgoq2ZGSuFdGzRwdbkVte48UtJEAsE9SOAg7ZNBlPlTthJCOJRlXJW-pUq1sP-Krnopcbk',
      location: 'Lagos, nigeria',
      time: '2h ago',
      likes: '1.2k',
      comments: '84'
    },
    {
      id: 2,
      user: { name: 'Kofi mensah', handle: '@kofi_m', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQCB3TcksY69TIb3JTE9R0iEgfGXHyUaNW1vDGhSqite2MwlH6JFSENuwWvE0ehMkXxrFFNoS24M_PWSiS-CMx83zL8BRqc15On0vKfvwugv6lEC47Zvqx2Ctk1JuLaFVkkQZVhvoE6QjWZX12Q6cgrztBuGlgYaLrLCFVWndc-91EYzaVvPMJ1DfVGzX0yxFOURIdQBCE7g9dxjYakyTRqvGEwDDIGiYOhXd-ZgPbFE2VOMQKkAERPH5LWed2DUaGSvlC5RbTXh8' },
      content: 'Just launched the new afripay feature for small businesses! Supporting the local ecosystem one transaction at a time. 🚀💼',
      isPromo: true,
      promoTitle: 'Afripay merchant',
      promoSub: 'Zero fees for first 30 days',
      location: 'Accra, ghana',
      time: '5h ago',
      likes: '342',
      comments: '12'
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop < -20) {
      setShowSearch(true);
    }
  };

  return (
    <motion.div 
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="flex flex-col bg-slate-50 h-full overflow-y-auto no-scrollbar scroll-smooth relative"
      onScroll={handleScroll}
      ref={scrollRef}
    >
      <AnimatePresence>
        {creatingStory && renderStoryCreator()}
      </AnimatePresence>

      {/* Header info */}
      <div className="px-6 pt-12 flex items-center justify-between bg-white border-b border-slate-50">
        <div className="flex flex-col text-slate-900">
          <h2 className="text-2xl font-black tracking-tight">Your feed</h2>
          <div className="flex gap-4 mt-2 mb-4">
            <button className="text-sm font-black border-b-2 border-primary pb-1">Home</button>
            <button 
              onClick={() => onNavigate('watch')}
              className="text-sm font-black text-slate-300 hover:text-slate-500 transition-colors"
            >
              Watch
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={() => setShowSearch(!showSearch)}
             className={`p-3 rounded-full transition-all ${showSearch ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400'}`}
           >
             <Search size={22} />
           </button>
        </div>
      </div>

      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 py-4 bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search posts, friends, tags..." 
                autoFocus
                className="w-full h-12 bg-slate-50 rounded-[20px] pl-12 pr-4 text-sm font-medium outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pb-32">
        {/* Stories */}
        <section className="py-6 overflow-x-auto no-scrollbar flex gap-5 px-6">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div 
              onClick={() => startCreatingStory('photo')}
              className="size-18 rounded-full flex items-center justify-center text-primary cursor-pointer bg-white border-2 border-dashed border-primary/30 shadow-sm active:scale-90 transition-transform"
            >
              <Plus size={28} />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Your story</span>
          </div>
          {stories.map(story => (
            <div key={story.id} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer relative group">
              <div className="size-18 rounded-full p-1 bg-white shadow-md ring-2 ring-primary/20 group-active:scale-95 transition-transform">
                <img src={story.img} alt={story.name} className="w-full h-full rounded-full object-cover" />
              </div>
              <span className="text-[10px] font-bold text-slate-600 lowercase first-letter:uppercase">{story.name}</span>
              <div className="absolute top-0 right-0 size-6 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-50">
                {story.type === 'photo' && <Camera size={12} className="text-primary" />}
                {story.type === 'video' && <PlayCircle size={12} className="text-rose-500" />}
                {story.type === 'voice' && <Mic size={12} className="text-blue-500" />}
              </div>
            </div>
          ))}
        </section>

        {/* Feed posts */}
        <div className="px-6 space-y-8 mt-2">
          {feedPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 transition-all hover:shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-full overflow-hidden border-2 border-slate-50 shadow-inner">
                    <img src={post.user.img} alt={post.user.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-slate-900 leading-none mb-1.5">{post.user.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{post.time} • {post.location}</p>
                  </div>
                </div>
                <button className="p-3 bg-slate-50 rounded-full text-slate-300 hover:text-slate-900 transition-all active:scale-90">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">{post.content}</p>
              
              {post.image && (
                <div className="rounded-[32px] overflow-hidden mb-6 aspect-[4/3] shadow-inner">
                  <img src={post.image} alt="post" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-slate-400 transition-colors hover:text-primary group">
                    <div className="group-active:scale-125 transition-transform">
                      <Heart size={24} />
                    </div>
                    <span className="text-xs font-black">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-400 transition-colors hover:text-primary">
                    <MessageCircle size={24} />
                    <span className="text-xs font-black">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-primary font-black bg-primary/5 px-5 py-2 rounded-2xl ring-1 ring-primary/20 hover:bg-primary hover:text-white transition-all active:scale-95">
                    <Coins size={18} />
                    <span className="text-[10px] uppercase tracking-widest">Tip</span>
                  </button>
                </div>
                <div className="flex items-center gap-5 text-slate-200">
                  <Bookmark size={22} className="hover:text-amber-500 cursor-pointer transition-colors" />
                  <Share2 size={22} className="hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                       <div key={i} className="size-8 rounded-full border-4 border-white bg-slate-200 shadow-sm" />
                     ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">84 viewers</span>
                </div>
                <button className="text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/5 px-5 py-2 rounded-xl border border-primary/10">React now</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </motion.div>
  );
}
