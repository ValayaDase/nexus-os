import React from 'react';
import { NavLink } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { ProgressRing } from '../components/ui/ProgressRing';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
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
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner / Welcome Header */}
      <PageHeader
        title={`Welcome back, ${company.name} Workspace`}
        subtitle="Here is your startup's real-time performance command center."
        badge="Live Metrics"
      >
        <NavLink to="/tasks">
          <Button variant="outline" size="sm" icon={<Plus className="w-4 h-4" />}>
            New Task
          </Button>
        </NavLink>
        <NavLink to="/investors">
          <Button variant="primary" size="sm" magnetic icon={<Briefcase className="w-4 h-4" />}>
            Fundraising Hub
          </Button>
        </NavLink>
      </PageHeader>

      {/* Top Row: 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Runway */}
        <SpotlightCard className="bg-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Runway</span>
            <span className="p-2 rounded-xl bg-violet-50 text-violet-600">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-bold text-3xl text-zinc-900">
              <AnimatedCounter value={company.runway_months} decimals={1} suffix=" Mos" />
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between pt-3 border-t border-zinc-100">
            <span className="text-xs text-zinc-500">Burn: ${company.burn_rate.toLocaleString()}/mo</span>
            <Sparkline data={runwaySparkline} color="#7C3AED" width={70} height={24} />
          </div>
        </SpotlightCard>

        {/* KPI 2: MRR */}
        <SpotlightCard className="bg-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">MRR</span>
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <TrendingUp className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-bold text-3xl text-zinc-900">
              <AnimatedCounter value={company.mrr} prefix="$" />
            </span>
            <span className="text-xs font-semibold text-emerald-600">↑ 14.2%</span>
          </div>
          <div className="mt-3 flex items-center justify-between pt-3 border-t border-zinc-100">
            <span className="text-xs text-zinc-500">ARR: ${(company.mrr * 12).toLocaleString()}</span>
            <Sparkline data={mrrSparkline} color="#10B981" width={70} height={24} />
          </div>
        </SpotlightCard>

        {/* KPI 3: Team Size */}
        <SpotlightCard className="bg-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Team Size</span>
            <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Users className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-bold text-3xl text-zinc-900">
              <AnimatedCounter value={company.team_size} suffix=" Members" />
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between pt-3 border-t border-zinc-100">
            <span className="text-xs text-zinc-500">3 Open Roles</span>
            <Sparkline data={teamSparkline} color="#3B82F6" width={70} height={24} />
          </div>
        </SpotlightCard>

        {/* KPI 4: Active Investors */}
        <SpotlightCard className="bg-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Active Investors</span>
            <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Briefcase className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-bold text-3xl text-zinc-900">
              <AnimatedCounter value={company.active_investors} suffix=" Funds" />
            </span>
            <span className="text-xs font-semibold text-amber-600">2 Term Sheets</span>
          </div>
          <div className="mt-3 flex items-center justify-between pt-3 border-t border-zinc-100">
            <span className="text-xs text-zinc-500">$2.4M Committed</span>
            <Sparkline data={investorSparkline} color="#F59E0B" width={70} height={24} />
          </div>
        </SpotlightCard>
      </div>

      {/* Middle Row: Financial Chart (3 cols) + OKR Progress (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Financial Revenue Growth Chart */}
        <SpotlightCard className="lg:col-span-3 bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-bold text-lg text-zinc-900">Revenue & Cash Velocity</h3>
              <p className="text-xs text-zinc-500">12-month MRR and expense trajectory</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-violet-600 inline-block" />
                <span>MRR ($)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-zinc-300 inline-block" />
                <span>Expenses ($)</span>
              </div>
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financials} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F4F4F5" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#A1A1AA' }} />
                <YAxis tick={{ fontSize: 11, fill: '#A1A1AA' }} tickFormatter={(val) => `$${val / 1000}k`} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="tooltip-glass text-xs">
                          <p className="font-bold text-zinc-900 mb-1">{payload[0].payload.month}</p>
                          <p className="text-violet-600 font-semibold">MRR: ${payload[0].value?.toLocaleString()}</p>
                          <p className="text-zinc-500">Expenses: ${payload[1]?.value?.toLocaleString()}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area type="monotone" dataKey="mrr" stroke="#7C3AED" strokeWidth={3} fillOpacity={1} fill="url(#colorMrr)" />
                <Area type="monotone" dataKey="expenses" stroke="#E4E4E7" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SpotlightCard>

        {/* OKR Progress Card */}
        <SpotlightCard className="bg-white p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-base text-zinc-900">Q3 OKR Pulse</h3>
              <Badge variant="emerald">{activeOkrs} On Track</Badge>
            </div>
            <div className="flex justify-center my-4">
              <ProgressRing progress={avgOkrProgress} size={130} strokeWidth={10} label="Overall Completion" />
            </div>
            <p className="text-xs text-zinc-500 text-center mt-2 leading-relaxed">
              5 strategic objectives tracked. Next review in 6 days.
            </p>
          </div>

          <NavLink to="/okrs" className="mt-4">
            <Button variant="outline" size="sm" className="w-full" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
              Manage OKRs
            </Button>
          </NavLink>
        </SpotlightCard>
      </div>

      {/* Bottom Row: AI Insights + Recent Activity + Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insight Highlight */}
        <SpotlightCard className="bg-gradient-to-br from-violet-950 via-zinc-900 to-indigo-950 text-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-400" />
              <span className="font-display font-bold text-sm text-violet-300 uppercase tracking-wider">AI Executive Brief</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-mono border border-violet-500/30">
              92% Confidence
            </span>
          </div>

          <h4 className="font-display font-semibold text-base mb-2 text-white">{aiInsights[0].title}</h4>
          <p className="text-xs text-zinc-300 leading-relaxed mb-4">{aiInsights[0].description}</p>

          <div className="p-3 rounded-xl bg-white/10 border border-white/10 mb-6">
            <div className="text-[10px] text-zinc-400 uppercase font-semibold">Recommended Action</div>
            <div className="text-xs font-medium text-violet-200 mt-1">{aiInsights[0].suggestedAction}</div>
          </div>

          <NavLink to="/ai-insights">
            <Button variant="primary" size="sm" className="w-full bg-violet-600 hover:bg-violet-500">
              View All 5 AI Insights
            </Button>
          </NavLink>
        </SpotlightCard>

        {/* Priority Tasks */}
        <SpotlightCard className="bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-base text-zinc-900">Sprint Priorities</h3>
            <NavLink to="/tasks" className="text-xs text-violet-600 hover:text-violet-700 font-semibold">
              View All
            </NavLink>
          </div>

          <div className="space-y-3">
            {tasks.slice(0, 4).map((task) => (
              <div key={task.id} className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-600" />
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 line-clamp-1">{task.title}</div>
                    <div className="text-[10px] text-zinc-400">{task.project} • {task.assignee}</div>
                  </div>
                </div>
                <Badge variant="priority" statusKey={task.priority} size="sm" />
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* Recent Activity */}
        <SpotlightCard className="bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-base text-zinc-900">Recent Pulse</h3>
            <span className="text-xs text-zinc-400">Live Feed</span>
          </div>

          <div className="space-y-4">
            {notifications.slice(0, 4).map((n) => (
              <div key={n.id} className="flex gap-3 text-xs">
                <div className="w-7 h-7 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 border border-violet-100">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">{n.title}</div>
                  <div className="text-zinc-500 text-[11px] mt-0.5 line-clamp-1">{n.message}</div>
                  <div className="text-[10px] text-zinc-400 mt-1">{formatRelativeDate(n.timestamp)}</div>
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
