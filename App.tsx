import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DashboardSection } from './components/DashboardSection';
import { AllocationSection } from './components/AllocationSection';
import { RoutingSection } from './components/RoutingSection';
import { CoordinationSection } from './components/CoordinationSection';
import { TechStackSection } from './components/TechStackSection';
import { SecuritySection } from './components/SecuritySection';
import { ImpactSection } from './components/ImpactSection';
import { AboutUsSection } from './components/AboutUsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. Sticky Navigation (Exact Nav Order: Home → Problem → Solution → Dashboard → Tech → Security → Impact → About Us) */}
      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Problem Statement */}
        <ProblemSection />

        {/* Section 3: Our Solution (Pipeline Flow + Multimodal Sources + 8 Agent Cards) */}
        <SolutionSection />

        {/* Section 4: Real-Time Emergency Dashboard (Interactive Map + Live Moving Ambulance + Detail Card + Activity Feed) */}
        <DashboardSection />

        {/* Section 5: Intelligent Resource Allocation (Factor Equation + Flow + Routing & Coordination) */}
        <AllocationSection />
        <RoutingSection />
        <CoordinationSection />

        {/* Section 6: Technology Stack */}
        <TechStackSection />

        {/* Section 7: Security, Reliability & Future Scope */}
        <SecuritySection />

        {/* Section 8: Impact & Vision Quote */}
        <ImpactSection />

        {/* Section 9: About Us (7-Step Lifecycle + 6 USPs + Value Proposition Banner) */}
        <AboutUsSection />
      </main>

      {/* Section 10: Product Footer */}
      <Footer />
    </div>
  );
}
