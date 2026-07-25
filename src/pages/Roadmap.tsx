import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';
import type { RoadmapStatus } from '../types';
import { Plus, Filter, Calendar } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const { roadmap, updateRoadmapStatus } = useAppStore();
  const [filterPriority, setFilterPriority] = useState<string>('all');

  const columns: { id: RoadmapStatus; label: string; color: string; badgeColor: string }[] = [
    { id: 'backlog', label: 'Backlog', color: 'border-slate-600', badgeColor: 'bg-slate-800 text-slate-300' },
    { id: 'planned', label: 'Planned', color: 'border-purple-500', badgeColor: 'bg-purple-500/20 text-purple-300' },
    { id: 'in_progress', label: 'In Progress', color: 'border-blue-500', badgeColor: 'bg-blue-500/20 text-blue-300' },
    { id: 'done', label: 'Done', color: 'border-emerald-500', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
  ];

  const filteredRoadmap = filterPriority === 'all'
    ? roadmap
    : roadmap.filter((r) => r.priority === filterPriority);

  return (
    <div className="space-y-8 animate-fade-in text-slate-100">
      <PageHeader
        title="Product Roadmap"
        subtitle="Manage feature requests, sprint releases, and engineering architecture across Kanban stages."
        badge="Engineering"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-input text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="bg-transparent border-none outline-none text-white font-medium cursor-pointer"
            >
              <option value="all" className="bg-slate-900 text-white">All Priorities</option>
              <option value="critical" className="bg-slate-900 text-white">Critical</option>
              <option value="high" className="bg-slate-900 text-white">High</option>
              <option value="medium" className="bg-slate-900 text-white">Medium</option>
              <option value="low" className="bg-slate-900 text-white">Low</option>
            </select>
          </div>

          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            Add Feature
          </Button>
        </div>
      </PageHeader>

      {/* Kanban Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((col) => {
          const colItems = filteredRoadmap.filter((item) => item.status === col.id);

          return (
            <div key={col.id} className="space-y-4">
              {/* Column Header */}
              <div className={`flex items-center justify-between pb-3 border-b-2 ${col.color}`}>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-sm text-white capitalize">{col.label}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${col.badgeColor}`}>
                    {colItems.length}
                  </span>
                </div>
              </div>

              {/* Column Items */}
              <div className="space-y-3 min-h-[400px]">
                {colItems.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400 border border-dashed border-white/10 rounded-2xl bg-white/5">
                    No features in {col.label}
                  </div>
                ) : (
                  colItems.map((item) => (
                    <SpotlightCard key={item.id} className="glass-card p-4 space-y-3 cursor-grab active:cursor-grabbing">
                      <div className="flex items-start justify-between gap-2">
                        <Badge variant="priority" statusKey={item.priority} size="sm" />
                        <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                          <Calendar className="w-3 h-3" />
                          {item.dueDate.slice(5)}
                        </span>
                      </div>

                      <h4 className="font-display font-semibold text-sm text-white leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{item.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] font-medium border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer Assignee & Status Quick Switch */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <Avatar name={item.assignee} size="sm" />
                        <select
                          value={item.status}
                          onChange={(e) => updateRoadmapStatus(item.id, e.target.value as RoadmapStatus)}
                          className="text-[11px] font-medium bg-slate-950/60 border border-white/15 rounded-lg px-2 py-1 text-slate-200 cursor-pointer outline-none"
                        >
                          <option value="backlog" className="bg-slate-900 text-white">Backlog</option>
                          <option value="planned" className="bg-slate-900 text-white">Planned</option>
                          <option value="in_progress" className="bg-slate-900 text-white">In Progress</option>
                          <option value="done" className="bg-slate-900 text-white">Done</option>
                        </select>
                      </div>
                    </SpotlightCard>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
