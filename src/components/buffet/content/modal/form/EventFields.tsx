import React from 'react';
import { FormField } from './FormField';
import { getDateConstraints } from './utils';
import type { FieldProps } from './types';

export const EventFields: React.FC<FieldProps> = ({ register, errors }) => {
  const { minDate, maxDate } = getDateConstraints();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        label="Datum"
        type="date"
        min={minDate}
        max={maxDate}
        error={errors.date?.message}
        {...register('date', { required: 'Datum is verplicht' })}
      />
      <FormField
        label="Tijd"
        type="time"
        error={errors.time?.message}
        {...register('time', { required: 'Tijd is verplicht' })}
      />
    </div>
  );
};