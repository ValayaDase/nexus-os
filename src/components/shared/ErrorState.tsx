import React from 'react';
import { Button } from '../ui/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  description = 'An unexpected error occurred while loading this section. Please try refreshing.',
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-red-50/40 border border-red-200/80 rounded-2xl my-6">
      <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-4 border border-red-200">
        <AlertTriangle className="w-7 h-7" />
      </div>
      <h3 className="font-display font-semibold text-lg text-zinc-900 mb-1">{title}</h3>
      <p className="text-sm text-zinc-600 max-w-md mb-6">{description}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" icon={<RefreshCw className="w-4 h-4" />}>
          Try Again
        </Button>
      )}
    </div>
  );
};
