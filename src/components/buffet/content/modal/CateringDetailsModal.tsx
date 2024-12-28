import React from 'react';
import { X, Calendar, Clock, Users, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import type { Dish } from '../../../../types/dish';

interface CateringDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDishes: Dish[];
  totalPrice: number;
  packageName?: string;
}

interface CateringFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  location: string;
  notes: string;
}

export const CateringDetailsModal: React.FC<CateringDetailsModalProps> = ({
  isOpen,
  onClose,
  selectedDishes,
  totalPrice,
  packageName
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CateringFormData>();
  const [recaptchaToken, setRecaptchaToken] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleFormSubmit = async (data: CateringFormData) => {
    if (!recaptchaToken) {
      alert('Bevestig alstublieft dat u geen robot bent.');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', {
      ...data,
      selectedDishes,
      packageName,
      totalPrice
    });
    
    onClose();
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 3 months from now as maximum date
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Offerte aanvragen</h2>
                <p className="text-gray-600 mt-1">
                  {packageName ? (
                    `${packageName} • €${totalPrice.toFixed(2)}`
                  ) : (
                    `${selectedDishes.length} gerechten geselecteerd • €${totalPrice.toFixed(2)}`
                  )}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-6">
              {/* ... rest of the form remains the same ... */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};