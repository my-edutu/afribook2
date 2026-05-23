/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  Vote, 
  Bell, 
  User, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Users, 
  Plus, 
  ChevronRight, 
  Heart, 
  ShoppingBag,
  Flame,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';
import { ActionButton, IconButton, MobilePage, PageHeader, PillButton, SectionHeader, SurfaceCard } from '../components/MobileUI';

interface TribesScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function TribesScreen({ onNavigate }: TribesScreenProps) {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const tribes = [
    { 
      id: 'lagos-tech', 
      name: 'Lagos Tech Founders', 
      members: '15.2k', 
      desc: 'The heartbeat of West African innovation.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiwy0V9JvcnMi_MPwpUv629LZgcgMSGM8JKw8kGwF5Xhu_8jnycAf-lYGUeMcBHtRfpXaO5Sm1IkOxh_oZGuZ1pPbbDUAmv1rAONOuaoY6m4pakqUZ1b0HPZ0ShFlcz_oNPaCL8nHTvydyOdHzAmumwTQchkCSMQ_rGIrCr750z608EBo_foM9t7rvZQSUjXtLVH10elDh45J7gQ9OlNcUJlPO1eQktBANRGKeOUAe8MWcV6xjxgmd6ltdhgWyniAkY5BPqGZXx1g',
      category: 'tech'
    },
    { 
      id: 'nairobi-art', 
      name: 'Nairobi Creatives', 
      members: '8.4k', 
      desc: 'Exploring the intersection of tradition and digital art.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbNNQk1_FwijWinaA3SY5ksMs_f48eebyAjlp8TvIlExB7Zr4bg5VorcBN9KGX25LNLmMErGe9vyc5ZG_-JNcspnkftMNwbJ5EG6iElrZr1IUcPNA9hfm_ZQolx_ywh45VSGc7wPg3CqNd2QQzoUJWvpJKd6XyEUSTyIu7L4IQTdtQsuiWbbsSfreEvokQvObIal6h1q58fmwBEHzixPP0vEm6lXU1go5fyMKnzzKoVOxaUohCvSrjT3iv1zZzLcemB3JY5KhzD7U',
      category: 'creative'
    },
    { 
      id: 'accra-devs', 
      name: 'Accra Dev Circle', 
      members: '12.1k', 
      desc: 'Building the protocols for a decentralised Ghana.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_exvvwk_lpu5Xk_VeDBqc_6BSCFmnW8FX6DwuarbJ-2j-NTS6l31wz-zdSdQTjLfxM50SsLrun3RF-AqgaBVY4BP5PCrpe1KQQgqioSZeHSoqgPhl_I0f8K3cwqrPAP7wzCzocBn0er11QnQEiHnyLj8djEAkPgqlgCLFLX1UL8PGhczcEA5uvSBp10YpNrhWSp7NkG75-ozrJ1X7TXrjOktPkqQVxzMgcQk4WWPqAxQ4Qchk0eHB5HMOgH1UcdjhN0q8gsUn-TM',
      category: 'tech'
    }
  ];

  const categories = [
    { id: 'all', label: 'All tribes' },
    { id: 'tech', label: 'Tech & dev' },
    { id: 'creative', label: 'Art & culture' },
    { id: 'heritage', label: 'History' },
  ];

  return (
    <MobilePage>
      {/* Header */}
      <PageHeader title="Tribes Hub" eyebrow="Discover your digital community">
        <IconButton label="Create tribe" icon={Plus} tone="primary" onClick={() => onNavigate('create-tribe')} />
      </PageHeader>

      <section className="bg-white px-6 pb-6 pt-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <PillButton
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              isActive={activeCategory === cat.id}
              tone="ghost"
              className="shrink-0"
            >
              {cat.label}
            </PillButton>
          ))}
        </div>
      </section>

      <main className="px-6 py-8">
        <SectionHeader title="Popular Tribes" action={<TrendingUp size={16} className="text-slate-300" />} />

        <div className="space-y-6">
          {tribes.filter(t => activeCategory === 'all' || t.category === activeCategory).map((tribe) => (
            <SurfaceCard
              key={tribe.id} 
              className="p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex items-start gap-5">
                <div className="size-20 shrink-0 overflow-hidden rounded-3xl shadow-inner ring-4 ring-slate-50">
                  <img src={tribe.img} alt={tribe.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="truncate text-lg font-extrabold leading-tight text-slate-950">{tribe.name}</h3>
                    <ShieldCheck size={16} className="text-emerald-500" />
                  </div>
                  <p className="mb-3 text-xs font-bold text-slate-400">{tribe.members} members</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">{tribe.desc}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <ActionButton
                  tone="ghost"
                  onClick={() => onNavigate('tribe-detail')}
                  className="flex-1"
                >
                  View Details
                </ActionButton>
                <ActionButton tone="primary" className="flex-1">
                  Join Tribe
                </ActionButton>
              </div>
            </SurfaceCard>
          ))}
        </div>

        {/* Treasury Highlight */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
          <div className="relative z-10">
            <Flame size={40} className="text-primary mb-6" />
            <h3 className="mb-3 text-2xl font-extrabold tracking-tight">Community Vaults</h3>
            <p className="text-white/50 text-sm font-medium leading-relaxed mb-8 max-w-xs">Participate in decentralized treasuries. 45M AFRI currently managed by active tribes.</p>
            <ActionButton tone="light" onClick={() => onNavigate('ari-market')}>Explore AriMarket</ActionButton>
          </div>
          <div className="absolute -right-8 -bottom-8 text-white/5 transform rotate-12">
            <Users size={200} />
          </div>
        </div>
      </main>
    </MobilePage>
  );
}
