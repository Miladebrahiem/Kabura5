import { useState, useEffect } from 'react';
import { authenticate } from '../lib/auth';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(!!auth);
    setLoading(false);
  }, []);

  const login = (username: string, password: string) => {
    const isValid = authenticate(username, password);
    if (isValid) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    }
    return isValid;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, loading, login, logout };
};