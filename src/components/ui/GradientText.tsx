import React from 'react';
import { cn } from '../../lib/cn';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'violet' | 'warm' | 'emerald' | 'blue';
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  variant = 'violet',
  ...props
}) => {
  const variants = {
    violet: 'gradient-text',
    warm: 'gradient-text-warm',
    emerald: 'bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent',
    blue: 'bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent',
  };

  return (
    <span className={cn('inline-block font-display', variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
