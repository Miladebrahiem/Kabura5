import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  type?: string;
  rows?: number;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  type = 'text',
  rows,
  ...props
}) => {
  const inputClasses = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent";
  
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className={inputClasses}
          rows={rows}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={inputClasses}
          {...props}
        />
      )}
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};