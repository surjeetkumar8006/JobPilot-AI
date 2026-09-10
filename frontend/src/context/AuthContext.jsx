import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('jobpilot_user');
    return saved ? JSON.parse(saved) : null;
  });

  const loginDemoUser = () => {
    const demo = {
      id: 'demo-user-123',
      name: 'Early Developer (Demo)',
      email: 'demo@jobpilot.ai',
      isDemo: true,
      onboarded: true,
      targetRole: 'Full Stack Engineer',
      experienceLevel: 'Entry-Level',
      primarySkills: ['React', 'Node.js', 'Python', 'SQL'],
      preferredLocation: 'Bengaluru / Remote'
    };
    setUser(demo);
    localStorage.setItem('jobpilot_user', JSON.stringify(demo));
  };

  const loginUser = (email, password) => {
    const realUser = {
      id: `user-${Date.now()}`,
      name: email.split('@')[0],
      email: email,
      isDemo: false,
      onboarded: true,
      targetRole: 'Software Developer',
      experienceLevel: 'Intermediate',
      primarySkills: ['JavaScript', 'TypeScript', 'Node.js', 'GCP'],
      preferredLocation: 'Remote'
    };
    setUser(realUser);
    localStorage.setItem('jobpilot_user', JSON.stringify(realUser));
    return realUser;
  };

  const signUpUser = (name, email, password) => {
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      isDemo: false,
      onboarded: false,
      targetRole: '',
      experienceLevel: 'Entry-Level',
      primarySkills: [],
      preferredLocation: ''
    };
    setUser(newUser);
    localStorage.setItem('jobpilot_user', JSON.stringify(newUser));
    return newUser;
  };

  const updateProfile = (profileData) => {
    const updated = { ...user, ...profileData, onboarded: true };
    setUser(updated);
    localStorage.setItem('jobpilot_user', JSON.stringify(updated));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('jobpilot_user');
  };

  return (
    <AuthContext.Provider value={{ user, loginDemoUser, loginUser, signUpUser, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
