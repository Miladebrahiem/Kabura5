import React from 'react';
import { X, Calendar, Clock, Users, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import type { Dish } from '../../../types/dish';

interface CateringDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDishes: Dish[];
  totalPrice: number;
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
  totalPrice
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
                  {selectedDishes.length} gerechten geselecteerd • €{totalPrice.toFixed(2)}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Naam
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Naam is verplicht' })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'E-mail is verplicht',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Ongeldig e-mailadres'
                      }
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Telefoonnummer is verplicht' })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aantal gasten
                  </label>
                  <input
                    type="number"
                    {...register('guests', { 
                      required: 'Aantal gasten is verplicht',
                      min: { value: 1, message: 'Minimaal 1 gast' }
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.guests && (
                    <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Datum
                  </label>
                  <input
                    type="date"
                    min={minDate}
                    max={maxDateStr}
                    {...register('date', { required: 'Datum is verplicht' })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tijd
                  </label>
                  <input
                    type="time"
                    {...register('time', { required: 'Tijd is verplicht' })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Locatie
                </label>
                <input
                  type="text"
                  {...register('location', { required: 'Locatie is verplicht' })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Straat, huisnummer, postcode en plaats"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opmerkingen
                </label>
                <textarea
                  {...register('notes')}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Speciale wensen of dieetvereisten?"
                />
              </div>

              <div>
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={setRecaptchaToken}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Verstuur aanvraag
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};