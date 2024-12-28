import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { WordPressPage } from './pages/WordPressPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { BuffetPage } from './pages/BuffetPage';
import { KnowledgePage } from './pages/KnowledgePage';
import { PostPage } from './pages/PostPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminBuffetPage } from './pages/AdminBuffetPage';
import { ProtectedRoute } from './components/admin/auth/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin">
        <Route path="login" element={<AdminLoginPage />} />
        <Route path="buffet" element={
          <ProtectedRoute>
            <AdminBuffetPage />
          </ProtectedRoute>
        } />
      </Route>

      {/* Public Routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/algemene-voorwaarden" element={<TermsPage />} />
        <Route path="/buffetten" element={<BuffetPage />} />
        <Route path="/kennis-en-nieuws" element={<KnowledgePage />} />
        <Route path="/kennis-en-nieuws/:slug" element={<PostPage />} />
        <Route path="/:uri" element={<WordPressPage />} />
      </Route>
    </Routes>
  );
}

export default App;