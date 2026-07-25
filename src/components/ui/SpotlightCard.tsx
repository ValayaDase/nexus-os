import React from 'react';
import { cn } from '../../lib/cn';
import { useSpotlight } from '../../hooks';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hoverLift?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  glass = true,
  hoverLift = true,
  ...props
}) => {
  const { ref, handleMouseMove } = useSpotlight();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'spotlight-card rounded-2xl border transition-all duration-300 p-5 relative overflow-hidden',
        glass
          ? 'glass-card'
          : 'bg-slate-900/60 backdrop-blur-xl border-white/10 shadow-xl',
        hoverLift && 'hover:-translate-y-1',
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
