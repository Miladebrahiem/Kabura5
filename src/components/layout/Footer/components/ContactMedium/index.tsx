import React from 'react';
import { ContactMediumLink } from './ContactMediumLink';
import { contactMediumsData } from './contactMediumsData';

export const ContactMediums: React.FC = () => (
  <div className="space-y-4">
    {contactMediumsData.map((medium) => (
      <ContactMediumLink key={medium.label} {...medium} />
    ))}
  </div>
);