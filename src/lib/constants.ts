// ============================================================
// NexusOS — App Constants
// ============================================================

export const APP_NAME = 'NexusOS';
export const APP_TAGLINE = 'The Operating System for Founders';
export const APP_VERSION = '1.0.0';

export const STORAGE_KEY = 'nexus-os-state';

export const SIDEBAR_WIDTH = 260;
export const SIDEBAR_COLLAPSED_WIDTH = 72;
export const TOPBAR_HEIGHT = 64;

export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  page: 0.4,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const NAV_ITEMS = [
  { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard', group: 'main' },
  { label: 'Vision & Mission', path: '/vision', icon: 'Compass', group: 'strategy' },
  { label: 'OKRs', path: '/okrs', icon: 'Target', group: 'strategy' },
  { label: 'Roadmap', path: '/roadmap', icon: 'Map', group: 'execution' },
  { label: 'Timeline', path: '/timeline', icon: 'GitBranch', group: 'execution' },
  { label: 'Tasks', path: '/tasks', icon: 'CheckSquare', group: 'execution' },
  { label: 'Calendar', path: '/calendar', icon: 'Calendar', group: 'execution' },
  { label: 'Team', path: '/team', icon: 'Users', group: 'people' },
  { label: 'Hiring', path: '/hiring', icon: 'UserPlus', group: 'people' },
  { label: 'Investors', path: '/investors', icon: 'Briefcase', group: 'finance' },
  { label: 'Funding', path: '/funding', icon: 'PiggyBank', group: 'finance' },
  { label: 'Financials', path: '/financials', icon: 'TrendingUp', group: 'finance' },
  { label: 'Health', path: '/health', icon: 'Activity', group: 'finance' },
  { label: 'AI Insights', path: '/ai-insights', icon: 'Sparkles', group: 'intelligence' },
  { label: 'Reports', path: '/reports', icon: 'FileText', group: 'intelligence' },
  { label: 'Notifications', path: '/notifications', icon: 'Bell', group: 'intelligence' },
] as const;

export const NAV_GROUPS = {
  main: '',
  strategy: 'Strategy',
  execution: 'Execution',
  people: 'People',
  finance: 'Finance',
  intelligence: 'Intelligence',
} as const;

export const BOTTOM_NAV_ITEMS = [
  { label: 'Settings', path: '/settings', icon: 'Settings' },
  { label: 'Help', path: '/help', icon: 'HelpCircle' },
] as const;
