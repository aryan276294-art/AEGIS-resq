import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Radio, ChevronRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Problem', href: '#problem', id: 'problem' },
  { name: 'Solution', href: '#solution', id: 'solution' },
  { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
  { name: 'Tech', href: '#tech', id: 'tech' },
  { name: 'Security', href: '#security', id: 'security' },
  { name: 'Impact', href: '#impact', id: 'impact' },
  { name: 'About Us', href: '#about-us', id: 'about-us' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      const scrollPosition = window.scrollY + 180;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-black/40'
          : 'bg-[#070b14]/50 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tag */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500/20 to-red-500/10 border border-amber-500/40 group-hover:border-amber-400 transition-colors">
              <Shield className="w-6 h-6 text-amber-400 transition-transform group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-wider text-white uppercase font-sans">
                  Aegis
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Mission AI
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 tracking-tight">
                Public Safety Intelligence
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-all rounded-md whitespace-nowrap ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action / Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-slate-300">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-[11px] text-slate-400">STATUS:</span>
              <span className="text-emerald-400 font-semibold">LIVE HUD</span>
            </div>
            <a
              id="header-cta-demo-button"
              href="#dashboard"
              onClick={(e) => scrollToSection(e, '#dashboard')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider text-black uppercase bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-md shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              Live Demo
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white hover:border-amber-500/40 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#070b14]/98 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center justify-between px-3 py-2 bg-slate-900/80 rounded-md border border-slate-800 text-xs font-mono">
            <span className="text-slate-400">SYSTEM COORD:</span>
            <span className="text-amber-400 font-bold">8 AGENTS ONLINE</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-3 h-3 opacity-60" />
                </a>
              );
            })}
          </div>
          <div className="pt-2">
            <a
              id="mobile-cta-dashboard"
              href="#dashboard"
              onClick={(e) => scrollToSection(e, '#dashboard')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-amber-500 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20"
            >
              View Dashboard Demo
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
