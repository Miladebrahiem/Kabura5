import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Meta } from '../components/SEO/Meta';
import { TermsHero } from '../components/terms/hero/TermsHero';
import { TermsContent } from '../components/terms/TermsContent';

const GET_TERMS_PAGE = gql`
  query GetTermsPage {
    page(id: "algemene-voorwaarden", idType: URI) {
      title
      content
    }
  }
`;

export const TermsPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TERMS_PAGE);

  if (loading) return <div className="container mx-auto px-4 py-8">Laden...</div>;
  if (error) return <div className="container mx-auto px-4 py-8">Error loading page</div>;

  return (
    <>
      <Meta 
        title="Algemene Voorwaarden | Kabura Catering"
        description="Lees onze algemene voorwaarden voor informatie over onze dienstverlening, leveringsvoorwaarden en meer."
      />
      <div className="bg-gray-50 min-h-screen">
        <TermsHero />
        <div className="py-12">
          <TermsContent content={data?.page?.content || ''} />
        </div>
      </div>
    </>
  );
}