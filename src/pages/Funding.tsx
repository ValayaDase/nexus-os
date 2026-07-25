import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PiggyBank } from 'lucide-react';
import { formatCurrency } from '../lib/formatters';

export const Funding: React.FC = () => {
  const { fundingRounds, company } = useAppStore();

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Funding & Cap Table Dashboard"
        subtitle="Track historical investment rounds, valuation progression, and equity breakdown."
        badge={`Total Raised: ${formatCurrency(company.total_raised)}`}
      >
        <Button variant="primary" size="sm" icon={<PiggyBank className="w-4 h-4" />}>
          New Round Plan
        </Button>
      </PageHeader>

      {/* Rounds Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {fundingRounds.map((round) => (
          <SpotlightCard key={round.id} className="bg-white p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-lg text-zinc-900">{round.name}</span>
              <Badge variant={round.status === 'completed' ? 'emerald' : round.status === 'in_progress' ? 'violet' : 'zinc'}>
                {round.status.replace('_', ' ')}
              </Badge>
            </div>

            <div>
              <div className="text-xs text-zinc-400 font-medium">Raised / Target</div>
              <div className="font-display font-bold text-2xl text-zinc-900 mt-0.5">
                {formatCurrency(round.amount)}
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-100 text-xs text-zinc-500 space-y-1">
              <div className="flex justify-between">
                <span>Valuation:</span>
                <span className="font-semibold text-zinc-800">{formatCurrency(round.valuation)}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-mono text-zinc-700">{round.date}</span>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Cap Table Mock Breakdown */}
      <SpotlightCard className="bg-white p-6 space-y-6">
        <h3 className="font-display font-bold text-lg text-zinc-900">Ownership & Cap Table Structure</h3>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
              <span>Founders (Arjun & Priya)</span>
              <span>62.5% ($7.5M)</span>
            </div>
            <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-violet-600 rounded-full w-[62.5%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
              <span>Seed Investors (Sequoia, Accel, YC)</span>
              <span>20.0% ($2.4M)</span>
            </div>
            <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[20%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
              <span>Angels & Pre-Seed</span>
              <span>7.5% ($900K)</span>
            </div>
            <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full w-[7.5%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-zinc-900 mb-1">
              <span>ESOP Pool (Team)</span>
              <span>10.0% ($1.2M)</span>
            </div>
            <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full w-[10%]" />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};
