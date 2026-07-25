import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Clock, MapPin, Plus, Video } from 'lucide-react';

export const CalendarPage: React.FC = () => {
  const { calendar } = useAppStore();

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Calendar & Meetings Workspace"
        subtitle="Schedule board meetings, investor pitches, team standups, and release deadlines."
        badge={`${calendar.length} Scheduled Events`}
      >
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
          Schedule Meeting
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events List */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-display font-bold text-lg text-zinc-900">Upcoming Events</h3>

          <div className="space-y-4">
            {calendar.map((evt) => (
              <SpotlightCard key={evt.id} className="bg-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-violet-50 text-violet-600 shrink-0 text-center w-14">
                    <div className="text-[10px] font-bold uppercase">{evt.date.slice(5, 7)}</div>
                    <div className="font-display font-bold text-xl leading-none mt-0.5">{evt.date.slice(8)}</div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-bold text-base text-zinc-900">{evt.title}</h4>
                      <Badge variant="violet" size="sm">{evt.type}</Badge>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">{evt.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-3 font-medium">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {evt.time} ({evt.duration})</span>
                      {evt.location && <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {evt.location}</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center">
                  <Button variant="outline" size="sm" icon={<Video className="w-3.5 h-3.5" />}>
                    Join Call
                  </Button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Mini Calendar View Widget */}
        <SpotlightCard className="bg-white p-6 h-fit space-y-4">
          <h3 className="font-display font-bold text-base text-zinc-900">July 2026</h3>
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-zinc-400">
            <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium">
            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              const isToday = day === 25;
              const hasEvent = [25, 28, 29, 30, 31].includes(day);

              return (
                <div
                  key={day}
                  className={`p-2 rounded-xl border transition-all ${
                    isToday ? 'bg-violet-600 text-white font-bold border-violet-600 shadow-sm' :
                    hasEvent ? 'bg-violet-50 text-violet-700 font-semibold border-violet-100' : 'bg-zinc-50 border-transparent text-zinc-700'
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
