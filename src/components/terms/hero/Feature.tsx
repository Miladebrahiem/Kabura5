import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  text: string;
}

export const Feature: React.FC<FeatureProps> = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm">
    <Icon className="w-5 h-5 text-primary" />
    <span className="text-gray-600">{text}</span>
  </div>
);