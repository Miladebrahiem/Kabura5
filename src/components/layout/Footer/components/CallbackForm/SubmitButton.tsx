import React from 'react';
import { Phone } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="h-[42px] bg-tertiary text-white px-6 rounded-lg hover:bg-opacity-90 transition-all 
        flex items-center justify-center gap-2 disabled:opacity-50 whitespace-nowrap"
    >
      {isSubmitting ? (
        'Verzenden...'
      ) : (
        <>
          <Phone className="w-5 h-5" />
          <span>Contacteer mij</span>
        </>
      )}
    </button>
  );
};