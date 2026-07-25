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
        'spotlight-card rounded-2xl border transition-all duration-300 ease-out p-5 relative overflow-hidden will-change-transform',
        glass
          ? 'glass-card'
          : 'bg-slate-900/60 backdrop-blur-xl border-white/10 shadow-xl',
        hoverLift && 'hover:-translate-y-1.5 hover:shadow-2xl hover:border-indigo-500/40',
        className
      )}
      style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
