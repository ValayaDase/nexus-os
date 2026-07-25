import type { Notification } from '../types';

export const mockNotifications: Notification[] = [
  { id: 'n1', title: 'New Investor Interest', message: 'Priyanka Joshi from Blume Ventures viewed your deck.', type: 'info', read: false, timestamp: '2026-07-25T10:30:00Z', link: '/investors' },
  { id: 'n2', title: 'OKR Update', message: 'PMF objective reached 75% progress — on track for Q3.', type: 'success', read: false, timestamp: '2026-07-25T09:15:00Z', link: '/okrs' },
  { id: 'n3', title: 'Candidate Offer Accepted', message: 'Zara Khan accepted the ML Engineer offer! 🎉', type: 'success', read: false, timestamp: '2026-07-24T18:00:00Z', link: '/hiring' },
  { id: 'n4', title: 'Runway Alert', message: 'Runway dropped below 18 months. Review burn rate.', type: 'warning', read: false, timestamp: '2026-07-24T14:00:00Z', link: '/financials' },
  { id: 'n5', title: 'Sprint Completed', message: 'Sprint 22 completed with 92% velocity. 11/12 stories done.', type: 'success', read: true, timestamp: '2026-07-24T11:00:00Z', link: '/tasks' },
  { id: 'n6', title: 'New Team Member', message: 'Emily Zhang starts as Senior Frontend Engineer on Aug 1.', type: 'info', read: true, timestamp: '2026-07-23T16:30:00Z', link: '/team' },
  { id: 'n7', title: 'Board Meeting Reminder', message: 'Board meeting scheduled for July 28 at 10:00 AM.', type: 'info', read: true, timestamp: '2026-07-23T09:00:00Z', link: '/calendar' },
  { id: 'n8', title: 'MRR Milestone', message: 'Monthly recurring revenue crossed $12,500! 🚀', type: 'success', read: true, timestamp: '2026-07-22T15:00:00Z', link: '/financials' },
  { id: 'n9', title: 'Bug Report', message: 'Critical bug in auth flow reported by 3 users.', type: 'error', read: true, timestamp: '2026-07-22T11:30:00Z', link: '/tasks' },
  { id: 'n10', title: 'Roadmap Updated', message: 'Priya moved "AI Code Review" to In Progress.', type: 'update', read: true, timestamp: '2026-07-21T14:00:00Z', link: '/roadmap' },
  { id: 'n11', title: 'Term Sheet Received', message: 'Y Combinator sent term sheet for $500K investment.', type: 'success', read: true, timestamp: '2026-07-20T10:00:00Z', link: '/investors' },
  { id: 'n12', title: 'Feature Shipped', message: 'Dark mode support is now live in production.', type: 'success', read: true, timestamp: '2026-07-19T17:00:00Z', link: '/roadmap' },
  { id: 'n13', title: 'NPS Score Updated', message: 'NPS score improved to 72 (+5 from last month).', type: 'info', read: true, timestamp: '2026-07-18T12:00:00Z', link: '/health' },
  { id: 'n14', title: 'Churn Alert', message: '2 enterprise accounts at risk of churning. Action needed.', type: 'warning', read: true, timestamp: '2026-07-17T09:00:00Z', link: '/health' },
  { id: 'n15', title: 'Conference Talk Accepted', message: 'Arjun\'s talk accepted at TechCrunch Disrupt 2026.', type: 'success', read: true, timestamp: '2026-07-16T11:00:00Z', link: '/okrs' },
];
