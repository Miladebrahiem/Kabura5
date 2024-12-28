import React from 'react';
import { MapPin } from 'lucide-react';
import { ContactMediums } from './ContactMediums';

export const ContactDetails: React.FC = () => {
  return (
    <div className={`bg-tertiary h-full py-12`}>
      <div className="container mx-auto px-4">
        <div className="max-w-[350px] mx-auto">
          <h3 className="text-white font-bold text-xl mb-6">Contact</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Waar we zijn
              </h4>
              <address className="text-white/80 not-italic">
                Vlaardingweg 62<br />
                3044 CK, Rotterdam
              </address>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Contact details</h4>
              <ContactMediums />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};