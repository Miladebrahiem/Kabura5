import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  text: string;
}

export const Feature: React.FC<FeatureProps> = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
    <Icon className="w-5 h-5 text-white" />
    <span className="text-white">{text}</span>
  </div>
);