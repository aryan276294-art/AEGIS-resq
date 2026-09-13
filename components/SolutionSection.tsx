import React, { useState } from 'react';
import { SOLUTION_FLOW, INCIDENT_SOURCES, AGENTS } from '../data/mockData';
import { DynamicIcon } from './DynamicIcon';
import { Sparkles, CheckCircle2, ChevronRight, Cpu, Bot } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeFlowStep, setActiveFlowStep] = useState<number>(0);
  const [selectedAgentId, setSelectedAgentId] = useState<string>(AGENTS[0].id);

  const activeAgent = AGENTS.find((a) => a.id === selectedAgentId) || AGENTS[0];

  return (
    <section
      id="solution"
      className="relative py-24 bg-[#070b14] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CENTRALIZED PLATFORM</span>
          </div>

          <h2
            id="solution-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            A Centralized Multi-Agent AI Coordination Platform
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Aegis replaces siloed phone calls and delayed dispatch desks with an autonomous multi-agent intelligence mesh. Specialized AI agents collaborate concurrently in real time — streaming raw detections into verified priorities, dispatched vehicles, optimized routes, and prepared emergency trauma bays.
          </p>
        </div>

        {/* 1. Horizontal Flow Diagram */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Horizontal Coordination Pipeline (Click to inspect phase)
            </h3>
            <span className="text-xs font-mono text-amber-400">
              Phase {SOLUTION_FLOW[activeFlowStep].step}: {SOLUTION_FLOW[activeFlowStep].name}
            </span>
          </div>

          <div
            id="solution-flow-diagram"
            className="p-5 rounded-2xl bg-slate-950/90 border border-amber-500/30 shadow-2xl overflow-x-auto"
          >
            <div className="min-w-[900px] flex items-center justify-between gap-2">
              {SOLUTION_FLOW.map((item, index) => {
                const isActive = activeFlowStep === index;
                return (
                  <React.Fragment key={item.step}>
                    <button
                      id={`flow-step-btn-${index}`}
                      onClick={() => setActiveFlowStep(index)}
                      className={`flex-1 text-left p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-amber-500/20 border-2 border-amber-400 shadow-lg shadow-amber-500/20 scale-105'
                          : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                        <span
                          className={`font-bold ${
                            isActive ? 'text-amber-300' : 'text-slate-400'
                          }`}
                        >
                          {item.step}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        )}
                      </div>
                      <p
                        className={`text-xs font-bold leading-snug whitespace-nowrap ${
                          isActive ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {item.name}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                        {item.description}
                      </p>
                    </button>

                    {index < SOLUTION_FLOW.length - 1 && (
                      <div className="flex items-center text-slate-600 px-0.5">
                        <ChevronRight className="w-3.5 h-3.5 text-amber-500/60" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Active Step Details */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
                  {SOLUTION_FLOW[activeFlowStep].step}
                </span>
                <span className="text-white font-semibold">
                  {SOLUTION_FLOW[activeFlowStep].name}
                </span>
                <span className="text-slate-400 hidden md:inline">
                  — {SOLUTION_FLOW[activeFlowStep].description}
                </span>
              </div>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Zero-Loss Telemetry Bus Active
              </span>
            </div>
          </div>
        </div>

        {/* 2. Incident Sources (small cards as requested) */}
        <div className="mb-20">
          <div className="mb-6">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
              INPUT INGESTION CHANNELS
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Multimodal Incident Sources
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Aegis aggregates continuous streams from 7 distinct civic and hardware channels, ingesting structured data, audio transcripts, and spatial telemetry.
            </p>
          </div>

          <div
            id="incident-sources-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {INCIDENT_SOURCES.map((source) => (
              <div
                key={source.id}
                id={`source-card-${source.id}`}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-all hover:bg-slate-900/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <DynamicIcon name={source.icon} className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    CHANNEL {source.id.replace('src-', '')}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {source.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {source.description}
                </p>
                <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-amber-400/90">
                  {source.dataRate}
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-slate-950 to-slate-950 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <div className="p-2 rounded-lg bg-amber-400 text-black w-fit mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Edge & Cloud Ingestion Bus
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sub-50ms message queue consolidating heterogenous public safety streams into standardized situational frames.
                </p>
              </div>
              <div className="pt-2 border-t border-amber-500/20 text-[10px] font-mono text-amber-300">
                CAP, MQTT, WebSockets
              </div>
            </div>
          </div>
        </div>

        {/* 3. 8 Agent Cards as explicitly requested */}
        <div>
          <div className="mb-6">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
              SPECIALIZED INTELLIGENCE MESH
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              8 Autonomous Specialized Agents
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Each agent masters an isolated operational responsibility, exchanging situational vectors asynchronously to guarantee speed and explainability.
            </p>
          </div>

          <div
            id="agent-cards-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {AGENTS.map((agent) => {
              const isSelected = agent.id === selectedAgentId;
              return (
                <div
                  key={agent.id}
                  id={`agent-card-${agent.id}`}
                  onClick={() => setSelectedAgentId(agent.id)}
                  className={`p-5 rounded-xl transition-all cursor-pointer text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-2 border-amber-400 shadow-xl shadow-amber-500/15'
                      : 'bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`p-2.5 rounded-lg transition-colors ${
                          isSelected
                            ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30'
                            : 'bg-slate-900 text-amber-400 border border-slate-800'
                        }`}
                      >
                        <DynamicIcon name={agent.icon} className="w-5 h-5" />
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {agent.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">
                      {agent.name}
                    </h4>

                    {/* One-line description as explicitly required in prompt */}
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">
                      {agent.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-amber-400 font-medium">
                      {agent.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
