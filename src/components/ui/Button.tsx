import React, { useRef } from 'react';
import { cn } from '../../lib/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      magnetic = false,
      icon,
      iconPosition = 'left',
      loading = false,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const buttonRef = (ref as React.RefObject<HTMLButtonElement>) || internalRef;

    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer rounded-xl';

    const variants = {
      primary:
        'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 border border-white/20',
      secondary:
        'bg-white/12 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md shadow-xs',
      outline:
        'bg-slate-900/40 hover:bg-white/15 text-slate-200 border border-white/15 backdrop-blur-md',
      ghost:
        'bg-transparent hover:bg-white/10 text-slate-400 hover:text-white',
      danger:
        'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-500/30 border border-white/20',
      success:
        'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/30 border border-white/20',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5 rounded-lg',
      md: 'text-sm px-4 py-2 gap-2 rounded-xl',
      lg: 'text-base px-6 py-3 gap-2.5 rounded-2xl font-semibold',
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      buttonRef.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };

    const handleMouseLeave = () => {
      if (!magnetic || !buttonRef.current) return;
      buttonRef.current.style.transform = 'translate(0px, 0px)';
    };

    return (
      <button
        ref={buttonRef}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {!loading && icon && iconPosition === 'left' ? icon : null}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' ? icon : null}
      </button>
    );
  }
);

Button.displayName = 'Button';
