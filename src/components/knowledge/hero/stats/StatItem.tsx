import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
    <div className="bg-secondary rounded-full p-2">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  </div>
);