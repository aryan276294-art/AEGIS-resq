import React from 'react';
import { TECH_STACK } from '../data/mockData';
import { DynamicIcon } from './DynamicIcon';
import { Layers, Terminal, Cpu, Code2, Sparkles } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section
      id="tech"
      className="relative py-24 bg-[#090e1a] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>PRODUCTION-GRADE ARCHITECTURE</span>
          </div>

          <h2
            id="tech-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Mission-Critical Technology Stack
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Constructed with ultra-low latency, resilient public-safety specifications. Every layer is chosen for deterministic uptime, geospatial accuracy, and sub-second multi-agent communication.
          </p>
        </div>

        {/* Tech Stack Category Groups as requested */}
        <div
          id="tech-stack-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECH_STACK.map((cat, idx) => (
            <div
              key={cat.title}
              id={`tech-cat-${idx}`}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5 border-b border-slate-800/80 pb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <DynamicIcon name={cat.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Tier: Public Safety Certified</span>
                <span className="text-amber-400">0{idx + 1}</span>
              </div>
            </div>
          ))}

          {/* Architecture Benchmark Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-950 to-slate-950 border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>FAULT TOLERANCE & SCALE</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Distributed Event Core
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Designed to process up to 50,000 telemetry events per second with zero-message loss during simultaneous regional mass-casualty incidents.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">End-to-End Latency:</span>
                  <span className="text-emerald-400 font-bold">&lt; 250 ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Availability Target:</span>
                  <span className="text-emerald-400 font-bold">99.999%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Geospatial Precision:</span>
                  <span className="text-emerald-400 font-bold">± 1.2 m</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-500/20 text-[11px] font-mono text-amber-400">
              Validated on High-Availability Public Safety Testbed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
