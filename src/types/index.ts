// ============================================================
// NexusOS — Complete Type Definitions
// ============================================================

// ---- Company ----
export interface Company {
  name: string;
  tagline: string;
  founded: string;
  stage: string;
  runway_months: number;
  burn_rate: number;
  mrr: number;
  arr: number;
  total_raised: number;
  team_size: number;
  active_investors: number;
  nps_score: number;
  health_score: number;
  logo?: string;
}

// ---- OKRs ----
export type OKRStatus = 'on_track' | 'at_risk' | 'behind' | 'completed';

export interface KeyResult {
  id: string;
  title: string;
  progress: number;
  target: number;
  current: number;
  unit: string;
}

export interface OKR {
  id: string;
  objective: string;
  description: string;
  progress: number;
  status: OKRStatus;
  quarter: string;
  owner: string;
  keyResults: KeyResult[];
}

// ---- Roadmap ----
export type RoadmapStatus = 'backlog' | 'planned' | 'in_progress' | 'done';
export type Priority = 'low' | 'medium' | 'high' | 'critical';

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  priority: Priority;
  assignee: string;
  assigneeAvatar?: string;
  dueDate: string;
  tags: string[];
  progress: number;
}

// ---- Tasks ----
export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  assignee: string;
  assigneeAvatar?: string;
  dueDate: string;
  project: string;
  tags: string[];
  createdAt: string;
}

// ---- Team ----
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  avatar: string;
  status: 'active' | 'away' | 'busy';
  joinDate: string;
  skills: string[];
  reportsTo?: string;
}

// ---- Hiring ----
export type HiringStage = 'applied' | 'screening' | 'interview' | 'offer' | 'hired' | 'rejected';

export interface Candidate {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  stage: HiringStage;
  appliedDate: string;
  experience: string;
  skills: string[];
  rating: number;
  notes: string;
  source: string;
}

// ---- Investors ----
export type InvestorStage = 'lead' | 'contacted' | 'meeting' | 'due_diligence' | 'term_sheet' | 'committed' | 'passed';
export type InvestorType = 'Angel' | 'Seed' | 'Series A' | 'VC' | 'Strategic';

export interface Investor {
  id: string;
  name: string;
  firm: string;
  type: InvestorType;
  stage: InvestorStage;
  amount: string;
  amountNum: number;
  email: string;
  avatar: string;
  lastContact: string;
  notes: string;
  interested: boolean;
}

// ---- Financials ----
export interface MonthlyFinancial {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
  customers: number;
  churn: number;
  mrr: number;
  arr: number;
}

export interface FundingRound {
  id: string;
  name: string;
  amount: number;
  date: string;
  status: 'completed' | 'in_progress' | 'planned';
  investors: string[];
  valuation: number;
}

// ---- Calendar ----
export type EventType = 'meeting' | 'deadline' | 'review' | 'social' | 'pitch';

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  type: EventType;
  attendees: string[];
  location: string;
}

// ---- Notifications ----
export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'update';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  timestamp: string;
  link?: string;
  icon?: string;
}

// ---- AI Insights ----
export type InsightCategory = 'growth' | 'risk' | 'opportunity' | 'action' | 'prediction';

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  category: InsightCategory;
  confidence: number;
  impact: 'low' | 'medium' | 'high';
  suggestedAction: string;
  metric?: string;
  metricValue?: string;
  trend?: 'up' | 'down' | 'stable';
}

// ---- Vision ----
export interface VisionMission {
  vision: string;
  mission: string;
  values: { title: string; description: string; icon: string }[];
  northStar: string;
  targetMarket: string;
  uniqueValue: string;
}

// ---- Timeline ----
export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'milestone' | 'funding' | 'launch' | 'hire' | 'partnership';
  icon: string;
  completed: boolean;
}

// ---- Reports ----
export interface Report {
  id: string;
  title: string;
  type: 'weekly' | 'monthly' | 'quarterly' | 'custom';
  createdAt: string;
  status: 'draft' | 'published';
  metrics: { label: string; value: string; change: number }[];
}

// ---- User Profile ----
export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
  company: string;
  bio: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    weekly_digest: boolean;
  };
}

// ---- App State ----
export interface AppState {
  company: Company;
  okrs: OKR[];
  roadmap: RoadmapItem[];
  tasks: Task[];
  team: TeamMember[];
  candidates: Candidate[];
  investors: Investor[];
  financials: MonthlyFinancial[];
  fundingRounds: FundingRound[];
  calendar: CalendarEvent[];
  notifications: Notification[];
  aiInsights: AIInsight[];
  vision: VisionMission;
  timeline: TimelineEvent[];
  reports: Report[];
  profile: UserProfile;
}

// ---- UI State ----
export interface UIState {
  sidebarCollapsed: boolean;
  commandPaletteOpen: boolean;
  activeTheme: 'light' | 'dark';
  currentPage: string;
}

// ---- FAQ ----
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// ---- Help ----
export interface HelpArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  icon: string;
}
