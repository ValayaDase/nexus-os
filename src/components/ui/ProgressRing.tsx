import React from 'react';
import { cn } from '../../lib/cn';

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  showValue?: boolean;
  label?: string;
  className?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 90,
  strokeWidth = 8,
  color = '#7C3AED',
  bgColor = '#F4F4F5',
  showValue = true,
  label,
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, progress)) / 100) * circumference;

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
          <span className="font-display font-bold text-zinc-900 leading-none" style={{ fontSize: size * 0.22 }}>
            {Math.round(progress)}%
          </span>
          {label && (
            <span className="text-[10px] text-zinc-500 font-medium mt-0.5 max-w-[80%] truncate">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
