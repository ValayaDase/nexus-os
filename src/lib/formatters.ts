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
    on_track: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    at_risk: 'text-amber-600 bg-amber-50 border-amber-200',
    behind: 'text-red-600 bg-red-50 border-red-200',
    completed: 'text-violet-600 bg-violet-50 border-violet-200',
    active: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    away: 'text-amber-600 bg-amber-50 border-amber-200',
    busy: 'text-red-600 bg-red-50 border-red-200',
    done: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    in_progress: 'text-blue-600 bg-blue-50 border-blue-200',
    planned: 'text-violet-600 bg-violet-50 border-violet-200',
    backlog: 'text-zinc-600 bg-zinc-50 border-zinc-200',
    todo: 'text-zinc-600 bg-zinc-50 border-zinc-200',
    review: 'text-amber-600 bg-amber-50 border-amber-200',
  };
  return colors[status] || 'text-zinc-600 bg-zinc-50 border-zinc-200';
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    critical: 'text-red-700 bg-red-50 border-red-200',
    high: 'text-orange-700 bg-orange-50 border-orange-200',
    medium: 'text-amber-700 bg-amber-50 border-amber-200',
    low: 'text-zinc-600 bg-zinc-50 border-zinc-200',
  };
  return colors[priority] || 'text-zinc-600 bg-zinc-50 border-zinc-200';
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}
