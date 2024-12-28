import React from 'react';
import { Clock } from 'lucide-react';
import type { FormFieldProps } from '../types';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  type = 'text',
  options,
  ...props
}) => {
  const timeSlots = [
    { label: 'Ochtend', slots: ['09:00', '10:00', '11:00'] },
    { label: 'Middag', slots: ['12:00', '13:00', '14:00', '15:00'] },
    { label: 'Namiddag', slots: ['16:00', '17:00', '18:00'] }
  ];

  const inputClasses = `
    w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60
    focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent
    ${error ? 'border-red-500' : 'border-white/20'}
  `;

  if (type === 'time') {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-white/80">
          {label}
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Clock className="w-5 h-5 text-tertiary" />
          </div>
          <select
            {...props}
            className={`${inputClasses} pl-10 appearance-none cursor-pointer`}
          >
            <option value="" className="text-gray-900">Selecteer voorkeurstijd</option>
            {timeSlots.map((group) => (
              <optgroup key={group.label} label={group.label} className="text-gray-900">
                {group.slots.map((time) => (
                  <option key={time} value={time} className="text-gray-900">
                    {time}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="border-l-4 border-l-transparent border-t-4 border-t-white border-r-4 border-r-transparent" />
          </div>
        </div>
        {error && (
          <span className="text-sm text-red-300">{error}</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        type={type}
        className={inputClasses}
        {...props}
      />
      {error && (
        <span className="text-sm text-red-300">{error}</span>
      )}
    </div>
  );
};