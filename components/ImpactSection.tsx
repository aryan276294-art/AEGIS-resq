import React from 'react';
import { IMPACT_POINTS, HERO_DATA } from '../data/mockData';
import { DynamicIcon } from './DynamicIcon';
import { TrendingUp, Quote, HeartHandshake, ArrowRight } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  return (
    <section
      id="impact"
      className="relative py-24 bg-[#070b14] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MEASURABLE HUMAN OUTCOMES</span>
          </div>

          <h2
            id="impact-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Real-World Impact & Measurable Value
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every second saved in emergency dispatch and traffic corridor transit directly translates to preserved cardiac function, reduced trauma mortality, and protected first responder lives.
          </p>
        </div>

        {/* 5 IMPACT CARDS AS EXPLICITLY REQUESTED */}
        <div
          id="impact-cards-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16"
        >
          {IMPACT_POINTS.map((card, idx) => (
            <div
              key={card.title}
              id={`impact-card-${idx}`}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <DynamicIcon name={card.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    KPI 0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-amber-400 mb-1">
                  {card.metric}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-emerald-400">
                Validated Metric
              </div>
            </div>
          ))}
        </div>

        {/* FINAL STATEMENT & LARGE ITALIC VISION QUOTE AS SPECIFIED */}
        <div
          id="conclusion-vision-banner"
          className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-2 border-amber-500/40 shadow-2xl text-center space-y-6"
        >
          <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
            <Quote className="w-8 h-8" />
          </div>

          {/* Final Statement Paragraph */}
          <p
            id="conclusion-statement-paragraph"
            className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed"
          >
            Aegis proves that the greatest barrier in emergency dispatch is not an absence of civic willpower, but the historic gap of synchronized intelligence. By bringing multi-agent AI into emergency coordination, we bridge the minutes that separate tragedy from survival.
          </p>

          {/* Vision Quote in Large Italic Type as specified */}
          <div className="pt-4 border-t border-slate-800 max-w-2xl mx-auto">
            <blockquote
              id="vision-quote-large"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold italic text-amber-400 tracking-tight leading-snug font-serif"
            >
              "{HERO_DATA.visionQuote}"
            </blockquote>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-3">
              — Aegis Operational Vision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
