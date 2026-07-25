import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';
import type { InvestorStage } from '../types';
import { Briefcase, DollarSign, Plus, Building, ArrowUpRight } from 'lucide-react';

export const Investors: React.FC = () => {
  const { investors, updateInvestorStage } = useAppStore();
  const [filterStage, setFilterStage] = useState<string>('all');

  const committedTotal = investors
    .filter((i) => i.stage === 'committed')
    .reduce((acc, curr) => acc + curr.amountNum, 0);

  const filteredInvestors = filterStage === 'all'
    ? investors
    : investors.filter((i) => i.stage === filterStage);

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Investor CRM & Fundraising Pipeline"
        subtitle="Manage investor relationships, term sheet commitments, pitch feedback, and round check sizes."
        badge="Fundraising Hub"
      >
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
          Add Investor
        </Button>
      </PageHeader>

      {/* Summary KPI Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SpotlightCard className="bg-white p-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-500 font-medium">Committed Capital</div>
            <div className="font-display font-bold text-3xl text-emerald-600 mt-1">
              ${(committedTotal / 1000000).toFixed(2)}M
            </div>
            <div className="text-xs text-zinc-400 mt-1">Target: $3.0M Seed</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-500 font-medium">Active Funds in Pipeline</div>
            <div className="font-display font-bold text-3xl text-zinc-900 mt-1">
              {investors.filter((i) => i.stage !== 'passed').length} Funds
            </div>
            <div className="text-xs text-zinc-400 mt-1">Across 5 stages</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
            <Building className="w-6 h-6" />
          </div>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-zinc-500 font-medium">Term Sheets Received</div>
            <div className="font-display font-bold text-3xl text-violet-600 mt-1">
              {investors.filter((i) => i.stage === 'term_sheet').length} Term Sheets
            </div>
            <div className="text-xs text-zinc-400 mt-1">YC & Sequoia</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Briefcase className="w-6 h-6" />
          </div>
        </SpotlightCard>
      </div>

      {/* Stage Funnel Overview Bar */}
      <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-card space-y-4">
        <h3 className="font-display font-bold text-base text-zinc-900">Fundraising Pipeline Stages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
          {['lead', 'contacted', 'meeting', 'due_diligence', 'term_sheet', 'committed'].map((stg) => {
            const count = investors.filter((i) => i.stage === stg).length;
            return (
              <div
                key={stg}
                onClick={() => setFilterStage(filterStage === stg ? 'all' : stg)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  filterStage === stg ? 'bg-violet-50 border-violet-500 text-violet-700 font-bold' : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                }`}
              >
                <div className="capitalize font-semibold text-[11px] truncate">{stg.replace('_', ' ')}</div>
                <div className="font-display font-bold text-lg text-zinc-900 mt-1">{count}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Investor CRM Table */}
      <SpotlightCard className="bg-white p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-lg text-zinc-900">Investor Directory</h3>
          <span className="text-xs text-zinc-400">Showing {filteredInvestors.length} Investors</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-400 font-semibold uppercase tracking-wider">
                <th className="pb-3 pr-4">Investor</th>
                <th className="pb-3 px-4">Firm</th>
                <th className="pb-3 px-4">Type</th>
                <th className="pb-3 px-4">Check Size</th>
                <th className="pb-3 px-4">Stage</th>
                <th className="pb-3 px-4">Last Contact</th>
                <th className="pb-3 pl-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 font-medium">
              {filteredInvestors.map((inv) => (
                <tr key={inv.id} className="hover:bg-zinc-50/80 transition-colors">
                  <td className="py-4 pr-4 flex items-center gap-3">
                    <Avatar name={inv.name} size="sm" />
                    <div>
                      <div className="font-bold text-zinc-900">{inv.name}</div>
                      <div className="text-[10px] text-zinc-400">{inv.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-zinc-700">{inv.firm}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 font-semibold">{inv.type}</span>
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-zinc-900">{inv.amount}</td>
                  <td className="py-4 px-4">
                    <select
                      value={inv.stage}
                      onChange={(e) => updateInvestorStage(inv.id, e.target.value as InvestorStage)}
                      className="px-2 py-1 rounded-lg text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200 outline-none cursor-pointer capitalize"
                    >
                      <option value="lead">Lead</option>
                      <option value="contacted">Contacted</option>
                      <option value="meeting">Meeting</option>
                      <option value="due_diligence">Due Diligence</option>
                      <option value="term_sheet">Term Sheet</option>
                      <option value="committed">Committed</option>
                      <option value="passed">Passed</option>
                    </select>
                  </td>
                  <td className="py-4 px-4 text-zinc-500 font-mono">{inv.lastContact}</td>
                  <td className="py-4 pl-4 text-right">
                    <Button variant="ghost" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SpotlightCard>
    </div>
  );
};
