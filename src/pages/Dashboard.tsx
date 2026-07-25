import React from 'react';
import { NavLink } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useAppStore } from '../store/useAppStore';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { ProgressRing } from '../components/ui/ProgressRing';
import { Badge } from '../components/ui/Badge';
import { Sparkline } from '../components/ui/Sparkline';
import { formatRelativeDate } from '../lib/formatters';
import {
  TrendingUp, Users, Briefcase, Plus,
  Sparkles, ArrowRight, ShieldCheck
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { company, okrs, tasks, financials, notifications, aiInsights } = useAppStore();

  const activeOkrs = okrs.filter((o) => o.status === 'on_track').length;
  const avgOkrProgress = Math.round(okrs.reduce((acc, curr) => acc + curr.progress, 0) / okrs.length);

  // Sparkline mock data arrays
  const mrrSparkline = [5100, 5800, 6500, 7200, 8400, 9200, 10500, 11800, 12500];
  const runwaySparkline = [24, 22, 21, 20, 19.5, 19, 18.5, 18.4];
  const teamSparkline = [4, 6, 7, 8, 9, 10, 11, 12];
  const investorSparkline = [2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      {/* 🚀 Top Banner Card — Vivid 3D Gradient (Adobe Stock Style in Reference Image) */}
      <div className="macos-banner-card p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Floating 3D Geometric Accents */}
        <div className="absolute top-[-20%] right-[-5%] w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[20%] w-60 h-60 rounded-full bg-purple-900/30 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white border border-white/30 shadow-xs">
              Founder OS Pro
            </span>
            <span className="text-xs text-white/80 font-medium">Seed Round Active</span>
          </div>

          <h1 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Welcome back, {company.name} Workspace
          </h1>
          <p className="text-sm text-white/90 mt-2 leading-relaxed max-w-xl">
            Track runway, MRR growth, OKRs, hiring pipelines, and investor CRMs in your real-time glass command center.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <NavLink to="/tasks">
              <button className="px-5 py-2.5 btn-mac-primary text-xs font-semibold flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>New Task</span>
              </button>
            </NavLink>
            <NavLink to="/investors">
              <button className="px-5 py-2.5 btn-mac-secondary text-xs font-semibold flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Fundraising Hub</span>
              </button>
            </NavLink>
          </div>
        </div>

        {/* Banner Quick Stats Pill */}
        <div className="relative z-10 p-4 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/20 min-w-[220px] space-y-2">
          <div className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">Runway Health</div>
          <div className="text-2xl font-bold font-display text-white">18.4 Months</div>
          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full w-[78%] rounded-full" />
          </div>
          <div className="text-[10px] text-white/80 font-medium">$45K/mo Burn Rate</div>
        </div>
      </div>

      {/* 📊 Top Row: 4 Glass KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Runway */}
        <SpotlightCard className="glass-card">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Runway</span>
            <span className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-bold text-3xl text-white">
              <AnimatedCounter value={company.runway_months} decimals={1} suffix=" Mos" />
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-xs text-slate-400">Burn: ${company.burn_rate.toLocaleString()}/mo</span>
            <Sparkline data={runwaySparkline} color="#8B5CF6" width={70} height={24} />
          </div>
        </SpotlightCard>

        {/* KPI 2: MRR */}
        <SpotlightCard className="glass-card">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">MRR</span>
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-bold text-3xl text-white">
              <AnimatedCounter value={company.mrr} prefix="$" />
            </span>
            <span className="text-xs font-semibold text-emerald-400">↑ 14.2%</span>
          </div>
          <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-xs text-slate-400">ARR: ${(company.mrr * 12).toLocaleString()}</span>
            <Sparkline data={mrrSparkline} color="#10B981" width={70} height={24} />
          </div>
        </SpotlightCard>

        {/* KPI 3: Team Size */}
        <SpotlightCard className="glass-card">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Team Size</span>
            <span className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <Users className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-bold text-3xl text-white">
              <AnimatedCounter value={company.team_size} suffix=" Members" />
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-xs text-slate-400">3 Open Roles</span>
            <Sparkline data={teamSparkline} color="#3B82F6" width={70} height={24} />
          </div>
        </SpotlightCard>

        {/* KPI 4: Active Investors */}
        <SpotlightCard className="glass-card">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Investors</span>
            <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Briefcase className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-bold text-3xl text-white">
              <AnimatedCounter value={company.active_investors} suffix=" Funds" />
            </span>
            <span className="text-xs font-semibold text-amber-400">2 Term Sheets</span>
          </div>
          <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-xs text-slate-400">$2.4M Committed</span>
            <Sparkline data={investorSparkline} color="#F59E0B" width={70} height={24} />
          </div>
        </SpotlightCard>
      </div>

      {/* 📈 Middle Row: Financial Chart (3 cols) + OKR Progress (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Financial Revenue Growth Chart */}
        <SpotlightCard className="lg:col-span-3 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-bold text-lg text-white">Revenue & Cash Velocity</h3>
              <p className="text-xs text-slate-400">12-month MRR and expense trajectory</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500 inline-block shadow-xs shadow-blue-500" />
                <span>MRR ($)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-600 inline-block" />
                <span>Expenses ($)</span>
              </div>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financials} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} tickFormatter={(val) => `$${val / 1000}k`} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="tooltip-glass text-xs">
                          <p className="font-bold text-white mb-1">{payload[0].payload.month}</p>
                          <p className="text-blue-400 font-semibold">MRR: ${payload[0].value?.toLocaleString()}</p>
                          <p className="text-slate-400">Expenses: ${payload[1]?.value?.toLocaleString()}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area type="monotone" dataKey="mrr" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorMrr)" />
                <Area type="monotone" dataKey="expenses" stroke="rgba(255,255,255,0.2)" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SpotlightCard>

        {/* OKR Progress Card */}
        <SpotlightCard className="glass-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-base text-white">Q3 OKR Pulse</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                {activeOkrs} On Track
              </span>
            </div>
            <div className="flex justify-center my-4">
              <ProgressRing progress={avgOkrProgress} size={130} strokeWidth={10} label="Overall Completion" />
            </div>
            <p className="text-xs text-slate-400 text-center mt-2 leading-relaxed">
              5 strategic objectives tracked. Next review in 6 days.
            </p>
          </div>

          <NavLink to="/okrs" className="mt-4">
            <button className="w-full py-2.5 btn-mac-secondary text-xs font-medium flex items-center justify-center gap-2">
              <span>Manage OKRs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </NavLink>
        </SpotlightCard>
      </div>

      {/* 🧠 Bottom Row: AI Insights + Recent Activity + Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insight Highlight */}
        <SpotlightCard className="glass-card bg-gradient-to-br from-slate-900/90 via-indigo-950/80 to-purple-950/90 text-white p-6 border-indigo-500/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="font-display font-bold text-sm text-purple-300 uppercase tracking-wider">AI Executive Brief</span>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono border border-purple-500/30">
              92% Confidence
            </span>
          </div>

          <h4 className="font-display font-semibold text-base mb-2 text-white">{aiInsights[0].title}</h4>
          <p className="text-xs text-slate-300 leading-relaxed mb-4">{aiInsights[0].description}</p>

          <div className="p-3 rounded-xl bg-white/10 border border-white/10 mb-6 backdrop-blur-md">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Recommended Action</div>
            <div className="text-xs font-medium text-purple-200 mt-1">{aiInsights[0].suggestedAction}</div>
          </div>

          <NavLink to="/ai-insights">
            <button className="w-full py-2.5 btn-mac-primary text-xs font-semibold">
              View All 5 AI Insights
            </button>
          </NavLink>
        </SpotlightCard>

        {/* Priority Tasks */}
        <SpotlightCard className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-base text-white">Sprint Priorities</h3>
            <NavLink to="/tasks" className="text-xs text-blue-400 hover:text-blue-300 font-semibold">
              View All
            </NavLink>
          </div>

          <div className="space-y-3">
            {tasks.slice(0, 4).map((task) => (
              <div key={task.id} className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 shadow-xs shadow-blue-400" />
                  <div>
                    <div className="text-xs font-semibold text-white line-clamp-1">{task.title}</div>
                    <div className="text-[10px] text-slate-400">{task.project} • {task.assignee}</div>
                  </div>
                </div>
                <Badge variant="priority" statusKey={task.priority} size="sm" />
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* Recent Activity */}
        <SpotlightCard className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-base text-white">Recent Pulse</h3>
            <span className="text-xs text-slate-400 font-mono">Live Feed</span>
          </div>

          <div className="space-y-4">
            {notifications.slice(0, 4).map((n) => (
              <div key={n.id} className="flex gap-3 text-xs">
                <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-white">{n.title}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 line-clamp-1">{n.message}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{formatRelativeDate(n.timestamp)}</div>
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
