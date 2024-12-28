import { Mail, Phone, MessageCircle } from 'lucide-react';
import type { ContactMediumData } from './types';

export const contactMediumsData: ContactMediumData[] = [
  { 
    label: 'E-mail',
    href: 'mailto:info@kabura.nl',
    text: 'info@kabura.nl',
    icon: Mail,
    isExternal: true
  },
  { 
    label: 'Telefoon',
    href: 'tel:01852129942',
    text: '018 521 299 42',
    icon: Phone,
    isExternal: true
  },
  { 
    label: 'WhatsApp',
    href: 'https://wa.me/31852129942',
    text: '+31 85 212 9942',
    icon: MessageCircle,
    isExternal: true
  }
];