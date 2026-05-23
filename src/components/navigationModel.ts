import { Screen } from '../types';

export type NavIconKey =
  | 'home'
  | 'tribes'
  | 'watch'
  | 'discover'
  | 'menu'
  | 'record'
  | 'createTribe'
  | 'afripay'
  | 'market'
  | 'vote'
  | 'heritage'
  | 'profile'
  | 'miniapps';

export interface NavigationItem {
  id: Screen;
  label: string;
  icon: NavIconKey;
}

export interface CenterActionItem extends NavigationItem {
  description: string;
}

export const centerActionSlot = 'plus' as const;

export const mainNavItems: NavigationItem[] = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'tribes', icon: 'tribes', label: 'Tribes' },
  { id: 'watch', icon: 'watch', label: 'Watch' },
  { id: 'profile', icon: 'profile', label: 'Profile' },
];

export const bottomNavSlots = [
  mainNavItems[0].id,
  mainNavItems[1].id,
  centerActionSlot,
  mainNavItems[2].id,
  mainNavItems[3].id,
] as const;

export const bottomNavScreens: Screen[] = ['home', 'search', 'tribes', 'watch', 'profile', 'more'];

export function isBottomNavScreen(screen: Screen): boolean {
  return bottomNavScreens.includes(screen);
}

export const centerActionItems: CenterActionItem[] = [
  { id: 'discover', icon: 'discover', label: 'Discover', description: 'Explore photos and places' },
  { id: 'claim-new-record', icon: 'record', label: 'Claim Record', description: 'Verify a new achievement' },
  { id: 'afripay', icon: 'afripay', label: 'AfriPay', description: 'Open your wallet' },
  { id: 'create-tribe', icon: 'createTribe', label: 'Create Tribe', description: 'Start a community hub' },
  { id: 'ari-market', icon: 'market', label: 'AriMarket', description: 'Open marketplace tools' },
  { id: 'arivote', icon: 'vote', label: 'AriVote', description: 'Launch governance flow' },
  { id: 'heritage', icon: 'heritage', label: 'Heritage', description: 'Archive cultural stories' },
  { id: 'profile', icon: 'profile', label: 'Profile', description: 'View your account' },
  { id: 'miniapps', icon: 'miniapps', label: 'Mini Apps', description: 'More AfriBook features' },
];

const activeNavMap: Partial<Record<Screen, Screen>> = {
  search: 'home',
  afrirecord: 'discover',
  'claim-new-record': 'discover',
  'claim-record': 'discover',
  'create-tribe': 'tribes',
  'tribe-detail': 'tribes',
  'tribe-voting': 'tribes',
  governance: 'tribes',
  fundraiser: 'tribes',
  'ari-market': 'discover',
  'ari-market-store': 'discover',
  heritage: 'discover',
  arivote: 'tribes',
  afrihero: 'discover',
  metaverse: 'discover',
  archive: 'discover',
  miniapps: 'discover',
  settings: 'profile',
  security: 'profile',
  help: 'profile',
};

export function getActiveNavId(activeScreen: Screen): Screen {
  return activeNavMap[activeScreen] ?? activeScreen;
}
