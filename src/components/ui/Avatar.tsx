import React from 'react';
import { cn } from '../../lib/cn';
import { getInitials } from '../../lib/formatters';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'active' | 'away' | 'busy';
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  src,
  size = 'md',
  status,
  className,
  ...props
}) => {
  const sizes = {
    sm: 'w-7 h-7 text-[11px]',
    md: 'w-9 h-9 text-xs',
    lg: 'w-11 h-11 text-sm',
    xl: 'w-14 h-14 text-base font-semibold',
  };

  const statusColors = {
    active: 'bg-emerald-500',
    away: 'bg-amber-500',
    busy: 'bg-red-500',
  };

  const initials = getInitials(name);
  const colorIndex = (name.charCodeAt(0) + (name.charCodeAt(1) || 0)) % 5;
  const bgGradients = [
    'from-violet-500 to-indigo-600',
    'from-blue-500 to-cyan-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-pink-600',
  ];

  return (
    <div className={cn('relative inline-flex shrink-0', className)} {...props}>
      {src ? (
        <img
          src={src}
          alt={name}
          className={cn('rounded-full object-cover border border-zinc-200/80 shadow-xs', sizes[size])}
        />
      ) : (
        <div
          className={cn(
            'rounded-full bg-gradient-to-br text-white font-medium flex items-center justify-center border border-white/20 shadow-xs select-none',
            bgGradients[colorIndex],
            sizes[size]
          )}
        >
          {initials}
        </div>
      )}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full ring-2 ring-white',
            statusColors[status],
            size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-2.5 h-2.5' : 'w-3 h-3'
          )}
        />
      )}
    </div>
  );
};
