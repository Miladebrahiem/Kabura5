import React from 'react';
import { CallbackForm } from '../callback/CallbackForm';
import { Services } from './sidebar/Services';

export const Sidebar: React.FC = () => (
  <div className="space-y-8 sticky top-8">
    <CallbackForm />
    <Services />
  </div>
);