/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useState } from 'react';
import { 
  Box, 
  Map as MapIcon, 
  Component, 
  LayoutGrid, 
  ShoppingBag, 
  Coins,
  History,
  TrendingUp,
  Cpu,
  Globe,
  Maximize2,
  X,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Float, Text, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import { Screen } from '../types';

function VRScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 8, 20]} />
      <OrbitControls autoRotate autoRotateSpeed={0.2} enablePan={false} maxDistance={40} minDistance={5} />
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.4} />
      <pointLight position={[15, 15, 15]} intensity={2} color="#6366f1" />
      <pointLight position={[-15, 10, -15]} intensity={1.5} color="#f59e0b" />
      
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <group>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[2.5, 64, 64]} />
              <MeshDistortMaterial 
                color="#6366f1" 
                speed={2} 
                distort={0.4} 
                radius={1} 
                emissive="#312e81" 
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
            <Text
              position={[0, 4, 0]}
              fontSize={0.8}
              color="white"
              font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mRQDqQzg9P98shxi8E3nzW_XItNBeFv6rYgg.woff"
              anchorX="center"
              anchorY="middle"
            >
              AfriNode
            </Text>
          </group>
        </Float>

        {/* Dynamic Data Ring */}
        {[...Array(24)].map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const radius = 6;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, -1, Math.sin(angle) * radius]}>
              <boxGeometry args={[0.2, 0.1, 0.5]} />
              <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={2} />
            </mesh>
          );
        })}

        {/* Floating Land Plots */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 12;
          const height = Math.sin(i * 0.5) * 2;
          return (
            <Float key={i} speed={2.5} rotationIntensity={1.5} floatIntensity={1.5} position={[Math.cos(angle) * radius, height, Math.sin(angle) * radius]}>
               <RoundedBox args={[3, 0.4, 3]} radius={0.15} smoothness={4}>
                 <meshStandardMaterial 
                   color={i % 3 === 0 ? "#818cf8" : i % 3 === 1 ? "#fbbf24" : "#ec4899"} 
                   opacity={0.8} 
                   transparent 
                   roughness={0}
                   metalness={1}
                 />
               </RoundedBox>
               <pointLight intensity={0.5} color="white" position={[0, 1, 0]} />
               <Text
                 position={[0, 1.2, 0]}
                 fontSize={0.3}
                 color="white"
                 anchorX="center"
                 anchorY="middle"
               >
                 Tribe #{i * 42}
               </Text>
            </Float>
          );
        })}
      </Suspense>

      <gridHelper args={[100, 50, "#1e293b", "#0f172a"]} position={[0, -5, 0]} />
    </>
  );
}

interface MetaverseScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function MetaverseScreen({ onNavigate }: MetaverseScreenProps) {
  const [isVREnabled, setIsVREnabled] = useState(false);
  
  const landTypes = [
    { title: 'Residential land', desc: 'Build your virtual home', price: '450 AFR', color: 'bg-emerald-100 text-emerald-600', trend: '+12%' },
    { title: 'Commercial land', desc: 'Host your virtual business', price: '1,200 AFR', color: 'bg-blue-100 text-blue-600', trend: '+24%' },
    { title: 'Cultural heritage', desc: 'Museums and festivals', price: '3,000 AFR', color: 'bg-orange-100 text-orange-600', trend: '+5%' },
    { title: 'Event arenas', desc: 'Concerts and gatherings', price: '2,500 AFR', color: 'bg-purple-100 text-purple-600', trend: '+18%' },
  ];

  return (
    <div className="flex flex-col bg-[#020617] min-h-screen text-white relative">
      <AnimatePresence>
        {isVREnabled && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <div className="absolute top-12 right-8 z-[110] flex gap-4">
               <button 
                onClick={() => setIsVREnabled(false)}
                className="size-16 rounded-full bg-white/5 backdrop-blur-3xl flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition-all shadow-2xl"
               >
                 <X size={32} />
               </button>
            </div>
            
            <div className="absolute top-12 left-8 z-[110]">
               <div className="flex items-center gap-4 bg-indigo-600 px-6 py-3 rounded-full shadow-[0_0_40px_rgba(79,70,229,0.4)]">
                  <Globe size={20} className="animate-spin-slow" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live metaverse terminal</span>
               </div>
            </div>

            <div className="absolute left-8 bottom-12 z-[110] space-y-6">
               <div className="bg-white/5 backdrop-blur-2xl p-6 rounded-[32px] border border-white/10 space-y-4 max-w-xs shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Connection stable</span>
                  </div>
                  <h4 className="text-xl font-black tracking-tight">AfriNode cosmos</h4>
                  <p className="text-white/40 text-xs font-medium leading-relaxed italic">"Welcome to the decentralized collective. Explore the new dimension of the continent."</p>
               </div>
            </div>
            
            <Canvas shadows gl={{ antialias: true }}>
              <Suspense fallback={null}>
                <VRScene />
              </Suspense>
            </Canvas>

            <div className="absolute bottom-12 right-8 z-[110] flex flex-col items-end gap-3">
               <button className="bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-all">Teleport home</button>
               <button className="bg-primary text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20">Buy this plot</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Metaverse Hero */}
      <div className="px-6 pt-20 pb-16 bg-gradient-to-br from-indigo-950 via-slate-950 to-[#020617] relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-6">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">Virtual africa ecosystem</span>
          </div>
          <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-6">Explore<br/><span className="text-indigo-500">The meta</span></h1>
          <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs mb-10">
            Own digital land, build virtual experiences, and interact with the continent in a new decentralized dimension.
          </p>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsVREnabled(true)}
              className="bg-indigo-600 text-white px-10 py-5 rounded-[24px] font-black text-xs uppercase tracking-widest shadow-2xl shadow-indigo-600/40 flex items-center gap-3 active:scale-95 transition-all"
            >
              <Maximize2 size={20} />
              Enter VR world
            </button>
          </div>
        </div>
        
        {/* Dynamic decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-400/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <main className="flex-1 px-6 pt-10 pb-32">
        <div className="flex items-center gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
           {['Land marketplace', 'Avatars', 'Events', 'Auctions'].map((tab, i) => (
             <button key={i} className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-white text-slate-900' : 'bg-slate-900 text-white/40 border border-white/5'}`}>
                {tab}
             </button>
           ))}
        </div>

        {/* Digital Land Ownership */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight leading-none text-white">Market listings</h2>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 ml-1">Verified decentralized parcels</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-5">
            {landTypes.map((land, i) => (
              <div 
                key={i}
                className="bg-white/5 p-6 rounded-[32px] border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/10 hover:border-indigo-500/30 transition-all active:scale-[0.98] shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center gap-6">
                  <div className={`size-16 rounded-3xl ${land.color} flex items-center justify-center shadow-inner`}>
                    <MapIcon size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-tight text-base mb-1">{land.title}</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{land.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end mb-2">
                    <div className="size-2 rounded-full bg-emerald-500" />
                    <span className="text-emerald-400 text-[10px] font-black uppercase">{land.trend}</span>
                  </div>
                  <p className="font-black text-xl text-white tracking-tight">{land.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Stats */}
        <section className="grid grid-cols-2 gap-5 mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">Parcels sold</p>
              <h4 className="text-2xl font-black">12.4k</h4>
              <div className="mt-4 flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase">
                <TrendingUp size={14} />
                <span>+4% week</span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 size-20 bg-white/5 rounded-full blur-2xl" />
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-amber-950 p-8 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">Volume pool</p>
              <h4 className="text-2xl font-black">8.1M</h4>
              <div className="mt-4 flex items-center gap-2 text-amber-400 text-[10px] font-black uppercase">
                <Coins size={14} />
                <span>AFR total</span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 size-20 bg-white/5 rounded-full blur-2xl" />
          </div>
        </section>
      </main>
    </div>
  );
}

