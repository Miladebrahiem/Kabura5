import React from 'react';
import { Utensils, Package, MessageSquare, PhoneCall } from 'lucide-react';

interface AdminTabsProps {
  activeTab: 'dishes' | 'packages' | 'forms' | 'callbacks';
  onTabChange: (tab: 'dishes' | 'packages' | 'forms' | 'callbacks') => void;
}

export const AdminTabs: React.FC<AdminTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => onTabChange('dishes')}
          className={`
            flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm
            ${activeTab === 'dishes'
              ? 'border-secondary text-secondary'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }
          `}
        >
          <Utensils className="w-5 h-5" />
          <span>Gerechten</span>
        </button>
        <button
          onClick={() => onTabChange('packages')}
          className={`
            flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm
            ${activeTab === 'packages'
              ? 'border-secondary text-secondary'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }
          `}
        >
          <Package className="w-5 h-5" />
          <span>Pakketten</span>
        </button>
        <button
          onClick={() => onTabChange('forms')}
          className={`
            flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm
            ${activeTab === 'forms'
              ? 'border-secondary text-secondary'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }
          `}
        >
          <MessageSquare className="w-5 h-5" />
          <span>Formulieren</span>
        </button>
        <button
          onClick={() => onTabChange('callbacks')}
          className={`
            flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm
            ${activeTab === 'callbacks'
              ? 'border-secondary text-secondary'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }
          `}
        >
          <PhoneCall className="w-5 h-5" />
          <span>Terugbelverzoeken</span>
        </button>
      </nav>
    </div>
  );
};