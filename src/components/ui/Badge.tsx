import React from 'react';
import { cn } from '../../lib/cn';
import { getStatusColor, getPriorityColor } from '../../lib/formatters';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'status' | 'priority' | 'default' | 'violet' | 'emerald' | 'amber' | 'blue' | 'zinc';
  statusKey?: string;
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  statusKey,
  size = 'md',
  dot = false,
  children,
  ...props
}) => {
  let styleClasses = 'bg-zinc-100 text-zinc-700 border-zinc-200';

  if (variant === 'status' && statusKey) {
    styleClasses = getStatusColor(statusKey);
  } else if (variant === 'priority' && statusKey) {
    styleClasses = getPriorityColor(statusKey);
  } else if (variant === 'violet') {
    styleClasses = 'bg-violet-50 text-violet-700 border-violet-200/80';
  } else if (variant === 'emerald') {
    styleClasses = 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
  } else if (variant === 'amber') {
    styleClasses = 'bg-amber-50 text-amber-700 border-amber-200/80';
  } else if (variant === 'blue') {
    styleClasses = 'bg-blue-50 text-blue-700 border-blue-200/80';
  } else if (variant === 'zinc') {
    styleClasses = 'bg-zinc-100 text-zinc-700 border-zinc-200';
  }

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium border rounded-full gap-1.5 transition-colors capitalize',
        styleClasses,
        sizeClasses,
        className
      )}
      {...props}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
      {children || (statusKey ? statusKey.replace('_', ' ') : null)}
    </span>
  );
};
