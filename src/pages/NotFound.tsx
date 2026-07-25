import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6 animate-fade-in">
      <div className="w-20 h-20 rounded-3xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6 border border-violet-100 shadow-xl shadow-violet-500/10">
        <AlertCircle className="w-10 h-10" />
      </div>
      <h1 className="font-display font-bold text-6xl text-zinc-900 mb-2">404</h1>
      <h2 className="font-display font-semibold text-xl text-zinc-800 mb-3">Page Not Found</h2>
      <p className="text-sm text-zinc-500 max-w-md mb-8">
        The workspace module or route you are looking for does not exist or has been moved.
      </p>
      <NavLink to="/dashboard">
        <Button variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
          Back to Dashboard
        </Button>
      </NavLink>
    </div>
  );
};
