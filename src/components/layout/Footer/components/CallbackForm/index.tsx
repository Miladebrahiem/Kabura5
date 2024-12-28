import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormFields } from './FormFields';
import { SubmitButton } from './SubmitButton';
import { sendCallbackRequest } from '../../../../../lib/emailjs';
import type { CallbackFormData } from './types';

export const CallbackForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<CallbackFormData>();

  const onSubmit = async (data: CallbackFormData) => {
    try {
      if (!recaptchaToken) {
        setStatus('error');
        return;
      }

      setStatus('idle');
      await sendCallbackRequest({
        name: data.name,
        phone: data.phone,
        email: data.email,
        contactPreference: data.contactPreference
      });
      
      setStatus('success');
      reset();
      setRecaptchaToken(null);
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-primary rounded-lg p-6 w-full">
      <div className="flex flex-col lg:flex-row items-end gap-4">
        <FormFields register={register} errors={errors} />
        <SubmitButton isSubmitting={isSubmitting} />
      </div>

      <div className="mt-4">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={setRecaptchaToken}
          theme="dark"
        />
      </div>

      {status === 'success' && (
        <p className="mt-4 text-green-300 text-sm">
          Bedankt! We nemen zo spoedig mogelijk contact met u op.
        </p>
      )}
      {status === 'error' && !recaptchaToken && (
        <p className="mt-4 text-red-300 text-sm">
          Bevestig alstublieft dat u geen robot bent.
        </p>
      )}
      {status === 'error' && recaptchaToken && (
        <p className="mt-4 text-red-300 text-sm">
          Er is iets misgegaan. Probeer het later opnieuw.
        </p>
      )}
    </form>
  );
};