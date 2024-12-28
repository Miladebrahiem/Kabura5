import React, { forwardRef } from 'react';
import type { FormInputProps } from './types';

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          className={`
            w-full px-4 py-2 rounded-lg border
            focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent
            ${error ? 'border-red-500' : 'border-gray-300'}
          `}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
      </div>
    );
  }
);