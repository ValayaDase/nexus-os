import type { VisionMission, TimelineEvent, Report, UserProfile, FAQItem, HelpArticle } from '../types';

export const mockVision: VisionMission = {
  vision: 'To democratize AI-powered development tools and make every developer 10x more productive, regardless of their experience level or the size of their team.',
  mission: 'We build intelligent, intuitive developer tools that amplify human creativity. By combining cutting-edge AI with thoughtful design, we help teams ship better software, faster.',
  values: [
    { title: 'Build in Public', description: 'We share our journey, learnings, and metrics transparently with our community.', icon: 'Globe' },
    { title: 'Obsess Over UX', description: 'Every interaction should feel magical. We sweat the details others ignore.', icon: 'Sparkles' },
    { title: 'Ship Fast, Learn Faster', description: 'We prefer rapid iteration over perfect planning. Speed is our superpower.', icon: 'Rocket' },
    { title: 'Default to Open', description: 'Open source first. We believe the best tools are built in collaboration.', icon: 'Code' },
    { title: 'Think Long-Term', description: 'We make decisions for the company we want to be in 10 years, not 10 days.', icon: 'TrendingUp' },
  ],
  northStar: 'Daily Active Developers using AI suggestions',
  targetMarket: 'Small to mid-size engineering teams (5-50 developers) building web and mobile applications',
  uniqueValue: 'The only AI coding assistant that learns your codebase patterns and team conventions in real-time',
};

export const mockTimeline: TimelineEvent[] = [
  { id: 'tl1', title: 'Company Founded', description: 'Arjun and Priya incorporate NexusAI in Mumbai.', date: '2024-01-15', type: 'milestone', icon: 'Flag', completed: true },
  { id: 'tl2', title: 'First Prototype', description: 'Shipped MVP of AI code suggestion engine to 10 beta users.', date: '2024-03-01', type: 'launch', icon: 'Rocket', completed: true },
  { id: 'tl3', title: 'Pre-Seed Funding', description: 'Raised $150K from personal savings and family.', date: '2024-03-15', type: 'funding', icon: 'DollarSign', completed: true },
  { id: 'tl4', title: 'First Hire', description: 'Rahul Verma joins as Head of Operations.', date: '2024-03-01', type: 'hire', icon: 'UserPlus', completed: true },
  { id: 'tl5', title: 'Public Beta Launch', description: 'Opened beta to 500 waitlisted developers.', date: '2024-06-15', type: 'launch', icon: 'Globe', completed: true },
  { id: 'tl6', title: 'Angel Round', description: 'Closed $450K angel round with Kunal Shah and Nikhil Kamath.', date: '2024-09-01', type: 'funding', icon: 'TrendingUp', completed: true },
  { id: 'tl7', title: '100 Paying Customers', description: 'Reached first 100 paying customers milestone.', date: '2025-01-10', type: 'milestone', icon: 'Award', completed: true },
  { id: 'tl8', title: 'Team Grows to 10', description: 'Hired 7 more team members across engineering and design.', date: '2025-06-01', type: 'hire', icon: 'Users', completed: true },
  { id: 'tl9', title: 'Product Hunt Launch', description: '#3 Product of the Day with 800+ upvotes.', date: '2025-09-15', type: 'launch', icon: 'Award', completed: true },
  { id: 'tl10', title: 'Seed Round Opens', description: 'Started fundraising for $3M Seed round.', date: '2026-05-01', type: 'funding', icon: 'DollarSign', completed: true },
  { id: 'tl11', title: '$2.4M Committed', description: 'Sequoia and Accel commit to lead the Seed round.', date: '2026-07-01', type: 'funding', icon: 'TrendingUp', completed: true },
  { id: 'tl12', title: 'Series A Target', description: 'Target $8M Series A at $40M valuation.', date: '2027-06-01', type: 'milestone', icon: 'Target', completed: false },
];

export const mockReports: Report[] = [
  { id: 'rep1', title: 'Weekly Progress Report — W29', type: 'weekly', createdAt: '2026-07-21', status: 'published', metrics: [{ label: 'Tasks Completed', value: '14', change: 12 }, { label: 'Story Points', value: '42', change: 8 }, { label: 'Bugs Fixed', value: '6', change: -15 }] },
  { id: 'rep2', title: 'Monthly Investor Update — June', type: 'monthly', createdAt: '2026-07-01', status: 'published', metrics: [{ label: 'MRR', value: '$11,800', change: 12.4 }, { label: 'Customers', value: '305', change: 16.3 }, { label: 'Churn', value: '3.6%', change: -7.7 }] },
  { id: 'rep3', title: 'Q2 2026 Quarterly Review', type: 'quarterly', createdAt: '2026-07-05', status: 'published', metrics: [{ label: 'ARR', value: '$141,600', change: 45 }, { label: 'Team Size', value: '12', change: 20 }, { label: 'NPS', value: '72', change: 9.1 }] },
  { id: 'rep4', title: 'Weekly Progress Report — W30', type: 'weekly', createdAt: '2026-07-25', status: 'draft', metrics: [{ label: 'Tasks Completed', value: '11', change: -21 }, { label: 'Story Points', value: '38', change: -9.5 }, { label: 'Bugs Fixed', value: '8', change: 33 }] },
];

export const mockProfile: UserProfile = {
  name: 'Arjun Mehta',
  email: 'arjun@nexusai.com',
  role: 'CEO & Co-Founder',
  avatar: '',
  company: 'NexusAI',
  bio: 'Building the future of AI-powered development tools. Previously Staff Engineer at Google. IIT Bombay CS \'18.',
  timezone: 'Asia/Kolkata (IST)',
  notifications: { email: true, push: true, weekly_digest: true },
};

export const mockFAQs: FAQItem[] = [
  { id: 'faq1', question: 'How do I add a new team member?', answer: 'Navigate to Team Workspace → Click "Add Member" → Fill in their details → They will appear in your org chart.', category: 'Team' },
  { id: 'faq2', question: 'How do OKRs work in NexusOS?', answer: 'OKRs follow the standard Objective → Key Results framework. Create an Objective, add measurable Key Results, and track progress throughout the quarter. Progress auto-calculates from Key Result completion.', category: 'Strategy' },
  { id: 'faq3', question: 'Can I customize the dashboard layout?', answer: 'Yes! The Bento Grid dashboard supports drag-and-drop rearrangement. You can also resize cards and toggle visibility of individual widgets.', category: 'Dashboard' },
  { id: 'faq4', question: 'How is the Startup Health Score calculated?', answer: 'The Health Score is a weighted average of: Revenue Growth (25%), Customer Retention (20%), Team Velocity (15%), Runway (20%), and Product Metrics (20%).', category: 'Analytics' },
  { id: 'faq5', question: 'Is my data stored securely?', answer: 'All data is stored locally in your browser using LocalStorage. No data is sent to any external server. You can export and backup your data anytime from Settings.', category: 'Security' },
  { id: 'faq6', question: 'How do I track investor communications?', answer: 'Use the Investor CRM module. Each investor has a timeline of interactions, notes, and stage tracking. Set reminders for follow-ups from the investor detail view.', category: 'Investors' },
  { id: 'faq7', question: 'What keyboard shortcuts are available?', answer: 'Press ⌘K (or Ctrl+K) to open the Command Palette. From there you can navigate to any page, search, or trigger actions. Press ? to see all shortcuts.', category: 'General' },
  { id: 'faq8', question: 'How do I export reports?', answer: 'Go to Reports → Select a report → Click "Export" → Choose format (PDF, CSV, or JSON). Reports include all metrics and charts.', category: 'Reports' },
];

export const mockHelpArticles: HelpArticle[] = [
  { id: 'h1', title: 'Getting Started', description: 'Learn the basics of NexusOS and set up your workspace.', category: 'Onboarding', content: 'Welcome to NexusOS! Start by exploring the Dashboard to see your company overview...', icon: 'BookOpen' },
  { id: 'h2', title: 'Managing OKRs', description: 'Set objectives, define key results, and track quarterly progress.', category: 'Strategy', content: 'OKRs are the backbone of your strategic alignment...', icon: 'Target' },
  { id: 'h3', title: 'Product Roadmap', description: 'Plan, prioritize, and track your product development pipeline.', category: 'Execution', content: 'The Kanban-style roadmap helps you visualize work across stages...', icon: 'Map' },
  { id: 'h4', title: 'Investor Relations', description: 'Track fundraising pipeline, investor communications, and deal flow.', category: 'Finance', content: 'The Investor CRM is designed to help founders manage their fundraising...', icon: 'Briefcase' },
  { id: 'h5', title: 'Hiring Pipeline', description: 'Manage candidates from application to offer with the ATS module.', category: 'People', content: 'Track every candidate through your hiring funnel...', icon: 'UserPlus' },
  { id: 'h6', title: 'Financial Analytics', description: 'Monitor MRR, burn rate, runway, and growth metrics.', category: 'Finance', content: 'The financial dashboard gives you a real-time view of your startup finances...', icon: 'TrendingUp' },
];
