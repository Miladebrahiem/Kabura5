import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import type { ContactFormData } from './types';

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      // Add your API call here
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Naam"
          {...register('name', { required: 'Naam is verplicht' })}
          error={errors.name?.message}
        />
        <FormInput
          label="E-mail"
          type="email"
          {...register('email', {
            required: 'E-mail is verplicht',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ongeldig e-mailadres'
            }
          })}
          error={errors.email?.message}
        />
      </div>

      <FormInput
        label="Onderwerp"
        {...register('subject', { required: 'Onderwerp is verplicht' })}
        error={errors.subject?.message}
      />

      <FormTextarea
        label="Bericht"
        {...register('message', { required: 'Bericht is verplicht' })}
        error={errors.message?.message}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-tertiary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          'Verzenden...'
        ) : (
          <>
            <span>Verstuur bericht</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};