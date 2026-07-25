import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/useAppStore';
import { NAV_ITEMS, BOTTOM_NAV_ITEMS, NAV_GROUPS } from '../../lib/constants';
import { cn } from '../../lib/cn';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import * as Icons from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { sidebarCollapsed, toggleSidebar } = useAppStore();
  const location = useLocation();

  // Group items by category
  const groupedItems = Object.entries(NAV_GROUPS).reduce((acc, [key, label]) => {
    acc[key] = {
      label,
      items: NAV_ITEMS.filter((item) => item.group === key),
    };
    return acc;
  }, {} as Record<string, { label: string; items: typeof NAV_ITEMS[number][] }>);

  return (
    <aside
      className={cn(
        'absolute top-0 left-0 bottom-0 z-30 macos-sidebar-glass flex flex-col transition-all duration-300 ease-out select-none',
        sidebarCollapsed ? 'w-[72px]' : 'w-[260px]'
      )}
    >
      {/* Brand / Workspace Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 bg-slate-950/20">
        <NavLink to="/dashboard" className="flex items-center gap-3 overflow-hidden">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-purple-500/25 shrink-0">
            N
          </div>
          {!sidebarCollapsed && (
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-white leading-none">
                NexusOS
              </span>
              <span className="text-[10px] text-slate-400 font-medium mt-0.5 tracking-wide">
                FOUNDER OS v1.0
              </span>
            </div>
          )}
        </NavLink>
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
        {Object.entries(groupedItems).map(([key, group]) => {
          if (group.items.length === 0) return null;
          return (
            <div key={key} className="space-y-1">
              {!sidebarCollapsed && group.label && (
                <div className="px-3 py-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  {group.label}
                </div>
              )}
              {group.items.map((item) => {
                const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[item.icon] || Icons.Circle;
                const isActive = location.pathname === item.path;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 group relative',
                      isActive
                        ? 'bg-white/12 text-white font-semibold shadow-inner border border-white/15 backdrop-blur-md'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                    )}
                    title={sidebarCollapsed ? item.label : undefined}
                  >
                    <IconComponent
                      className={cn(
                        'w-4 h-4 shrink-0 transition-colors',
                        isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'
                      )}
                    />
                    {!sidebarCollapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                    {isActive && !sidebarCollapsed && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow-xs shadow-blue-400" />
                    )}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Seed Status Glass Banner (Expanded mode) */}
      {!sidebarCollapsed && (
        <div className="p-3 mx-3 mb-3 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border border-white/10 backdrop-blur-md p-3.5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Seed Round Status</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-tight">
            $2.4M / $3.0M committed (80%)
          </p>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[80%]" />
          </div>
        </div>
      )}

      {/* Bottom Nav (Settings / Help) */}
      <div className="p-3 border-t border-white/10 space-y-1 bg-slate-950/20">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[item.icon] || Icons.Circle;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors text-slate-400 hover:text-slate-100 hover:bg-white/5',
                isActive && 'bg-white/10 text-white border border-white/10'
              )}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <IconComponent className="w-4 h-4 text-slate-400 shrink-0" />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};
