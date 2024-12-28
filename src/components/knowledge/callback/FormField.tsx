import React, { forwardRef } from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...props }, ref) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-white">
        {label}
      </label>
      <input
        ref={ref}
        className={`
          w-full px-4 py-2 rounded-lg border bg-white/10 text-white placeholder:text-white/60
          focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent
          ${error ? 'border-red-300' : 'border-white/20'}
        `}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-300">{error}</span>
      )}
    </div>
  )
);