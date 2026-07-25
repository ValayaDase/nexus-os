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
          ? 'glass-card border-white/60 shadow-lg shadow-violet-950/5 hover:border-violet-400/40 hover:shadow-violet-500/10'
          : 'bg-white/80 backdrop-blur-md border-zinc-200/80 shadow-card hover:border-zinc-300',
        hoverLift && 'hover:-translate-y-1',
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
