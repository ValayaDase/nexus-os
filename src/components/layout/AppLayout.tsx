import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { CommandPalette } from '../shared/CommandPalette';
import { useAppStore } from '../../store/useAppStore';

export const AppLayout: React.FC = () => {
  const { sidebarCollapsed } = useAppStore();
  const sidebarWidth = sidebarCollapsed ? 72 : 260;

  return (
    <div className="min-h-screen bg-slate-50/80 text-zinc-900 font-sans antialiased relative overflow-hidden">
      {/* Ambient Glassmorphism Mesh Gradients in Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-violet-400/20 via-purple-300/15 to-transparent blur-[120px] animate-pulse-ring" />
        <div className="absolute top-[30%] -right-[15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tl from-indigo-400/20 via-sky-300/15 to-transparent blur-[140px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-fuchsia-400/15 via-violet-300/10 to-transparent blur-[150px]" />
      </div>

      {/* Fixed Translucent Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div
        style={{ marginLeft: `${sidebarWidth}px` }}
        className="flex flex-col min-h-screen relative z-10 transition-all duration-300 ease-out"
      >
        {/* Glass Sticky Top Bar */}
        <TopBar />

        {/* Page Content Container */}
        <main className="flex-1 p-6 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Global Command Palette (⌘K) */}
      <CommandPalette />
    </div>
  );
};
