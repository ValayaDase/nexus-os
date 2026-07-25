import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { CommandPalette } from '../shared/CommandPalette';
import { useAppStore } from '../../store/useAppStore';
import { cn } from '../../lib/cn';

export const AppLayout: React.FC = () => {
  const { sidebarCollapsed } = useAppStore();

  return (
    <div className="min-h-screen bg-zinc-50/50 flex text-zinc-900 font-sans antialiased">
      {/* Collapsible Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Stage */}
      <div
        className={cn(
          'flex-1 flex flex-col min-w-0 transition-all duration-300 ease-out',
          sidebarCollapsed ? 'pl-[72px]' : 'pl-[260px]'
        )}
      >
        <TopBar />
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Global Command Palette (⌘K) */}
      <CommandPalette />
    </div>
  );
};
