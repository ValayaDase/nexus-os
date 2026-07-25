import React from 'react';
import { Button } from '../ui/Button';
import { FolderOpen } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No items found',
  description = 'There are currently no items in this view. Create your first item to get started.',
  actionText,
  onAction,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white/60 border border-zinc-200/80 rounded-2xl backdrop-blur-sm shadow-xs my-6">
      <div className="w-16 h-16 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100 shadow-xs">
        {icon || <FolderOpen className="w-8 h-8" />}
      </div>
      <h3 className="font-display font-semibold text-lg text-zinc-900 mb-1">{title}</h3>
      <p className="text-sm text-zinc-500 max-w-md mb-6">{description}</p>
      {actionText && onAction && (
        <Button onClick={onAction} variant="primary" magnetic>
          {actionText}
        </Button>
      )}
    </div>
  );
};
