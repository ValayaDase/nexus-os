import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Button } from '../components/ui/Button';
import { Sparkles, ArrowRight } from 'lucide-react';

export const AIInsights: React.FC = () => {
  const { aiInsights } = useAppStore();

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      <PageHeader
        title="AI Insights Engine"
        subtitle="Automated predictive intelligence evaluating churn risk, revenue growth, hiring velocity, and PMF metrics."
        badge="AI Powered"
      />

      <div className="space-y-6">
        {aiInsights.map((insight) => (
          <SpotlightCard key={insight.id} className="bg-white p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl ${
                  insight.category === 'risk' ? 'bg-red-50 text-red-600' :
                  insight.category === 'growth' ? 'bg-emerald-50 text-emerald-600' :
                  insight.category === 'opportunity' ? 'bg-violet-50 text-violet-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-zinc-900">{insight.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mt-0.5">
                    <span className="capitalize font-semibold text-zinc-600">{insight.category}</span>
                    <span>•</span>
                    <span>Confidence: {insight.confidence}%</span>
                  </div>
                </div>
              </div>

              {insight.metricValue && (
                <div className="text-right hidden sm:block">
                  <div className="font-display font-bold text-2xl text-zinc-900">{insight.metricValue}</div>
                  <div className="text-[10px] text-zinc-400 font-medium">{insight.metric}</div>
                </div>
              )}
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">{insight.description}</p>

            <div className="p-4 rounded-xl bg-violet-50/60 border border-violet-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-[11px] font-bold text-violet-700 uppercase tracking-wider">Suggested Executive Action</div>
                <div className="text-xs font-semibold text-zinc-900 mt-0.5">{insight.suggestedAction}</div>
              </div>

              <Button variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Execute Action
              </Button>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};
