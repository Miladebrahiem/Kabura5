import React from 'react';
import { PrivacySection } from './PrivacySection';

interface PrivacyContentProps {
  content: string;
}

export const PrivacyContent: React.FC<PrivacyContentProps> = ({ content }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const sections = Array.from(doc.body.children);

  return (
    <div className="container mx-auto">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
              <div className="prose prose-lg max-w-none">
                {sections.map((section, index) => (
                  <PrivacySection key={index}>
                    {section.outerHTML}
                  </PrivacySection>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <div className="bg-secondary/5 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Contact Opnemen
                </h3>
                <p className="text-gray-600 mb-6">
                  Heeft u vragen over ons privacybeleid? Neem gerust contact met ons op.
                </p>
                <a
                  href="mailto:privacy@kabura.nl"
                  className="inline-flex items-center justify-center w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  E-mail ons
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}