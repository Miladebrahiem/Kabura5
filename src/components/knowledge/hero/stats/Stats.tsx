import React from 'react';
import { BookOpen, Users, Clock } from 'lucide-react';
import { StatItem } from './StatItem';

export const Stats: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <StatItem
      icon={BookOpen}
      value="150+"
      label="Artikelen"
    />
    <StatItem
      icon={Users}
      value="10k+"
      label="Maandelijkse lezers"
    />
    <StatItem
      icon={Clock}
      value="8+"
      label="Jaar ervaring"
    />
  </div>
);