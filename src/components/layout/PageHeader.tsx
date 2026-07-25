import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-h2 text-white font-display font-bold tracking-tight">{title}</h1>
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30 backdrop-blur-md shadow-xs">
              {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
      {children && <div className="flex items-center gap-3 shrink-0">{children}</div>}
    </div>
  );
};
