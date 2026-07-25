import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { TrendingUp, DollarSign, Activity, Percent } from 'lucide-react';

export const Financials: React.FC = () => {
  const { financials, company } = useAppStore();

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Financial Analytics & Unit Economics"
        subtitle="Track monthly revenue, expenses, net burn rate, customer count, and churn metrics."
        badge="Finance"
      />

      {/* Top Financial KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SpotlightCard className="bg-white p-6">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold uppercase">
            <span>Annual Run Rate</span>
            <DollarSign className="w-4 h-4 text-violet-600" />
          </div>
          <div className="font-display font-bold text-3xl text-zinc-900 mt-2">
            <AnimatedCounter value={company.arr} prefix="$" />
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">↑ +22% vs Q2</div>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold uppercase">
            <span>Monthly Burn Rate</span>
            <Activity className="w-4 h-4 text-red-500" />
          </div>
          <div className="font-display font-bold text-3xl text-zinc-900 mt-2">
            <AnimatedCounter value={company.burn_rate} prefix="$" />
          </div>
          <div className="text-xs text-zinc-400 mt-1">Net: -$32,500/mo</div>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold uppercase">
            <span>Customer Base</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div className="font-display font-bold text-3xl text-zinc-900 mt-2">
            <AnimatedCounter value={financials[financials.length - 1].customers} suffix=" Accounts" />
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">↑ +37 new accounts</div>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold uppercase">
            <span>Gross Churn Rate</span>
            <Percent className="w-4 h-4 text-amber-500" />
          </div>
          <div className="font-display font-bold text-3xl text-zinc-900 mt-2">
            3.4%
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">↓ -0.5% improvement</div>
        </SpotlightCard>
      </div>

      {/* Financial Bar Chart: Revenue vs Expenses */}
      <SpotlightCard className="bg-white p-6 space-y-4">
        <h3 className="font-display font-bold text-lg text-zinc-900">Monthly Financial Overview</h3>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={financials} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F4F4F5" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#A1A1AA' }} />
              <YAxis tick={{ fontSize: 11, fill: '#A1A1AA' }} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="tooltip-glass text-xs">
                        <p className="font-bold text-zinc-900">{payload[0].payload.month}</p>
                        <p className="text-violet-600">Revenue: ${payload[0].value?.toLocaleString()}</p>
                        <p className="text-zinc-500">Expenses: ${payload[1]?.value?.toLocaleString()}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="revenue" fill="#7C3AED" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="#E4E4E7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SpotlightCard>
    </div>
  );
};
