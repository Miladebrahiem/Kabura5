import React from 'react';

interface StatusMessageProps {
  status: 'idle' | 'success' | 'error';
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  if (status === 'idle') return null;

  return (
    <div className={`text-sm ${
      status === 'success' ? 'text-green-600' : 'text-red-500'
    }`}>
      {status === 'success' 
        ? 'We nemen zo spoedig mogelijk contact met u op!'
        : 'Er is iets misgegaan. Probeer het later opnieuw.'
      }
    </div>
  );
};