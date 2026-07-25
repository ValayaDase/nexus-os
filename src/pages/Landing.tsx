import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import type { Mesh } from 'three';
import { Button } from '../components/ui/Button';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { GradientText } from '../components/ui/GradientText';
import {
  ArrowRight, Sparkles, Target, Map, Briefcase,
  Users, TrendingUp, Check, Play
} from 'lucide-react';

// R3F Animated Sphere
function Hero3DSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#7C3AED"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export const Landing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-violet-100 selection:text-violet-900 overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-md shadow-violet-500/20">
              N
            </div>
            <span className="font-display font-bold text-lg text-zinc-900 tracking-tight">
              NexusOS
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
            <a href="#preview" className="hover:text-zinc-900 transition-colors">Workspace</a>
            <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-zinc-900 transition-colors">Testimonials</a>
          </nav>

          <div className="flex items-center gap-3">
            <NavLink to="/dashboard">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </NavLink>
            <NavLink to="/dashboard">
              <Button
                variant="primary"
                size="sm"
                magnetic
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Enter Workspace
              </Button>
            </NavLink>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 md:pt-52 md:pb-32 bg-gradient-hero overflow-hidden">
        {/* Background R3F Canvas */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[500px] pointer-events-none opacity-80 md:opacity-100">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <pointLight position={[-10, -10, -10]} intensity={1} />
            <Hero3DSphere />
          </Canvas>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-violet-200/80 shadow-xs mb-6 text-xs font-semibold text-violet-700 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Introducing NexusOS 1.0 — Frontend Wars 2026 Winner</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-display text-zinc-900 mb-6 animate-fade-in-up">
              The Operating System for <GradientText>Modern Founders</GradientText>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-zinc-600 mb-8 leading-relaxed font-normal max-w-2xl animate-fade-in-up stagger-2">
              Unify OKRs, product roadmaps, hiring pipelines, investor CRMs, and financial metrics into one blazing-fast command center. Built for visionary startup teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up stagger-3">
              <NavLink to="/dashboard">
                <Button
                  size="lg"
                  variant="primary"
                  magnetic
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Launch Demo Workspace
                </Button>
              </NavLink>
              <a href="#preview">
                <Button
                  size="lg"
                  variant="outline"
                  icon={<Play className="w-4 h-4 fill-zinc-800" />}
                >
                  Watch 2-Min Demo
                </Button>
              </a>
            </div>

            {/* Metrics Ribbon */}
            <div className="mt-12 pt-8 border-t border-zinc-200/60 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="font-display font-bold text-2xl text-zinc-900">$2.4M</div>
                <div className="text-xs text-zinc-500 font-medium mt-0.5">Seed Raised</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-zinc-900">18 Mos</div>
                <div className="text-xs text-zinc-500 font-medium mt-0.5">Verified Runway</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-zinc-900">22+</div>
                <div className="text-xs text-zinc-500 font-medium mt-0.5">Core Modules</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section id="preview" className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl p-2 bg-zinc-900/5 border border-zinc-200/80 shadow-2xl overflow-hidden">
            <div className="bg-white rounded-xl overflow-hidden border border-zinc-200">
              <div className="h-10 bg-zinc-100/80 border-b border-zinc-200 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="px-3 py-0.5 rounded-md bg-white border border-zinc-200 text-[11px] text-zinc-500 font-mono">
                  app.nexusos.io/dashboard
                </div>
                <div className="w-12" />
              </div>
              <div className="p-8 bg-zinc-50/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                  <SpotlightCard className="bg-white p-6">
                    <div className="text-xs text-zinc-500 font-medium">Monthly Recurring Revenue</div>
                    <div className="font-display font-bold text-2xl text-zinc-900 mt-1">$12,500</div>
                    <span className="text-xs text-emerald-600 font-semibold mt-2 inline-block">
                      ↑ +14.2% MoM
                    </span>
                  </SpotlightCard>
                  <SpotlightCard className="bg-white p-6">
                    <div className="text-xs text-zinc-500 font-medium">Runway Months</div>
                    <div className="font-display font-bold text-2xl text-zinc-900 mt-1">18.4 Mos</div>
                    <span className="text-xs text-violet-600 font-semibold mt-2 inline-block">
                      Burn: $45K/mo
                    </span>
                  </SpotlightCard>
                  <SpotlightCard className="bg-white p-6">
                    <div className="text-xs text-zinc-500 font-medium">Active Investors</div>
                    <div className="font-display font-bold text-2xl text-zinc-900 mt-1">8 Funds</div>
                    <span className="text-xs text-emerald-600 font-semibold mt-2 inline-block">
                      2 Term Sheets
                    </span>
                  </SpotlightCard>
                  <SpotlightCard className="bg-white p-6">
                    <div className="text-xs text-zinc-500 font-medium">OKR Progress (Q3)</div>
                    <div className="font-display font-bold text-2xl text-zinc-900 mt-1">74%</div>
                    <span className="text-xs text-emerald-600 font-semibold mt-2 inline-block">
                      4/5 On Track
                    </span>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-violet-700 uppercase tracking-widest">
              Built for Execution
            </span>
            <h2 className="text-h1 text-zinc-900 font-display font-bold mt-2">
              Every tool a founder needs. Zero bloat.
            </h2>
            <p className="text-sm text-zinc-600 mt-3">
              Designed with Apple restraint and Linear speed to help you make decisions faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard className="bg-white p-8">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 mb-2">Vision & OKRs</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Align your team around clear quarterly objectives and measurable key results with real-time progress calculations.
              </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 mb-2">Product Roadmap</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Kanban-style pipeline to manage feature releases, sprint velocity, and engineering priorities seamlessly.
              </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 mb-2">Investor CRM</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Track fundraising stages from pitch to term sheets, manage check sizes, and send monthly updates easily.
              </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white p-8">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 mb-2">Hiring ATS Pipeline</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Streamline candidate screening, interviews, offers, and org charts to build your dream team faster.
              </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white p-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 mb-2">Financial Analytics</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Interactive charts for MRR, burn rate, runway projections, and unit economics with custom glass tooltips.
              </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white p-8">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-zinc-900 mb-2">AI Insights Engine</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Automated predictions for churn risk, revenue growth, and hiring bottlenecks with confidence metrics.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold text-violet-700 uppercase tracking-widest">
              Transparent Pricing
            </span>
            <h2 className="text-h1 text-zinc-900 font-display font-bold mt-2">Scale as you grow</h2>
            <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-zinc-100 border border-zinc-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-500'
                }`}
                type="button"
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-500'
                }`}
                type="button"
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Seed Plan */}
            <SpotlightCard className="bg-white p-8 flex flex-col justify-between">
              <div>
                <span className="text-sm font-semibold text-zinc-900">Seed</span>
                <div className="font-display font-bold text-4xl text-zinc-900 mt-2">
                  {billingCycle === 'annual' ? '$49' : '$59'}
                  <span className="text-xs text-zinc-400 font-normal">/mo</span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  Perfect for early stage teams raising Pre-Seed & Seed rounds.
                </p>
                <div className="my-6 border-t border-zinc-100" />
                <ul className="space-y-3 text-xs text-zinc-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Up to 10 Team Members
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> OKR & Roadmap Workspace
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Investor CRM (Up to 25 funds)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Basic Financial Analytics
                  </li>
                </ul>
              </div>
              <NavLink to="/dashboard" className="mt-8">
                <Button variant="outline" className="w-full">
                  Start Free Trial
                </Button>
              </NavLink>
            </SpotlightCard>

            {/* Growth Plan (Featured) */}
            <SpotlightCard className="bg-white p-8 flex flex-col justify-between border-2 border-violet-500 shadow-xl relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-violet-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <span className="text-sm font-semibold text-violet-700">Growth</span>
                <div className="font-display font-bold text-4xl text-zinc-900 mt-2">
                  {billingCycle === 'annual' ? '$119' : '$149'}
                  <span className="text-xs text-zinc-400 font-normal">/mo</span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  For scaling startups executing Series A milestones.
                </p>
                <div className="my-6 border-t border-zinc-100" />
                <ul className="space-y-3 text-xs text-zinc-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Up to 50 Team Members
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Everything in Seed
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Unlimited Investor CRM
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> ATS Hiring Pipeline
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> AI Insights Engine
                  </li>
                </ul>
              </div>
              <NavLink to="/dashboard" className="mt-8">
                <Button variant="primary" className="w-full" magnetic>
                  Get Started
                </Button>
              </NavLink>
            </SpotlightCard>

            {/* Enterprise Plan */}
            <SpotlightCard className="bg-white p-8 flex flex-col justify-between">
              <div>
                <span className="text-sm font-semibold text-zinc-900">Scale</span>
                <div className="font-display font-bold text-4xl text-zinc-900 mt-2">
                  {billingCycle === 'annual' ? '$249' : '$299'}
                  <span className="text-xs text-zinc-400 font-normal">/mo</span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  For high-growth venture-backed platforms.
                </p>
                <div className="my-6 border-t border-zinc-100" />
                <ul className="space-y-3 text-xs text-zinc-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Unlimited Team Members
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Custom Board Reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Dedicated Account Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" /> Custom API Access
                  </li>
                </ul>
              </div>
              <NavLink to="/dashboard" className="mt-8">
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </NavLink>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 bg-zinc-900 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-6 shadow-lg shadow-violet-500/30">
            N
          </div>
          <h2 className="text-h1 font-display font-bold mb-4">
            Ready to operate like a top 1% founder?
          </h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8">
            Join thousands of high-growth founders scaling their startups with NexusOS.
          </p>
          <NavLink to="/dashboard">
            <Button
              size="lg"
              variant="primary"
              magnetic
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Enter Founder Workspace
            </Button>
          </NavLink>
          <div className="mt-12 text-xs text-zinc-500">
            © 2026 NexusOS Inc. Designed for Frontend Wars 2026. Built with React, TypeScript &amp; Vite.
          </div>
        </div>
      </footer>
    </div>
  );
};