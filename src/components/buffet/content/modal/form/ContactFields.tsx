import React from 'react';
import { FormField } from './FormField';
import type { FieldProps } from './types';

export const ContactFields: React.FC<FieldProps> = ({ register, errors }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FormField
      label="Naam"
      error={errors.name?.message}
      {...register('name', { required: 'Naam is verplicht' })}
    />
    <FormField
      label="E-mail"
      type="email"
      error={errors.email?.message}
      {...register('email', { 
        required: 'E-mail is verplicht',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Ongeldig e-mailadres'
        }
      })}
    />
    <FormField
      label="Telefoonnummer"
      type="tel"
      error={errors.phone?.message}
      {...register('phone', { required: 'Telefoonnummer is verplicht' })}
    />
    <FormField
      label="Aantal gasten"
      type="number"
      error={errors.guests?.message}
      {...register('guests', { 
        required: 'Aantal gasten is verplicht',
        min: { value: 1, message: 'Minimaal 1 gast' }
      })}
    />
  </div>
);