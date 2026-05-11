/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Users, 
  ShoppingBag, 
  PlayCircle, 
  Compass, 
  Wallet, 
  User, 
  Plus, 
  Bell, 
  Menu,
  Search,
  FileText,
  X,
  Settings,
  Shield,
  HelpCircle,
  LogOut,
  Heart,
  Calendar,
  History,
  GraduationCap,
  Globe,
  Archive,
  Gamepad2,
  Puzzle,
  Sparkles,
  LayoutGrid,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function Layout({ children, activeScreen, onScreenChange }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isWatch = activeScreen === 'watch';

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'tribes', icon: Users, label: 'Tribes' },
    { id: 'watch', icon: PlayCircle, label: 'Watch' },
    { id: 'afripay', icon: Wallet, label: 'Afripay' },
    { id: 'more', icon: LayoutGrid, label: 'More' },
  ];

  const mainScreens = ['home', 'tribes', 'watch', 'afripay', 'more'];
  const isMainScreen = mainScreens.includes(activeScreen);

  return (
    <div className={`flex flex-col h-screen max-w-md mx-auto ${isWatch ? 'bg-black' : 'bg-background-light'} shadow-2xl relative overflow-hidden`}>
      {/* Top Header - Sticky */}
      {!isWatch && (
        <header className="sticky top-0 z-50 bg-background-light px-6 py-4 flex items-center justify-between border-b border-slate-50">
          <div className="flex items-center gap-3">
            {!isMainScreen && (
              <button 
                onClick={() => onScreenChange('more')}
                className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600"
              >
                <ChevronRight size={24} className="rotate-180" />
              </button>
            )}
            <h1 className="text-xl font-bold tracking-tight text-primary">Afribook</h1>
          </div>
          <div className="flex items-center gap-2">
            <button 
              className="p-2 rounded-full hover:bg-primary/5 transition-colors text-slate-400 relative"
            >
              <Bell size={22} />
            </button>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`flex-1 ${!isWatch ? (isMainScreen ? 'pb-24' : 'pb-6') + ' overflow-y-auto' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.15 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <AnimatePresence>
        {isMainScreen && (
          <motion.nav 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md ${isWatch ? 'bg-black/20 backdrop-blur-sm border-t border-white/10' : 'bg-white/95 backdrop-blur-md border-t border-primary/10'} px-2 pb-6 pt-2 z-40`}
          >
            <div className="flex items-center justify-between relative">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onScreenChange(item.id as Screen)}
                  className={`flex flex-col items-center gap-1 flex-1 py-1 transition-colors ${
                    activeScreen === item.id 
                      ? 'text-primary' 
                      : (isWatch ? 'text-white/60' : 'text-slate-400')
                  }`}
                >
                  <item.icon size={24} fill={activeScreen === item.id ? 'currentColor' : 'none'} />
                  <span className="text-[10px] font-bold tracking-tighter">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
