import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Badge } from '../components/ui/Badge';
import { ProgressRing } from '../components/ui/ProgressRing';
import { Button } from '../components/ui/Button';
import { Target, ChevronDown, ChevronUp, Plus, CheckCircle2 } from 'lucide-react';

export const OKRs: React.FC = () => {
  const { okrs, updateOKRProgress } = useAppStore();
  const [expandedId, setExpandedId] = useState<string | null>('1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Company Goals (OKRs)"
        subtitle="Track quarterly strategic objectives and key results aligned across departments."
        badge="Q3 2026"
      >
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
          New Objective
        </Button>
      </PageHeader>

      {/* Summary KPI Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SpotlightCard className="bg-white p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-zinc-500 font-medium">Total Objectives</div>
            <div className="font-display font-bold text-2xl text-zinc-900">{okrs.length} Objectives</div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-zinc-500 font-medium">Objectives On Track</div>
            <div className="font-display font-bold text-2xl text-emerald-600">
              {okrs.filter((o) => o.status === 'on_track').length} / {okrs.length}
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6 flex items-center gap-4">
          <ProgressRing progress={65} size={50} strokeWidth={6} showValue={false} />
          <div>
            <div className="text-xs text-zinc-500 font-medium">Average Q3 Progress</div>
            <div className="font-display font-bold text-2xl text-zinc-900">65% Overall</div>
          </div>
        </SpotlightCard>
      </div>

      {/* OKR Accordion List */}
      <div className="space-y-4">
        {okrs.map((okr) => {
          const isExpanded = expandedId === okr.id;

          return (
            <SpotlightCard key={okr.id} className="bg-white p-6 transition-all duration-200">
              <div
                className="flex items-center justify-between cursor-pointer select-none"
                onClick={() => toggleExpand(okr.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-zinc-100 text-zinc-700">
                    <Target className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-lg text-zinc-900">{okr.objective}</h3>
                      <Badge variant="status" statusKey={okr.status} />
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">{okr.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <div className="text-right hidden sm:block">
                    <div className="font-display font-bold text-lg text-zinc-900">{okr.progress}%</div>
                    <div className="text-[10px] text-zinc-400">Owner: {okr.owner}</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Progress Bar Header */}
              <div className="mt-4 w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-600 rounded-full transition-all duration-500"
                  style={{ width: `${okr.progress}%` }}
                />
              </div>

              {/* Expanded Key Results Panel */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-zinc-100 space-y-4 animate-fade-in">
                  <h4 className="font-display font-semibold text-xs text-zinc-400 uppercase tracking-wider">
                    Key Results ({okr.keyResults.length})
                  </h4>

                  <div className="space-y-3">
                    {okr.keyResults.map((kr) => (
                      <div key={kr.id} className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-zinc-900">
                          <span>{kr.title}</span>
                          <span className="font-mono text-violet-600">
                            {kr.current} / {kr.target} {kr.unit} ({kr.progress}%)
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={kr.progress}
                          onChange={(e) => updateOKRProgress(okr.id, Number(e.target.value))}
                          className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
};
