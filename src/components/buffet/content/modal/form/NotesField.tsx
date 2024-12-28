import React from 'react';
import { FormField } from './FormField';
import type { FieldProps } from './types';

export const NotesField: React.FC<FieldProps> = ({ register }) => (
  <FormField
    label="Opmerkingen"
    type="textarea"
    rows={4}
    placeholder="Speciale wensen of dieetvereisten?"
    {...register('notes')}
  />
);