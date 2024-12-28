import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormFields } from './FormFields';
import { SubmitButton } from './SubmitButton';
import { StatusMessage } from './StatusMessage';
import { sendCallbackRequest } from '../../../lib/emailjs';
import type { CallbackFormData } from './types';

export const CallbackForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CallbackFormData>();

  const onSubmit = async (data: CallbackFormData) => {
    if (!selectedDate || !selectedTime) {
      setStatus('error');
      return;
    }

    try {
      await sendCallbackRequest({
        ...data,
        date: selectedDate,
        time: selectedTime
      });
      
      setStatus('success');
      setSelectedDate('');
      setSelectedTime('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="bg-tertiary rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Wilt u teruggebeld worden?
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormFields
          register={register}
          errors={errors}
          onDateChange={setSelectedDate}
          onTimeChange={setSelectedTime}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
        <SubmitButton isSubmitting={isSubmitting} />
        <StatusMessage status={status} />
      </form>
    </div>
  );
};