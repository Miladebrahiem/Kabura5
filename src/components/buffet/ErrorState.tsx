import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorState: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-red-500 flex items-center gap-2">
      <AlertCircle className="w-5 h-5" />
      <span>Er is iets misgegaan bij het laden van de gerechten.</span>
    </div>
  </div>
);