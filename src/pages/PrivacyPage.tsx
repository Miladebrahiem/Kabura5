import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Meta } from '../components/SEO/Meta';
import { PrivacyHero } from '../components/privacy/PrivacyHero';
import { PrivacyContent } from '../components/privacy/PrivacyContent';

const GET_PRIVACY_PAGE = gql`
  query GetPrivacyPage {
    page(id: "privacy", idType: URI) {
      title
      content
    }
  }
`;

export const PrivacyPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRIVACY_PAGE);

  if (loading) return <div className="container mx-auto px-4 py-8">Laden...</div>;
  if (error) return <div className="container mx-auto px-4 py-8">Error loading page</div>;

  return (
    <>
      <Meta 
        title="Privacybeleid | Kabura Catering"
        description="Lees ons privacybeleid om te begrijpen hoe wij uw persoonlijke gegevens beschermen en verwerken."
      />
      <div className="bg-gray-50 min-h-screen">
        <PrivacyHero />
        <div className="py-12">
          <PrivacyContent content={data?.page?.content || ''} />
        </div>
      </div>
    </>
  );
}