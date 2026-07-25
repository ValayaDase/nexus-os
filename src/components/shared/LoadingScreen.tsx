import React from 'react';

export const LoadingScreen: React.FC<{ message?: string }> = ({ message = 'Loading NexusOS...' }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-violet-500/30 animate-pulse">
          <span className="font-display font-bold text-2xl">N</span>
        </div>
        <div className="absolute -inset-2 rounded-3xl border-2 border-violet-500/30 border-t-violet-600 animate-spin" />
      </div>
      <p className="font-display font-medium text-zinc-800 text-sm animate-pulse">{message}</p>
    </div>
  );
};
