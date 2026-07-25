import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { FileText, Download, Share2, Plus } from 'lucide-react';

export const Reports: React.FC = () => {
  const { reports } = useAppStore();

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Reports & Analytics Export"
        subtitle="Generate weekly progress reports, monthly investor updates, and board decks."
        badge={`${reports.length} Reports`}
      >
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
          Create Report
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <SpotlightCard key={report.id} className="bg-white p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violet-50 text-violet-600">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-zinc-900">{report.title}</h3>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">{report.createdAt}</div>
                </div>
              </div>
              <Badge variant={report.status === 'published' ? 'emerald' : 'amber'}>
                {report.status}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-zinc-100">
              {report.metrics.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                  <div className="text-[10px] text-zinc-500 font-medium truncate">{m.label}</div>
                  <div className="font-display font-bold text-sm text-zinc-900 mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-100 flex items-center justify-end gap-2">
              <Button variant="ghost" size="sm" icon={<Share2 className="w-3.5 h-3.5" />}>
                Share
              </Button>
              <Button variant="outline" size="sm" icon={<Download className="w-3.5 h-3.5" />}>
                Export PDF
              </Button>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};
