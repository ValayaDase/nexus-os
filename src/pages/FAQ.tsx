import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { mockFAQs } from '../data/mockMisc';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq1');

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <PageHeader title="Frequently Asked Questions" subtitle="Quick answers to common questions regarding NexusOS features and security." />

      <div className="space-y-4">
        {mockFAQs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <SpotlightCard key={faq.id} className="bg-white p-6 transition-all">
              <div
                className="flex items-center justify-between cursor-pointer select-none"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-violet-50 text-violet-600">
                    <HelpCircle className="w-4 h-4" />
                  </span>
                  <h3 className="font-display font-bold text-base text-zinc-900">{faq.question}</h3>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
              </div>

              {isOpen && (
                <div className="mt-4 pt-4 border-t border-zinc-100 text-xs text-zinc-600 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
};
