import React from 'react';
import { TopRow } from './components/TopRow';
import { DynamicColumn } from './components/DynamicColumn';
import { Column } from './components/Column';
import { FooterContainer } from './components/FooterContainer';
import { GET_AANBOD_MENU } from '../../../lib/queries';

const informatieItems = [
  { label: 'Over Kabura', href: '/over-kabura' },
  { label: 'Verhalen en cultuur', href: '/verhalen-en-cultuur' },
  { label: 'Sociale Impact', href: '/sociale-impact' },
  { label: 'Vragen', href: '/vragen' },
  { label: 'Media & Partners', href: '/media-partners' },
  { label: 'Ervaringen afgebeeld', href: '/ervaringen-afgebeeld' },
  { label: 'Melmastia', href: '/wat-is-melmastia' }
];

const extraItems = [
  { label: 'Samenwerken', href: '/affiliate-marketing' },
  { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
  { label: 'Privacy Beleid', href: '/privacy' },
  { label: 'Kennis en nieuws', href: '/kennis-en-nieuws' },
  { label: 'Offerte aanvragen', href: '/offerte-aanvragen' },
  { label: 'Vragen', href: '/vragen' },
  { label: 'Werken bij Kabura', href: '/werken-bij-kabura' }
];

const dienstenItems = [
  { label: 'Bedrijfscatering', href: '/bedrijfscatering' },
  { label: 'Bruiloftscatering', href: '/bruiloftscatering' },
  { label: 'Evenementencatering', href: '/evenementencatering' },
  { label: 'Catering aan huis', href: '/catering-aan-huis' },
  { label: 'Mehmandaar (gastheer/gastvrouw)', href: '/mehmandaar-gastheer-gastvrouw' },
  { label: 'Muzikanten inhuren', href: '/muzikanten-inhuren' },
  { label: 'Foto- en videografie', href: '/foto-en-videografie' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto">
      <TopRow />
      <FooterContainer>
        <Column 
          title="Kabura Catering" 
          bgColor="primary"
          items={informatieItems}
        />
        <Column 
          title="Informatie" 
          bgColor="quaternary"
          items={extraItems}
        />
        <DynamicColumn 
          title="Afghaanse Keuken" 
          bgColor="secondary"
          query={GET_AANBOD_MENU}
        />
        <Column 
          title="Diensten" 
          bgColor="tertiary"
          items={dienstenItems}
        />
      </FooterContainer>
    </footer>
  );
};