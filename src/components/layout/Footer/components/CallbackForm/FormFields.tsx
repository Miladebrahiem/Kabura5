import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormField } from './FormField';
import type { CallbackFormData } from './types';

interface FormFieldsProps {
  register: UseFormRegister<CallbackFormData>;
  errors: Record<string, any>;
}

export const FormFields: React.FC<FormFieldsProps> = ({ register, errors }) => {
  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4">
      <FormField
        label="Naam"
        {...register('name', { required: 'Naam is verplicht' })}
        error={errors.name?.message}
      />
      <FormField
        label="Telefoonnummer"
        type="tel"
        {...register('phone', { required: 'Telefoonnummer is verplicht' })}
        error={errors.phone?.message}
      />
      <FormField
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
      <FormField
        label="Voorkeur contact"
        type="select"
        {...register('contactPreference', { required: 'Voorkeur is verplicht' })}
        error={errors.contactPreference?.message}
        options={[
          { value: 'phone', label: 'Telefoon' },
          { value: 'email', label: 'E-mail' }
        ]}
      />
    </div>
  );
};