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

  // Breadcrumbs title
  const pathName = location.pathname.replace('/', '') || 'dashboard';
  const displayTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1).replace('-', ' ');

  return (
    <header className="h-16 bg-white/65 backdrop-blur-xl border-b border-white/60 sticky top-0 z-20 px-6 flex items-center justify-between shadow-xs">
      {/* Left: Breadcrumbs / Title */}
      <div className="flex items-center gap-3">
        <NavLink to="/dashboard" className="text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-colors">
          NexusOS
        </NavLink>
        <span className="text-zinc-300 text-xs">/</span>
        <span className="text-sm font-semibold text-zinc-900 font-display capitalize">
          {displayTitle}
        </span>
      </div>

      {/* Right: Actions (Search, Notifications, Profile) */}
      <div className="flex items-center gap-3">
        {/* Global Search Button (⌘K) */}
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-zinc-100/80 hover:bg-zinc-100 text-zinc-500 text-xs transition-all border border-zinc-200/60 shadow-2xs group"
        >
          <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600" />
          <span>Search or jump to...</span>
          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white text-[10px] text-zinc-400 font-mono border border-zinc-200 shadow-2xs">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </div>
        </button>

        {/* AI Assistant Quick Trigger */}
        <NavLink
          to="/ai-insights"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-50 text-violet-700 hover:bg-violet-100 text-xs font-medium transition-colors border border-violet-200/60"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-600" />
          <span>AI Insights</span>
        </NavLink>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileOpen(false);
            }}
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-600 ring-2 ring-white animate-pulse" />
            )}
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden z-40 animate-scale-in">
              <div className="p-3.5 border-b border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-display font-semibold text-sm text-zinc-900">Notifications</span>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 text-[10px] font-semibold">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsRead}
                    className="text-xs text-violet-600 hover:text-violet-700 font-medium"
                  >
                    Mark all read
                  </button>
                )}
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-zinc-50">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-xs text-zinc-400">No notifications</div>
                ) : (
                  notifications.slice(0, 6).map((n) => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationRead(n.id)}
                      className={`p-3.5 hover:bg-zinc-50 transition-colors cursor-pointer flex gap-3 ${
                        !n.read ? 'bg-violet-50/30' : ''
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-violet-600 mt-1.5 shrink-0 opacity-80" />
                      <div className="flex-1 text-xs">
                        <div className="font-semibold text-zinc-900 flex items-center justify-between">
                          <span>{n.title}</span>
                          <span className="text-[10px] text-zinc-400 font-normal">
                            {formatRelativeDate(n.timestamp)}
                          </span>
                        </div>
                        <p className="text-zinc-600 mt-0.5 leading-relaxed">{n.message}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-2 bg-zinc-50 border-t border-zinc-100 text-center">
                <NavLink
                  to="/notifications"
                  onClick={() => setNotificationsOpen(false)}
                  className="text-xs font-medium text-violet-600 hover:text-violet-700 block py-1"
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
            className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-zinc-100 transition-colors"
          >
            <Avatar name={profile.name} size="sm" status="active" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-zinc-200 p-2 z-40 animate-scale-in">
              <div className="p-3 border-b border-zinc-100 mb-1">
                <p className="font-display font-semibold text-sm text-zinc-900">{profile.name}</p>
                <p className="text-xs text-zinc-500 truncate">{profile.email}</p>
                <span className="inline-block mt-1.5 px-2 py-0.5 rounded-md bg-violet-50 text-violet-700 text-[10px] font-semibold border border-violet-100">
                  {profile.role}
                </span>
              </div>
              <NavLink
                to="/profile"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 rounded-xl"
              >
                Profile & Account
              </NavLink>
              <NavLink
                to="/settings"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 rounded-xl"
              >
                Preferences & Theme
              </NavLink>
              <div className="my-1 border-t border-zinc-100" />
              <NavLink
                to="/"
                onClick={() => setProfileOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-xs font-medium text-violet-600 hover:bg-violet-50 rounded-xl"
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
