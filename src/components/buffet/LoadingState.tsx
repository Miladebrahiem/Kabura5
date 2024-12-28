import React from 'react';

export const LoadingState: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-gray-600 animate-pulse">Gerechten laden...</div>
  </div>
);