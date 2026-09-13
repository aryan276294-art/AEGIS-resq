import React from 'react';
import { ROUTING_FEATURES } from '../data/mockData';
import { DynamicIcon } from './DynamicIcon';
import { Navigation, Compass, ShieldCheck, AlertCircle, Info, Zap } from 'lucide-react';

export const RoutingSection: React.FC = () => {
  return (
    <section
      id="routing"
      className="relative py-24 bg-[#090e1a] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Compass className="w-3.5 h-3.5" />
            <span>DYNAMIC MISSION GUIDANCE</span>
          </div>

          <h2
            id="routing-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Smart Route & Responder Guidance
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Standard civilian GPS applications are blind to emergency siren corridor clearance, intersection preemption, and high-clearance fire truck restrictions. Aegis delivers dedicated mission navigation with continuous dynamic recalibration.
          </p>
        </div>

        {/* Feature Grid as explicitly requested in prompt */}
        <div
          id="routing-features-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12"
        >
          {ROUTING_FEATURES.map((feat, idx) => (
            <div
              key={feat.title}
              id={`routing-feat-${idx}`}
              className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all hover:bg-slate-900/60"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <DynamicIcon name={feat.icon} className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  NAV-SYS 0{idx + 1}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">
                {feat.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}

          {/* Interactive Routing Telemetry Summary */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-amber-500/15 via-slate-950 to-slate-950 border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <Zap className="w-4 h-4" />
                <span>GREEN WAVE CORRIDOR</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Traffic Light Preemption Sync
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Coordinates with municipal SCADA traffic signal networks to clear red lights 45 seconds ahead of approaching emergency sirens.
              </p>
            </div>
            <div className="pt-3 border-t border-amber-500/20 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Municipal V2X Protocol Linked
            </div>
          </div>
        </div>

        {/* CRITICAL NOTE SPECIFIED IN PROMPT */}
        <div
          id="decision-support-disclaimer-banner"
          className="p-6 rounded-xl bg-slate-950 border-l-4 border-amber-500 border-y border-r border-slate-800 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Operational Mandate & Decision Support Safeguard
              </span>
              <p className="text-sm sm:text-base font-medium text-slate-200">
                "The platform is designed as a decision-support system; final operational decisions remain with authorized emergency personnel."
              </p>
              <p className="text-xs text-slate-400">
                Human-in-the-loop oversight is structurally embedded into the core runtime logic. AI recommendations provide high-velocity situational clarity without bypassing authorized chain-of-command protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
