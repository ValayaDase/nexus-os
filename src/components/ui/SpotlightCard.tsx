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
  glass = false,
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
          ? 'glass border-white/40 shadow-sm'
          : 'bg-white border-zinc-200/80 shadow-card hover:border-zinc-300',
        hoverLift && 'hover:-translate-y-1 hover:shadow-card-hover',
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
