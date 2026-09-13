import React from 'react';
import { TIMELINE_STEPS, INNOVATION_USP } from '../data/mockData';
import { DynamicIcon } from './DynamicIcon';
import { Shield, Sparkles, CheckCircle2, ArrowRight, Lightbulb, Workflow } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  return (
    <section
      id="about-us"
      className="relative py-24 bg-[#070b14] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Shield className="w-3.5 h-3.5" />
            <span>PLATFORM ARCHITECTURE & PURPOSE</span>
          </div>

          <h2
            id="about-us-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            About Aegis & Core Innovations
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Aegis is an autonomous public-safety coordination platform engineered to eliminate delays between emergency detection and life-saving intervention. By harmonizing eight specialized AI agents over a real-time event mesh, Aegis delivers decisive clarity to first responders and emergency departments when seconds matter most.
          </p>
        </div>

        {/* Mandated USP Statement Banner */}
        <div
          id="about-usp-banner"
          className="mb-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-900/90 to-amber-500/10 border-2 border-amber-500/40 shadow-2xl text-center"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-3 font-bold">
            PLATFORM VALUE PROPOSITION
          </span>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug max-w-4xl mx-auto">
            "Aegis transforms fragmented emergency information into coordinated, actionable response intelligence."
          </blockquote>
        </div>

        {/* 6 USP / Innovation Cards as explicitly requested */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 border-b border-slate-800/80 pb-4">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>ARCHITECTURAL DIFFERENTIATORS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Six Pillars of Response Innovation
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Production Verified
            </span>
          </div>

          <div
            id="about-innovation-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {INNOVATION_USP.map((item, idx) => (
              <div
                key={item.title}
                id={`usp-card-${idx}`}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-200 hover:-translate-y-1 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <DynamicIcon name={item.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                    {item.highlight}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The 7-Step Process (Detect → Understand → Prioritize → Coordinate → Optimize → Respond → Reassess) */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-slate-800/80 pb-4">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                <Workflow className="w-3.5 h-3.5" />
                <span>OPERATIONAL LIFECYCLE</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                How Aegis Works: The 7-Step Lifecycle
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400">
              Autonomous Orchestration
            </span>
          </div>

          <div
            id="about-lifecycle-timeline"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4"
          >
            {TIMELINE_STEPS.map((step, idx) => (
              <div
                key={step.step}
                id={`timeline-step-${idx}`}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      STEP 0{step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {step.phase}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-800/80 space-y-1 text-[10px] font-mono">
                  <div className="text-amber-400/90 font-medium">
                    {step.agentResponsible}
                  </div>
                  <div className="text-slate-400">
                    {step.telemetryTag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
