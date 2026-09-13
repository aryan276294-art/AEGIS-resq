import React from 'react';
import { SECURITY_DATA } from '../data/mockData';
import { Lock, ShieldAlert, Rocket, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section
      id="security"
      className="relative py-24 bg-[#090e1a] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Lock className="w-3.5 h-3.5" />
            <span>TRUST, SAFETY & ROADMAP</span>
          </div>

          <h2
            id="security-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Security, Reliability & Future Scope
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Public safety systems demand zero tolerance for unauthorized intrusions, data leaks, or unconstrained autonomous actions. Aegis enforces military-grade information security and strict fail-safe reliability.
          </p>
        </div>

        {/* THREE COLUMNS AS SPECIFIED IN PROMPT */}
        <div
          id="security-reliability-future-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Column 1: Security */}
          <div
            id="column-security"
            className="p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                    ZERO TRUST ENCLAVE
                  </span>
                  <h3 className="text-2xl font-bold text-white">Security</h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {SECURITY_DATA.security.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex justify-between">
              <span>Standard: HIPAA & CJIS Aligned</span>
              <span className="text-amber-400">Layer 1</span>
            </div>
          </div>

          {/* Column 2: Reliability */}
          <div
            id="column-reliability"
            className="p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    MISSION-CRITICAL UPTIME
                  </span>
                  <h3 className="text-2xl font-bold text-white">Reliability</h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {SECURITY_DATA.reliability.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex justify-between">
              <span>Failover: 0-Sec Radio Fallback</span>
              <span className="text-emerald-400">Layer 2</span>
            </div>
          </div>

          {/* Column 3: Future Scope */}
          <div
            id="column-future-scope"
            className="p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                    NEXT-GEN EXPANSION
                  </span>
                  <h3 className="text-2xl font-bold text-white">Future Scope</h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {SECURITY_DATA.futureScope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex justify-between">
              <span>Roadmap: Autonomous City Scale</span>
              <span className="text-blue-400">Horizon 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
