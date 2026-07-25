import type { CalendarEvent } from '../types';

export const mockCalendar: CalendarEvent[] = [
  { id: 'cal1', title: 'Board Meeting', description: 'Quarterly board meeting with investors and advisors.', date: '2026-07-28', time: '10:00', duration: '2h', type: 'meeting', attendees: ['Arjun Mehta', 'Rajan Anandan', 'Sarah Chen'], location: 'Zoom' },
  { id: 'cal2', title: 'Sprint Planning', description: 'Plan sprint 23 priorities and assign stories.', date: '2026-07-28', time: '14:00', duration: '1h', type: 'meeting', attendees: ['Priya Sharma', 'Vikram Patel', 'Sneha Reddy', 'Rohit Kumar'], location: 'Conference Room A' },
  { id: 'cal3', title: 'Investor Pitch — Lightspeed', description: 'Series follow-up pitch to Lisa Wang.', date: '2026-07-29', time: '11:00', duration: '45m', type: 'pitch', attendees: ['Arjun Mehta', 'Lisa Wang'], location: 'Google Meet' },
  { id: 'cal4', title: 'Product Roadmap Review', description: 'Review Q3 roadmap progress and adjust priorities.', date: '2026-07-30', time: '15:00', duration: '1h', type: 'review', attendees: ['Arjun Mehta', 'Priya Sharma', 'Nisha Gupta'], location: 'Teams' },
  { id: 'cal5', title: 'ML Model Release Deadline', description: 'Ship v2.1 of the code suggestion model to production.', date: '2026-08-01', time: '00:00', duration: 'All day', type: 'deadline', attendees: ['Vikram Patel', 'Meera Iyer'], location: '' },
  { id: 'cal6', title: 'Team Standup', description: 'Daily engineering standup.', date: '2026-07-25', time: '09:30', duration: '15m', type: 'meeting', attendees: ['Engineering Team'], location: 'Slack Huddle' },
  { id: 'cal7', title: 'Design Review — Onboarding', description: 'Review new onboarding flow mockups.', date: '2026-07-31', time: '11:00', duration: '45m', type: 'review', attendees: ['Nisha Gupta', 'Sneha Reddy', 'Arjun Mehta'], location: 'Figma' },
  { id: 'cal8', title: 'Team Lunch', description: 'Monthly team lunch at The Bombay Canteen.', date: '2026-08-02', time: '12:30', duration: '1.5h', type: 'social', attendees: ['Everyone'], location: 'The Bombay Canteen, Mumbai' },
  { id: 'cal9', title: 'Y Combinator Final Interview', description: 'Final partner interview for YC batch.', date: '2026-08-05', time: '09:00', duration: '30m', type: 'pitch', attendees: ['Arjun Mehta', 'Priya Sharma'], location: 'Zoom' },
  { id: 'cal10', title: 'Quarterly OKR Check-in', description: 'Review Q3 OKR progress with all department heads.', date: '2026-08-08', time: '14:00', duration: '1h', type: 'review', attendees: ['Arjun Mehta', 'Priya Sharma', 'Rahul Verma', 'Kavya Nair'], location: 'Conference Room B' },
];
