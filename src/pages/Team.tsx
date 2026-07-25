import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Avatar } from '../components/ui/Avatar';
import { Button } from '../components/ui/Button';
import { UserPlus } from 'lucide-react';

export const Team: React.FC = () => {
  const { team } = useAppStore();

  const departments = Array.from(new Set(team.map((t) => t.department)));

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Team Workspace & Directory"
        subtitle="Manage team members, roles, reporting structures, and organizational directory."
        badge={`${team.length} Team Members`}
      >
        <Button variant="primary" size="sm" icon={<UserPlus className="w-4 h-4" />}>
          Invite Member
        </Button>
      </PageHeader>

      {/* Leadership Spotlight */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-lg text-zinc-900">Founding Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.filter((t) => t.department === 'Leadership').map((member) => (
            <SpotlightCard key={member.id} className="bg-gradient-to-br from-violet-50 to-indigo-50/40 p-6 border border-violet-100">
              <div className="flex items-center gap-4">
                <Avatar name={member.name} size="lg" status={member.status} />
                <div>
                  <h4 className="font-display font-bold text-base text-zinc-900">{member.name}</h4>
                  <p className="text-xs text-violet-700 font-semibold">{member.role}</p>
                  <p className="text-[11px] text-zinc-500 mt-1">{member.email}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-violet-100 flex flex-wrap gap-1">
                {member.skills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-white text-violet-700 text-[10px] font-medium border border-violet-100">
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Department Grids */}
      {departments.filter((d) => d !== 'Leadership').map((dept) => {
        const deptMembers = team.filter((t) => t.department === dept);

        return (
          <div key={dept} className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
              <h3 className="font-display font-bold text-base text-zinc-900">{dept}</h3>
              <span className="text-xs text-zinc-400 font-medium">{deptMembers.length} Members</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deptMembers.map((member) => (
                <SpotlightCard key={member.id} className="bg-white p-6">
                  <div className="flex items-center gap-4">
                    <Avatar name={member.name} size="md" status={member.status} />
                    <div className="min-w-0">
                      <h4 className="font-display font-bold text-sm text-zinc-900 truncate">{member.name}</h4>
                      <p className="text-xs text-zinc-500 truncate">{member.role}</p>
                      <p className="text-[10px] text-zinc-400 mt-0.5">{member.email}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100 flex flex-wrap gap-1">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 text-[10px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
