import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Button } from '../components/ui/Button';
import { Compass, Sparkles, Globe, Edit2, Check } from 'lucide-react';
import * as Icons from 'lucide-react';

export const Vision: React.FC = () => {
  const { vision, updateVision } = useAppStore();
  const [editing, setEditing] = useState(false);
  const [visionText, setVisionText] = useState(vision.vision);
  const [missionText, setMissionText] = useState(vision.mission);

  const handleSave = () => {
    updateVision({ vision: visionText, mission: missionText });
    setEditing(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Vision & Mission Workspace"
        subtitle="Define the core purpose, long-term direction, and foundational values driving your startup."
        badge="Strategy"
      >
        {editing ? (
          <Button variant="primary" size="sm" onClick={handleSave} icon={<Check className="w-4 h-4" />}>
            Save Changes
          </Button>
        ) : (
          <Button variant="outline" size="sm" onClick={() => setEditing(true)} icon={<Edit2 className="w-4 h-4" />}>
            Edit Vision Statement
          </Button>
        )}
      </PageHeader>

      {/* Hero Cards: Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Statement Card */}
        <SpotlightCard className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white p-8">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-semibold text-violet-200 uppercase tracking-widest">Our Vision</span>
          {editing ? (
            <textarea
              value={visionText}
              onChange={(e) => setVisionText(e.target.value)}
              className="w-full mt-3 p-3 rounded-xl bg-white/10 border border-white/20 text-white text-base focus:outline-none focus:ring-2 focus:ring-white"
              rows={4}
            />
          ) : (
            <p className="font-display font-bold text-xl md:text-2xl mt-3 leading-relaxed text-white">
              "{vision.vision}"
            </p>
          )}
        </SpotlightCard>

        {/* Mission Statement Card */}
        <SpotlightCard className="bg-white p-8 border-2 border-zinc-200">
          <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6 border border-violet-100">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Our Mission</span>
          {editing ? (
            <textarea
              value={missionText}
              onChange={(e) => setMissionText(e.target.value)}
              className="w-full mt-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-base focus:outline-none focus:ring-2 focus:ring-violet-500"
              rows={4}
            />
          ) : (
            <p className="font-display font-semibold text-lg md:text-xl mt-3 leading-relaxed text-zinc-800">
              "{vision.mission}"
            </p>
          )}
        </SpotlightCard>
      </div>

      {/* Strategic Pillars / Guiding Specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SpotlightCard className="bg-white p-6">
          <div className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-2">North Star Metric</div>
          <div className="font-display font-bold text-lg text-zinc-900">{vision.northStar}</div>
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">The single metric that best captures the core value we deliver to developers.</p>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6">
          <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Target Market</div>
          <div className="font-display font-bold text-base text-zinc-900">{vision.targetMarket}</div>
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">High-growth software companies shipping daily releases.</p>
        </SpotlightCard>

        <SpotlightCard className="bg-white p-6">
          <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">Unique Advantage</div>
          <div className="font-display font-bold text-base text-zinc-900">{vision.uniqueValue}</div>
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">Real-time local context indexing with zero latency.</p>
        </SpotlightCard>
      </div>

      {/* Core Company Values Grid */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-xl text-zinc-900">Core Cultural Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vision.values.map((val, idx) => {
            const IconComp = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[val.icon] || Globe;
            return (
              <SpotlightCard key={idx} className="bg-white p-6">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5 text-violet-600" />
                </div>
                <h4 className="font-display font-bold text-base text-zinc-900 mb-1">{val.title}</h4>
                <p className="text-xs text-zinc-600 leading-relaxed">{val.description}</p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
