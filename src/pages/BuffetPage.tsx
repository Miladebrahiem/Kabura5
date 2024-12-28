import React from 'react';
import { Meta } from '../components/SEO/Meta';
import { BuffetHero } from '../components/buffet/BuffetHero';
import { BuffetContent } from '../components/buffet/BuffetContent';
import { useBuffetItems } from '../hooks/useBuffetItems';

export const BuffetPage: React.FC = () => {
  const { dishes, loading, error } = useBuffetItems();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading buffet items</div>;

  return (
    <>
      <Meta 
        title="Afghaanse Buffetten | Kabura Catering"
        description="Ontdek onze authentieke Afghaanse buffetten. Van traditionele voorgerechten tot heerlijke desserts - stel uw eigen culinaire ervaring samen."
      />
      <div className="min-h-screen bg-gray-50">
        <BuffetHero />
        <BuffetContent dishes={dishes} />
      </div>
    </>
  );
};