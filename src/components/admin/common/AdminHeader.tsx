import React from 'react';
import { Plus } from 'lucide-react';

interface AdminHeaderProps {
  title: string;
  onAdd?: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ title, onAdd }) => (
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
    {onAdd && (
      <button
        onClick={onAdd}
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
      >
        <Plus className="w-5 h-5" />
        <span>Add New</span>
      </button>
    )}
  </div>
);