import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { mockHelpArticles } from '../data/mockMisc';
import { BookOpen, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export const HelpCenter: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      <PageHeader title="Help Center & Guides" subtitle="Documentation, tutorials, and guides to maximize your NexusOS workflow." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockHelpArticles.map((art) => {
          const IconComp = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[art.icon] || BookOpen;

          return (
            <SpotlightCard key={art.id} className="bg-white p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <IconComp className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-zinc-900">{art.title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{art.description}</p>
              <div className="pt-2 text-xs font-semibold text-violet-600 flex items-center gap-1 cursor-pointer">
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
};
