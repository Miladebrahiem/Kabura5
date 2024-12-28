import React from 'react';
import { Send } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="px-6 py-2 bg-tertiary text-white rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 
        disabled:opacity-50 whitespace-nowrap"
    >
      {isSubmitting ? 'Verzenden...' : (
        <>
          <span>Verstuur</span>
          <Send className="w-4 h-4" />
        </>
      )}
    </button>
  );
};