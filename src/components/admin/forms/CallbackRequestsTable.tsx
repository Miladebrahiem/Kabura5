import React from 'react';
import { format } from 'date-fns';
import { Phone, Mail, CheckCircle, Archive } from 'lucide-react';
import type { CallbackRequest } from '../../../types/forms';

interface CallbackRequestsTableProps {
  callbacks: CallbackRequest[];
}

export const CallbackRequestsTable: React.FC<CallbackRequestsTableProps> = ({ callbacks }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Datum
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Naam
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Telefoon
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Voorkeur
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acties
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {callbacks.map((callback) => (
            <tr key={callback.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(callback.submitted_at), 'dd-MM-yyyy HH:mm')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {callback.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a 
                  href={`tel:${callback.phone}`}
                  className="text-primary hover:text-primary/80"
                >
                  {callback.phone}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a 
                  href={`mailto:${callback.email}`}
                  className="text-primary hover:text-primary/80"
                >
                  {callback.email}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {callback.contact_preference === 'phone' ? (
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    Telefoon
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    Email
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${callback.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${callback.status === 'processed' ? 'bg-green-100 text-green-800' : ''}
                  ${callback.status === 'archived' ? 'bg-gray-100 text-gray-800' : ''}
                `}>
                  {callback.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {callback.contact_preference === 'phone' ? (
                    <a
                      href={`tel:${callback.phone}`}
                      className="text-primary hover:text-primary/80"
                      title="Bel nu"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  ) : (
                    <a
                      href={`mailto:${callback.email}`}
                      className="text-primary hover:text-primary/80"
                      title="Stuur email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  <button
                    className="text-green-600 hover:text-green-700"
                    title="Markeer als verwerkt"
                  >
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button
                    className="text-gray-600 hover:text-gray-700"
                    title="Archiveer"
                  >
                    <Archive className="w-5 h-5" />
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