import React from 'react';

interface StatusMessageProps {
  status: 'idle' | 'success' | 'error';
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  if (status === 'idle') return null;

  return (
    <div className={`w-full text-sm ${
      status === 'success' ? 'text-green-300' : 'text-red-300'
    }`}>
      {status === 'success' 
        ? 'Bericht succesvol verzonden!'
        : 'Er is iets misgegaan. Probeer het later opnieuw.'
      }
    </div>
  );
};