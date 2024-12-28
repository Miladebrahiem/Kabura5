import React, { forwardRef } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface DateTimeSelectProps {
  error?: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  selectedDate: string;
  selectedTime: string;
}

export const DateTimeSelect = forwardRef<HTMLDivElement, DateTimeSelectProps>(
  ({ error, onDateChange, onTimeChange, selectedDate, selectedTime }, ref) => {
    // Generate time slots from 09:00 to 22:00 with 15-minute intervals
    const generateTimeSlots = () => {
      const slots = [];
      for (let hour = 9; hour <= 22; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
          slots.push(time);
        }
      }
      return slots;
    };

    const timeSlots = generateTimeSlots();

    // Get tomorrow's date as minimum date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    // Get date 3 months from now as maximum date
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    return (
      <div ref={ref} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">
            Selecteer een datum
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Calendar className="w-5 h-5 text-tertiary" />
            </div>
            <input
              type="date"
              min={minDate}
              max={maxDateStr}
              value={selectedDate}
              onChange={(e) => onDateChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">
            Selecteer een tijd
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Clock className="w-5 h-5 text-tertiary" />
            </div>
            <select
              value={selectedTime}
              onChange={(e) => onTimeChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent"
            >
              <option value="" className="text-gray-900">Selecteer tijd</option>
              {timeSlots.map((time) => (
                <option key={time} value={time} className="text-gray-900">
                  {time}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="border-l-4 border-l-transparent border-t-4 border-t-white border-r-4 border-r-transparent" />
            </div>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-300">{error}</p>
        )}
      </div>
    );
  }
);

DateTimeSelect.displayName = 'DateTimeSelect';