import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Target, Map, Briefcase,
  Users, TrendingUp, Check, Play, Layers, Compass,
  BarChart3, Rocket, Shield, HelpCircle, Star, Zap, Globe, Menu, X
} from 'lucide-react';
import { SpotlightCard } from '../components/ui/SpotlightCard';

export const Landing: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const featureCards = [
    {
      icon: Target,
      title: 'Organize Everything',
      desc: 'Bring your tasks, docs, goals, and workflows into one place.',
    },
    {
      icon: Users,
      title: 'Align Your Team',
      desc: 'Keep everyone on the same page and moving towards the same goal.',
    },
    {
      icon: TrendingUp,
      title: 'Make Better Decisions',
      desc: 'Use real-time insights and dashboards to make confident calls.',
    },
    {
      icon: Briefcase,
      title: 'Raise & Grow Faster',
      desc: 'Track investors, manage fundraising, and scale with clarity.',
    },
    {
      icon: Rocket,
      title: 'Built for Founders',
      desc: 'Simple, fast, and designed to help you focus on what matters.',
    },
  ];

  const trustedLogos = ['layers', 'Spherule', 'Catalog', 'Pitchbase', 'snapkit', 'tailwind', 'statik'];

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden relative">
      {/* Background Ambient Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] max-w-[600px] rounded-full bg-gradient-to-br from-purple-600/25 via-indigo-600/20 to-transparent blur-[140px] animate-pulse-ring" />
        <div className="absolute top-[25%] right-[5%] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-gradient-to-bl from-indigo-500/20 via-fuchsia-600/20 to-transparent blur-[160px]" />
        <div className="absolute top-[65%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-gradient-to-tr from-sky-500/15 via-purple-600/15 to-transparent blur-[140px]" />
      </div>

      {/* Floating Translucent Glass Navbar */}
      <header className="fixed top-4 left-4 right-4 z-50 max-w-6xl mx-auto">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/12 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl shadow-purple-950/20 transition-all duration-300">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="font-display font-bold text-base text-white tracking-tight">
              Founder OS
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Product</a>
            <a href="#usecases" className="hover:text-white transition-colors">Use Cases</a>
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/dashboard" className="text-xs font-medium text-slate-300 hover:text-white transition-colors px-2 py-1">
              Log in
            </NavLink>
            <NavLink to="/dashboard">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                <span>Get Started Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-4 text-sm font-medium animate-scale-in">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Product</a>
            <a href="#usecases" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Use Cases</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white">Pricing</a>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
              <NavLink to="/dashboard" className="text-center py-2 text-slate-300 hover:text-white">Log in</NavLink>
              <NavLink to="/dashboard" className="w-full">
                <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-xs shadow-lg">
                  Get Started Free →
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* 🚀 HERO SECTION (Exact Reference Image Match) */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Glass Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-medium backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>All-in-One Startup Operating System</span>
            </div>

            {/* Massive Hero Heading */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              Run Your Startup.{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                All in One Place.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Founder OS helps you manage your vision, teams, tasks, roadmaps, investors, fundraising and growth — in a single, powerful workspace.
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <NavLink to="/dashboard" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  <span>Start Building Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </NavLink>

              <NavLink to="/dashboard" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-xl border border-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:border-white/30">
                  <span>Explore Demo</span>
                  <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
                </button>
              </NavLink>
            </div>

            {/* Social Proof Avatars */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center -space-x-2">
                <img className="w-9 h-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Founder" />
                <img className="w-9 h-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Founder" />
                <img className="w-9 h-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Founder" />
                <img className="w-9 h-9 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="Founder" />
                <span className="w-9 h-9 rounded-full bg-purple-600/40 backdrop-blur-md border border-purple-400/30 flex items-center justify-center text-[10px] font-bold text-purple-200">
                  +1.2K
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium text-center sm:text-left">
                Trusted by 1,200+ founders and startup teams worldwide
              </p>
            </div>
          </div>

          {/* Hero Right: 3D Floating Glass Window Preview (Matches Reference Image) */}
          <div className="lg:col-span-6 relative">
            {/* Glowing 3D Floating Badge 1 (Analytics) */}
            <div className="absolute -top-6 -right-4 sm:top-2 sm:-right-6 z-20 p-3 rounded-2xl bg-indigo-600/80 backdrop-blur-xl border border-white/20 text-white shadow-xl shadow-indigo-600/40 animate-float hidden sm:flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>

            {/* Glowing 3D Floating Badge 2 (Team) */}
            <div className="absolute -bottom-6 -left-4 sm:bottom-4 sm:-left-6 z-20 p-3 rounded-2xl bg-purple-600/80 backdrop-blur-xl border border-white/20 text-white shadow-xl shadow-purple-600/40 animate-float stagger-2 hidden sm:flex items-center gap-2">
              <Users className="w-5 h-5 text-white" />
            </div>

            {/* Main Window Preview Card */}
            <div className="glass-card p-4 sm:p-6 bg-slate-950/70 border-white/15 shadow-2xl shadow-purple-950/40 relative z-10 overflow-hidden rounded-3xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                    F
                  </div>
                  <span className="font-display font-bold text-xs text-white">Founder OS</span>
                </div>
                <div className="text-[11px] font-semibold text-white/90">Good morning, Arjun 👋</div>
              </div>

              {/* KPI Grid Preview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400">Runway</div>
                  <div className="text-base font-bold text-white mt-0.5">18.4</div>
                  <div className="text-[9px] text-purple-400 mt-0.5">+2.4m vs last month</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400">MRR</div>
                  <div className="text-base font-bold text-white mt-0.5">$24.8K</div>
                  <div className="text-[9px] text-emerald-400 mt-0.5">+12.5% vs last month</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400">Burn Rate</div>
                  <div className="text-base font-bold text-white mt-0.5">$12.4K</div>
                  <div className="text-[9px] text-emerald-400 mt-0.5">-3.2% vs last month</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] text-slate-400">Team Size</div>
                  <div className="text-base font-bold text-white mt-0.5">24</div>
                  <div className="text-[9px] text-blue-400 mt-0.5">+3 new this month</div>
                </div>
              </div>

              {/* Middle Grid: Health Gauge + Revenue Trend Chart */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div className="text-xs font-semibold text-white mb-2">Startup Health</div>
                  <div className="flex items-center justify-center my-2">
                    <div className="w-20 h-20 rounded-full border-4 border-emerald-500/30 border-t-emerald-400 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">82</div>
                        <div className="text-[8px] text-slate-400">/100</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-400 text-center font-medium">Excellent Status</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-3">
                    <span>Revenue Trend</span>
                    <span className="text-[10px] text-slate-400 font-normal">This Month</span>
                  </div>
                  <div className="h-20 w-full flex items-end gap-1.5 pt-2">
                    {[35, 42, 58, 50, 65, 78, 85, 92].map((val, idx) => (
                      <div key={idx} className="flex-1 bg-gradient-to-t from-purple-600 to-indigo-400 rounded-t" style={{ height: `${val}%` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom List Preview */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Investor Pitch Deck Review</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[9px] font-semibold">High</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Finalize Q2 Roadmap</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-semibold">Medium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 LOGOS BAR */}
      <section className="py-12 border-y border-white/10 bg-slate-950/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Powering startups in every stage
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
            {trustedLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 font-display font-semibold text-lg hover:text-white transition-colors">
                <Layers className="w-5 h-5 text-purple-400" />
                <span className="capitalize">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚡ FEATURES GRID (Exact Reference Image Cards) */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Built for Execution</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Every tool a founder needs. Zero bloat.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Designed with Apple restraint and Linear speed to help you make decisions faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {featureCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-5 border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5.5 h-5.5 text-purple-400" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 💰 PRICING SECTION */}
      <section id="pricing" className="py-24 bg-slate-950/50 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Scale as you grow</h2>
            <p className="text-slate-400 text-sm">Transparent pricing for early-stage and high-growth startups.</p>

            <div className="inline-flex items-center p-1.5 rounded-full bg-slate-900 border border-white/10 text-xs mt-4">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-full transition-all ${billingCycle === 'monthly' ? 'bg-purple-600 text-white font-semibold' : 'text-slate-400'}`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 rounded-full transition-all ${billingCycle === 'annual' ? 'bg-purple-600 text-white font-semibold' : 'text-slate-400'}`}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Seed Plan */}
            <div className="glass-card p-8 flex flex-col justify-between border-white/10">
              <div>
                <h3 className="font-display font-bold text-lg text-white">Seed</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-bold text-4xl text-white">{billingCycle === 'annual' ? '$39' : '$49'}</span>
                  <span className="text-slate-400 text-xs">/month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">For early stage teams raising pre-seed or seed.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Up to 10 Team Members</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> OKR & Roadmap Workspace</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Investor CRM (Up to 25 funds)</li>
                </ul>
              </div>
              <NavLink to="/dashboard" className="mt-8">
                <button className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-colors">
                  Start Free Trial
                </button>
              </NavLink>
            </div>

            {/* Growth Plan (Highlighted) */}
            <div className="glass-card p-8 flex flex-col justify-between border-purple-500/50 relative shadow-2xl shadow-purple-950/50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-[10px] font-bold text-white uppercase tracking-wider shadow-md">
                Most Popular
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Growth</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-bold text-4xl text-white">{billingCycle === 'annual' ? '$99' : '$119'}</span>
                  <span className="text-slate-400 text-xs">/month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">For scaling startups executing Series A milestones.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Up to 50 Team Members</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Everything in Seed</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Investor CRM</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> AI Executive Insights</li>
                </ul>
              </div>
              <NavLink to="/dashboard" className="mt-8">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-lg shadow-purple-600/30">
                  Get Started
                </button>
              </NavLink>
            </div>

            {/* Scale Plan */}
            <div className="glass-card p-8 flex flex-col justify-between border-white/10">
              <div>
                <h3 className="font-display font-bold text-lg text-white">Scale</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-bold text-4xl text-white">{billingCycle === 'annual' ? '$199' : '$249'}</span>
                  <span className="text-slate-400 text-xs">/month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">For high-growth venture-backed platforms.</p>
                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Team Members</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Custom Board Reporting</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Dedicated Account Manager</li>
                </ul>
              </div>
              <NavLink to="/dashboard" className="mt-8">
                <button className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-colors">
                  Contact Sales
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-slate-950 text-slate-400 text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
              N
            </div>
            <span className="font-display font-bold text-sm text-white">NexusOS Founder OS</span>
          </div>
          <p>© 2026 NexusOS Inc. Designed for Frontend Wars 2026. Built with React & Tailwind CSS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};