import React, { forwardRef } from 'react';
import type { FormFieldProps } from './types';

export const FormField = forwardRef<HTMLInputElement | HTMLSelectElement, FormFieldProps>(
  ({ label, error, type = 'text', options, ...props }, ref) => {
    const inputClasses = `
      w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60
      focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent
      ${error ? 'border-red-500' : 'border-white/20'}
    `;

    const selectClasses = `
      ${inputClasses}
      [&>option]:text-secondary [&>option]:bg-white
    `;

    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-white/80">
          {label}
        </label>
        
        {type === 'select' ? (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            className={selectClasses}
            {...props}
          >
            <option value="" className="text-secondary">Selecteer voorkeur</option>
            {options?.map(option => (
              <option key={option.value} value={option.value} className="text-secondary">
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            className={inputClasses}
            {...props}
          />
        )}
        
        {error && (
          <span className="text-sm text-red-300">{error}</span>
        )}
      </div>
    );
  }
);