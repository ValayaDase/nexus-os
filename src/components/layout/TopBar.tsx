import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../../store/useAppStore';
import { Avatar } from '../ui/Avatar';
import { Search, Bell, Sparkles, Command, ExternalLink } from 'lucide-react';
import { formatRelativeDate } from '../../lib/formatters';

export const TopBar: React.FC = () => {
  const location = useLocation();
  const { notifications, markNotificationRead, markAllNotificationsRead, profile, setCommandPaletteOpen } = useAppStore();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Quick navigation tabs for macOS header
  const quickTabs = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'OKRs', path: '/okrs' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Tasks', path: '/tasks' },
    { label: 'Investors', path: '/investors' },
    { label: 'Financials', path: '/financials' },
  ];

  return (
    <header className="h-14 bg-slate-950/30 backdrop-blur-2xl border-b border-white/10 sticky top-0 z-20 px-6 flex items-center justify-between">
      {/* Left: macOS Navigation Tabs */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5">
          {quickTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white/15 text-white shadow-xs border border-white/15'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Right: Actions (Search, AI Insights, Notifications, Profile) */}
      <div className="flex items-center gap-3">
        {/* Global Search Button (⌘K) */}
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-3 px-3.5 py-1.5 rounded-full glass-input text-slate-400 text-xs transition-all shadow-xs group"
        >
          <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200" />
          <span className="hidden sm:inline">Search workspace...</span>
          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-white/10 text-[10px] text-slate-300 font-mono border border-white/10">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </div>
        </button>

        {/* AI Assistant Quick Trigger */}
        <NavLink
          to="/ai-insights"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 text-xs font-medium transition-all border border-indigo-500/30 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">AI Insights</span>
        </NavLink>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileOpen(false);
            }}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500 ring-2 ring-slate-900 animate-pulse" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 glass-card p-0 overflow-hidden z-40 animate-scale-in">
              <div className="p-3.5 border-b border-white/10 flex items-center justify-between bg-slate-950/40">
                <div className="flex items-center gap-2">
                  <span className="font-display font-semibold text-sm text-white">Notifications</span>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-semibold border border-blue-500/30">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsRead}
                    className="text-xs text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-white/5">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400">No notifications</div>
                ) : (
                  notifications.slice(0, 6).map((n) => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationRead(n.id)}
                      className={`p-3.5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3 ${
                        !n.read ? 'bg-indigo-500/10' : ''
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0 opacity-90 shadow-xs shadow-blue-400" />
                      <div className="flex-1 text-xs">
                        <div className="font-semibold text-white flex items-center justify-between">
                          <span>{n.title}</span>
                          <span className="text-[10px] text-slate-400 font-normal">
                            {formatRelativeDate(n.timestamp)}
                          </span>
                        </div>
                        <p className="text-slate-300 mt-0.5 leading-relaxed">{n.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-2 bg-slate-950/40 border-t border-white/10 text-center">
                <NavLink
                  to="/notifications"
                  onClick={() => setNotificationsOpen(false)}
                  className="text-xs font-medium text-blue-400 hover:text-blue-300 block py-1"
                >
                  View all notifications
                </NavLink>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationsOpen(false);
            }}
            className="flex items-center gap-2 p-0.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <Avatar name={profile.name} size="sm" status="active" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-64 glass-card p-2 z-40 animate-scale-in">
              <div className="p-3 border-b border-white/10 mb-1">
                <p className="font-display font-semibold text-sm text-white">{profile.name}</p>
                <p className="text-xs text-slate-400 truncate">{profile.email}</p>
                <span className="inline-block mt-1.5 px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[10px] font-semibold border border-blue-500/30">
                  {profile.role}
                </span>
              </div>
              <NavLink
                to="/profile"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white rounded-xl"
              >
                Profile & Account
              </NavLink>
              <NavLink
                to="/settings"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white rounded-xl"
              >
                Preferences & Theme
              </NavLink>
              <div className="my-1 border-t border-white/10" />
              <NavLink
                to="/"
                onClick={() => setProfileOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-xs font-medium text-blue-400 hover:bg-blue-500/10 rounded-xl"
              >
                <span>Landing Page</span>
                <ExternalLink className="w-3 h-3" />
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
