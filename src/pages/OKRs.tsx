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
    <div className="space-y-8 animate-fade-in text-slate-100">
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
        <SpotlightCard className="glass-card p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Total Objectives</div>
            <div className="font-display font-bold text-2xl text-white">{okrs.length} Objectives</div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="glass-card p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Objectives On Track</div>
            <div className="font-display font-bold text-2xl text-emerald-400">
              {okrs.filter((o) => o.status === 'on_track').length} / {okrs.length}
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard className="glass-card p-6 flex items-center gap-4">
          <ProgressRing progress={65} size={50} strokeWidth={6} showValue={false} />
          <div>
            <div className="text-xs text-slate-400 font-medium">Average Q3 Progress</div>
            <div className="font-display font-bold text-2xl text-white">65% Overall</div>
          </div>
        </SpotlightCard>
      </div>

      {/* OKR Accordion List */}
      <div className="space-y-4">
        {okrs.map((okr) => {
          const isExpanded = expandedId === okr.id;

          return (
            <SpotlightCard key={okr.id} className="glass-card p-6 transition-all duration-200">
              <div
                className="flex items-center justify-between cursor-pointer select-none"
                onClick={() => toggleExpand(okr.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/10 text-indigo-400 border border-white/10">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-lg text-white">{okr.objective}</h3>
                      <Badge variant="status" statusKey={okr.status} />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{okr.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <div className="text-right hidden sm:block">
                    <div className="font-display font-bold text-lg text-white">{okr.progress}%</div>
                    <div className="text-[10px] text-slate-400">Owner: {okr.owner}</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full"
                  style={{ width: `${okr.progress}%` }}
                />
              </div>

              {/* Key Results Expanded */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Key Results ({okr.keyResults.length})
                  </div>
                  <div className="space-y-3">
                    {okr.keyResults.map((kr) => {
                      const krPct = Math.round((kr.current / kr.target) * 100);
                      return (
                        <div key={kr.id} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="text-xs font-semibold text-white">{kr.title}</div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              {kr.current} / {kr.target} {kr.unit} ({krPct}%)
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <input
                              type="range"
                              min={0}
                              max={kr.target}
                              value={kr.current}
                              onChange={(e) => updateOKRProgress(okr.id, kr.id, Number(e.target.value))}
                              className="w-32 accent-blue-500 cursor-pointer"
                            />
                          </div>
                        </div>
                      );
                    })}
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
