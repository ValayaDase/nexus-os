import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  Company, OKR, RoadmapItem, Task, TeamMember, Candidate,
  Investor, MonthlyFinancial, FundingRound, CalendarEvent,
  Notification, AIInsight, VisionMission, TimelineEvent,
  Report, UserProfile,
} from '../types';
import { mockCompany } from '../data/mockCompany';
import { mockOKRs } from '../data/mockOKRs';
import { mockRoadmap } from '../data/mockRoadmap';
import { mockTasks } from '../data/mockTasks';
import { mockTeam } from '../data/mockTeam';
import { mockCandidates } from '../data/mockHiring';
import { mockInvestors } from '../data/mockInvestors';
import { mockFinancials, mockFundingRounds } from '../data/mockFinancials';
import { mockCalendar } from '../data/mockCalendar';
import { mockNotifications } from '../data/mockNotifications';
import { mockAIInsights } from '../data/mockAIInsights';
import { mockVision, mockTimeline, mockReports, mockProfile } from '../data/mockMisc';

interface AppStore {
  // Data
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

  // UI State
  sidebarCollapsed: boolean;
  commandPaletteOpen: boolean;

  // Actions
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleSidebar: () => void;
  setCommandPaletteOpen: (open: boolean) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: () => void;
  updateOKRProgress: (id: string, progress: number) => void;
  updateRoadmapStatus: (id: string, status: RoadmapItem['status']) => void;
  updateTaskStatus: (id: string, status: Task['status']) => void;
  updateInvestorStage: (id: string, stage: Investor['stage']) => void;
  updateCandidateStage: (id: string, stage: Candidate['stage']) => void;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateVision: (vision: Partial<VisionMission>) => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  resetData: () => void;
}

const initialState = {
  company: mockCompany,
  okrs: mockOKRs,
  roadmap: mockRoadmap,
  tasks: mockTasks,
  team: mockTeam,
  candidates: mockCandidates,
  investors: mockInvestors,
  financials: mockFinancials,
  fundingRounds: mockFundingRounds,
  calendar: mockCalendar,
  notifications: mockNotifications,
  aiInsights: mockAIInsights,
  vision: mockVision,
  timeline: mockTimeline,
  reports: mockReports,
  profile: mockProfile,
  sidebarCollapsed: false,
  commandPaletteOpen: false,
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      ...initialState,

      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
      setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),

      markNotificationRead: (id) =>
        set((s) => ({
          notifications: s.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          ),
        })),

      markAllNotificationsRead: () =>
        set((s) => ({
          notifications: s.notifications.map((n) => ({ ...n, read: true })),
        })),

      updateOKRProgress: (id, progress) =>
        set((s) => ({
          okrs: s.okrs.map((o) =>
            o.id === id ? { ...o, progress } : o
          ),
        })),

      updateRoadmapStatus: (id, status) =>
        set((s) => ({
          roadmap: s.roadmap.map((r) =>
            r.id === id ? { ...r, status, progress: status === 'done' ? 100 : r.progress } : r
          ),
        })),

      updateTaskStatus: (id, status) =>
        set((s) => ({
          tasks: s.tasks.map((t) =>
            t.id === id ? { ...t, status } : t
          ),
        })),

      updateInvestorStage: (id, stage) =>
        set((s) => ({
          investors: s.investors.map((i) =>
            i.id === id ? { ...i, stage } : i
          ),
        })),

      updateCandidateStage: (id, stage) =>
        set((s) => ({
          candidates: s.candidates.map((c) =>
            c.id === id ? { ...c, stage } : c
          ),
        })),

      addTask: (task) =>
        set((s) => ({ tasks: [task, ...s.tasks] })),

      deleteTask: (id) =>
        set((s) => ({ tasks: s.tasks.filter((t) => t.id !== id) })),

      updateVision: (vision) =>
        set((s) => ({ vision: { ...s.vision, ...vision } })),

      updateProfile: (profile) =>
        set((s) => ({ profile: { ...s.profile, ...profile } })),

      resetData: () => set(initialState),
    }),
    {
      name: 'nexus-os-state',
    }
  )
);
