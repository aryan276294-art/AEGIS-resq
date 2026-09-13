import React, { useState } from 'react';
import { ALLOCATION_EQUATION_FACTORS, ALLOCATION_FLOW_STEPS } from '../data/mockData';
import { Sliders, ArrowRight, CheckCircle2, Calculator, ChevronRight } from 'lucide-react';

export const AllocationSection: React.FC = () => {
  const [selectedFactorIndex, setSelectedFactorIndex] = useState<number>(0);

  return (
    <section
      id="resource-allocation"
      className="relative py-24 bg-[#070b14] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Sliders className="w-3.5 h-3.5" />
            <span>ALGORITHMIC DISPATCH ENGINE</span>
          </div>

          <h2
            id="allocation-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Intelligent Resource Allocation
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Conventional 911 dispatch relies on naive closest-unit proximity, frequently dispatching basic ambulances to multi-trauma crises or depleting sector reserves. Aegis computes an optimal multi-variable tensor objective across six continuous operational vectors.
          </p>
        </div>

        {/* FACTOR EQUATION AS REQUESTED */}
        <div className="mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/90 border-2 border-amber-500/40 shadow-2xl shadow-black/80">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-400" />
                Dispatch Optimization Objective Function
              </span>
              <span className="text-xs font-mono text-amber-400">
                Formula: Objective Matrix Φ(Dispatch)
              </span>
            </div>

            {/* Formula Display Banner */}
            <div
              id="factor-equation-display"
              className="py-5 px-4 sm:px-6 rounded-xl bg-slate-900/90 border border-slate-800 text-center overflow-x-auto"
            >
              <div className="min-w-[620px] inline-flex items-center justify-center flex-wrap gap-2 text-base sm:text-lg lg:text-xl font-mono font-bold text-white">
                <span className="text-amber-400 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30">
                  Incident Severity
                </span>
                <span className="text-slate-500 font-extrabold text-2xl">+</span>
                <span className="text-blue-400 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/30">
                  Distance
                </span>
                <span className="text-slate-500 font-extrabold text-2xl">+</span>
                <span className="text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
                  Resource Availability
                </span>
                <span className="text-slate-500 font-extrabold text-2xl">+</span>
                <span className="text-purple-400 px-2 py-1 rounded bg-purple-500/10 border border-purple-500/30">
                  Capability
                </span>
                <span className="text-slate-500 font-extrabold text-2xl">+</span>
                <span className="text-amber-400 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30">
                  Traffic
                </span>
                <span className="text-slate-500 font-extrabold text-2xl">+</span>
                <span className="text-teal-400 px-2 py-1 rounded bg-teal-500/10 border border-teal-500/30">
                  Hospital Suitability
                </span>
              </div>
            </div>

            {/* Equation Breakdown Factors */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
              {ALLOCATION_EQUATION_FACTORS.map((factor, index) => {
                const isSelected = selectedFactorIndex === index;
                return (
                  <button
                    key={factor.symbol}
                    onClick={() => setSelectedFactorIndex(index)}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400 shadow-md'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="font-bold text-amber-400">{factor.symbol}</span>
                      <span className="text-slate-400 text-[10px]">{factor.weight}</span>
                    </div>
                    <p className="text-xs font-bold text-white mb-1 leading-snug">
                      {factor.name}
                    </p>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      {factor.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* EXAMPLE FLOW AS SPECIFIED IN PROMPT */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Decision Sequence: Automated Fleet Selection Flow
            </h3>
            <p className="text-sm text-slate-400 font-mono">
              Live algorithmic execution flow for incoming road accident alert:
            </p>
          </div>

          <div
            id="allocation-example-flow"
            className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800"
          >
            {/* Step-by-step pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {ALLOCATION_FLOW_STEPS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-amber-400 font-bold">{item.step}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  {idx < ALLOCATION_FLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-amber-500">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary Banner of Example Flow */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <span className="text-amber-300 font-semibold">
                AI → Identifies available ambulances → Evaluates distance & traffic → Selects suitable ambulance → Recommends route → Identifies appropriate hospital.
              </span>
              <span className="text-emerald-400 font-bold shrink-0 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Solved in 320ms
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
