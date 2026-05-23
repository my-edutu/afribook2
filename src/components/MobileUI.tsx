/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

type Tone = 'primary' | 'dark' | 'light' | 'ghost';

const toneClass: Record<Tone, string> = {
  primary: 'bg-primary text-white shadow-lg shadow-primary/15 hover:bg-secondary',
  dark: 'bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800',
  light: 'bg-white text-slate-900 border border-slate-100 hover:bg-slate-50',
  ghost: 'bg-slate-50 text-slate-600 hover:bg-slate-100',
};

export function MobilePage({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-h-full overflow-x-hidden bg-slate-50 pb-[calc(7rem+env(safe-area-inset-bottom))] ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  eyebrow,
  children,
  className = '',
}: {
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={`bg-white px-6 py-6 border-b border-slate-100 ${className}`}>
      <div className="flex min-w-0 items-center justify-between gap-4">
        <div className="min-w-0">
          {eyebrow && <p className="mb-2 text-xs font-bold text-primary">{eyebrow}</p>}
          <h1 className="text-pretty text-2xl font-extrabold leading-tight text-slate-950">{title}</h1>
        </div>
        {children}
      </div>
    </header>
  );
}

export function SectionHeader({
  title,
  action,
  className = '',
}: {
  title: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-4 flex min-w-0 items-center justify-between gap-4 ${className}`}>
      <h2 className="min-w-0 text-sm font-extrabold text-slate-950">{title}</h2>
      {action}
    </div>
  );
}

export function SectionLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-bold text-slate-500 ${className}`}>{children}</p>;
}

export function IconButton({
  label,
  icon: Icon,
  onClick,
  tone = 'ghost',
  className = '',
}: {
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
  tone?: Tone;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`flex size-11 shrink-0 items-center justify-center rounded-2xl transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${toneClass[tone]} ${className}`}
    >
      <Icon size={20} aria-hidden="true" />
    </button>
  );
}

export function PillButton({
  children,
  onClick,
  tone = 'ghost',
  isActive = false,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  tone?: Tone;
  isActive?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-2xl px-4 text-sm font-bold transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
        isActive ? toneClass.primary : toneClass[tone]
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function ActionButton({
  children,
  onClick,
  tone = 'dark',
  className = '',
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  tone?: Tone;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`min-h-12 rounded-2xl px-5 text-sm font-extrabold transition-colors active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${toneClass[tone]} ${className}`}
    >
      {children}
    </button>
  );
}

export function SurfaceCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rounded-3xl border border-slate-100 bg-white shadow-sm ${className}`}>{children}</div>;
}

export function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
