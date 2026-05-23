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
  Search,
  Menu,
  Shield,
  HelpCircle,
  GraduationCap,
  Puzzle,
  Trophy,
  Vote,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { Screen } from '../types';
import {
  centerActionItems,
  getActiveNavId,
  isBottomNavScreen,
  mainNavItems,
  NavIconKey,
} from './navigationModel';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function Layout({ children, activeScreen, onScreenChange }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isWatch = activeScreen === 'watch';

  const showBottomNav = isBottomNavScreen(activeScreen);
  const activeNavId = getActiveNavId(activeScreen);

  const iconMap: Record<NavIconKey, LucideIcon> = {
    home: Home,
    tribes: Users,
    watch: PlayCircle,
    discover: Compass,
    menu: Menu,
    afripay: Wallet,
    profile: User,
    record: Trophy,
    createTribe: Users,
    market: ShoppingBag,
    vote: Vote,
    heritage: GraduationCap,
    miniapps: Puzzle,
  };

  const navigateFromAction = (screen: Screen) => {
    setIsMenuOpen(false);
    onScreenChange(screen);
  };

  return (
    <div className={`relative mx-auto flex h-screen max-w-md flex-col overflow-hidden ${isWatch ? 'bg-black' : 'bg-background-light'} shadow-2xl`}>
      {/* Top Header - Sticky */}
      {!isWatch && (
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-background-light px-6 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-3">
            {!showBottomNav && (
              <button 
                type="button"
                aria-label="Go back"
                onClick={() => onScreenChange('more')}
                className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600"
              >
                <ChevronRight size={24} className="rotate-180" />
              </button>
            )}
            {showBottomNav && (
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMvbdbT_FInfR8uxmxmI7MuTPPRnz92srUYfLCZGODrfnnSNlvl0JnQ1jhuwLmFimYOa-8AYZ8s7HNG6QNjX2e3LGyfC1xr87hI2SDjE9VuH6sdwx82JQxkNsXHvYRcAYDbJywMj2mPea3OySYZmSBHz9yzaMH1j7hmlRarebGmB_qSp7WDqc43y5L4977lDvhMBZsTNImUU9FK_rEmTB1A5JmkzIieZqg7ZvCdF4auLVTferxfHmv-z30sH5JTZswOA3xZr7itAI"
                alt=""
                className="size-12 rounded-full border-2 border-emerald-500 object-cover"
              />
            )}
            <h1 className="text-2xl font-extrabold tracking-tight text-emerald-800">AfriBook</h1>
          </div>
          <div className="flex items-center gap-2">
            <button 
              type="button"
              aria-label="Open search"
              onClick={() => onScreenChange('search')}
              className="p-2 rounded-full text-emerald-700 transition-colors hover:bg-emerald-50 active:scale-95"
            >
              <Search size={24} />
            </button>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`flex-1 ${!isWatch ? (showBottomNav ? 'pb-24' : 'pb-6') + ' overflow-y-auto' : ''}`}>
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
        {showBottomNav && (
          <>
            {isMenuOpen && (
              <motion.button
                type="button"
                aria-label="Close feature shortcuts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-30 bg-slate-950/20 backdrop-blur-[2px]"
              />
            )}

            <motion.nav
              initial={{ y: 110 }}
              animate={{ y: 0 }}
              exit={{ y: 110 }}
              className={`fixed bottom-0 left-1/2 z-40 w-full max-w-md -translate-x-1/2 border-t px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-3 ${
                isWatch
                  ? 'border-white/10 bg-black/60 text-white backdrop-blur-xl'
                  : 'border-orange-100 bg-white/95 text-slate-500 shadow-[0_-12px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl'
              }`}
            >
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.96 }}
                    transition={{ duration: 0.16 }}
                    className="absolute bottom-[92px] left-4 right-4 rounded-[28px] border border-orange-100 bg-white p-3 shadow-2xl shadow-slate-900/15"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {centerActionItems.map((item) => {
                        const Icon = iconMap[item.icon];

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => navigateFromAction(item.id)}
                            className="flex items-center gap-3 rounded-[20px] p-3 text-left transition-colors active:scale-[0.98] hover:bg-orange-50"
                          >
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/25">
                              <Icon size={21} />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[13px] font-extrabold leading-tight text-slate-950">{item.label}</span>
                              <span className="mt-0.5 block truncate text-[10px] font-semibold text-slate-400">{item.description}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-[1fr_1fr_74px_1fr_1fr] items-center gap-1">
                {mainNavItems.slice(0, 2).map((item) => {
                  const Icon = iconMap[item.icon];
                  const isActive = activeNavId === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => navigateFromAction(item.id)}
                      className={`flex min-w-0 flex-col items-center gap-1 rounded-2xl px-1 py-1.5 transition-colors active:scale-[0.98] ${
                        isActive ? 'text-orange-500' : isWatch ? 'text-white/60' : 'text-slate-400'
                      }`}
                    >
                      <Icon size={23} fill={isActive ? 'currentColor' : 'none'} />
                      <span className="w-full truncate text-center text-[10px] font-bold">{item.label}</span>
                    </button>
                  );
                })}

                <div className="flex justify-center">
                  <button
                    type="button"
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? 'Close app features' : 'Open app features'}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex size-16 items-center justify-center rounded-full border-[5px] border-white bg-orange-500 text-white transition-transform active:scale-95"
                  >
                    <Plus size={34} className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`} />
                  </button>
                </div>

                {mainNavItems.slice(2).map((item) => {
                  const Icon = iconMap[item.icon];
                  const isActive = activeNavId === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => navigateFromAction(item.id)}
                      className={`flex min-w-0 flex-col items-center gap-1 rounded-2xl px-1 py-1.5 transition-colors active:scale-[0.98] ${
                        isActive ? 'text-orange-500' : isWatch ? 'text-white/60' : 'text-slate-400'
                      }`}
                    >
                      <Icon size={23} fill={isActive ? 'currentColor' : 'none'} />
                      <span className="w-full truncate text-center text-[10px] font-bold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
