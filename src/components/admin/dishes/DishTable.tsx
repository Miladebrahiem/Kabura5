import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { Dish } from '../../../types/dish';

interface DishTableProps {
  dishes: Dish[];
  onEdit: (dish: Dish) => void;
  onDelete: (id: string) => void;
}

export const DishTable: React.FC<DishTableProps> = ({ dishes, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dishes.map((dish) => (
            <tr key={dish.id}>
              <td className="px-6 py-4 whitespace-nowrap">{dish.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{dish.category}</td>
              <td className="px-6 py-4 whitespace-nowrap capitalize">{dish.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">€{dish.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(dish)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this dish?')) {
                        onDelete(dish.id);
                      }
                    }}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};