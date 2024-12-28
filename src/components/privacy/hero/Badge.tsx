import React from 'react';
import { Lock } from 'lucide-react';

export const Badge: React.FC = () => (
  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary">
    <Lock className="w-4 h-4" />
    <span className="text-sm font-medium">Privacy & Veiligheid</span>
  </div>
);