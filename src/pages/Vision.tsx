import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
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
    <div className="space-y-8 animate-fade-in text-slate-100">
      <PageHeader
        title="Vision & Mission Workspace"
        subtitle="Define the core purpose, long-term direction, and foundational values driving your startup."
        badge="Strategy"
      >
        {editing ? (
          <button onClick={handleSave} className="px-4 py-2 btn-mac-primary text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        ) : (
          <button onClick={() => setEditing(true)} className="px-4 py-2 btn-mac-secondary text-xs font-semibold flex items-center gap-2">
            <Edit2 className="w-4 h-4" />
            <span>Edit Vision Statement</span>
          </button>
        )}
      </PageHeader>

      {/* Hero Cards: Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Statement Card */}
        <SpotlightCard className="glass-card bg-gradient-to-br from-indigo-950/80 via-purple-950/80 to-slate-900/90 text-white p-8 border-indigo-500/40">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 backdrop-blur-md flex items-center justify-center mb-6 border border-indigo-500/30">
            <Compass className="w-6 h-6 text-indigo-400" />
          </div>
          <span className="text-xs font-semibold text-indigo-300 uppercase tracking-widest">Our Vision</span>
          {editing ? (
            <textarea
              value={visionText}
              onChange={(e) => setVisionText(e.target.value)}
              className="w-full mt-3 p-3 rounded-xl glass-input text-white text-base focus:outline-none"
              rows={4}
            />
          ) : (
            <p className="font-display font-bold text-xl md:text-2xl mt-3 leading-relaxed text-white">
              "{vision.vision}"
            </p>
          )}
        </SpotlightCard>

        {/* Mission Statement Card */}
        <SpotlightCard className="glass-card p-8 border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest">Our Mission</span>
          {editing ? (
            <textarea
              value={missionText}
              onChange={(e) => setMissionText(e.target.value)}
              className="w-full mt-3 p-3 rounded-xl glass-input text-white text-base focus:outline-none"
              rows={4}
            />
          ) : (
            <p className="font-display font-semibold text-lg md:text-xl mt-3 leading-relaxed text-slate-200">
              "{vision.mission}"
            </p>
          )}
        </SpotlightCard>
      </div>

      {/* Strategic Pillars / Guiding Specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SpotlightCard className="glass-card p-6">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">North Star Metric</div>
          <div className="font-display font-bold text-lg text-white">{vision.northStar}</div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">The single metric that best captures the core value we deliver to developers.</p>
        </SpotlightCard>

        <SpotlightCard className="glass-card p-6">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Target Market</div>
          <div className="font-display font-bold text-base text-white">{vision.targetMarket}</div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">High-growth software companies shipping daily releases.</p>
        </SpotlightCard>

        <SpotlightCard className="glass-card p-6">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Unique Advantage</div>
          <div className="font-display font-bold text-base text-white">{vision.uniqueValue}</div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">Real-time local context indexing with zero latency.</p>
        </SpotlightCard>
      </div>

      {/* Core Company Values Grid */}
      <div className="space-y-4">
        <h3 className="font-display font-bold text-xl text-white">Core Cultural Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vision.values.map((val, idx) => {
            const IconComp = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[val.icon] || Globe;
            return (
              <SpotlightCard key={idx} className="glass-card p-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4 border border-white/10">
                  <IconComp className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="font-display font-bold text-base text-white mb-1">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
