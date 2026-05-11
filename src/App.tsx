/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Layout from './components/Layout';
import HomeScreen from './screens/HomeScreen';
import AfriRecordScreen from './screens/AfriRecordScreen';
import TribesScreen from './screens/TribesScreen';
import WatchScreen from './screens/WatchScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import AfriPayScreen from './screens/AfriPayScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreateTribeScreen from './screens/CreateTribeScreen';
import ClaimNewRecordScreen from './screens/ClaimNewRecordScreen';
import TribeDetailScreen from './screens/TribeDetailScreen';
import TribeVotingScreen from './screens/TribeVotingScreen';
import FundraiserScreen from './screens/FundraiserScreen';
import AriMarketScreen from './screens/AriMarketScreen';
import ShowroomAIScreen from './screens/ShowroomAIScreen';
import SettingsScreen from './screens/SettingsScreen';
import MemoryNetworkScreen from './screens/MemoryNetworkScreen';
import MetaverseScreen from './screens/MetaverseScreen';
import AfriHeroScreen from './screens/AfriHeroScreen';
import MiniAppCenter from './screens/MiniAppCenter';
import MoreScreen from './screens/MoreScreen';
import { Screen } from './types';
import { Plus, Shield, HelpCircle, Archive, Globe, Gamepad2, GraduationCap } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onNavigate={setActiveScreen} />;
      case 'afrirecord':
        return <AfriRecordScreen onNavigate={setActiveScreen} />;
      case 'tribes':
        return <TribesScreen onNavigate={setActiveScreen} />;
      case 'create-tribe':
        return <CreateTribeScreen onNavigate={setActiveScreen} />;
      case 'claim-new-record':
        return <ClaimNewRecordScreen onNavigate={setActiveScreen} />;
      case 'tribe-detail':
        return <TribeDetailScreen onNavigate={setActiveScreen} />;
      case 'tribe-voting':
        return <TribeVotingScreen onNavigate={setActiveScreen} />;
      case 'fundraiser':
        return <FundraiserScreen onNavigate={setActiveScreen} />;
      case 'ari-market':
        return <AriMarketScreen onNavigate={setActiveScreen} />;
      case 'ari-market-store':
        return <ShowroomAIScreen onNavigate={setActiveScreen} />;
      case 'settings':
        return <SettingsScreen onNavigate={setActiveScreen} />;
      case 'yearbook':
        return <MemoryNetworkScreen onNavigate={setActiveScreen} />;
      case 'metaverse':
        return <MetaverseScreen onNavigate={setActiveScreen} />;
      case 'afrihero':
      case 'archive':
        return <AfriHeroScreen onNavigate={setActiveScreen} />;
      case 'miniapps':
        return <MiniAppCenter onNavigate={setActiveScreen} />;
      case 'more':
        return <MoreScreen onNavigate={setActiveScreen} />;
      case 'governance':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-slate-50">
            <div className="size-24 bg-primary/10 rounded-[32px] flex items-center justify-center text-primary mb-8 shadow-inner ring-8 ring-primary/5">
              <Shield size={44} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter">Tribe governance</h2>
            <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed">View and participate in the decentralized decision making of your tribes.</p>
          </div>
        );
      case 'help':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-slate-50">
            <div className="size-24 bg-primary/10 rounded-[32px] flex items-center justify-center text-primary mb-8 shadow-inner ring-8 ring-primary/5">
              <HelpCircle size={44} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter">Help center</h2>
            <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed">Find answers to your questions and learn how to get the most out of afribook.</p>
          </div>
        );
      case 'watch':
        return <WatchScreen onNavigate={(s) => setActiveScreen(s)} />;
      case 'discover':
        return <DiscoverScreen onNavigate={(s) => setActiveScreen(s)} />;
      case 'afripay':
        return <AfriPayScreen onNavigate={(s) => setActiveScreen(s)} />;
      case 'profile':
        return <ProfileScreen onNavigate={(s) => setActiveScreen(s)} />;
      case 'reputation':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-white rounded-b-[40px] shadow-sm">
            <div className="size-24 bg-emerald-50 rounded-[32px] flex items-center justify-center text-emerald-500 mb-8 shadow-inner ring-8 ring-emerald-50/50">
              <Shield size={44} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter">Reputation score</h2>
            <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed mb-6">Your trust level is calculated based on verified contributions, tribe participation, and verified heritage records.</p>
            <div className="bg-emerald-500 text-white px-8 py-3 rounded-2xl text-xl font-black shadow-lg shadow-emerald-500/20">Level 4</div>
          </div>
        );
      case 'security':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-white rounded-b-[40px] shadow-sm">
            <div className="size-24 bg-blue-50 rounded-[32px] flex items-center justify-center text-blue-500 mb-8 shadow-inner ring-8 ring-blue-50/50">
              <Shield size={44} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter">Account security</h2>
            <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed">Your african identity is secured with biometric palm-scanning and decentralized node verification.</p>
          </div>
        );
      case 'claim-record':
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-slate-50">
            <div className="size-24 bg-primary/10 rounded-[32px] flex items-center justify-center text-primary mb-8 shadow-inner ring-8 ring-primary/5">
              <Plus size={44} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter">Claim a new record</h2>
            <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed mb-10">Start your journey to becoming an official record holder in Africa.</p>
            <button 
              onClick={() => setActiveScreen('claim-new-record')}
              className="w-full max-w-xs bg-slate-900 text-white py-5 rounded-[24px] font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-slate-900/20 active:scale-95 transition-all"
            >
              Get started
            </button>
          </div>
        );
      default:
        return <HomeScreen onNavigate={setActiveScreen} />;
    }
  };

  return (
    <Layout activeScreen={activeScreen} onScreenChange={setActiveScreen}>
      {renderScreen()}
    </Layout>
  );
}
