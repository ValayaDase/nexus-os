import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { HeartPulse, CheckCircle2 } from 'lucide-react';

export const Health: React.FC = () => {
  const { company } = useAppStore();

  const healthData = [
    { subject: 'Growth Rate', A: 88, fullMark: 100 },
    { subject: 'Retention', A: 75, fullMark: 100 },
    { subject: 'Team Velocity', A: 92, fullMark: 100 },
    { subject: 'Runway Safety', A: 85, fullMark: 100 },
    { subject: 'Product PMF', A: 78, fullMark: 100 },
    { subject: 'Financial Health', A: 82, fullMark: 100 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Business Health & Startup Score"
        subtitle="Holistic diagnosis of startup operational health across growth, retention, runway, velocity, and PMF."
        badge={`Score: ${company.health_score} / 100`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Startup Score Hero */}
        <SpotlightCard className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-violet-200 text-xs font-semibold uppercase tracking-wider">
              <HeartPulse className="w-4 h-4 text-violet-300" />
              <span>Overall Health Grade</span>
            </div>
            <div className="font-display font-bold text-6xl text-white mt-4">
              <AnimatedCounter value={company.health_score} />
              <span className="text-xl text-violet-200">/100</span>
            </div>
            <div className="mt-2 text-xs font-semibold text-emerald-300 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Grade A — Top 5% Seed Startup
            </div>
          </div>

          <p className="text-xs text-violet-100 mt-6 leading-relaxed">
            Calculated automatically from your live financial metrics, retention curves, OKR velocity, and runway data.
          </p>
        </SpotlightCard>

        {/* Radar Chart */}
        <SpotlightCard className="lg:col-span-2 bg-white p-6 space-y-4">
          <h3 className="font-display font-bold text-lg text-zinc-900">Health Radar Metrics</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={healthData}>
                <PolarGrid stroke="#E4E4E7" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#71717A' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10, fill: '#A1A1AA' }} />
                <Radar name="Startup Score" dataKey="A" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};
