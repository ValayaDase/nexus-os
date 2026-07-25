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
        'fixed top-0 left-0 bottom-0 z-30 bg-white border-r border-zinc-200/80 flex flex-col transition-all duration-300 ease-out select-none shadow-xs',
        sidebarCollapsed ? 'w-[72px]' : 'w-[260px]'
      )}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-100">
        <NavLink to="/dashboard" className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-md shadow-violet-500/20 shrink-0">
            N
          </div>
          {!sidebarCollapsed && (
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-zinc-900 leading-none">
                NexusOS
              </span>
              <span className="text-[10px] text-zinc-400 font-medium mt-0.5 tracking-wide">
                FOUNDER OS v1.0
              </span>
            </div>
          )}
        </NavLink>
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors shrink-0"
          title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {Object.entries(groupedItems).map(([key, group]) => {
          if (group.items.length === 0) return null;
          return (
            <div key={key} className="space-y-1">
              {!sidebarCollapsed && group.label && (
                <div className="px-3 py-1 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
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
                      'flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 group relative',
                      isActive
                        ? 'bg-violet-50 text-violet-700 font-semibold shadow-xs border border-violet-100'
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                    )}
                    title={sidebarCollapsed ? item.label : undefined}
                  >
                    <IconComponent
                      className={cn(
                        'w-4 h-4 shrink-0 transition-colors',
                        isActive ? 'text-violet-600' : 'text-zinc-400 group-hover:text-zinc-700'
                      )}
                    />
                    {!sidebarCollapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                    {isActive && !sidebarCollapsed && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-600" />
                    )}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Upgrade Banner (Expanded mode) */}
      {!sidebarCollapsed && (
        <div className="p-3 mx-3 mb-3 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50/50 border border-violet-100 p-3.5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-violet-700 font-semibold text-xs">
            <Zap className="w-4 h-4 text-violet-600 fill-violet-600" />
            <span>Seed Round Status</span>
          </div>
          <p className="text-[11px] text-zinc-600 leading-tight">
            $2.4M / $3.0M committed (80% complete)
          </p>
          <div className="w-full h-1.5 bg-violet-200/60 rounded-full overflow-hidden">
            <div className="h-full bg-violet-600 rounded-full w-[80%]" />
          </div>
        </div>
      )}

      {/* Bottom Nav (Settings / Help) */}
      <div className="p-3 border-t border-zinc-100 space-y-1">
        {BOTTOM_NAV_ITEMS.map((item) => {
          const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[item.icon] || Icons.Circle;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50',
                isActive && 'bg-zinc-100 text-zinc-900'
              )}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <IconComponent className="w-4 h-4 text-zinc-400 shrink-0" />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};
