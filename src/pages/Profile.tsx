import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Avatar } from '../components/ui/Avatar';
import { Button } from '../components/ui/Button';
import { Save } from 'lucide-react';

export const Profile: React.FC = () => {
  const { profile, updateProfile } = useAppStore();
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, bio });
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <PageHeader title="User Profile" subtitle="Manage your founder profile details, bio, and account credentials." />

      <SpotlightCard className="bg-white p-8 space-y-6">
        <div className="flex items-center gap-6 pb-6 border-b border-zinc-100">
          <Avatar name={profile.name} size="xl" status="active" />
          <div>
            <h3 className="font-display font-bold text-2xl text-zinc-900">{profile.name}</h3>
            <p className="text-sm text-violet-700 font-semibold">{profile.role} at {profile.company}</p>
            <p className="text-xs text-zinc-400 mt-1">{profile.email}</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-zinc-700 block mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-700 block mb-1">Founder Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <Button type="submit" variant="primary" size="sm" icon={<Save className="w-4 h-4" />}>
            Save Profile
          </Button>
        </form>
      </SpotlightCard>
    </div>
  );
};
