import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';
import type { HiringStage } from '../types';
import { Star, Plus } from 'lucide-react';

export const Hiring: React.FC = () => {
  const { candidates, updateCandidateStage } = useAppStore();

  const stages: { id: HiringStage; label: string; color: string }[] = [
    { id: 'applied', label: 'Applied', color: 'border-zinc-300' },
    { id: 'screening', label: 'Screening', color: 'border-amber-300' },
    { id: 'interview', label: 'Interview', color: 'border-blue-400' },
    { id: 'offer', label: 'Offer', color: 'border-violet-400' },
    { id: 'hired', label: 'Hired', color: 'border-emerald-400' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Hiring Pipeline (ATS)"
        subtitle="Manage job candidates, interview stages, ratings, and recruitment velocity."
        badge="Recruiting"
      >
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
          Add Candidate
        </Button>
      </PageHeader>

      {/* ATS Pipeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stages.map((stage) => {
          const stageCandidates = candidates.filter((c) => c.stage === stage.id);

          return (
            <div key={stage.id} className="space-y-4">
              <div className={`flex items-center justify-between pb-3 border-b-2 ${stage.color}`}>
                <h3 className="font-display font-bold text-xs text-zinc-900 uppercase tracking-wider">{stage.label}</h3>
                <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold">
                  {stageCandidates.length}
                </span>
              </div>

              <div className="space-y-3 min-h-[400px]">
                {stageCandidates.map((candidate) => (
                  <SpotlightCard key={candidate.id} className="bg-white p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={candidate.name} size="md" />
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-xs text-zinc-900 truncate">{candidate.name}</h4>
                        <p className="text-[11px] text-zinc-500 truncate">{candidate.role}</p>
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-600 space-y-1">
                      <div className="flex items-center justify-between">
                        <span>Experience:</span>
                        <span className="font-semibold text-zinc-800">{candidate.experience}</span>
                      </div>
                      {candidate.rating > 0 && (
                        <div className="flex items-center justify-between">
                          <span>Rating:</span>
                          <span className="flex items-center gap-1 font-semibold text-amber-600">
                            <Star className="w-3 h-3 fill-amber-500" /> {candidate.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Stage Switcher */}
                    <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-[10px] text-zinc-400">{candidate.source}</span>
                      <select
                        value={candidate.stage}
                        onChange={(e) => updateCandidateStage(candidate.id, e.target.value as HiringStage)}
                        className="text-[10px] font-medium bg-zinc-100 border border-zinc-200 rounded px-1.5 py-0.5 text-zinc-700 outline-none cursor-pointer"
                      >
                        <option value="applied">Applied</option>
                        <option value="screening">Screening</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                        <option value="hired">Hired</option>
                      </select>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
