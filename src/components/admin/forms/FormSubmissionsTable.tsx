import React from 'react';
import { format } from 'date-fns';
import { Mail, MessageSquare, CheckCircle, Archive } from 'lucide-react';
import type { FormSubmission } from '../../../types/forms';

interface FormSubmissionsTableProps {
  submissions: FormSubmission[];
}

export const FormSubmissionsTable: React.FC<FormSubmissionsTableProps> = ({ submissions }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Datum
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Naam
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
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
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(submission.submitted_at), 'dd-MM-yyyy HH:mm')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {submission.form_type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {submission.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a 
                  href={`mailto:${submission.email}`}
                  className="text-primary hover:text-primary/80"
                >
                  {submission.email}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${submission.status === 'processed' ? 'bg-green-100 text-green-800' : ''}
                  ${submission.status === 'archived' ? 'bg-gray-100 text-gray-800' : ''}
                `}>
                  {submission.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <button
                    className="text-primary hover:text-primary/80"
                    title="Stuur email"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                  <button
                    className="text-primary hover:text-primary/80"
                    title="Bekijk bericht"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </button>
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