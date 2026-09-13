import React from 'react';
import { CHALLENGES, CORE_PROBLEM_CALLOUT } from '../data/mockData';
import { DynamicIcon } from './DynamicIcon';
import { AlertOctagon, ShieldAlert, ZapOff } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="problem"
      className="relative py-24 bg-[#090e1a] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>CRISIS IN MODERN DISPATCH</span>
          </div>

          <h2
            id="problem-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            The biggest challenge isn't just detecting an emergency — it's coordinating the right response fast.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            In modern urban environments, catastrophic latency doesn't happen because an incident goes unnoticed; it happens in the agonizing friction of manual triage, fragmented radio communications, and uncoordinated agency fleets.
          </p>
        </div>

        {/* Existing Challenges Grid */}
        <div
          id="challenges-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {CHALLENGES.map((challenge, idx) => (
            <div
              key={challenge.id}
              id={`challenge-card-${challenge.id}`}
              className="group relative p-6 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-red-500/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 group-hover:text-red-300 group-hover:border-red-500/40 transition-colors">
                  <DynamicIcon name={challenge.icon} className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-slate-500">#{String(idx + 1).padStart(2, '0')}</span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-mono rounded uppercase font-semibold ${
                      challenge.severity === 'Critical'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                        : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {challenge.severity}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-200 transition-colors">
                {challenge.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted "Core Problem" Callout Box */}
        <div
          id="core-problem-callout"
          className="relative p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-950/90 to-amber-950/30 border-2 border-red-500/40 shadow-2xl shadow-red-950/30"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 rounded-xl bg-red-600/20 border border-red-500/50 text-red-400 shrink-0">
              <ZapOff className="w-8 h-8 text-red-400 animate-pulse" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                  {CORE_PROBLEM_CALLOUT.title}
                </span>
                <span className="h-px flex-1 bg-red-500/20" />
              </div>

              <blockquote className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                "{CORE_PROBLEM_CALLOUT.quote}"
              </blockquote>

              <p className="text-sm font-mono text-amber-300/90">
                {CORE_PROBLEM_CALLOUT.highlight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
