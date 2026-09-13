import React, { useState, useEffect, useRef } from 'react';
import {
  PIPELINE_STEPS,
  MAP_LOCATIONS,
  PipelineSimulationStep,
} from '../data/mockData';
import { InteractiveMap } from './InteractiveMap';
import {
  Activity,
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  AlertTriangle,
  MapPin,
  Ambulance,
  Building2,
  Shield,
  Radio,
  Clock,
  Navigation,
  CheckCircle2,
  Info,
  Layers,
  Sparkles,
} from 'lucide-react';

export const DashboardSection: React.FC = () => {
  // Shared simulation state index (0 to PIPELINE_STEPS.length - 1)
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(3); // start at Dispatched for immediate live feel
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('');

  // Generate stable real-time timestamps with realistic intervals
  const baseTimeRef = useRef<Date>(new Date(Date.now() - 4 * 60 * 1000));

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format timestamp for a given pipeline step index
  const getStepTimestamp = (stepIdx: number): string => {
    const d = new Date(baseTimeRef.current.getTime() + stepIdx * 45 * 1000);
    return d.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  // Simulation timer loop
  useEffect(() => {
    if (!isPlaying) return;

    const delay = (3500 / speedMultiplier);
    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev >= PIPELINE_STEPS.length - 1) {
          // Loop back smoothly
          baseTimeRef.current = new Date(Date.now() - 4 * 60 * 1000);
          return 0;
        }
        return prev + 1;
      });
    }, delay);

    return () => clearInterval(timer);
  }, [isPlaying, speedMultiplier]);

  const currentStep: PipelineSimulationStep = PIPELINE_STEPS[currentStepIndex];

  // List of all logged activity entries up to current step
  const activityLogs = PIPELINE_STEPS.slice(0, currentStepIndex + 1).map(
    (step, idx) => ({
      ...step,
      timestamp: getStepTimestamp(idx),
      id: `log-${idx}`,
    })
  ).reverse(); // Latest at top

  const handleReset = () => {
    baseTimeRef.current = new Date();
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentStepIndex((prev) => (prev + 1) % PIPELINE_STEPS.length);
  };

  return (
    <section
      id="dashboard"
      className="relative py-24 bg-[#070b14] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>REAL-TIME COMMAND HUD</span>
          </div>

          <h2
            id="dashboard-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Mission-Critical Command Dashboard
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A unified multi-agent operating theater. Watch the shared simulation logic synchronize live map waypoints, vehicle telemetry, hospital notifications, and audit feeds simultaneously in real time.
          </p>
        </div>

        {/* Tactical Pipeline Stepper Bar */}
        <div
          id="pipeline-stepper-bar"
          className="mb-8 p-4 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl overflow-x-auto"
        >
          <div className="min-w-[840px] flex items-center justify-between gap-1">
            {PIPELINE_STEPS.map((step, idx) => {
              const isCurrent = idx === currentStepIndex;
              const isPast = idx < currentStepIndex;
              return (
                <button
                  key={step.stage}
                  onClick={() => {
                    setCurrentStepIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`flex-1 text-left px-2.5 py-2 rounded-lg transition-all text-xs font-mono cursor-pointer ${
                    isCurrent
                      ? 'bg-amber-500/20 border border-amber-400 text-white font-bold shadow-md shadow-amber-500/20'
                      : isPast
                      ? 'bg-slate-900/80 text-amber-300/80 border border-slate-800'
                      : 'bg-slate-950 text-slate-500 border border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] mb-0.5">
                    <span>STEP 0{idx + 1}</span>
                    {isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    )}
                    {isPast && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    )}
                  </div>
                  <div className="truncate font-semibold">
                    {step.stage.replace(/_/g, ' ')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulation Playback & HUD Controller */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-3">
            <button
              id="sim-play-pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Pause Simulation</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Simulation</span>
                </>
              )}
            </button>

            <button
              id="sim-next-step-btn"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono transition-all"
            >
              <SkipForward className="w-3.5 h-3.5" />
              <span>Next Phase</span>
            </button>

            <button
              id="sim-reset-btn"
              onClick={handleReset}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all"
              title="Reset to Stage 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Speed:</span>
              <button
                onClick={() => setSpeedMultiplier(1)}
                className={`px-2 py-1 rounded text-[11px] ${
                  speedMultiplier === 1
                    ? 'bg-amber-500 text-black font-bold'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                1x
              </button>
              <button
                onClick={() => setSpeedMultiplier(2)}
                className={`px-2 py-1 rounded text-[11px] ${
                  speedMultiplier === 2
                    ? 'bg-amber-500 text-black font-bold'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                2x
              </button>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>CLOCK: {currentTimeStr || '10:42:15'}</span>
            </div>
          </div>
        </div>

        {/* Dashboard Core: Map + Incident Card + Live Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8">
          {/* Left Column: Interactive Map */}
          <div className="lg:col-span-7 space-y-4">
            <InteractiveMap
              ambulanceProgress={currentStep.ambulanceProgress}
              incidentStatus={currentStep.incidentStatus}
              stageName={currentStep.stage}
            />

            {/* Map Guidance Footer Banner */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Green Wave Preemption: Market/Valencia Corridor Active</span>
              </span>
              <span className="text-emerald-400 font-semibold">
                GPS Latency: 42ms
              </span>
            </div>
          </div>

          {/* Right Column: Exact Incident Detail Card & Live Activity Feed */}
          <div className="lg:col-span-5 space-y-6">
            {/* Incident Detail Card (Exact fields as required) */}
            <div
              id="incident-detail-card"
              className="p-6 rounded-2xl bg-slate-950/95 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/40">
                    <AlertTriangle className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-red-400 font-bold">
                      HIGH PRIORITY
                    </span>
                    <h3 className="text-lg font-extrabold text-white leading-tight">
                      Road Accident
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                  {currentStep.incidentStatus}
                </span>
              </div>

              {/* Data Rows */}
              <div className="grid grid-cols-2 gap-3.5 text-xs font-mono mb-5">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    Location
                  </span>
                  <div className="flex items-center gap-1.5 text-white font-semibold mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Main Road Junction</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    Current ETA
                  </span>
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold mt-1 text-sm">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{currentStep.eta}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    Nearest Ambulance
                  </span>
                  <div className="flex items-center gap-1.5 text-white font-semibold mt-1">
                    <Ambulance className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>
                      {currentStep.distanceKm > 0
                        ? `${currentStep.distanceKm.toFixed(1)} km (Medic-04)`
                        : 'On Scene (Medic-04)'}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    Nearest Police Unit
                  </span>
                  <div className="flex items-center gap-1.5 text-white font-semibold mt-1">
                    <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>1.8 km (Patrol-212)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    Assigned Hospital
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mt-1">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Hospital A (Level-1)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">
                    Route Status
                  </span>
                  <div className="flex items-center gap-1.5 text-white font-semibold mt-1">
                    <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{currentStep.routeStatus}</span>
                  </div>
                </div>
              </div>

              {/* Active Agent Responsible */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span>Active Agent:</span>
                <span className="text-amber-300 font-bold">{currentStep.agent}</span>
              </div>
            </div>

            {/* Live Status/Activity Feed with Timestamps as mandated */}
            <div
              id="live-activity-feed-panel"
              className="p-5 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Live Activity Feed
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  LOGS: {activityLogs.length} EVENTS
                </span>
              </div>

              <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                {activityLogs.map((log, idx) => (
                  <div
                    key={log.id}
                    className={`p-3 rounded-xl text-xs font-mono transition-all ${
                      idx === 0
                        ? 'bg-amber-500/15 border border-amber-500/40 text-white'
                        : 'bg-slate-900/60 border border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-bold text-amber-400 flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {log.timestamp}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase">
                        {log.badge}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-200 mb-0.5">
                      {log.title}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {log.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mandated Prototype Simulation Disclaimer Text */}
        <div
          id="dashboard-disclaimer"
          className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-2"
        >
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Prototype Notice:</strong> All incident, vehicle, and hospital data on this dashboard is simulated for demonstration.
          </span>
        </div>
      </div>
    </section>
  );
};
