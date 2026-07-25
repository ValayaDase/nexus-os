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
  let styleClasses = 'bg-white/10 text-slate-200 border-white/15 backdrop-blur-md';

  if (variant === 'status' && statusKey) {
    styleClasses = getStatusColor(statusKey);
  } else if (variant === 'priority' && statusKey) {
    styleClasses = getPriorityColor(statusKey);
  } else if (variant === 'violet') {
    styleClasses = 'bg-purple-500/20 text-purple-300 border-purple-500/30 backdrop-blur-md';
  } else if (variant === 'emerald') {
    styleClasses = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 backdrop-blur-md';
  } else if (variant === 'amber') {
    styleClasses = 'bg-amber-500/20 text-amber-300 border-amber-500/30 backdrop-blur-md';
  } else if (variant === 'blue') {
    styleClasses = 'bg-blue-500/20 text-blue-300 border-blue-500/30 backdrop-blur-md';
  } else if (variant === 'zinc') {
    styleClasses = 'bg-white/10 text-slate-200 border-white/15 backdrop-blur-md';
  }

  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium border rounded-full gap-1.5 transition-colors capitalize shadow-2xs',
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
