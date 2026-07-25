// ============================================================
// NexusOS — Formatting Utilities
// ============================================================

export function formatCurrency(value: number, compact = false): string {
  if (compact) {
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number, compact = false): string {
  if (compact) {
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  }
  return new Intl.NumberFormat('en-US').format(value);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatRelativeDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHrs = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHrs < 24) return `${diffHrs}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateStr);
}

export function formatTime(timeStr: string): string {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    on_track: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30 backdrop-blur-md',
    at_risk: 'text-amber-300 bg-amber-500/20 border-amber-500/30 backdrop-blur-md',
    behind: 'text-rose-400 bg-rose-500/20 border-rose-500/30 backdrop-blur-md',
    completed: 'text-purple-300 bg-purple-500/20 border-purple-500/30 backdrop-blur-md',
    active: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30 backdrop-blur-md',
    away: 'text-amber-300 bg-amber-500/20 border-amber-500/30 backdrop-blur-md',
    busy: 'text-rose-400 bg-rose-500/20 border-rose-500/30 backdrop-blur-md',
    done: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30 backdrop-blur-md',
    in_progress: 'text-blue-400 bg-blue-500/20 border-blue-500/30 backdrop-blur-md',
    planned: 'text-purple-300 bg-purple-500/20 border-purple-500/30 backdrop-blur-md',
    backlog: 'text-slate-300 bg-white/10 border-white/15 backdrop-blur-md',
    todo: 'text-slate-300 bg-white/10 border-white/15 backdrop-blur-md',
    review: 'text-amber-300 bg-amber-500/20 border-amber-500/30 backdrop-blur-md',
  };
  return colors[status] || 'text-slate-300 bg-white/10 border-white/15 backdrop-blur-md';
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    critical: 'text-rose-400 bg-rose-500/20 border-rose-500/30 backdrop-blur-md',
    high: 'text-amber-400 bg-amber-500/20 border-amber-500/30 backdrop-blur-md',
    medium: 'text-blue-400 bg-blue-500/20 border-blue-500/30 backdrop-blur-md',
    low: 'text-slate-300 bg-white/10 border-white/15 backdrop-blur-md',
  };
  return colors[priority] || 'text-slate-300 bg-white/10 border-white/15 backdrop-blur-md';
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}
