import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Button } from '../components/ui/Button';
import { Sun, RefreshCw } from 'lucide-react';

export const Settings: React.FC = () => {
  const { resetData } = useAppStore();

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <PageHeader title="App Settings & Preferences" subtitle="Customize design themes, data persistence, and application defaults." />

      <SpotlightCard className="bg-white p-8 space-y-6">
        <div className="space-y-4">
          <h3 className="font-display font-bold text-lg text-zinc-900">Design System Theme</h3>
          <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sun className="w-5 h-5 text-violet-600" />
              <div>
                <div className="text-sm font-bold text-zinc-900">Light Mode Primary (Apple Grade)</div>
                <div className="text-xs text-zinc-500">Optimized for high readability and visual contrast.</div>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-semibold">Active</span>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-100 space-y-4">
          <h3 className="font-display font-bold text-lg text-zinc-900">Data Management</h3>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-zinc-900">Reset Workspace Demo Data</div>
              <div className="text-xs text-zinc-500">Restore all initial mock datasets (OKRs, Roadmap, Financials, Investors).</div>
            </div>
            <Button variant="danger" size="sm" onClick={resetData} icon={<RefreshCw className="w-4 h-4" />}>
              Reset State
            </Button>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};
