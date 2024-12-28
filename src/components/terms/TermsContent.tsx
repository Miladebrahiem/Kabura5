import React from 'react';
import { TermsSection } from './TermsSection';
import { FileText, Mail } from 'lucide-react';

interface TermsContentProps {
  content: string;
}

export const TermsContent: React.FC<TermsContentProps> = ({ content }) => {
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
                  <TermsSection key={index}>
                    {section.outerHTML}
                  </TermsSection>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-secondary/5 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Download PDF
                </h3>
                <p className="text-gray-600 mb-6">
                  Download onze algemene voorwaarden als PDF bestand voor uw administratie.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all gap-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Download Voorwaarden</span>
                </a>
              </div>

              <div className="bg-secondary/5 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Vragen?
                </h3>
                <p className="text-gray-600 mb-6">
                  Heeft u vragen over onze voorwaarden? Neem gerust contact met ons op.
                </p>
                <a
                  href="mailto:info@kabura.nl"
                  className="inline-flex items-center justify-center w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>E-mail ons</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}