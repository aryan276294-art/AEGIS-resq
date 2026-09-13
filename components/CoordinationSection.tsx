import React from 'react';
import { HOSPITAL_MODULE_FEATURES, RESOURCE_MODULE_FEATURES } from '../data/mockData';
import { Hospital, Boxes, CheckCircle2, ArrowRight, Shield, HeartPulse } from 'lucide-react';

export const CoordinationSection: React.FC = () => {
  return (
    <section
      id="coordination"
      className="relative py-24 bg-[#070b14] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>INTER-AGENCY SYNCHRONIZATION</span>
          </div>

          <h2
            id="coordination-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Hospital & Resource Coordination
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Emergency response doesn't end when responders reach the victim; it concludes when the patient receives definitive hospital care. Aegis bridges first responders and medical facilities through synchronized dual modules.
          </p>
        </div>

        {/* OBJECTIVE BANNER AS SPECIFIED IN PROMPT */}
        <div
          id="objective-banner"
          className="mb-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-900/90 to-emerald-500/20 border-2 border-amber-500/40 shadow-2xl text-center"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 block mb-2 font-bold">
            MISSION DIRECTIVE & OPERATIONAL OBJECTIVE
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-lg sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            <span className="text-amber-400">Right Resource</span>
            <span className="text-slate-500 font-normal">→</span>
            <span className="text-red-400">Right Incident</span>
            <span className="text-slate-500 font-normal">→</span>
            <span className="text-blue-400">Right Route</span>
            <span className="text-slate-500 font-normal">→</span>
            <span className="text-emerald-400">Right Facility</span>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT AS REQUESTED IN PROMPT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Hospital Module */}
          <div
            id="hospital-module-card"
            className="p-8 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/40 transition-all shadow-xl"
          >
            <div className="flex items-center gap-3.5 mb-6 border-b border-slate-800 pb-5">
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <Hospital className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  HEALTHCARE INTEGRATION
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Hospital Module
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Provides trauma surgeons and emergency department charge nurses with anticipatory awareness before ambulances depart the collision scene.
            </p>

            <ul className="space-y-4">
              {HOSPITAL_MODULE_FEATURES.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Standard: HL7 / FHIR Emergency Protocol</span>
              <span className="text-emerald-400 font-semibold">Ready</span>
            </div>
          </div>

          {/* Column 2: Resource Module */}
          <div
            id="resource-module-card"
            className="p-8 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl"
          >
            <div className="flex items-center gap-3.5 mb-6 border-b border-slate-800 pb-5">
              <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <Boxes className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  CROSS-AGENCY FLEET
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Resource Module
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Tracks municipal public safety assets across police, fire & rescue, emergency medical services, and specialized disaster taskforces in real-time.
            </p>

            <ul className="space-y-4">
              {RESOURCE_MODULE_FEATURES.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Agencies: Police • Fire • EMS • Hazmat</span>
              <span className="text-amber-400 font-semibold">Federated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
