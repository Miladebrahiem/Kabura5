import React from 'react';
import { FormField } from './FormField';
import type { FieldProps } from './types';

export const LocationField: React.FC<FieldProps> = ({ register, errors }) => (
  <FormField
    label="Locatie"
    placeholder="Straat, huisnummer, postcode en plaats"
    error={errors.location?.message}
    {...register('location', { required: 'Locatie is verplicht' })}
  />
);