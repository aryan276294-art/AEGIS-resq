import React, { useState } from 'react';
import { HERO_DATA } from '../data/mockData';
import {
  ShieldAlert,
  ArrowRight,
  Activity,
  Radio,
  Sparkles,
  MapPin,
  Ambulance,
  Building2,
  AlertCircle,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeBeacon, setActiveBeacon] = useState<string>('incident');

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#070b14] bg-grid-tactical"
    >
      {/* Background radial glow & vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Atmospheric emergency beacon glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-red-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission Briefing */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs font-mono text-amber-300 shadow-lg shadow-amber-500/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="tracking-wide font-semibold">{HERO_DATA.badge}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 hidden sm:inline">Emergency Response AI</span>
            </div>

            {/* Project Title & Tagline */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h1
                  id="hero-project-title"
                  className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase font-sans"
                >
                  {HERO_DATA.projectName}
                </h1>
                <span className="px-3 py-1 text-xs font-mono font-bold tracking-widest text-amber-400 border border-amber-500/50 rounded bg-amber-500/10">
                  v2.6 COMMAND
                </span>
              </div>
              <h2
                id="hero-tagline"
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-400/95 tracking-tight leading-snug"
              >
                {HERO_DATA.tagline}
              </h2>
            </div>

            {/* One-line Description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {HERO_DATA.description}
            </p>

            {/* CTAs as requested */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-cta-dashboard"
                onClick={() => scrollTo('dashboard')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95"
              >
                <Activity className="w-4 h-4" />
                <span>View Live Dashboard</span>
              </button>

              <button
                id="hero-cta-tech"
                onClick={() => scrollTo('tech')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-amber-500/50 font-semibold text-sm tracking-wide transition-all shadow-lg active:scale-95"
              >
                <span>See How It's Built</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Live Telemetry Bar */}
            <div
              id="hero-telemetry-bar"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80"
            >
              {HERO_DATA.telemetryStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-800/80"
                >
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                  <p className="text-sm font-mono font-bold text-amber-400 mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mission Control Radar & Live Incident Beacon */}
          <div className="lg:col-span-5 relative">
            <div
              id="hero-radar-card"
              className="relative rounded-2xl bg-slate-950/90 border border-amber-500/30 p-5 shadow-2xl shadow-black/80 overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                    TACTICAL GRID // REGION 04
                  </span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  REAL-TIME SYNCHRONIZED
                </span>
              </div>

              {/* Radar Graphic Container */}
              <div className="relative w-full aspect-square max-h-[360px] rounded-xl bg-[#060a12] border border-slate-800 flex items-center justify-center overflow-hidden">
                {/* Concentric distance rings */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-amber-500/20" />
                <div className="absolute w-[55%] h-[55%] rounded-full border border-amber-500/20" />
                <div className="absolute w-[30%] h-[30%] rounded-full border border-amber-500/30" />
                <div className="absolute w-2 h-2 rounded-full bg-amber-400" />

                {/* Crosshairs */}
                <div className="absolute inset-x-0 h-px bg-slate-800/80" />
                <div className="absolute inset-y-0 w-px bg-slate-800/80" />

                {/* Radar Sweep Line */}
                <div className="absolute w-full h-full animate-radar-sweep pointer-events-none">
                  <div className="w-1/2 h-1/2 bg-gradient-to-br from-amber-500/25 via-transparent to-transparent transform origin-bottom-right" />
                </div>

                {/* Interactive Beacon Nodes */}
                {/* Incident Pin (Center right) */}
                <button
                  id="radar-node-incident"
                  onClick={() => setActiveBeacon('incident')}
                  className={`absolute top-[38%] right-[32%] -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                    activeBeacon === 'incident' ? 'scale-125 z-20' : 'scale-100 z-10'
                  }`}
                  aria-label="Incident Beacon"
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60"></span>
                    <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-red-600 border border-red-300 text-white shadow-lg shadow-red-600/50">
                      <AlertCircle className="w-3.5 h-3.5" />
                    </span>
                  </span>
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-slate-900/90 border border-red-500/40 text-[9px] font-mono text-red-300 whitespace-nowrap">
                    INCIDENT #0941
                  </span>
                </button>

                {/* Ambulance Node */}
                <button
                  id="radar-node-ambulance"
                  onClick={() => setActiveBeacon('ambulance')}
                  className={`absolute bottom-[28%] left-[26%] -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                    activeBeacon === 'ambulance' ? 'scale-125 z-20' : 'scale-100 z-10'
                  }`}
                  aria-label="Ambulance Beacon"
                >
                  <span className="relative flex h-7 w-7 items-center justify-center">
                    <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 border border-amber-200 text-black shadow-lg shadow-amber-500/50">
                      <Ambulance className="w-3.5 h-3.5" />
                    </span>
                  </span>
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-slate-900/90 border border-amber-500/40 text-[9px] font-mono text-amber-300 whitespace-nowrap">
                    MEDIC-04 (2.4km)
                  </span>
                </button>

                {/* Hospital Node */}
                <button
                  id="radar-node-hospital"
                  onClick={() => setActiveBeacon('hospital')}
                  className={`absolute top-[20%] left-[35%] -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                    activeBeacon === 'hospital' ? 'scale-125 z-20' : 'scale-100 z-10'
                  }`}
                  aria-label="Hospital Beacon"
                >
                  <span className="relative flex h-7 w-7 items-center justify-center">
                    <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 border border-emerald-300 text-white shadow-lg shadow-emerald-500/50">
                      <Building2 className="w-3.5 h-3.5" />
                    </span>
                  </span>
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-slate-900/90 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 whitespace-nowrap">
                    HOSPITAL A (READY)
                  </span>
                </button>

                {/* Route connecting line mockup */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path
                    d="M 120 250 Q 180 200 240 145 T 145 75"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="opacity-70"
                  />
                </svg>
              </div>

              {/* Dynamic Beacon Telemetry Inspector */}
              <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                {activeBeacon === 'incident' && (
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        <span className="text-xs font-bold text-red-400">
                          Active High Priority Collision
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Location: Main Road Junction • 2 Vehicles Involved
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded bg-amber-500/10">
                      Triage: Tier 1
                    </span>
                  </div>
                )}
                {activeBeacon === 'ambulance' && (
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-xs font-bold text-amber-300">
                          Unit Medic-04 (Advanced Life Support)
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Distance: 2.4 km • ETA: 4.2 mins • Siren Corridor Enabled
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-500/10">
                      EN ROUTE
                    </span>
                  </div>
                )}
                {activeBeacon === 'hospital' && (
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-xs font-bold text-emerald-300">
                          Hospital A (Level-1 Trauma Center)
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Trauma Bay #3 Reserved • Neuro & Ortho Teams On Standby
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-500/10">
                      INTAKE READY
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
