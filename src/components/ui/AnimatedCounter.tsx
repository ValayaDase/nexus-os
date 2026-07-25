import React from 'react';
import { useAnimatedCounter } from '../../hooks';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1200,
  className = '',
}) => {
  const count = useAnimatedCounter(value, duration);

  const formatted = decimals > 0 ? (count / Math.pow(10, decimals)).toFixed(decimals) : count.toLocaleString();

  return (
    <span className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
