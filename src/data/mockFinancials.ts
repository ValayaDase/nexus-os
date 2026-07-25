import type { MonthlyFinancial, FundingRound } from '../types';

export const mockFinancials: MonthlyFinancial[] = [
  { month: 'Aug 2025', revenue: 2200, expenses: 32000, profit: -29800, customers: 45, churn: 8.5, mrr: 2200, arr: 26400 },
  { month: 'Sep 2025', revenue: 3100, expenses: 34000, profit: -30900, customers: 62, churn: 7.2, mrr: 3100, arr: 37200 },
  { month: 'Oct 2025', revenue: 4200, expenses: 35000, profit: -30800, customers: 85, churn: 6.8, mrr: 4200, arr: 50400 },
  { month: 'Nov 2025', revenue: 5100, expenses: 36500, profit: -31400, customers: 108, churn: 6.1, mrr: 5100, arr: 61200 },
  { month: 'Dec 2025', revenue: 5800, expenses: 37000, profit: -31200, customers: 125, churn: 5.5, mrr: 5800, arr: 69600 },
  { month: 'Jan 2026', revenue: 6500, expenses: 38000, profit: -31500, customers: 148, churn: 5.2, mrr: 6500, arr: 78000 },
  { month: 'Feb 2026', revenue: 7200, expenses: 39500, profit: -32300, customers: 172, churn: 4.8, mrr: 7200, arr: 86400 },
  { month: 'Mar 2026', revenue: 8400, expenses: 40000, profit: -31600, customers: 198, churn: 4.5, mrr: 8400, arr: 100800 },
  { month: 'Apr 2026', revenue: 9200, expenses: 41500, profit: -32300, customers: 228, churn: 4.2, mrr: 9200, arr: 110400 },
  { month: 'May 2026', revenue: 10500, expenses: 43000, profit: -32500, customers: 262, churn: 3.9, mrr: 10500, arr: 126000 },
  { month: 'Jun 2026', revenue: 11800, expenses: 44000, profit: -32200, customers: 305, churn: 3.6, mrr: 11800, arr: 141600 },
  { month: 'Jul 2026', revenue: 12500, expenses: 45000, profit: -32500, customers: 342, churn: 3.4, mrr: 12500, arr: 150000 },
];

export const mockFundingRounds: FundingRound[] = [
  {
    id: 'fr1',
    name: 'Pre-Seed',
    amount: 150000,
    date: '2024-03-15',
    status: 'completed',
    investors: ['Arjun Mehta (Self)', 'Family & Friends'],
    valuation: 1000000,
  },
  {
    id: 'fr2',
    name: 'Angel Round',
    amount: 450000,
    date: '2024-09-01',
    status: 'completed',
    investors: ['Kunal Shah', 'Nikhil Kamath', 'Angel Collective'],
    valuation: 3000000,
  },
  {
    id: 'fr3',
    name: 'Seed Round',
    amount: 2400000,
    date: '2026-07-01',
    status: 'in_progress',
    investors: ['Sequoia Capital India', 'Accel Partners', 'Y Combinator'],
    valuation: 12000000,
  },
  {
    id: 'fr4',
    name: 'Series A',
    amount: 8000000,
    date: '2027-06-01',
    status: 'planned',
    investors: [],
    valuation: 40000000,
  },
];
