import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import RouteTransitionVideo from './components/RouteTransitionVideo';
import PageTransitionWrapper from './components/PageTransitionWrapper';
import LoadingSpinner from './components/LoadingSpinner';


// Route-based lazy loaded pages with prefetch optimization
const Home = lazy(() => import('@features/home/pages/Home'));
const About = lazy(() => import('@features/about/pages/About'));
const Services = lazy(() => import('@features/services/pages/Services'));
const EndToEndSolutionImplementation = lazy(() => import('./pages/EndToEndSolutionImplementation'));
const AIPoweredBusinessIntelligence = lazy(() => import('./pages/AIPoweredBusinessIntelligence'));
const AgenticAISystems = lazy(() => import('./pages/AgenticAISystems'));
const DataDrivenAnalytics = lazy(() => import('./pages/DataDrivenAnalytics'));
const BOTSetup = lazy(() => import('./pages/BOTSetup'));
const LegacyToFutureTransformation = lazy(() => import('./pages/LegacyToFutureTransformation'));
const MainframeModernization = lazy(() => import('./pages/MainframeModernization'));
const BusinessRequirementEngineering = lazy(() => import('./pages/BusinessRequirementEngineering'));
const TechnoBusinessRationalization = lazy(() => import('./pages/TechnoBusinessRationalization'));
const SystemDevelopment = lazy(() => import('./pages/SystemDevelopment'));
const ProgramManagement = lazy(() => import('./pages/ProgramManagement'));
const BusinessAnalysts = lazy(() => import('./pages/BusinessAnalysts'));
const AIProducts = lazy(() => import('@features/products/pages/AIProducts'));
const KaizenDhara = lazy(() => import('./pages/products/KaizenDhara'));
const TestCaseGenerator = lazy(() => import('./pages/products/TestCaseGenerator'));
const TestExecutor = lazy(() => import('./pages/products/TestExecutor'));
const DataMigration = lazy(() => import('./pages/products/DataMigration'));
const Careers = lazy(() => import('@features/careers/pages/Careers'));
const Contact = lazy(() => import('@features/contact/pages/Contact'));

// Admin pages
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard.tsx'));
const AdminServices = lazy(() => import('./pages/admin/Services.tsx'));
const AdminCareers = lazy(() => import('./pages/admin/Careers.tsx'));
const AdminJobApplications = lazy(() => import('./pages/admin/JobApplications.tsx'));
const AdminContacts = lazy(() => import('./pages/admin/Contacts.tsx'));
const AdminAbout = lazy(() => import('./pages/admin/About.tsx'));
const AdminInvoices = lazy(() => import('./pages/admin/Invoices.tsx'));
const AdminProfile = lazy(() => import('./pages/admin/Profile.tsx'));

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Additional validation: check if token is not empty or invalid
  if (token === 'null' || token === 'undefined' || token.length < 10) {
    localStorage.removeItem('adminToken');
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as const });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <RouteTransitionVideo />
          <Suspense fallback={<LoadingSpinner size="medium" message="Loading page..." />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<PageTransitionWrapper><Home /></PageTransitionWrapper>} />
                <Route path="about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
                <Route path="services" element={<PageTransitionWrapper><Services /></PageTransitionWrapper>} />
                <Route path="/services/end-to-end-solution-implementation" element={<PageTransitionWrapper><EndToEndSolutionImplementation /></PageTransitionWrapper>} />
                <Route path="/services/ai-powered-business-intelligence" element={<PageTransitionWrapper><AIPoweredBusinessIntelligence /></PageTransitionWrapper>} />
                <Route path="/services/agentic-ai-systems" element={<PageTransitionWrapper><AgenticAISystems /></PageTransitionWrapper>} />
                <Route path="/services/data-driven-analytics" element={<PageTransitionWrapper><DataDrivenAnalytics /></PageTransitionWrapper>} />
                <Route path="/services/bot-setup" element={<PageTransitionWrapper><BOTSetup /></PageTransitionWrapper>} />
                <Route path="/services/legacy-to-future-transformation" element={<PageTransitionWrapper><LegacyToFutureTransformation /></PageTransitionWrapper>} />
                <Route path="/services/mainframe-modernization" element={<PageTransitionWrapper><MainframeModernization /></PageTransitionWrapper>} />
                <Route path="/services/business-requirement-engineering" element={<PageTransitionWrapper><BusinessRequirementEngineering /></PageTransitionWrapper>} />
                <Route path="/services/techno-business-rationalization" element={<PageTransitionWrapper><TechnoBusinessRationalization /></PageTransitionWrapper>} />
                <Route path="/services/system-development" element={<PageTransitionWrapper><SystemDevelopment /></PageTransitionWrapper>} />
                <Route path="/services/program-management" element={<PageTransitionWrapper><ProgramManagement /></PageTransitionWrapper>} />
                <Route path="/services/business-analysts" element={<PageTransitionWrapper><BusinessAnalysts /></PageTransitionWrapper>} />
                <Route path="ai-products" element={<PageTransitionWrapper><AIProducts /></PageTransitionWrapper>} />
                <Route path="/ai-products/kaizendhara" element={<PageTransitionWrapper><KaizenDhara /></PageTransitionWrapper>} />
                <Route path="/ai-products/test-case-generator" element={<PageTransitionWrapper><TestCaseGenerator /></PageTransitionWrapper>} />
                <Route path="/ai-products/test-executor" element={<PageTransitionWrapper><TestExecutor /></PageTransitionWrapper>} />
                <Route path="/ai-products/data-migration" element={<PageTransitionWrapper><DataMigration /></PageTransitionWrapper>} />
                <Route path="careers" element={<PageTransitionWrapper><Careers /></PageTransitionWrapper>} />
                <Route path="contact" element={<PageTransitionWrapper><Contact /></PageTransitionWrapper>} />
                {/* <Route path="blog" element={<Blog />} /> */}
              </Route>
              
              {/* Admin Routes - Standalone without Layout */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/services" element={
                <ProtectedRoute>
                  <AdminServices />
                </ProtectedRoute>
              } />
              <Route path="/admin/careers" element={
                <ProtectedRoute>
                  <AdminCareers />
                </ProtectedRoute>
              } />
              <Route path="/admin/job-applications" element={
                <ProtectedRoute>
                  <AdminJobApplications />
                </ProtectedRoute>
              } />
              <Route path="/admin/contacts" element={
                <ProtectedRoute>
                  <AdminContacts />
                </ProtectedRoute>
              } />
              <Route path="/admin/about" element={
                <ProtectedRoute>
                  <AdminAbout />
                </ProtectedRoute>
              } />
              <Route path="/admin/invoices" element={
                <ProtectedRoute>
                  <AdminInvoices />
                </ProtectedRoute>
              } />
              <Route path="/admin/profile" element={
                <ProtectedRoute>
                  <AdminProfile />
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;