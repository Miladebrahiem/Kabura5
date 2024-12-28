import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormField } from './components/FormField';
import { SubmitButton } from './components/SubmitButton';
import { StatusMessage } from './components/StatusMessage';
import { sendEmail } from '../../../lib/emailjs';
import type { ContactFormData } from '../ContactForm/types';

export const FooterContactForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      if (!recaptchaToken) {
        setSubmitStatus('error');
        return;
      }

      await sendEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      
      setSubmitStatus('success');
      reset();
      setRecaptchaToken(null);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-4 items-start">
      <FormField
        placeholder="Naam"
        registration={register('name', { required: 'Naam is verplicht' })}
        error={errors.name?.message}
      />
      
      <FormField
        placeholder="E-mail"
        type="email"
        registration={register('email', {
          required: 'E-mail is verplicht',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Ongeldig e-mailadres'
          }
        })}
        error={errors.email?.message}
      />

      <FormField
        placeholder="Bericht"
        registration={register('message', { required: 'Bericht is verplicht' })}
        error={errors.message?.message}
        className="flex-[2]"
      />

      <div className="mt-4">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={setRecaptchaToken}
          theme="dark"
        />
      </div>

      <SubmitButton isSubmitting={isSubmitting} />
      {submitStatus === 'error' && !recaptchaToken && (
        <p className="text-red-300 text-sm w-full">
          Bevestig alstublieft dat u geen robot bent.
        </p>
      )}
      <StatusMessage status={submitStatus} />
    </form>
  );
};