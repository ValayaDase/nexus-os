import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppLayout } from './components/layout/AppLayout';
import { PageTransition } from './components/layout/PageTransition';
import { LoadingScreen } from './components/shared/LoadingScreen';

// Lazy Load Pages with Instant Prefetch
const Landing = lazy(() => import('./pages/Landing').then((m) => ({ default: m.Landing })));
const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const Vision = lazy(() => import('./pages/Vision').then((m) => ({ default: m.Vision })));
const OKRs = lazy(() => import('./pages/OKRs').then((m) => ({ default: m.OKRs })));
const Roadmap = lazy(() => import('./pages/Roadmap').then((m) => ({ default: m.Roadmap })));
const Timeline = lazy(() => import('./pages/Timeline').then((m) => ({ default: m.Timeline })));
const Tasks = lazy(() => import('./pages/Tasks').then((m) => ({ default: m.Tasks })));
const Team = lazy(() => import('./pages/Team').then((m) => ({ default: m.Team })));
const Hiring = lazy(() => import('./pages/Hiring').then((m) => ({ default: m.Hiring })));
const Investors = lazy(() => import('./pages/Investors').then((m) => ({ default: m.Investors })));
const Funding = lazy(() => import('./pages/Funding').then((m) => ({ default: m.Funding })));
const Financials = lazy(() => import('./pages/Financials').then((m) => ({ default: m.Financials })));
const Health = lazy(() => import('./pages/Health').then((m) => ({ default: m.Health })));
const Reports = lazy(() => import('./pages/Reports').then((m) => ({ default: m.Reports })));
const Notifications = lazy(() => import('./pages/Notifications').then((m) => ({ default: m.Notifications })));
const CalendarPage = lazy(() => import('./pages/Calendar').then((m) => ({ default: m.CalendarPage })));
const AIInsights = lazy(() => import('./pages/AIInsights').then((m) => ({ default: m.AIInsights })));
const Profile = lazy(() => import('./pages/Profile').then((m) => ({ default: m.Profile })));
const Settings = lazy(() => import('./pages/Settings').then((m) => ({ default: m.Settings })));
const HelpCenter = lazy(() => import('./pages/HelpCenter').then((m) => ({ default: m.HelpCenter })));
const FAQ = lazy(() => import('./pages/FAQ').then((m) => ({ default: m.FAQ })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

export const App: React.FC = () => {
  // Pre-fetch all workspace pages in idle background time for 0ms instant switching
  useEffect(() => {
    const prefetchRoutes = () => {
      import('./pages/Dashboard');
      import('./pages/Vision');
      import('./pages/OKRs');
      import('./pages/Roadmap');
      import('./pages/Tasks');
      import('./pages/Investors');
      import('./pages/Financials');
      import('./pages/Hiring');
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetchRoutes);
    } else {
      setTimeout(prefetchRoutes, 1000);
    }
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Marketing Landing Page */}
            <Route path="/" element={<Landing />} />

            {/* Authenticated Workspace App Layout */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
              <Route path="/vision" element={<PageTransition><Vision /></PageTransition>} />
              <Route path="/okrs" element={<PageTransition><OKRs /></PageTransition>} />
              <Route path="/roadmap" element={<PageTransition><Roadmap /></PageTransition>} />
              <Route path="/timeline" element={<PageTransition><Timeline /></PageTransition>} />
              <Route path="/tasks" element={<PageTransition><Tasks /></PageTransition>} />
              <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
              <Route path="/hiring" element={<PageTransition><Hiring /></PageTransition>} />
              <Route path="/investors" element={<PageTransition><Investors /></PageTransition>} />
              <Route path="/funding" element={<PageTransition><Funding /></PageTransition>} />
              <Route path="/financials" element={<PageTransition><Financials /></PageTransition>} />
              <Route path="/health" element={<PageTransition><Health /></PageTransition>} />
              <Route path="/reports" element={<PageTransition><Reports /></PageTransition>} />
              <Route path="/notifications" element={<PageTransition><Notifications /></PageTransition>} />
              <Route path="/calendar" element={<PageTransition><CalendarPage /></PageTransition>} />
              <Route path="/ai-insights" element={<PageTransition><AIInsights /></PageTransition>} />
              <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
              <Route path="/settings" element={<PageTransition><Settings /></PageTransition>} />
              <Route path="/help" element={<PageTransition><HelpCenter /></PageTransition>} />
              <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
