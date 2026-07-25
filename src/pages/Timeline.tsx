import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Badge } from '../components/ui/Badge';
import { Flag } from 'lucide-react';
import * as Icons from 'lucide-react';

export const Timeline: React.FC = () => {
  const { timeline } = useAppStore();

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <PageHeader
        title="Startup Journey Timeline"
        subtitle="Historical key milestones, funding rounds, product launches, and future expansion targets."
        badge="History & Future"
      />

      {/* Vertical Timeline */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-violet-200 space-y-8">
        {timeline.map((item) => {
          const IconComp = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[item.icon] || Flag;

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Dot Marker */}
              <div className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                item.completed
                  ? 'bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/30'
                  : 'bg-white border-zinc-300 text-zinc-400'
              }`}>
                <IconComp className="w-3 h-3" />
              </div>

              {/* Event Content Card */}
              <SpotlightCard className="bg-white p-6">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-mono font-semibold text-violet-600">{item.date}</span>
                  <Badge variant={item.completed ? 'emerald' : 'zinc'}>
                    {item.completed ? 'Completed' : 'Planned'}
                  </Badge>
                </div>

                <h3 className="font-display font-bold text-lg text-zinc-900">{item.title}</h3>
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{item.description}</p>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
