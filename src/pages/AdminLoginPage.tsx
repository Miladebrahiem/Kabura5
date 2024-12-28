import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../components/admin/auth/LoginForm';
import { useSupabaseAuth } from '../hooks/useSupabaseAuth';

export const AdminLoginPage: React.FC = () => {
  const { user, loading } = useSupabaseAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/admin/buffet" replace />;
  }

  return <LoginForm />;
};