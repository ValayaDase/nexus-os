import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store/useAppStore';
import { NAV_ITEMS } from '../../lib/constants';
import { Search, X, Command, ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const navigate = useNavigate();
  const { commandPaletteOpen, setCommandPaletteOpen } = useAppStore();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
      if (e.key === 'Escape' && commandPaletteOpen) {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  if (!commandPaletteOpen) return null;

  const filteredItems = NAV_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    navigate(path);
    setCommandPaletteOpen(false);
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-md flex items-start justify-center pt-24 px-4 animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={() => setCommandPaletteOpen(false)}
      />
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden animate-scale-in z-10">
        <div className="flex items-center px-4 border-b border-zinc-100">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search modules... (e.g. Investors, Roadmap)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full px-3 py-4 text-sm bg-transparent border-none outline-none text-zinc-900 placeholder:text-zinc-400 font-sans"
          />
          <button
            onClick={() => setCommandPaletteOpen(false)}
            className="p-1.5 text-zinc-400 hover:text-zinc-600 rounded-lg hover:bg-zinc-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-zinc-500">
              No results found for "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                Navigation
              </div>
              {filteredItems.map((item) => {
                const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[item.icon] || Icons.FileText;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleSelect(item.path)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-zinc-700 hover:text-violet-600 hover:bg-violet-50/60 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-zinc-100 group-hover:bg-violet-100 text-zinc-600 group-hover:text-violet-600 transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-zinc-400 group-hover:text-violet-500">
                      <span>Jump to</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="px-4 py-3 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 bg-white border border-zinc-200 rounded text-[10px] font-mono shadow-xs">
              ESC
            </span>
            <span>to close</span>
          </div>
          <div className="flex items-center gap-1">
            <Command className="w-3 h-3" />
            <span>+ K</span>
          </div>
        </div>
      </div>
    </div>
  );
};
