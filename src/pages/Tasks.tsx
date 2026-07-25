import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PageHeader } from '../components/layout/PageHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';
import type { TaskStatus } from '../types';
import { Plus, Trash2, LayoutGrid, List } from 'lucide-react';

export const Tasks: React.FC = () => {
  const { tasks, updateTaskStatus, deleteTask, addTask } = useAppStore();
  const [viewMode, setViewMode] = useState<'board' | 'list'>('board');
  const [showNewModal, setShowNewModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newProject, setNewProject] = useState('Product');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addTask({
      id: `task-${Date.now()}`,
      title: newTitle,
      description: 'Newly created task item.',
      status: 'todo',
      priority: 'medium',
      assignee: 'Arjun Mehta',
      dueDate: '2026-08-15',
      project: newProject,
      tags: [newProject],
      createdAt: new Date().toISOString().split('T')[0],
    });

    setNewTitle('');
    setShowNewModal(false);
  };

  const columns: { id: TaskStatus; label: string }[] = [
    { id: 'todo', label: 'To Do' },
    { id: 'in_progress', label: 'In Progress' },
    { id: 'review', label: 'Review' },
    { id: 'done', label: 'Done' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <PageHeader
        title="Task & Project Management"
        subtitle="Manage daily operational tasks, sprint backlog, and cross-team deliverables."
        badge={`${tasks.length} Tasks`}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-zinc-200 rounded-xl p-1">
            <button
              onClick={() => setViewMode('board')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'board' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-400'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'list' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-400'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <Button variant="primary" size="sm" onClick={() => setShowNewModal(true)} icon={<Plus className="w-4 h-4" />}>
            New Task
          </Button>
        </div>
      </PageHeader>

      {/* New Task Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md border border-zinc-200 shadow-2xl space-y-4 animate-scale-in">
            <h3 className="font-display font-bold text-lg text-zinc-900">Create New Task</h3>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-700 block mb-1">Task Title</label>
                <input
                  type="text"
                  placeholder="e.g. Redesign billing checkout page"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
                  autoFocus
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-zinc-700 block mb-1">Project</label>
                <select
                  value={newProject}
                  onChange={(e) => setNewProject(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="Product">Product</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <Button type="button" variant="outline" size="sm" onClick={() => setShowNewModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Create Task
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Board View */}
      {viewMode === 'board' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((col) => {
            const colTasks = tasks.filter((t) => t.status === col.id);

            return (
              <div key={col.id} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b-2 border-zinc-200">
                  <h3 className="font-display font-bold text-sm text-zinc-900">{col.label}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold">
                    {colTasks.length}
                  </span>
                </div>

                <div className="space-y-3 min-h-[400px]">
                  {colTasks.map((task) => (
                    <SpotlightCard key={task.id} className="bg-white p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="priority" statusKey={task.priority} size="sm" />
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="font-display font-semibold text-sm text-zinc-900 leading-snug">{task.title}</h4>
                      <p className="text-xs text-zinc-500 line-clamp-2">{task.description}</p>

                      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <Avatar name={task.assignee} size="sm" />
                        <select
                          value={task.status}
                          onChange={(e) => updateTaskStatus(task.id, e.target.value as TaskStatus)}
                          className="text-[11px] font-medium bg-zinc-100 border border-zinc-200 rounded-lg px-2 py-1 text-zinc-700 outline-none cursor-pointer"
                        >
                          <option value="todo">To Do</option>
                          <option value="in_progress">In Progress</option>
                          <option value="review">Review</option>
                          <option value="done">Done</option>
                        </select>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* List View */
        <SpotlightCard className="bg-white p-6 divide-y divide-zinc-100">
          {tasks.map((task) => (
            <div key={task.id} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.status === 'done'}
                  onChange={(e) => updateTaskStatus(task.id, e.target.checked ? 'done' : 'in_progress')}
                  className="w-4 h-4 text-violet-600 rounded cursor-pointer"
                />
                <div>
                  <div className={`text-sm font-semibold text-zinc-900 ${task.status === 'done' ? 'line-through text-zinc-400' : ''}`}>
                    {task.title}
                  </div>
                  <div className="text-xs text-zinc-500">{task.project} • Due {task.dueDate}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="priority" statusKey={task.priority} size="sm" />
                <Avatar name={task.assignee} size="sm" />
              </div>
            </div>
          ))}
        </SpotlightCard>
      )}
    </div>
  );
};
