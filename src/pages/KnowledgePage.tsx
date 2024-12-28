import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS, GET_PAGE_HEADER } from '../lib/queries/posts';
import { KnowledgeHero } from '../components/knowledge/hero/KnowledgeHero';
import { KnowledgeLayout } from '../components/knowledge/layout/KnowledgeLayout';
import { Meta } from '../components/SEO/Meta';

export const KnowledgePage: React.FC = () => {
  const { data: postsData, loading: postsLoading } = useQuery(GET_POSTS);
  const { data: headerData, loading: headerLoading } = useQuery(GET_PAGE_HEADER);

  if (postsLoading || headerLoading) {
    return <div className="container mx-auto px-4 py-8">Laden...</div>;
  }

  return (
    <>
      <Meta 
        title="Kennis & Nieuws | Kabura Catering"
        description="Ontdek de laatste ontwikkelingen, tips en inzichten over Afghaanse catering en cultuur."
      />
      
      <KnowledgeHero 
        title={headerData?.page?.title || "Kennis & Nieuws"}
        content={headerData?.page?.content}
        featuredImage={headerData?.page?.featuredImage?.node}
      />
      
      <div className="bg-gray-50 py-12">
        <KnowledgeLayout posts={postsData?.posts?.nodes || []} />
      </div>
    </>
  );
};