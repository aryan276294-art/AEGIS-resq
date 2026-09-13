import React from 'react';
import { Shield, Radio, ChevronUp, Activity, Lock, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#05080f] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-slate-800/80 pb-12 items-start">
          {/* Brand & Product Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-wider text-white uppercase">
                  Aegis
                </span>
                <span className="block text-[11px] font-mono text-amber-400/90 tracking-wide">
                  AI-powered emergency response coordination
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              From Emergency Detection to Intelligent Response — Faster, Safer, Smarter. A centralized multi-agent platform connecting detection sensors, emergency dispatch, route optimization, and trauma hospital readiness.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Telemetry Bus: Active</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Zero-Trust Protocol</span>
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#problem" className="hover:text-amber-400 transition-colors">Problem Statement</a></li>
              <li><a href="#solution" className="hover:text-amber-400 transition-colors">Our Solution</a></li>
              <li><a href="#dashboard" className="hover:text-amber-400 transition-colors">Command Dashboard</a></li>
              <li><a href="#tech" className="hover:text-amber-400 transition-colors">Technology Stack</a></li>
              <li><a href="#security" className="hover:text-amber-400 transition-colors">Security & Reliability</a></li>
              <li><a href="#impact" className="hover:text-amber-400 transition-colors">Impact</a></li>
              <li><a href="#about-us" className="hover:text-amber-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Quick HUD Shortcuts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
              Operational Access
            </h4>
            <div className="space-y-2.5">
              <a
                href="#dashboard"
                id="footer-dashboard-btn"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 hover:text-white hover:border-amber-500/40 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Interactive Command HUD</span>
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold">LIVE →</span>
              </a>

              <button
                onClick={scrollToTop}
                id="back-to-top-btn"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
              >
                <span>Back to Top</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice with strictly product name only */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Aegis — AI-powered emergency response coordination
          </div>
          <div>
            Mission-critical public safety decision-support system.
          </div>
        </div>
      </div>
    </footer>
  );
};
