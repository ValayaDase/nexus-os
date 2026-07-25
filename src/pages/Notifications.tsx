import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Button } from '../components/ui/Button';
import { formatRelativeDate } from '../lib/formatters';
import { Check, Info, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Notifications: React.FC = () => {
  const { notifications, markNotificationRead, markAllNotificationsRead } = useAppStore();

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <PageHeader
        title="Notification Center"
        subtitle="Real-time alerts regarding runway, investor updates, hiring offers, and OKR progress."
        badge={`${notifications.filter((n) => !n.read).length} Unread`}
      >
        <Button variant="outline" size="sm" onClick={markAllNotificationsRead} icon={<Check className="w-4 h-4" />}>
          Mark All as Read
        </Button>
      </PageHeader>

      <SpotlightCard className="bg-white p-6 divide-y divide-zinc-100">
        {notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => markNotificationRead(n.id)}
            className={`py-4 flex items-start gap-4 cursor-pointer transition-colors ${
              !n.read ? 'bg-violet-50/40 -mx-6 px-6' : ''
            }`}
          >
            <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
              n.type === 'success' ? 'bg-emerald-50 text-emerald-600' :
              n.type === 'warning' ? 'bg-amber-50 text-amber-600' :
              n.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-violet-50 text-violet-600'
            }`}>
              {n.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> :
               n.type === 'warning' ? <AlertTriangle className="w-4 h-4" /> :
               n.type === 'error' ? <ShieldAlert className="w-4 h-4" /> : <Info className="w-4 h-4" />}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-semibold text-sm text-zinc-900">{n.title}</h4>
                <span className="text-xs text-zinc-400 font-mono">{formatRelativeDate(n.timestamp)}</span>
              </div>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{n.message}</p>
            </div>
          </div>
        ))}
      </SpotlightCard>
    </div>
  );
};
