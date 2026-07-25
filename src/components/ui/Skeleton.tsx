import React from 'react';
import { cn } from '../../lib/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'text',
  width,
  height,
  style,
  ...props
}) => {
  const variantStyles = {
    text: 'h-4 rounded-md',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
    card: 'h-32 rounded-2xl',
  };

  return (
    <div
      className={cn('skeleton', variantStyles[variant], className)}
      style={{
        width: width !== undefined ? width : undefined,
        height: height !== undefined ? height : undefined,
        ...style,
      }}
      {...props}
    />
  );
};
