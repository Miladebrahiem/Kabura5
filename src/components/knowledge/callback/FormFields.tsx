import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormField } from './FormField';
import { DateTimeSelect } from './DateTimeSelect';
import type { CallbackFormData } from './types';

interface FormFieldsProps {
  register: UseFormRegister<CallbackFormData>;
  errors: Record<string, any>;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  selectedDate: string;
  selectedTime: string;
}

export const FormFields: React.FC<FormFieldsProps> = ({
  register,
  errors,
  onDateChange,
  onTimeChange,
  selectedDate,
  selectedTime
}) => (
  <div className="space-y-4">
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
    
    <DateTimeSelect
      onDateChange={onDateChange}
      onTimeChange={onTimeChange}
      selectedDate={selectedDate}
      selectedTime={selectedTime}
      error={errors.date?.message || errors.time?.message}
    />
  </div>
);