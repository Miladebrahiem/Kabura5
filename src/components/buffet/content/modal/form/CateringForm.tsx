import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFields } from './ContactFields';
import { EventFields } from './EventFields';
import { LocationField } from './LocationField';
import { NotesField } from './NotesField';
import type { CateringFormData } from './types';

interface CateringFormProps {
  onSubmit: (data: CateringFormData) => void;
}

export const CateringForm: React.FC<CateringFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CateringFormData>();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleFormSubmit = (data: CateringFormData) => {
    if (!recaptchaToken) {
      alert('Bevestig alstublieft dat u geen robot bent.');
      return;
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-6">
      <ContactFields register={register} errors={errors} />
      <EventFields register={register} errors={errors} />
      <LocationField register={register} errors={errors} />
      <NotesField register={register} />

      <div>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={setRecaptchaToken}
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
      >
        <span>Verstuur aanvraag</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};