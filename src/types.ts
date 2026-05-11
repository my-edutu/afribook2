/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Screen = 
  | 'home' 
  | 'tribes' 
  | 'watch' 
  | 'discover' 
  | 'afripay' 
  | 'profile'
  | 'settings'
  | 'help'
  | 'tribe-detail'
  | 'governance'
  | 'showroom'
  | 'claim-record'
  | 'afrirecord'
  | 'create-tribe'
  | 'claim-new-record'
  | 'tribe-voting'
  | 'fundraiser'
  | 'ari-market'
  | 'ari-market-store'
  | 'heritage'
  | 'arivote'
  | 'afrihero'
  | 'metaverse'
  | 'archive'
  | 'miniapps'
  | 'security'
  | 'more';

export interface Record {
  id: string;
  title: string;
  claimedBy: string;
  image: string;
  status: 'verified' | 'pending' | 'disputed';
  verificationScore: number;
  rating?: number;
}

export interface Tribe {
  id: string;
  name: string;
  members: string;
  location: string;
  balance: string;
  image: string;
  verified: boolean;
}

export interface Transaction {
  id: string;
  title: string;
  amount: string;
  type: 'credit' | 'debit';
  date: string;
  verified: boolean;
}
