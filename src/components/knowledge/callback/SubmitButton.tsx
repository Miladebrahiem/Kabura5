import React from 'react';
import { Phone } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
  >
    {isSubmitting ? (
      'Verzenden...'
    ) : (
      <>
        <Phone className="w-5 h-5" />
        <span>Bel mij terug</span>
      </>
    )}
  </button>
);