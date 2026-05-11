/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Record, Tribe, Transaction } from './types';

export const MOCK_RECORDS: Record[] = [
  {
    id: '1',
    title: 'Largest Community Mural',
    claimedBy: 'Kofi Mensah & 200 Artists',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA15Elxt6oFPrdhzcuSi0AEbU6AfgsuTczLG6OeFvGkr1zOxDXmTQvo3yG0uVW9EjwZO6GYAmnA-UoUrJFi7vBA2c5gefvjmIcBx38cj-HSsFoG1uLFE5awZZVIb9VGEmaWbdVsKc5CcigeI2XRG2igoMkZyKUZda7Bgw70UvfZTnueiPstukcUZktE21oTdqBjonVQmJWIry6sYLBPB47WQVCIMxFCjXLjIg9TQwMExWJELsqVzkQAKPXZT7pp33C-dMzuP1xz_R8',
    status: 'verified',
    verificationScore: 92,
    rating: 4.9
  },
  {
    id: '2',
    title: 'Fastest Solar Irrigation Setup',
    claimedBy: 'AgriTech Solutions Ltd.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVcG06xrmE1M93ppf47PsxRLhxfGF6lrjPvBtqmqo5R-hN5XeDTltitXsLUnyI-k34LbAyPNln30TkCciDj4cYbXqlqFydZKSkEJ3OFxKn9Mc0gamnjvEyBkAnT_OufwXg7A8PG6cem89PMF2NstSIQMQNr1Foc0IXQ-E5UvFKveM7gV1ficFnAJPNz29ESPME3fL3RG5HzkNecr0r0iztnH1p2xZddGN05onYScuKqjoaH6MzHkTmzRb4BnnM6pjAS-FoVNunh2o',
    status: 'pending',
    verificationScore: 65
  },
  {
    id: '3',
    title: 'Non-Stop Adumu Dance (72 hrs)',
    claimedBy: 'The Maasai Warriors Collective',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB26IIVxVOcqq8sbawzKm1vpRcVX48H8aNcW0Jkb3UJXeZWPP7vvWybEd2GONwaXsL-kOtNJxCEAuL4IeTwxuLsWna_7lHl_WUkoPv_dQ_A_hoQVhu8EV_Sw-aBcbrHFfvfS31NPHaF76f-9196vHzElgh2hjF6geaeZ1g0SUVmzmfamlmIlYxmFPmQYGNrLUozHWg_vgLo102CR91FNQWRF8PTM4SoWLRUWGKeePo6y9ZyFf6MXATdag0OigTbMlrwf0nB_aIEKSo',
    status: 'disputed',
    verificationScore: 32
  }
];

export const MOCK_TRIBES: Tribe[] = [
  {
    id: '1',
    name: 'Lagos Tech Founders',
    members: '1.2k',
    location: 'Lagos, Nigeria',
    balance: '45,000 AFRI',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiwy0V9JvcnMi_MPwpUv629LZgcgMSGM8JKw8kGwF5Xhu_8jnycAf-lYGUeMcBHtRfpXaO5Sm1IkOxh_oZGuZ1pPbbDUAmv1rAONOuaoY6m4pakqUZ1b0HPZ0ShFlcz_oNPaCL8nHTvydyOdHzAmumwTQchkCSMQ_rGIrCr750z608EBo_foM9t7rvZQSUjXtLVH10elDh45J7gQ9OlNcUJlPO1eQktBANRGKeOUAe8MWcV6xjxgmd6ltdhgWyniAkY5BPqGZXx1g',
    verified: true
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Lagos Tech Tribe',
    amount: '+$250.00',
    type: 'credit',
    date: 'Oct 24, 2:30 PM',
    verified: true
  },
  {
    id: '2',
    title: 'Jumia Marketplace',
    amount: '-$84.20',
    type: 'debit',
    date: 'Oct 23, 11:15 AM',
    verified: true
  },
  {
    id: '3',
    title: 'Clean Water Fund',
    amount: '-$15.00',
    type: 'debit',
    date: 'Oct 22, 09:00 AM',
    verified: true
  }
];
