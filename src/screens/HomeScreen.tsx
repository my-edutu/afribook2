/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronRight,
  MapPin,
  Bell,
  Plus,
  Heart,
  MessageCircle,
  Coins,
  Bookmark,
  Share2,
  MoreHorizontal,
  Sparkles,
  Search,
  Camera,
  Mic,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [showSearch, setShowSearch] = useState(false);
  const [creatingStory, setCreatingStory] = useState<'photo' | 'video' | 'voice' | null>(null);
  const [activeStoryId, setActiveStoryId] = useState<number | null>(null);
  const [composerOpen, setComposerOpen] = useState(false);
  const [composerText, setComposerText] = useState('');
  const [composerMode, setComposerMode] = useState<'text' | 'live' | 'media' | 'checkin'>('text');
  const [toast, setToast] = useState<string | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(() => new Set());
  const [savedPosts, setSavedPosts] = useState<Set<number>>(() => new Set());
  const [tippedPosts, setTippedPosts] = useState<Set<number>>(() => new Set());
  const [commentingPostId, setCommentingPostId] = useState<number | null>(null);
  const [commentDrafts, setCommentDrafts] = useState<Record<number, string>>({});
  const [userComments, setUserComments] = useState<Record<number, string[]>>({});
  const [openMenuPostId, setOpenMenuPostId] = useState<number | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 1800);
  };

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black"
    >
      <div className="absolute top-12 left-8 right-8 flex justify-between items-center z-[110]">
        <button onClick={() => setCreatingStory(null)} className="p-3 bg-white/10 rounded-full text-white">
          <ChevronRight size={28} className="rotate-180" />
        </button>
        <div className="bg-primary/20 backdrop-blur-xl px-4 py-2 rounded-full border border-primary/20 flex items-center gap-2">
          <Sparkles size={16} className="text-primary" />
          <span className="text-[10px] font-extrabold text-white tracking-wide">AI Enhancing</span>
        </div>
      </div>
      
      <div className="h-full flex flex-col justify-end p-8 pb-16 gap-10">
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            {creatingStory === 'photo' && 'Capture memory'}
            {creatingStory === 'video' && 'Record story'}
            {creatingStory === 'voice' && 'Speak history'}
          </h3>
          <p className="text-white/60 text-sm font-medium">Your story will vanish in 24 hours.</p>
        </div>

        <div className="flex justify-center items-center gap-10">
           <button 
             onClick={() => showToast('Gallery picker opened')}
             className="size-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-colors"
           >
             <ImageIcon size={28} />
           </button>
           <button 
             onClick={() => {
               setCreatingStory(null);
               showToast('Story posted');
             }}
             className="size-24 rounded-[32px] bg-primary flex items-center justify-center text-white shadow-[0_0_40px_rgba(255,87,34,0.4)] active:scale-95 transition-colors"
           >
             {creatingStory === 'voice' ? <Mic size={40} /> : <div className="size-8 rounded-full bg-white" />}
           </button>
           <button 
             onClick={() => showToast('Effects panel opened')}
             className="size-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-colors"
           >
             <Search size={28} />
           </button>
        </div>

        <div className="flex justify-center gap-4 py-4">
           {['photo', 'video', 'voice'].map((type) => (
             <button 
               key={type}
               onClick={() => setCreatingStory(type as any)}
               className={`px-6 py-2 rounded-full text-[10px] font-extrabold tracking-wide transition-colors ${creatingStory === type ? 'bg-white text-black' : 'bg-white/5 text-white/40'}`}
             >
               {type}
             </button>
           ))}
        </div>
      </div>
    </motion.div>
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
      content: 'Capturing the golden hour at Tarkwa Bay. Lagos energy is unmatched.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsK_pzZOJ14Vq8wb3iBogYinmyn-pDIuyAQj5Wvt4EsjazoGrdrZfuYR6Gi7KxJ0ZIeeJaLTy9StVmF3M-Wwo5EezRRRtvhYB0JwlHm3BeWBBDLD0pLqY1r1JJAQ96DXCAx4QL0WDTZmJmn1lLnXBf7JEyUEdnXxMi-6mJe5nnWDXxJsNR_3Yq28vQh7ANlQK6F223EWgoq2ZGSuFdGzRwdbkVte48UtJEAsE9SOAg7ZNBlPlTthJCOJRlXJW-pUq1sP-Krnopcbk',
      location: 'Lagos, nigeria',
      time: '2h ago',
      likes: '1.2k',
      comments: '84'
    },
    {
      id: 2,
      user: { name: 'Kofi mensah', handle: '@kofi_m', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQCB3TcksY69TIb3JTE9R0iEgfGXHyUaNW1vDGhSqite2MwlH6JFSENuwWvE0ehMkXxrFFNoS24M_PWSiS-CMx83zL8BRqc15On0vKfvwugv6lEC47Zvqx2Ctk1JuLaFVkkQZVhvoE6QjWZX12Q6cgrztBuGlgYaLrLCFVWndc-91EYzaVvPMJ1DfVGzX0yxFOURIdQBCE7g9dxjYakyTRqvGEwDDIGiYOhXd-ZgPbFE2VOMQKkAERPH5LWed2DUaGSvlC5RbTXh8' },
      content: 'Just launched the new AfriPay feature for small businesses. Supporting the local ecosystem one transaction at a time.',
      isPromo: true,
      promoTitle: 'Afripay merchant',
      promoSub: 'Zero fees for first 30 days',
      location: 'Accra, ghana',
      time: '5h ago',
      likes: '342',
      comments: '12'
    },
    {
      id: 3,
      user: { name: 'Zainab abiola', handle: '@zainab', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPVLtZ9ebNSCsefwON9tx0ts5LmldUZe4kD1u4zS9PMxbjJ4O5uglg1WHhHKYApsOYZB50QKrSldgC1RLaTjErqoHZdtO-AK1szrOensz0B73S8NOEVXz0TDckAP_e-3WdzJ6VzCWegeyM7_k8nqdGZFHduhqVRZVxlGUD4Ld-ka0zo22oe0SJ8Y5RuwrQlyCRH2J3gUfoYX_ErsNZiDgJGpWAlaYduA3uiOQwJ-fqwYNCxJ-k8gFVVW7tCoC0I4lbXhlrjwzMYtI' },
      content: 'Official: The largest Adinkra mural in West Africa is now verified. Proud to be part of the Digital Archivists tribe.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA15Elxt6oFPrdhzcuSi0AEbU6AfgsuTczLG6OeFvGkr1zOxDXmTQvo3yG0uVW9EjwZO6GYAmnA-UoUrJFi7vBA2c5gefvjmIcBx38cj-HSsFoG1uLFE5awZZVIb9VGEmaWbdVsKc5CcigeI2XRG2igoMkZyKUZda7Bgw70UvfZTnueiPstukcUZktE21oTdqBjonVQmJWIry6sYLBPB47WQVCIMxFCjXLjIg9TQwMExWJELsqVzkQAKPXZT7pp33C-dMzuP1xz_R8',
      location: 'Kumasi, ghana',
      time: '8h ago',
      likes: '4.5k',
      comments: '156'
    },
    {
      id: 4,
      user: { name: 'Efe ovoke', handle: '@efe_records', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2XtlpGxrCiPPSTW4VrTLvtkMbQT4TbliNiC_Kt5vqWef0ISzPjcKP_Aplz3_g5uVbZGJ7x_LpaMjr1RbpXcgn-UNKJDBBADO3u_4N_RIkzNO0ckrj8sW9W6N4Wtz1UgT7WHC5apJXrVdIPg9AltF76xY-iQ1hvHOK70yhOwWswH68CRbRD3NMVY8hc57jqgeiOULeRR2oWKI-jefaykjv3HkxSbTkU29MzB0WFR_CM_ZiGKozMjY1NzPlGSKrz-F92TXquBMF4es' },
      content: 'The "Lagos Tech Founders" tribe gathering was electric. Amazing to see so many record-breakers in one room. Decentralised Africa is here.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVcG06xrmE1M93ppf47PsxRLhxfGF6lrjPvBtqmqo5R-hN5XeDTltitXsLUnyI-k34LbAyPNln30TkCciDj4cYbXqlqFydZKSkEJ3OFxKn9Mc0gamnjvEyBkAnT_OufwXg7A8PG6cem89PMF2NstSIQMQNr1Foc0IXQ-E5UvFKveM7gV1ficFnAJPNz29ESPME3fL3RG5HzkNecr0r0iztnH1p2xZddGN05onYScuKqjoaH6MzHkTmzRb4BnnM6pjAS-FoVNunh2o',
      location: 'Victoria Island, lagos',
      time: '12h ago',
      likes: '890',
      comments: '45'
    },
    {
      id: 5,
      user: { name: 'Chioma okoro', handle: '@chioma_art', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbdbT_FInfR8uxmxmI7MuTPPRnz92srUYfLCZGODrfnnSNlvl0JnQ1jhuwLmFimYOa-8AYZ8s7HNG6QNjX2e3LGyfC1xr87hI2SDjE9VuH6sdwx82JQxkNsXHvYRcAYDbJywMj2mPea3OySYZmSBHz9yzaMH1j7hmlRarebGmB_qSp7WDqc43y5L4977lDvhMBZsTNImUU9FK_rEmTB1A5JmkzIieZqg7ZvCdF4auLVTferxfHmv-z30sH5JTZswOA3xZr7itAI' },
      content: 'New batch of hand-woven Kente arriving at AriMarket tomorrow. Each piece is embedded with a digital identity record.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vmTeHy5H8yzuIwYzT8byl_f48eebyAjlp8TvIlExB7Zr4bg5VorcBN9KGX25LNLmMErGe9vyc5ZG_-JNcspnkftMNwbJ5EG6iElrZr1IUcPNA9hfm_ZQolx_ywh45VSGc7wPg3CqNd2QQzoUJWvpJKd6XyEUSTyIu7L4IQTdtQsuiWbbsSfreEvokQvObIal6h1q58fmwBEHzixPP0vEm6lXU1go5fyMKnzzKoVOxaUohCvSrjT3iv1zZzLcemB3JY5KhzD7U',
      location: 'Nairobi, kenya',
      time: '1d ago',
      likes: '2.1k',
      comments: '230'
    }
  ];

  const parseCount = (value: string) => {
    const normalized = value.toLowerCase();
    if (normalized.endsWith('k')) {
      return Math.round(Number(normalized.replace('k', '')) * 1000);
    }
    return Number(normalized.replace(/,/g, ''));
  };

  const formatCount = (value: number) => {
    if (value >= 1000) {
      const rounded = value / 1000;
      return `${Number.isInteger(rounded) ? rounded.toFixed(0) : rounded.toFixed(1)}k`;
    }
    return value.toString();
  };

  const toggleLike = (postId: number) => {
    setLikedPosts((current) => {
      const next = new Set(current);
      const liked = next.has(postId);
      liked ? next.delete(postId) : next.add(postId);
      showToast(liked ? 'Love removed' : 'Post loved');
      return next;
    });
  };

  const toggleSaved = (postId: number) => {
    setSavedPosts((current) => {
      const next = new Set(current);
      const saved = next.has(postId);
      saved ? next.delete(postId) : next.add(postId);
      showToast(saved ? 'Removed from saved' : 'Saved to bookmarks');
      return next;
    });
    setOpenMenuPostId(null);
  };

  const sendComment = (postId: number) => {
    const comment = commentDrafts[postId]?.trim();
    if (!comment) return;

    setUserComments((current) => ({
      ...current,
      [postId]: [...(current[postId] ?? []), comment],
    }));
    setCommentDrafts((current) => ({ ...current, [postId]: '' }));
    showToast('Comment posted');
  };

  const tipPost = (postId: number) => {
    setTippedPosts((current) => {
      const next = new Set(current);
      next.add(postId);
      return next;
    });
    showToast('10 AFRI tip sent');
  };

  const publishComposerPost = () => {
    if (!composerText.trim() && composerMode === 'text') return;
    setComposerText('');
    setComposerOpen(false);
    setComposerMode('text');
    showToast('Post published to your feed');
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop < -20) {
      setShowSearch(true);
    }
  };

  const activeStory = stories.find((story) => story.id === activeStoryId);

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

      <AnimatePresence>
        {activeStory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="fixed inset-0 z-[100] bg-slate-950"
          >
            <img src={activeStory.img} alt={activeStory.name} className="absolute inset-0 h-full w-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
            <div className="relative z-10 h-full flex flex-col justify-between p-6 pt-12">
              <div>
                <div className="h-1 rounded-full bg-white/25 overflow-hidden mb-5">
                  <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 5 }} className="h-full bg-white" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={activeStory.img} alt="" className="size-11 rounded-full object-cover ring-2 ring-white/50" />
                    <div>
                      <p className="text-sm font-extrabold text-white">{activeStory.name}</p>
                      <p className="text-[10px] font-extrabold tracking-wide text-white/60">{activeStory.type} story</p>
                    </div>
                  </div>
                  <button onClick={() => setActiveStoryId(null)} className="p-3 rounded-full bg-white/10 text-white">
                    <ChevronRight size={24} className="rotate-180" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input className="h-12 flex-1 rounded-full bg-white/15 px-5 text-sm font-bold text-white placeholder:text-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 backdrop-blur-md" placeholder={`Reply to ${activeStory.name}...`} />
                <button onClick={() => showToast('Story reaction sent')} className="size-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <Heart size={20} fill="currentColor" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {composerOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-slate-950/40 backdrop-blur-sm flex items-end"
            onClick={() => setComposerOpen(false)}
          >
            <motion.div 
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              exit={{ y: 80 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white rounded-t-[32px] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Create post</h3>
                <button onClick={() => setComposerOpen(false)} className="px-4 py-2 rounded-full bg-slate-100 text-[10px] font-extrabold text-slate-500">Close</button>
              </div>
              <textarea
                value={composerText}
                onChange={(e) => setComposerText(e.target.value)}
                placeholder="What's your record today?"
                className="w-full min-h-32 resize-none rounded-[24px] bg-slate-50 p-5 text-sm font-semibold text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 border border-slate-100"
              />
              <div className="grid grid-cols-3 gap-3 my-5">
                {[
                  { id: 'live', label: 'Live', icon: Camera, color: 'text-rose-500' },
                  { id: 'media', label: 'Media', icon: ImageIcon, color: 'text-emerald-500' },
                  { id: 'checkin', label: 'Check-in', icon: MapPin, color: 'text-amber-500' },
                ].map(({ id, label, icon: Icon, color }) => (
                  <button
                    key={id}
                    onClick={() => setComposerMode(id as typeof composerMode)}
                    className={`h-14 rounded-2xl border flex items-center justify-center gap-2 transition-colors ${composerMode === id ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 bg-white text-slate-500'}`}
                  >
                    <Icon size={18} className={composerMode === id ? 'text-primary' : color} />
                    <span className="text-[10px] font-extrabold">{label}</span>
                  </button>
                ))}
              </div>
              <button 
                onClick={publishComposerPost}
                className="w-full h-14 rounded-[22px] bg-slate-900 text-white text-[10px] font-extrabold tracking-wide active:scale-[0.98] transition-colors disabled:opacity-40"
                disabled={!composerText.trim() && composerMode === 'text'}
              >
                Publish
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            aria-live="polite"
            className="fixed top-5 left-1/2 z-[140] -translate-x-1/2 rounded-full bg-slate-950 px-5 py-3 text-[11px] font-extrabold text-white shadow-2xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header info */}
      <div className="px-6 pt-4 pb-3 flex items-center justify-between bg-white border-b border-slate-50">
        <div className="flex flex-col text-slate-900">
          <div className="flex gap-4">
            <button className="text-sm font-extrabold border-b-2 border-primary pb-1">Home</button>
            <button 
              onClick={() => onNavigate('watch')}
              className="text-sm font-extrabold text-slate-300 hover:text-slate-500 transition-colors"
            >
              Watch
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={() => onNavigate('search')}
             className={`p-3 rounded-full transition-colors ${showSearch ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400'}`}
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
                placeholder="Search posts, friends, tags…" 
                className="w-full h-12 bg-slate-50 rounded-[20px] pl-12 pr-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pb-32 bg-slate-100">
        {/* Story Section */}
        <section className="bg-white px-6 py-4 border-b border-slate-200">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {/* Create Story */}
            <div className="flex flex-col items-center shrink-0">
               <div 
                 onClick={() => startCreatingStory('photo')}
                 className="size-16 rounded-[24px] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-100 transition-colors active:scale-90"
               >
                 <Plus size={24} />
               </div>
               <span className="text-[10px] font-bold text-slate-400 mt-2">Create</span>
            </div>
            {stories.map(story => (
              <button key={story.id} onClick={() => setActiveStoryId(story.id)} className="flex flex-col items-center shrink-0 group relative">
                <div className="size-16 rounded-[24px] p-0.5 bg-primary/20 shadow-sm transition-transform active:scale-95">
                  <img src={story.img} alt={story.name} className="w-full h-full rounded-[22px] object-cover" />
                </div>
                <span className="text-[10px] font-bold text-slate-600 mt-2 lowercase first-letter:uppercase">{story.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Create Post Box */}
        <section className="bg-white px-6 py-5 mb-4 border-b border-slate-200">
          <div className="flex gap-4 items-center">
            <div className="size-12 rounded-full overflow-hidden bg-slate-200">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYcG24Dieu84a3gmMn85e5BjbaF9vnbx5O6VKycbLNsSuEZtwI-9vn7p9Eo9EX8ATUs7wdAXSllcaK28WG5KMp08jOA2SagxmnxsI2wl95LLSiy0a6fr4Xo3CzifS7z86lE2Myaiduu0Xpvdc6vh2SmhXxHxUfDNBy6nOQltZOFtRDohhkW0UHE1XGHMHtwjQ-IJOYYialORWdwChDCX7dJTOp0OTYsdio87oL_Dp-yodBVOfHQunDDCI_7adeRosZVWbhfMaFev4" alt="Me" className="w-full h-full object-cover" />
            </div>
            <button onClick={() => setComposerOpen(true)} className="flex-1 h-12 bg-slate-50 rounded-full px-6 text-left text-slate-500 text-sm font-medium border border-slate-100 hover:bg-slate-100 transition-colors">
              What's your record today?
            </button>
          </div>
          <div className="flex items-center gap-6 mt-5 pt-4 border-t border-slate-50">
            <button onClick={() => { setComposerMode('live'); setComposerOpen(true); }} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl hover:bg-slate-50 transition-colors">
              <Camera size={18} className="text-rose-500" />
              <span className="text-[10px] font-extrabold text-slate-500">Live</span>
            </button>
            <button onClick={() => { setComposerMode('media'); setComposerOpen(true); }} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl hover:bg-slate-50 transition-colors">
              <ImageIcon size={18} className="text-emerald-500" />
              <span className="text-[10px] font-extrabold text-slate-500">Media</span>
            </button>
            <button onClick={() => { setComposerMode('checkin'); setComposerOpen(true); }} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl hover:bg-slate-50 transition-colors">
              <MapPin size={18} className="text-amber-500" />
              <span className="text-[10px] font-extrabold text-slate-500">Check-in</span>
            </button>
          </div>
        </section>

        {/* Feed Posts */}
        <div className="space-y-4">
          {feedPosts.map((post) => {
            const isLiked = likedPosts.has(post.id);
            const isSaved = savedPosts.has(post.id);
            const isTipped = tippedPosts.has(post.id);
            const comments = userComments[post.id] ?? [];
            const likeCount = formatCount(parseCount(post.likes) + (isLiked ? 1 : 0));
            const commentCount = formatCount(parseCount(post.comments) + comments.length);

            return (
            <article key={post.id} className="bg-white border-y border-slate-200">
              <div className="px-6 py-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full overflow-hidden bg-slate-100">
                      <img src={post.user.img} alt={post.user.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 leading-none mb-1 text-base">{post.user.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold">{post.time} / {post.location}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <button onClick={() => setOpenMenuPostId(openMenuPostId === post.id ? null : post.id)} className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                    <AnimatePresence>
                      {openMenuPostId === post.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="absolute right-0 top-10 z-20 w-44 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl"
                        >
                          <button onClick={() => toggleSaved(post.id)} className="flex w-full items-center gap-3 px-4 py-3 text-left text-[11px] font-extrabold text-slate-600 hover:bg-slate-50">
                            <Bookmark size={16} className={isSaved ? 'fill-primary text-primary' : ''} />
                            {isSaved ? 'Unsave post' : 'Save post'}
                          </button>
                          <button onClick={() => { setOpenMenuPostId(null); showToast('Post reported'); }} className="flex w-full items-center gap-3 px-4 py-3 text-left text-[11px] font-extrabold text-slate-600 hover:bg-slate-50">
                            <Bell size={16} />
                            Report
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <p className="text-sm text-slate-700 leading-relaxed mb-4 font-medium">{post.content}</p>
              </div>

              {post.image && (
                <div className="w-full aspect-[4/3] bg-slate-100 border-y border-slate-50">
                  <img src={post.image} alt="post" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                   <div className="flex -space-x-1.5 mr-2">
                      <div className="size-5 rounded-full bg-primary flex items-center justify-center ring-2 ring-white">
                        <Heart size={10} fill="white" className="text-white" />
                      </div>
                      <div className="size-5 rounded-full bg-amber-500 flex items-center justify-center ring-2 ring-white">
                        <Coins size={10} fill="white" className="text-white" />
                      </div>
                   </div>
                   <span className="text-[10px] text-slate-400 font-bold">{likeCount}</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-[10px] text-slate-400 font-bold">{commentCount} comments</span>
                   <span className="text-[10px] text-slate-400 font-bold">12 shares</span>
                </div>
              </div>

              <div className="px-4 py-1 mx-2 border-t border-slate-100 flex items-center justify-between">
                <button onClick={() => toggleLike(post.id)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-slate-50 transition-colors group ${isLiked ? 'text-primary' : ''}`}>
                  <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} className={`${isLiked ? 'text-primary' : 'text-slate-400'} group-active:scale-125 transition-transform`} />
                  <span className={`text-[10px] font-extrabold ${isLiked ? 'text-primary' : 'text-slate-500'}`}>Love</span>
                </button>
                <button onClick={() => setCommentingPostId(commentingPostId === post.id ? null : post.id)} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <MessageCircle size={20} className="text-slate-400" />
                  <span className="text-[10px] font-extrabold text-slate-500">Chat</span>
                </button>
                <button onClick={() => tipPost(post.id)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-slate-50 transition-colors text-primary ${isTipped ? 'bg-emerald-50 text-emerald-600' : 'bg-primary/5 shadow-inner'}`}>
                  <Coins size={20} className={isTipped ? 'text-emerald-600' : 'text-primary animate-bounce-slow'} />
                  <span className="text-[10px] font-bold">{isTipped ? 'Tipped' : 'Tip'}</span>
                </button>
                <button onClick={() => showToast('Share sheet opened')} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <Share2 size={20} className="text-slate-400" />
                  <span className="text-[10px] font-extrabold text-slate-500">Share</span>
                </button>
              </div>

              <AnimatePresence>
                {commentingPostId === post.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-slate-100 px-6 py-4"
                  >
                    {comments.length > 0 && (
                      <div className="mb-4 space-y-2">
                        {comments.map((comment, index) => (
                          <div key={`${post.id}-${index}`} className="rounded-2xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700">
                            {comment}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-3">
                      <input
                        value={commentDrafts[post.id] ?? ''}
                        onChange={(e) => setCommentDrafts((current) => ({ ...current, [post.id]: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') sendComment(post.id);
                        }}
                        className="h-11 flex-1 rounded-full bg-slate-50 px-5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 border border-slate-100"
                        placeholder="Write a comment…"
                      />
                      <button onClick={() => sendComment(post.id)} className="h-11 px-5 rounded-full bg-slate-900 text-white text-[10px] font-extrabold">
                        Send
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
            );
          })}
        </div>
      </main>
    </motion.div>
  );
}
