import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { BuffetPackage } from '../../../types/package';

interface PackageTableProps {
  packages: BuffetPackage[];
  onEdit: (pkg: BuffetPackage) => void;
  onDelete: (id: string) => void;
}

export const PackageTable: React.FC<PackageTableProps> = ({ packages, onEdit, onDelete }) => {
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
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Min. People
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {packages.map((pkg) => (
            <tr key={pkg.id}>
              <td className="px-6 py-4 whitespace-nowrap">{pkg.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{pkg.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">€{pkg.price.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{pkg.minPeople}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(pkg)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this package?')) {
                        onDelete(pkg.id);
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