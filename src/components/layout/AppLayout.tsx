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
    <div className="min-h-screen bg-[#070A12] text-slate-100 font-sans antialiased relative overflow-hidden p-3 md:p-6 flex items-center justify-center">
      {/* Ambient macOS Wallpaper Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Right Vivid Violet-Magenta Glow */}
        <div className="absolute -top-[10%] -right-[5%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-rose-500/30 via-fuchsia-600/30 to-purple-800/20 blur-[130px] animate-pulse-ring" />
        {/* Top-Left Deep Indigo Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-violet-700/30 via-indigo-600/25 to-blue-900/20 blur-[140px]" />
        {/* Bottom-Right Electric Blue Glow */}
        <div className="absolute -bottom-[15%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-sky-500/25 via-blue-600/20 to-indigo-900/15 blur-[150px]" />
        {/* Bottom-Left Coral Warmth Glow */}
        <div className="absolute -bottom-[20%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-orange-600/20 via-pink-600/20 to-transparent blur-[140px]" />
      </div>

      {/* Main macOS Application Window Container */}
      <div className="w-full max-w-[1600px] min-h-[92vh] macos-window-glass rounded-3xl relative z-10 flex flex-col overflow-hidden border border-white/10 shadow-2xl">
        {/* macOS Window Title Bar with Traffic Light Dots */}
        <div className="h-10 bg-slate-950/40 border-b border-white/10 px-4 flex items-center justify-between select-none shrink-0 backdrop-blur-md">
          {/* Traffic Light Control Dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors shadow-xs shadow-rose-500/50 cursor-pointer" title="Close" />
            <div className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors shadow-xs shadow-amber-500/50 cursor-pointer" title="Minimize" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors shadow-xs shadow-emerald-500/50 cursor-pointer" title="Expand" />
          </div>

          {/* Window Title */}
          <div className="text-xs font-semibold text-slate-400 tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>NexusOS — Founder Operating System v1.0</span>
          </div>

          {/* Right Status */}
          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live Cloud Connected
            </span>
          </div>
        </div>

        {/* Inner Window Layout (Sidebar + Main Stage) */}
        <div className="flex-1 flex min-h-0 relative">
          {/* macOS Glass Sidebar */}
          <Sidebar />

          {/* Main Workspace Stage */}
          <div
            style={{ marginLeft: `${sidebarWidth}px` }}
            className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-out overflow-y-auto"
          >
            {/* Top Navigation Bar */}
            <TopBar />

            {/* Main Outlet View */}
            <main className="flex-1 p-6 md:p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      {/* Global Command Palette (⌘K) */}
      <CommandPalette />
    </div>
  );
};
