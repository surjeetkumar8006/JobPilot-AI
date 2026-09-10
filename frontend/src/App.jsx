import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';
import ApplicationDetails from './pages/ApplicationDetails';
import Drafts from './pages/Drafts';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import { AuthProvider, AuthContext } from './context/AuthContext';

function ProtectedLayout() {
  const { user } = React.useContext(AuthContext);

  if (!user) {
    return <Navigate to="/landing" replace />;
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col pt-16">
      <Navbar />
      <div className="flex-1 flex w-full">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8 min-w-0 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/applications/:id" element={<ApplicationDetails />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/onboarding" element={<Onboarding />} />

          {/* Protected Routes */}
          <Route path="/*" element={<ProtectedLayout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
